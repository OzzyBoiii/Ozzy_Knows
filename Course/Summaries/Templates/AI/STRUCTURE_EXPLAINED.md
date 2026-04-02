# 📐 CORNELL STRUCTURE - Visual Explanation

## ✅ CORRECT STRUCTURE (What You Actually Want)

```
┌─────────────────────────────────────────────────────────────┐
│                      BANNER (Optional)                       │
│                        # TITLE                               │
└─────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────────────────────────────────────┐
│              │                                              │
│   > [!cue]   │   ## MAIN TEXT CONTENT (ONLY TEXT)          │
│   Key Tema 1 │                                              │
│              │   Ovdje ide SVE tekstualno objašnjenje.     │
│              │   Samo riječi, paragrafi, liste.            │
│              │   - Bullet points                            │
│   > [!cue]   │   - Definicije                               │
│   Key Tema 2 │   - Objašnjenja                              │
│              │   - Poveznice [[Link]]                       │
│              │                                              │
│              │   NIŠTA vizualno ovdje:                      │
│   > [!cue]   │   - Bez formula                              │
│   Key Tema 3 │   - Bez slika                                │
│              │   - Bez tablica                              │
│              │   - Bez grafova                              │
│              │   - Bez dijagrama                            │
│              │                                              │
│              │   Samo čisti tekst!                          │
│              │                                              │
└──────────────┴──────────────────────────────────────────────┘
                              ⬇️
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ## SVE VIZUALIZACIJE (UNIFIED NON-TEXT)                  │
│                                                             │
│   > [!lovrin-visuals] Sve što nije tekst                   │
│                                                             │
│   <div class="lovrin-visual-block">                        │
│                                                             │
│   ┌──────────────────────┬──────────────────────┐          │
│   │ Sub-column 1         │ Sub-column 2         │          │
│   │                      │                      │          │
│   │ Sve non-text ovdje:  │ Više non-text:       │          │
│   │ - Tablice            │ - Slike              │          │
│   │ - LaTeX formule      │ - Dijagrami          │          │
│   │ - Grafovi            │ - Kod blokovi        │          │
│   │ - PlantUML           │ - Kemija             │          │
│   │ - Charts             │ - Excalidraw         │          │
│   │                      │                      │          │
│   │ NE dijelimo po       │ SVE je zajedno:      │          │
│   │ VRSTI sadržaja!      │ "non-text"           │          │
│   │                      │                      │          │
│   │ Sub-kolone su samo   │ Za organizaciju      │          │
│   │ za lakše             │ prostora, ne         │          │
│   │ slaganje             │ kategorije!          │          │
│   └──────────────────────┴──────────────────────┘          │
│                                                             │
│   </div>                                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              ⬇️
┌─────────────────────────────────────────────────────────────┐
│   > [!summary] STICKY SUMMARY (Bottom)                      │
│   - Key points                                              │
│   - Links to related notes                                  │
│   - External resources                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## ❌ WRONG STRUCTURE (What I Initially Created)

```
┌──────────────┬─────────────────┬────────────┐
│   CUE        │   TEXT          │  VISUALS   │  ← WRONG!
│   (margin)   │   (explanations)│  (images)  │
└──────────────┴─────────────────┴────────────┘
```

**Problem:** Three columns trying to exist simultaneously.

---

## ✅ KEY PRINCIPLES

### 1. Two Main Sections (VERTICAL STACK)
```
TEXT SECTION (top)
    ↓
VISUAL SECTION (bottom)
```

### 2. Cue Column Works with TEXT Section
```
┌─────────┬───────────────┐
│  CUE    │  TEXT CONTENT │
│ (margin)│  (main area)  │
└─────────┴───────────────┘
```

### 3. Visual Section is UNIFIED
```
Non-text elements are NOT categorized by type!
ALL visuals together = one category: "not text"

✓ Tables + Images + Formulas + Charts together
✗ "Images column" vs "Tables column"
```

### 4. Sub-columns are for SPACE, not CATEGORIES
```
<div class="lovrin-visual-block">
  <div>
    Mixed content:
    - Image
    - Table
    - Formula
  </div>
  <div>
    More mixed content:
    - Chart
    - Diagram
    - Code
  </div>
</div>
```

---

## 📝 HOW TO USE

### When Writing Text:
```markdown
> [!cue] Key Concept

**Explanation:**
Write all your text here. Explain concepts with words.
Use lists, paragraphs, emphasis.

NO formulas, NO images, NO tables here!
```

### When Adding Visuals:
```markdown
> [!lovrin-visuals] All Non-Text

<div class="lovrin-visual-block">
<div>

#### Anything visual here:
| Table | Data |
|-------|------|

$$
LaTeX formula
$$

![[image.png]]

</div>
<div>

#### More visuals:
```chart
...
```

```plantuml
...
```

</div>
</div>
```

---

## 🎯 MENTAL MODEL

Think of it like a book chapter:

1. **Text paragraphs** (main content)
   - Cue notes in margin
   
2. **Figures section** at end
   - Figure 1: Image
   - Figure 2: Graph
   - Figure 3: Table
   - Figure 4: Diagram
   - ALL together, not separated by type

---

## 💡 WHY THIS WAY?

### Benefits:
1. **Clean reading** - Text flows without interruption
2. **Unified visuals** - All reference material in one place
3. **Simple categorization** - "Is it text? No? Then it goes in visuals section."
4. **Easy maintenance** - Clear separation makes editing easier
5. **Mobile friendly** - Sections stack nicely on small screens

### Alternative (if you want true side-by-side):
Use **Multi-Column Markdown plugin**:
```markdown
```multi-column
Left: All text
```column-break
Right: All visuals
```column-end
```

But for Cornell method, vertical stack (text → visuals) is more traditional and practical!

---

## 🔧 CSS Explanation

The CSS creates:
1. `.callout[data-callout="cue"]` - Floats left into margin
2. `.lovrin-visual-block` - Creates 2 sub-columns for layout ONLY
3. `> [!lovrin-visuals]` - Wrapper for all visual content

The line between sections? That's just styling, not a functional divider.

---

## ✅ FINAL CHECK

**Your note should look like:**
1. Title at top
2. Cue callouts floating left of text
3. Text content in main area (no visuals)
4. Clear section break
5. ALL visuals together below
6. Summary sticky at bottom

**NOT:**
- Text and visuals side-by-side
- Visuals mixed into text
- Separate columns for different visual types

---

**Got it? Text top, visuals bottom, cues in margin. Simple!** ✨
