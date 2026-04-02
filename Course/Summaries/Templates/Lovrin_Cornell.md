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
  - admin
  - calcolo-numerico
  - context_in_person
  - deadline
  - deepwork
  - demo
  - dimostrazione
  - exam
  - high_energy
  - lab
  - life
  - low_energy
  - meta
  - non-ho-capito
  - planning
  - project_outline
  - systems
  - tasks
  - teoria
  - uni
predmet: Testing
autor: CrozzyBoii
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
# Testiranje svih značajki
> [!cue] Glavne teze za test
> - Provjera CSS‑a (cornell-left, border, lovrin-cornell)
> - Rad LaTeX snippet‑a
> - Funkcionalnost svih plugin‑a
> - Integracija s Dataview
## Lijevi stupac – Testiranje teksta
Ovdje je običan tekst. Trebao bi biti u lijevom stupcu, a vizualni blokovi desno.
**Formatiranje**: *italic*, **bold**, `inline code`, 
> blockquote
### LaTeX u običnom tekstu
Inline math: $E = mc^2$
Display math:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
### Sada testiramo LaTeX snippet‑e
U nastavku su *triggeri* koje treba **upisati i pritisnuti TAB** (ili razmak, ovisno o postavkama) da bi se proširili. Svaki redak sadrži trigger i očekivani rezultat.
**Kako testirati:**  
1. Postavite kursor na kraj retka s triggerom.  
2. Pritisnite **TAB** (ili razmak) – trebalo bi se zamijeniti s LaTeX kodom.  
3. Provjerite da li se prikazuje ispravno.
**Napomena:** Ako ne radi, provjerite postavke LaTeX Suite (npr. “Trigger on Space” ili “Use Tab to expand”).
#### Osnovni math modovi
- `mk` → `$$$` → treba postaviti kursor između dvije `$$`
- `dm` → `$$\n\n$$` → treba stvoriti display math blok s kursorom u sredini
- `beg` → `\begin{$0}\n$1\n\end{$0}` → npr. upišite `beg` pa TAB, pa upišite `align`
#### Grčka slova
- `@a` → `\alpha`
- `@b` → `\beta`
- `@g` → `\gamma`
- `@G` → `\Gamma`
- `@d` → `\delta`
- `@D` → `\Delta`
- `@e` → `\epsilon`
- `:e` → `\varepsilon`
- `@z` → `\zeta`
- `@t` → `\theta`
- `@T` → `\Theta`
- `:t` → `\vartheta`
- `@i` → `\iota`
- `@k` → `\kappa`
- `@l` → `\lambda`
- `@L` → `\Lambda`
- `@s` → `\sigma`
- `@S` → `\Sigma`
- `@u` → `\upsilon`
- `@U` → `\Upsilon`
- `@o` → `\omega`
- `@O` → `\Omega`
- `ome` → `\omega`
- `Ome` → `\Omega`
#### Operacije i simboli
- `sr` → `^{2}`
- `cb` → `^{3}`
- `rd` → `^{$0}$1`
- `_` → `_{$0}$1`
- `sts` → `_\text{$0}`
- `sq` → `\sqrt{ $0 }$1`
- `//` → `\frac{$0}{$1}$2`
- `ee` → `e^{ $0 }$1`
- `invs` → `^{-1}`
- `conj` → `^{*}`
- `Re` → `\mathrm{Re}`
- `Im` → `\mathrm{Im}`
- `bf` → `\mathbf{$0}`
- `rm` → `\mathrm{$0}$1`
- `ooo` → `\infty`
- `sum` → `\sum`
- `prod` → `\prod`
- `lim` → `\lim_{ ${0:n} \to ${1:\infty} } $2`
- `+-` → `\pm`
- `-+` → `\mp`
- `...` → `\dots`
- `nabl` → `\nabla`
- `xx` → `\times`
- `**` → `\cdot`
- `para` → `\parallel`
- `===` → `\equiv`
- `!=` → `\neq`
- `>=` → `\geq`
- `<=` → `\leq`
- `>>` → `\gg`
- `<<` → `\ll`
- `simm` → `\sim`
- `sim=` → `\simeq`
- `prop` → `\propto`
- `<->` → `\leftrightarrow `
- `->` → `\to`
- `!>` → `\mapsto`
- `=>` → `\implies`
- `=<` → `\impliedby`
- `and` → `\cap`
- `orr` → `\cup`
- `inn` → `\in`
- `notin` → `\not\in`
- `\\\` → `\setminus`
- `sub=` → `\subseteq`
- `sup=` → `\supseteq`
- `eset` → `\emptyset`
- `set` → `\{ $0 \}$1`
- `e\xi sts` → `\exists`
- `LL` → `\mathcal{L}`
- `HH` → `\mathcal{H}`
- `CC` → `\mathbb{C}`
- `RR` → `\mathbb{R}`
- `ZZ` → `\mathbb{Z}`
- `NN` → `\mathbb{N}`
#### Derivacije i integrali
- `par` → `\frac{ \partial ${0:y} }{ \partial ${1:x} } $2`
- `ddt` → `\frac{d}{dt} `
- `int` → `\int $0 \, d${1:x} $2`
- `dint` → `\int_{${0:0}}^{${1:1}} $2 \, d${3:x} $4`
- `oint` → `\oint`
- `iint` → `\iint`
- `iiint` → `\iiint`
- `oinf` → `\int_{0}^{\infty} $0 \, d${1:x} $2`
- `infi` → `\int_{-\infty}^{\infty} $0 \, d${1:x} $2`
#### Trigonometrija
- `sin` → `\sin` (automatizirano, ali možete testirati `sin` pa razmak)
- `cos`, `tan`, `csc`, `sec`, `cot`
- `arcsin`, `arccos`, `arctan`
- `sinh`, `cosh`, `tanh`, `coth`
#### Fizika i kemija
- `kbt` → `k_{B}T`
- `msun` → `M_{\odot}`
- `dag` → `^{\dagger}`
- `o+` → `\oplus `
- `ox` → `\otimes `
- `bra` → `\bra{$0} $1`
- `ket` → `\ket{$0} $1`
- `brk` → `\braket{ $0 | $1 } $2`
- `outer` → `\ket{${0:\psi}} \bra{${0:\psi}} $1`
- `pu` → `\pu{ $0 }`
- `cee` → `\ce{ $0 }`
- `he4` → `{}^{4}_{2}He `
- `he3` → `{}^{3}_{2}He `
- `iso` → `{}^{${0:4}}_{${1:2}}${2:He}`
#### Okruženja
- `pmat` → `\begin{pmatrix}\n$0\n\end{pmatrix}` (i slično za `bmat`, `Bmat`, `vmat`, `Vmat`)
- `matrix` → `\begin{matrix}\n$0\n\end{matrix}`
- `cases` → `\begin{cases}\n$0\n\end{cases}`
- `align` → `\begin{align}\n$0\n\end{align}`
- `array` → `\begin{array}\n$0\n\end{array}`
#### Zagrade
- `avg` → `\langle $0 \rangle $1`
- `norm` → `\lvert $0 \rvert $1`
- `Norm` → `\lVert $0 \rVert $1`
- `ceil` → `\lceil $0 \rceil $1`
- `floor` → `\lfloor $0 \rfloor $1`
- `mod` → `|$0|$1`
	- `lr(` → `\left( $0 \right) $1`
	- `lr{` → `\left\{ $0 \right\} $1`
	- `lr[` → `\left[ $0 \right] $1`
	- `lr|` → `\left| $0 \right| $1`
	- `lra` → `\left< $0 \right> $1
#### Vizualni pomoćnici (sa selektiranim tekstom)
- `U` (selektiraj tekst pa pritisni) → `\underbrace{ ... }_{ $0 }`
- `O` → `\overbrace{ ... }^{ $0 }`
- `B` → `\underset{ $0 }{ ... }`
- `C` → `\cancel{ ... }`
- `K` → `\cancelto{ $0 }{ ... }`
- `S` → `\sqrt{ ... }`
---
## Vizualni blokovi (desni stupac)
<!-- Ovdje počinje desni stupac – preuzeto iz tvoje Cornell predloška -->
> [!lovrin-visuals] Vizualije, tablice, grafovi, slike, dijagrami
<div class="lovrin-visual-block">
#### 1. Tablice (Advanced Tables)
| Faza        | Medijatori        | Efekti           |
|-------------|-------------------|------------------|
| Vaskularna  | Histamin, PG      | Eritem, edem     |
| Ćelijska    | LTB4, IL-1, TNF-α | Fagocitoza       |
| Rezolucija  | IL-10, TGF-β      | Prestanak upale  |
#### 2. Charts View – dinamika stanica
```chart
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

![[Test_All_Features.excalidraw]]

#### 9. TaskNotes – zadaci

- Ponovi medijatore akutne upale
    
- Nacrtaj granulom (Excalidraw)
    

</div>
## Dataview – test veza i tagova

dataview

TABLE predmet, created
FROM "Files/Medicina"
WHERE contains(tags, "lovrin") AND contains(tags, "cornell")
SORT created DESC
LIMIT 5
  
## 3. Koraci za testiranje
1. **Kreiraj testnu bilješku**  
   - Kopiraj gornji sadržaj u novu bilješku `Test_All_Features.md`.  
   - Spremi je negdje u svom glavnom vaultu (npr. u korijenu ili u `Files/Medicina/Testovi`).
2. **Provjeri vizualni izgled**  
   - Otvori bilješku. Trebala bi imati dva stupca: lijevi (tekst) i desni (vizualni blokovi).  
   - Ako stupci ne rade, provjeri da je CSS snippet `lovrin-cornell-all.css` uključen i da nema drugih aktivnih Cornell snippet‑a koji bi se sukobljavali.
3. **Testiraj svaki LaTeX snippet**  
   - Idi na dio “Sada testiramo LaTeX snippet‑e”.  
   - Za svaki trigger, upiši ga i pritisni **TAB** (ili razmak, ovisno o postavkama).  
   - Provjeri da li se zamijeni s očekivanim LaTeX kodom.  
   - Ako neki trigger ne radi, provjeri:
     - Da li je LaTeX Suite plugin uključen.
     - Da li su svi snippet‑i u postavkama plugina prisutni (trebali bi biti, jer si dao JSON listu; oni su uključeni u plugin).  
     - Da li možda imaš drugi plugin koji preuzima isti trigger (npr. QuickAdd ili Templater). Ako da, možeš promijeniti trigger u LaTeX Suite ili deaktivirati drugi plugin.
4. **Testiraj ostale plugine**  
   - **Charts View**: Graf bi se trebao prikazati ispod bloka koda. Ako ne, provjeri je li plugin Charts View instaliran i omogućen.  
   - **PlantUML**: Ispod bloka `plantuml` treba se prikazati dijagram. Ako ne, provjeri je li PlantUML plugin instaliran i da li je potrebno instalirati PlantUML server (neki plugin koriste lokalni JAR, neki online).  
   - **Chem**: Ispod bloka `chem` treba se prikazati kemijska struktura. Provjeri da je plugin “Obsidian Chem” instaliran i omogućen.  
   - **Excalidraw**: Pojavit će se placeholder. Klikni na njega – Excalidraw bi trebao pitati želiš li stvoriti crtež. Dopusti i crtež će se otvoriti.  
   - **TaskNotes**: Zadaci bi trebali biti prikazani kao checkliste.  
   - **Dataview**: Query će se prikazati kao tablica. Ako nema rezultata, to je u redu – provjeri da nema pogrešaka u konzoli (Ctrl+Shift+I).
5. **Testiraj responsive dizajn**  
   - Smanji prozor ispod 700px širine. Stupci bi se trebali složiti jedan ispod drugog (desni stupac ispod lijevog).
6. **Testiraj QuickAdd i template** (ako želiš)  
   - Upotrijebi svoj hotkey za stvaranje nove Cornell bilješke.  
   - Unesi naslov, odaberi predmet, itd. Provjeri da se nova bilješka otvori s ispravnim CSS klasama i bannerom.
---
## 4. Uobičajeni problemi i rješenja
| Problem                                 | Rješenje                                                                                             |
|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| LaTeX snippet se ne širi                | Provjeri da li je LaTeX Suite omogućen; u postavkama plugina provjeri “Trigger on Space” i “Use Tab to expand”. Neki korisnici preferiraju TAB. |
| CSS stupci ne rade                      | Uključi CSS snippet u Appearance → CSS snippets. Ako imaš više Cornell snippet‑a, isključi ostale. |
| PlantUML se ne prikazuje                | Instaliraj PlantUML plugin; ako koristiš lokalni server, provjeri putanju do JAR‑a. Alternativa: koristi online server (postavke plugina). |
| Excalidraw se ne otvara                 | Instaliraj Excalidraw plugin; prvi klik na embed će tražiti dozvolu za kreiranje datoteke. |
| Charts View ne radi                     | Instaliraj plugin “Obsidian Charts” (ili “Charts View”). Provjeri da li je sintaksa ispravna – u testu je korištena ista sintaksa kao u tvom predlošku. |
| Dataview prikazuje grešku               | Provjeri da je Dataview plugin instaliran i omogućen. Ako query koristi tagove koji ne postoje, jednostavno neće vratiti rezultate, ali ne bi trebao bacati grešku. |
---
## 5. Nakon testiranja
- Ako sve radi, čestitamo – tvoj jedinstveni vault je uspješno spojen i svi alati su spremni.
- Ako nešto ne radi, najčešće je riječ o plugin‑u koji nije instaliran ili nije omogućen. Idi u *Settings → Community plugins* i provjeri jesu li svi potrebni plugin‑i aktivni.
- Za LaTeX snippet‑e, ako neki trigger nedostaje, možeš ih dodati ručno u postavkama LaTeX Suite (odjeljak “Snippets”).