# 📚 SUBJECT-SPECIFIC TEMPLATES PACK

## All templates use Lovrin Cornell structure + subject-specific features

---

## 🧪 TEMPLATE: Chemistry / Kemija

```markdown
---
cssclasses:
  - lovrin-cornell
tags:
  - kemija
  - <% tp.system.suggester(["organska","anorganska","fizikalna","analitička"], ["organska","anorganska","fizikalna","analitička"]) %>
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
predmet: Kemija
molekula: <% tp.system.prompt("Glavna molekula (ako primjenjivo)") %>
---

# <% tp.file.title %>

> [!cue] Ključni pojmovi
> - Molekularna formula
> - Reakcijski mehanizam
> - Svojstva

---

## 🧪 Kemijski sastav

> [!cue] Molekularna struktura

**Formula:** 


**IUPAC naziv:**


**Trivijalno ime:**


**Molekularna masa:**


---

## ⚗️ Svojstva

> [!cue] Fizikalna svojstva

**Stanje agregacije:**


**Talište:**


**Vrelište:**


**Gustoća:**


**Topljivost:**


---

## 🔬 Kemijska reaktivnost

> [!cue] Reakcije

**Tipične reakcije:**
1. 
2. 
3. 

**Reakcijski uvjeti:**


---

## 🎨 Vizualni prikaz

> [!lovrin-visuals] Strukture, mehanizmi, spektri

<div class="lovrin-visual-block">

<div>

#### Strukturna formula

````chem
<!-- SMILES notacija -->
````

#### 3D model

![[molecule-3d.png|300]]

#### Tablica podataka

| Svojstvo | Vrijednost |
|----------|------------|
|          |            |

</div>

<div>

#### Reakcijski mehanizam

````chem
<!-- Reakcija -->
````

#### Spektar

![[spectrum.png|350]]
*NMR / IR / MS spektar*

#### Energetski dijagram

````chart
type: line
labels: [Reaktanti, TS, Produkti]
series:
  - title: Energija
    data: [0, 100, -50]
````

</div>

</div>

---

## 🔗 Poveznice

**Povezane molekule:**
- [[Srodna molekula 1]]
- [[Prekursor]]

**Reakcije:**
- [[Reakcija 1]]
- [[Sinteza]]

---

> [!summary] 📝 Sažetak
> 
> **Formula:** 
> **Glavna svojstva:**
> - 
> 
> **Ključne reakcije:**
> - 
> 
> **Primjene:**
> - 
```

---

## ⚛️ TEMPLATE: Physics / Fizika

```markdown
---
cssclasses:
  - lovrin-cornell
tags:
  - fizika
  - <% tp.system.suggester(["mehanika","termodinamika","elektromagnetizam","optika","moderna"], ["mehanika","termodinamika","elektromagnetizam","optika","moderna"]) %>
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
predmet: Fizika
tip: <% tp.system.suggester(["zakon","koncept","formula","fenomen"], ["zakon","koncept","formula","fenomen"]) %>
---

# <% tp.file.title %>

> [!cue] Fizikalni koncept
> - Ključne veličine
> - Zakoni
> - Primjene

---

## 🎯 Definicija

> [!cue] Što je to?

**Fizikalna definicija:**


**Intuitivno objašnjenje:**


**Povijesni kontekst:**


---

## 📐 Matematički opis

> [!cue] Formule

**Glavna jednadžba:**

$$

$$

**Derivacija:**

$$
\begin{align}
...
\end{align}
$$

**Granični slučajevi:**
- 
- 

---

## 📊 Veličine i jedinice

> [!cue] SI sustav

| Veličina | Simbol | SI jedinica | Dimenzija |
|----------|--------|-------------|-----------|
|          |        |             |           |

**Konstante:**
- 
- 

---

## 🎨 Vizualizacija

> [!lovrin-visuals] Dijagrami, grafovi, eksperimenti

<div class="lovrin-visual-block">

<div>

#### Dijagram

![[physics-diagram.png|350]]
*Shematski prikaz*

#### Graf zavisnosti

````chart
type: line
labels: [0, 1, 2, 3, 4, 5]
series:
  - title: F(x)
    data: [0, 2, 4, 6, 8, 10]
````

</div>

<div>

#### Vektorski prikaz

![[vectors.png|300]]

#### Eksperimentalni setup

![[experiment.png|350]]
*Laboratorijski pokus*

#### Numerički primjer

**Zadano:**
- 

**Traženo:**
- 

**Rješenje:**
$$
\begin{align}
...
\end{align}
$$

</div>

</div>

---

## 🔬 Eksperimentalna verifikacija

> [!cue] Kako se mjeri?

**Eksperiment:**


**Mjerenja:**


**Točnost:**


---

## 🔗 Poveznice

**Temelji se na:**
- [[Osnovni zakon 1]]
- [[Koncept 1]]

**Primjenjuje se u:**
- [[Napredna tema 1]]
- [[Praktična primjena]]

---

> [!summary] 📝 Sažetak
> 
> **Ključna formula:**
> $$
> 
> $$
> 
> **Fizikalno značenje:**
> - 
> 
> **Primjene:**
> - 
> 
> **Povezano:**
> - [[Prethodno]] → **Ovo** → [[Sljedeće]]
```

---

## 🧬 TEMPLATE: Biology / Biologija

```markdown
---
cssclasses:
  - lovrin-cornell
tags:
  - biologija
  - <% tp.system.suggester(["stanica","genetika","evolucija","ekologija","fiziologija"], ["stanica","genetika","evolucija","ekologija","fiziologija"]) %>
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
predmet: Biologija
organizam: <% tp.system.prompt("Organizam (ako primjenjivo)") %>
---

# <% tp.file.title %>

> [!cue] Biološki koncept
> - Klasifikacija
> - Funkcija
> - Značaj

---

## 🔬 Opis

> [!cue] Definicija

**Što je to?**


**Gdje se nalazi?**


**Klasifikacija:**
- Domena:
- Carstvo:
- Koljeno:
- Razred:

---

## 🧬 Struktura

> [!cue] Anatomija/Građa

**Makroskopska razina:**


**Mikroskopska razina:**


**Molekularna razina:**


---

## ⚙️ Funkcija

> [!cue] Kako radi?

**Primarna funkcija:**


**Mehanizam:**


**Regulacija:**


---

## 🎨 Vizualni prikaz

> [!lovrin-visuals] Dijagrami, mikrografije, sheme

<div class="lovrin-visual-block">

<div>

#### Anatomski dijagram

![[anatomy.png|350]]
*Oznake važnih dijelova*

#### Mikroskopska slika

![[microscope.png|300]]
*Povećanje: 400x*

#### Tablica usporedbe

| Karakteristika | Tip A | Tip B |
|----------------|-------|-------|
|                |       |       |

</div>

<div>

#### Proces dijagram

````plantuml
@startuml
[Faza 1] --> [Faza 2]
[Faza 2] --> [Faza 3]
@enduml
````

#### Grafikon

````chart
type: bar
labels: [Gen A, Gen B, Gen C]
series:
  - title: Ekspresija
    data: [85, 92, 67]
````

#### Filogen etsko stablo

![[phylogenetic-tree.png|350]]

</div>

</div>

---

## 🧪 Eksperimentalni podaci

> [!cue] Istraživanja

**Ključni eksperimenti:**
1. 
2. 

**Metodologija:**


**Rezultati:**


---

## 🔗 Poveznice

**Povezano s:**
- [[Sličan organizam]]
- [[Sličan proces]]

**Dio sustava:**
- [[Veći sustav]]

---

> [!summary] 📝 Sažetak
> 
> **Ključne karakteristike:**
> - 
> - 
> 
> **Funkcija:**
> 
> 
> **Evolucijsko značenje:**
> 
> 
> **Medicinska/praktična primjena:**
> 
```

---

## 🏥 TEMPLATE: Medicine / Medicina (Expanded)

```markdown
---
cssclasses:
  - lovrin-cornell
tags:
  - medicina
  - <% tp.system.suggester(["patologija","farmakologija","anatomija","fiziologija","klinika"], ["patologija","farmakologija","anatomija","fiziologija","klinika"]) %>
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
predmet: <% tp.system.suggester(["Patologija","Farmakologija","Anatomija","Fiziologija","Imunologija"], ["Patologija","Farmakologija","Anatomija","Fiziologija","Imunologija"]) %>
bolest: <% tp.system.prompt("Bolest/stanje (ako primjenjivo)") %>
ICD-10: <% tp.system.prompt("ICD-10 kod (opcionalno)") %>
---

# <% tp.file.title %>

> [!cue] Klinički pregled
> - Etiologija
> - Patogeneza
> - Simptomi
> - Liječenje

---

## 🔍 Definicija i epidemiologija

> [!cue] Što je to?

**Definicija:**


**Prevalencija:**


**Incidencija:**


**Demografija:**


---

## 🦠 Etiologija

> [!cue] Uzroci

**Primarni uzrok:**


**Faktori rizika:**
- 
- 

**Genetska predispozicija:**


---

## 🔬 Patogeneza

> [!cue] Mehanizam bolesti

**Molekularni mehanizam:**


**Statnični mehanizam:**


**Tkivne promjene:**


**Organski učinak:**


---

## 📋 Klinička slika

> [!cue] Simptomi i znakovi

**Subjektivni simptomi:**
- 
- 

**Objektivni nalazi:**
- 
- 

**Komplikacije:**
- 
- 

---

## 🎨 Dijagnostika i vizualni nalazi

> [!lovrin-visuals] Radiologija, histologija, testovi

<div class="lovrin-visual-block">

<div>

#### Histopatologija

![[histology.png|300]]
*H&E bojenje, 400x*

#### Radiološki nalaz

![[xray.png|300]]
*RTG / CT / MR*

#### Laboratorijski nalazi

| Test | Normalna vrijednost | Kod bolesti |
|------|---------------------|-------------|
|      |                     |             |

</div>

<div>

#### Dijagnostički algoritam

````plantuml
@startuml
[Sumnja] --> [Anamneza]
[Anamneza] --> [Fizikalni pregled]
[Fizikalni pregled] --> [Lab testovi]
[Lab testovi] --> [Dijagnoza]
@enduml
````

#### Progresija bolesti

````chart
type: line
labels: [Tjedan 0, Tjedan 2, Tjedan 4, Tjedan 8]
series:
  - title: Simptomi
    data: [0, 40, 80, 100]
  - title: Funkcija
    data: [100, 70, 40, 20]
````

</div>

</div>

---

## 💊 Liječenje

> [!cue] Terapija

**Farmakološko liječenje:**
- Lijek 1: [[Farmakološki profil]]
- Lijek 2: 
- Doziranje:

**Nefarmakološko liječenje:**
- 
- 

**Kirurško liječenje:**


**Prognoza:**


---

## 🔗 Diferencijalna dijagnoza

**Slična stanja:**
- [[Bolest 1]] - razlikuje se po...
- [[Bolest 2]] - razlikuje se po...

**Povezana stanja:**
- [[Komplikacija 1]]
- [[Komorbiditet 1]]

---

> [!summary] 📝 Klinički sažetak
> 
> **Etiologija:**
> 
> 
> **Ključni simptomi:**
> - 
> - 
> 
> **Dijagnostika:**
> - Zlatni standard: 
> 
> **Terapija:**
> - Prva linija:
> - Druga linija:
> 
> **Prognoza:**
> 
> 
> **Poveznice:**
> - Osnovni mehanizam: [[Link]]
> - Farmakoterapija: [[Lijekovi]]
```

---

## 📚 TEMPLATE: History / Povijest

```markdown
---
cssclasses:
  - lovrin-cornell
tags:
  - povijest
  - <% tp.system.prompt("Razdoblje (npr. antika/srednji-vijek/moderna)") %>
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
predmet: Povijest
period: <% tp.system.prompt("Vremens ki period") %>
regija: <% tp.system.prompt("Geografska regija") %>
---

# <% tp.file.title %>

> [!cue] Povijesni kontekst
> - Vrijeme
> - Mjesto
> - Ključni akteri

---

## 📅 Kronologija

> [!cue] Kada?

**Datum/razdoblje:**


**Trajanje:**


**Faze razvoja:**
1. 
2. 
3. 

---

## 🌍 Geografski kontekst

> [!cue] Gdje?

**Lokacija:**


**Geografski značaj:**


**Povezane regije:**


---

## 👥 Ključni akteri

> [!cue] Tko?

**Glavne osobe:**
- [[Osoba 1]] - uloga:
- [[Osoba 2]] - uloga:

**Institucije/organizacije:**
- 
- 

---

## ⚔️ Događaji

> [!cue] Što se dogodilo?

**Uzroci:**
1. 
2. 

**Tijek događaja:**


**Posljedice:**
- Kratkoročne:
- Dugoročne:

---

## 🎨 Vizualni materijali

> [!lovrin-visuals] Karte, slike, dokumenti

<div class="lovrin-visual-block">

<div>

#### Povijesna karta

![[historical-map.png|350]]
*Teritorij u [godina]*

#### Kronološka crta

````chart
type: line
labels: [1800, 1850, 1900, 1950, 2000]
series:
  - title: Događaji
    data: [2, 5, 8, 12, 15]
````

</div>

<div>

#### Povijesni dokument

![[document.png|300]]
*Izvorni dokument*

#### Tablica usporedbe

| Aspekt | Prije | Poslije |
|--------|-------|---------|
|        |       |         |

#### Dijagram utjecaja

````plantuml
@startuml
[Uzrok 1] --> [Događaj]
[Uzrok 2] --> [Događaj]
[Događaj] --> [Posljedica 1]
[Događaj] --> [Posljedica 2]
@enduml
````

</div>

</div>

---

## 📖 Izvori

> [!cue] Dokumentacija

**Primarni izvori:**
- 
- 

**Sekundarni izvori:**
- 
- 

**Historiografija:**


---

## 🔗 Povijesne poveznice

**Prethodni događaji:**
- [[Događaj prije]]

**Kasniji događaji:**
- [[Posljedica 1]]
- [[Povezani događaj]]

**Paralelni razvoji:**
- [[U drugoj regiji]]

---

> [!summary] 📝 Povijesni sažetak
> 
> **Kada:** 
> **Gdje:** 
> **Tko:** 
> 
> **Što:**
> 
> 
> **Zašto je važno:**
> 
> 
> **Dugoročni utjecaj:**
> 
```

---

## 📖 TEMPLATE: Literature / Književnost

```markdown
---
cssclasses:
  - lovrin-cornell
tags:
  - knjizevnost
  - <% tp.system.suggester(["epika","lirika","drama","esej"], ["epika","lirika","drama","esej"]) %>
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
predmet: Književnost
autor: <% tp.system.prompt("Autor") %>
djelo: <% tp.system.prompt("Naziv djela") %>
period: <% tp.system.prompt("Književni period") %>
---

# <% tp.file.title %>

> [!cue] Književna analiza
> - Autor
> - Kontekst
> - Teme
> - Stil

---

## 📚 Osnovni podaci

> [!cue] O djelu

**Naslov:**


**Autor:** [[<% tp.system.prompt("Autor") %>]]


**Godina izdanja:**


**Žanr:**


**Književni pravac:**


---

## 📖 Sadržaj i struktura

> [!cue] Fabula

**Radnja (kratko):**


**Struktura:**
- Ekspozicija:
- Zaplet:
- Kulminacija:
- Rasplet:

**Likovi:**
- Protagonist: [[Lik 1]]
- Antagonist: [[Lik 2]]
- Ostali:

---

## 🎭 Teme i motivi

> [!cue] O čemu djelo govori

**Glavna tema:**


**Sporedne teme:**
- 
- 

**Ponavljajući motivi:**
- 
- 

---

## ✍️ Stil i jezik

> [!cue] Kako je napisano

**Narativna perspektiva:**


**Stilske figure:**
- 
- 

**Jezik:**


---

## 🎨 Analiza i interpretacija

> [!lovrin-visuals] Sheme, citati, analize

<div class="lovrin-visual-block">

<div>

#### Struktura djela

````plantuml
@startuml
[Ekspozicija] --> [Zaplet]
[Zaplet] --> [Kulminacija]
[Kulminacija] --> [Rasplet]
@enduml
````

#### Likovi - relacije

![[character-map.png|300]]

#### Ključni citati

> "Citat 1..."

> "Citat 2..."

</div>

<div>

#### Simbolika

| Simbol | Značenje |
|--------|----------|
|        |          |

#### Književno-povijesni kontekst

**Društveni kontekst:**


**Autorova biografija:**


#### Usporedba s drugim djelima

- Slično djelo: [[Djelo X]]
- Razlike:
- Sličnosti:

</div>

</div>

---

## 💭 Kritička recepcija

> [!cue] Kako je djelo primljeno

**Suvremena kritika:**


**Moderna tumačenja:**


---

## 🔗 Poveznice

**Autor:**
- [[Biografija autora]]
- [[Druga djela istog autora]]

**Kontekst:**
- [[Književni pravac]]
- [[Povijesno razdoblje]]

**Utjecaji:**
- [[Utjecaj na kasnija djela]]

---

> [!summary] 📝 Književni sažetak
> 
> **Djelo:** 
> **Autor:** 
> 
> **Glavna tema:**
> 
> 
> **Ključni motivi:**
> - 
> - 
> 
> **Stilske karakteristike:**
> 
> 
> **Značaj:**
> 
```

---

## 🎓 TEMPLATE: General Lecture Notes

```markdown
---
cssclasses:
  - lovrin-cornell
tags:
  - predavanje
  - <% tp.system.prompt("Predmet") %>
  - <% tp.system.prompt("Tema") %>
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
lecture: <% tp.system.prompt("Broj predavanja") %>
profesor: <% tp.system.prompt("Profesor") %>
datum: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> [!cue] Predavanje info
> - Datum: <% tp.date.now("DD.MM.YYYY") %>
> - Profesor: [[<% tp.system.prompt("Profesor") %>]]
> - Tema: <% tp.system.prompt("Glavna tema") %>

---

## 📝 Uvod i ciljevi

> [!cue] Što učimo danas?

**Ciljevi predavanja:**
- 
- 

**Povezano s prethodnim:**
- [[Prethodno predavanje]]

---

## 🎯 Glavni sadržaj

> [!cue] Tema 1

**Objašnjenje:**


**Primjeri:**


> [!cue] Tema 2

**Objašnjenje:**


**Primjeri:**


> [!cue] Tema 3

**Objašnjenje:**


**Primjeri:**


---

## 🎨 Vizualne bilješke

> [!lovrin-visuals] Dijagrami s predavanja

<div class="lovrin-visual-block">

<div>

#### Ploča 1

![[board-photo-1.jpg|350]]

#### Bilješke

- 
- 

</div>

<div>

#### Ploča 2

![[board-photo-2.jpg|350]]

#### Dodatne napomene

- 
- 

</div>

</div>

---

## ❓ Pitanja i nejasnoće

> [!cue] Što pitati?

- [ ] Pitanje 1:
- [ ] Pitanje 2:

**Nejasni koncepti:**
- 

---

## 📚 Za proučiti

> [!cue] Domaća zadaća

**Čitanje:**
- 

**Zadaci:**
- 

**Do sljedećeg predavanja:**
- 

---

> [!summary] 📝 Sažetak predavanja
> 
> **Glavne točke:**
> 1. 
> 2. 
> 3. 
> 
> **Ključne formule/koncepti:**
> 
> 
> **Za zapamtiti:**
> 
> 
> **Sljedeće predavanje:**
> [[Predavanje <% tp.system.prompt("Sljedeći broj") %>]]
```

---

**Copy any template above, save as .md file in your Templates folder, and use with Templater!**

*All templates are Cornell-optimized with cue callouts, visual sections, and summaries.*
