import json
import os
import requests
from typing import List, Dict, Any, Optional

# ======== KONFIGURACIJA ========
CONFIG_PATH = os.path.join(os.path.dirname(__file__), "config.json")

DEFAULT_CONFIG = {
    "base_dir": r"C:\Users\CrozzyBoii\Documents\VSCode_Programs\Ozzy_Knows\Course\Questionarre\Python_Support",
    "wrong_json": "wrong_terms.json",
    "lmstudio_endpoint": "http://localhost:1234/v1/chat/completions",
    "lmstudio_model": "deepseek-r1-0528-qwen3-8b",
    "anki_connect_endpoint": "http://127.0.0.1:8765",
    "anki_deck_name": "Ozzy_Knows_This",
    "temperature": 0.3,
    "max_tokens": 2048,
    "check_duplicates": True  # ako je True, provjeravamo duplikate prije dodavanja
}

def load_config() -> Dict:
    if os.path.exists(CONFIG_PATH):
        with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
            user_config = json.load(f)
            # spoji s defaultima (user_config nadjačava)
            return {**DEFAULT_CONFIG, **user_config}
    else:
        # spremi default config za korisnika
        with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
            json.dump(DEFAULT_CONFIG, f, indent=2)
        return DEFAULT_CONFIG.copy()

CONFIG = load_config()
BASE_DIR = CONFIG["base_dir"]
WRONG_JSON = os.path.join(BASE_DIR, CONFIG["wrong_json"])
LMSTUDIO_ENDPOINT = CONFIG["lmstudio_endpoint"]
LMSTUDIO_MODEL = CONFIG["lmstudio_model"]
ANKI_CONNECT_ENDPOINT = CONFIG["anki_connect_endpoint"]
ANKI_DECK_NAME = CONFIG["anki_deck_name"]
CHECK_DUPLICATES = CONFIG.get("check_duplicates", True)

def load_wrong_terms(path: str) -> Dict:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def build_llm_prompt(wrong_terms: List[Dict]) -> str:
    blocks = []
    for wt in wrong_terms:
        term = wt.get("term", "")
        sentence = wt.get("sentence", "")
        chosen_list = wt.get("chosen", [])
        chosen = ", ".join(chosen_list)
        hint = wt.get("hint", "")

        block = f"""TERM: {term}
SENTENCE: {sentence}
KEY_WORDS: {chosen}
HINT: {hint}
---"""
        blocks.append(block)

    joined = "\n\n".join(blocks)

    prompt = f"""
You are a medical flashcard generator.

I will give you a list of concepts where the student made errors.
For each concept, you must generate high-quality Anki cards focusing on the misunderstood parts.

Rules:
- Use a mix of basic and cloze cards.
- Prefer cloze deletions when there are key terms, mechanisms or lists.
- Avoid trivial questions ("What is X?" with one-word answers) unless absolutely necessary.
- Keep cards concise but precise and exam-oriented.
- Use plain text, no markdown except {{c1::...}} for cloze deletions.
- Do NOT mention that the student was wrong or made mistakes.
- Focus only on correct medical content.

Output format:
Return ONLY a JSON array, no explanations, no prose.
Each item must be one of these forms:

{{
  "type": "basic",
  "front": "Question text...",
  "back": "Answer text..."
}}

or

{{
  "type": "cloze",
  "text": "Sentence with {{c1::cloze}} deletions..."
}}

Max 5 cards per term (less is ok if content is small).

Input (wrong concepts):

{joined}
"""
    return prompt.strip()

def call_lmstudio(prompt: str) -> List[Dict]:
    payload = {
        "model": LMSTUDIO_MODEL,
        "messages": [
            {"role": "system", "content": "You must output ONLY valid JSON as specified by the user."},
            {"role": "user", "content": prompt}
        ],
        "temperature": CONFIG["temperature"],
        "max_tokens": CONFIG["max_tokens"]
    }

    resp = requests.post(LMSTUDIO_ENDPOINT, json=payload, timeout=120)
    resp.raise_for_status()
    data = resp.json()
    content = data["choices"][0]["message"]["content"]

    # Extract JSON array from response
    start = content.find("[")
    end = content.rfind("]")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("LLM output is not a JSON array:\n" + content)

    json_str = content[start:end+1]
    cards = json.loads(json_str)
    if not isinstance(cards, list):
        raise ValueError("Parsed JSON is not a list")

    clean_cards = []
    for c in cards:
        if not isinstance(c, dict):
            continue
        t = c.get("type")
        if t == "basic":
            front = c.get("front")
            back = c.get("back")
            if front and back:
                clean_cards.append({
                    "type": "basic",
                    "front": str(front).strip(),
                    "back": str(back).strip()
                })
        elif t == "cloze":
            text = c.get("text")
            if text:
                clean_cards.append({
                    "type": "cloze",
                    "text": str(text).strip()
                })

    return clean_cards

def find_existing_notes(deck_name: str) -> List[Dict]:
    """Vraća sve note u decku preko AnkiConnecta."""
    payload = {
        "action": "findNotes",
        "version": 6,
        "params": {
            "query": f"deck:{deck_name}"
        }
    }
    resp = requests.post(ANKI_CONNECT_ENDPOINT, json=payload)
    resp.raise_for_status()
    data = resp.json()
    if data.get("error"):
        raise RuntimeError(f"AnkiConnect error: {data['error']}")
    note_ids = data.get("result", [])
    if not note_ids:
        return []
    # Dohvati polja za svaki note
    payload2 = {
        "action": "notesInfo",
        "version": 6,
        "params": {
            "notes": note_ids
        }
    }
    resp2 = requests.post(ANKI_CONNECT_ENDPOINT, json=payload2)
    resp2.raise_for_status()
    data2 = resp2.json()
    if data2.get("error"):
        raise RuntimeError(f"AnkiConnect error: {data2['error']}")
    return data2.get("result", [])

def card_exists(card: Dict, existing_notes: List[Dict]) -> bool:
    """Provjerava postoji li kartica među postojećim notama."""
    if card["type"] == "basic":
        front = card["front"]
        for note in existing_notes:
            fields = note.get("fields", {})
            if fields.get("Front", {}).get("value") == front:
                return True
    elif card["type"] == "cloze":
        text = card["text"]
        for note in existing_notes:
            fields = note.get("fields", {})
            if fields.get("Text", {}).get("value") == text:
                return True
    return False

def build_anki_addnotes(cards: List[Dict]) -> Dict:
    notes = []
    for c in cards:
        if c["type"] == "basic":
            notes.append({
                "deckName": ANKI_DECK_NAME,
                "modelName": "Basic",
                "fields": {
                    "Front": c["front"],
                    "Back": c["back"]
                },
                "tags": ["auto_ai", "wrong_concept"]
            })
        elif c["type"] == "cloze":
            notes.append({
                "deckName": ANKI_DECK_NAME,
                "modelName": "Cloze",
                "fields": {
                    "Text": c["text"],
                    "Extra": ""
                },
                "tags": ["auto_ai", "wrong_concept"]
            })
    return {
        "action": "addNotes",
        "version": 6,
        "params": {
            "notes": notes
        }
    }

def send_to_anki(payload: Dict):
    resp = requests.post(ANKI_CONNECT_ENDPOINT, json=payload)
    resp.raise_for_status()
    data = resp.json()
    if data.get("error") is not None:
        raise RuntimeError(f"AnkiConnect error: {data['error']}")
    return data.get("result")

def main() -> Dict[str, Any]:
    """Glavna funkcija koja se može pozvati iz servera. Vraća rezultat."""
    result = {
        "status": "error",
        "message": "",
        "cards_generated": 0,
        "cards_added": 0,
        "duplicates_skipped": 0
    }

    if not os.path.exists(WRONG_JSON):
        result["message"] = f"File not found: {WRONG_JSON}"
        print(f"[ERROR] {result['message']}")
        return result

    data = load_wrong_terms(WRONG_JSON)
    wrong_terms = data.get("wrongTerms", [])
    if not wrong_terms:
        result["message"] = "No wrong terms in JSON."
        print("[INFO]", result["message"])
        result["status"] = "ok"  # nema greške, samo nema termina
        return result

    print(f"[INFO] Loaded {len(wrong_terms)} wrong terms.")
    prompt = build_llm_prompt(wrong_terms)

    print("[INFO] Calling LM Studio...")
    try:
        cards = call_lmstudio(prompt)
    except Exception as e:
        result["message"] = f"LM Studio error: {e}"
        print("[ERROR]", result["message"])
        return result

    print(f"[INFO] Got {len(cards)} cards from model.")
    result["cards_generated"] = len(cards)

    if not cards:
        result["message"] = "No valid cards generated."
        result["status"] = "ok"
        return result

    # Provjera duplikata ako je uključeno
    if CHECK_DUPLICATES:
        print("[INFO] Checking for duplicates in Anki deck...")
        try:
            existing_notes = find_existing_notes(ANKI_DECK_NAME)
        except Exception as e:
            print(f"[WARN] Could not check duplicates: {e}. Proceeding without duplicate check.")
            existing_notes = []
    else:
        existing_notes = []

    cards_to_add = []
    duplicates_skipped = 0
    for card in cards:
        if CHECK_DUPLICATES and existing_notes and card_exists(card, existing_notes):
            duplicates_skipped += 1
            print(f"[INFO] Duplicate skipped: {card}")
        else:
            cards_to_add.append(card)

    result["duplicates_skipped"] = duplicates_skipped

    if not cards_to_add:
        result["message"] = "All cards were duplicates, nothing to add."
        result["status"] = "ok"
        result["cards_added"] = 0
        return result

    anki_payload = build_anki_addnotes(cards_to_add)
    print(f"[INFO] Sending {len(cards_to_add)} new cards to Anki via AnkiConnect...")
    try:
        add_result = send_to_anki(anki_payload)
        result["cards_added"] = len(cards_to_add)
        result["status"] = "ok"
        result["message"] = f"Successfully added {len(cards_to_add)} cards, skipped {duplicates_skipped} duplicates."
        print("[INFO] AnkiConnect result:", add_result)
    except Exception as e:
        result["message"] = f"AnkiConnect error: {e}"
        print("[ERROR]", result["message"])

    return result

if __name__ == "__main__":
    # Ako se skripta pokrene direktno, izvrši main i ispiši rezultat
    res = main()
    print(json.dumps(res, indent=2))
