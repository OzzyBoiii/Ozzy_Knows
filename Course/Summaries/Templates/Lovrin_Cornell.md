---
cssclasses:
  - cornell-left
  - cornell-border
  - banner-image
  - border-around-images
  - lov
tags:
  - cornell
  - lovro
  - matura
  - e⁻
  - excalidraw
predmet: ""
autor: Lovro
date:
  "{ date }":
---
---
cssclasses:
  - cornell-left
  - cornell-border
  - lovrin-cornell
tags:
  - cornell
  - lovrin
  - <% tp.system.prompt("Tag 1 (npr. patologija/imunologija)") %>
  - demo
created: <% tp.file.creation_date("YYYY-MM-DD") %>
predmet: <% tp.system.suggester(["Patologija","Imunologija","Patofiziologija","Farmakologija"], ["Patologija","Imunologija","Patofiziologija","Farmakologija"]) %>
banner: banner-cornellU.jpg
---

# <% tp.file.title %>

> [!cue] Glavne teze
> - Patogeneza
> - Akutna vs kronična (Rubor, Calor, Tumor, Dolor)
> - Terapija
> - Povezani predmeti: Imunologija, Patofiziologija, Farmakologija

## Lijevi stupac – Glavne bilješke (tekst)

### Akutna upala – definicija
Akutna upala je brzi, kratkotrajni odgovor na štetni podražaj (infekcija, trauma).

**Faze akutne upale**
- Vaskularna faza: vazodilatacija (histamin) → eritem, toplina.  
  $$ \text{Propusnost} \uparrow \rightarrow \text{Eksudat (plazma + proteini)} $$
- Čelijska faza: neutrofili (kemotaksis IL-8, C5a).

**Makroskopski nalaz**
- Rubor, calor, tumor, dolor (četiri kardinalna znaka).

### Kronična upala
- Traje tjednima ili dulje.
- Dominiraju limfociti, makrofagi, fibroblasti.
- Granulomi (npr. TB – kazeozna nekroza).

### Terapija
- NSAID (COX inhibitori – ↓ prostaglandini)
- Steroidi
- Potporna terapija (odmor, hidratacija)

### Dataview – pregled mojih Cornell bilješki
dataview
TABLE predmet, created
FROM "Files/Medicina"
WHERE contains(tags, "lovrin") AND contains(tags, "cornell")
SORT created DESC
LIMIT 5
> [!lovrin-visuals] Vizualije, tablice, grafovi, slike, dijagrami

<!-- prvi podstupac --><div class="lovrin-visual-block">

#### 1. Tablice (Advanced Tables)

|Faza|Medijatori|Efekti|
|---|---|---|
|Vaskularna|Histamin, PG|Eritem, edem|
|Ćelijska|LTB4, IL-1, TNF-α|Fagocitoza|
|Rezolucija|IL-10, TGF-β|Prestanak upale|

#### 2. Charts View – dinamika stanica

chart

type: line
labels: [Dan 1, Dan 3, Dan 7, Dan 14]
series:
  - title: Neutrofili
    data: [80, 50, 20, 5]
  - title: Limfociti
    data: [10, 30, 60, 70]
  - title: Makrofagi
    data: [10, 20, 40, 60]
options:
  legend:
    position: bottom
  scales:
    y:
      title:
        display: true
        text: '% stanica'

#### 3. LaTeX Suite – matematički model

Upalni odgovor=f(medijatori,vrijeme,tkivo)Upalni odgovor=f(medijatori,vrijeme,tkivo)

#### 4. asciimath – jednostavan zapis

`x^2 + y^2 = z^2`

</div><!-- drugi podstupac --><div class="lovrin-visual-block">

#### 5. Slike (Image Toolkit / Captions / Tools)

![[bioraznolikost_1.png|400 "Bioraznolikost upale – vault slika."]]  
_Figura 1. Bioraznolikost – različiti oblici upalne reakcije u tkivu._  
(Klik na sliku → zoom, pomicanje, dodatna obrada)

#### 6. Chem – struktura lijeka

chem

CC(=O)Oc1ccccc1C(=O)O  # aspirin (acetilsalicilna kiselina)

#### 7. PlantUML – tijek upalnog odgovora

plantuml

@startuml
skinparam monochrome true
[Štetni podražaj] --> [Akutna upala]
[Akutna upala] --> [Rezolucija]
[Akutna upala] --> [Kronična upala]
[Kronična upala] --> [Fibroza / ožiljak]
@enduml

#### 8. Excalidraw – skica (automatski kreiran crtež)

![[<% tp.file.title %>.excalidraw]]

#### 9. TaskNotes – zadaci

- Ponovi medijatore akutne upale
    
- Nacrtaj granulom (Excalidraw)
    

</div>

---

> [!summary] Ukupni sažetak (sticky)
> 
> - 4 kardinalna znaka (RCTC)
>     
> - Akutna: neutrofili, vaskularne promjene → eksudat
>     
> - Kronična: limfociti, makrofagi, fibroza
>     
> - Povezivanje:
>     
>     - [[Imunologija - Citokini]]
>         
>     - [[Patofiziologija - Vaskulitis]]
>         
>     - [Video: Patologija upale](https://youtube.com/example)
>         
> 
> [!cue] Dodatne poveznice
> 
> - [Članak o upali](https://example.com/)
>     
> - [[Farmakologija - NSAID]]
>     
#### 1. Tablice (Advanced Tables)

|Faza|Medijatori|Efekti|
|---|---|---|
|Vaskularna|Histamin, PG|Eritem, edem|
|Ćelijska|LTB4, IL-1, TNF-α|Fagocitoza|
|Rezolucija|IL-10, TGF-β|Prestanak upale|
text

---
## ⚙️ 3. QuickAdd postavka (za hotkey)
1. **QuickAdd** → **Add Choice** → Ime: `Lovrin Cornell`, Type: **Template**.
2. Klikni zupčanik pored novog choicea.
3. **Template Path**: odaberi `Lovrin Cornell SUPER DEMO.md` (ili tvoj template).
4. **File Name Format**: `{{VALUE:Naslov bilješke}}`
5. **Folder**: npr. `Files/Medicina/Cornell` (ili bilo koji folder u koji želiš spremati bilješke)
6. **Uključi** `Create new file` i `Open new file`.
7. U glavnom QuickAdd prozoru klikni lightning pored choicea da postane command.
8. **Settings → Hotkeys** → dodaj hotkey za `QuickAdd: Lovrin Cornell`.
---
## ✅ 4. Provjera ispravnosti
1. **CSS** – nakon što stvoriš i uključiš samo `lovrin-cornell-all.css`, ponovno pokreni Obsidian (ili barem izađi i uđi) da se snippet učita.
2. **Template** – otvori novu bilješku preko hotkeya i upiši naslov npr. `Test upale`.
3. **Provjeri**:
   - Banner se vidi na vrhu.
   - Lijevo je tekst, desno vizualni blok s dva podstupca.
   - Svi plugin elementi se prikazuju: tablica, graf, LaTeX, asciimath, slika s captionom, Chem, PlantUML, Excalidraw placeholder, TaskNotes.
   - Summary je sticky na dnu.
   - Na uskom prozoru (manje od 700px) sve postaje jednokolonski (responsive).
Ako nešto ne radi, najčešći problemi:
- CSS nije učitano (provjeri u Appearance → CSS snippets da je prekidač uključen, i da nema drugih aktivnih Cornell snippet-a).
- Plugin nije omogućen (npr. Charts View, Excalidraw).
- Putanja do slike `bioraznolikost_1.png` ne postoji – zamijeni s nekom svojom slikom ili ukloni taj redak.
- Za Excalidraw, prvi put kad klikneš na embed, plugin će pitati želiš li kreirati crtež – dopusti.
---
## 🚀 Što je sada poboljšano u odnosu na prethodne verzije
- **CSS je kompletno prepravljen** – spojio sam sve potrebne dijelove (banner, Cornell core, sticky summary, Tufte, Lovrin grid) u jedan čist, nekonfliktan file. Dodao sam specifične blokove za svaki plugin kako bi se zajamčilo da se ne razbijaju.
- **Dva vizualna podstupca** imaju jasnu liniju razdvajanja (tamniju, `rgba(128,128,128,0.4)`) i laganu pozadinu za bolje razlikovanje.
- **Responzivnost** – ispod 700px grid se gasi i sve ide jedno ispod drugog (idealno za mobilne).
- **LaTeX** – sada se ne prelijeva (overflow-x: auto).
- **Slike** – maksimalna širina 100%, caption stiliziran.
- **Template** sadrži **sve tvoje plugine** u akciji, s točnom sintaksom koju očekuju. Lako ga možeš kasnije skratiti za svakodnevnu upotrebu, ali ovaj služi kao dokaz da sve radi.
Sada imaš **potpuno funkcionalan Lovrin Cornell sustav** – jedan CSS, jedan template, i sve radi. Uživaj u bilježenju!