---
cssclasses:
  - cornell-left
  - cornell-border
  - lovrin-cornell
  - banner-image
  - border-around-images
  - cornell-right
  - lov
tags:
---
---
cssclasses:
  - cornell-left
  - cornell-border
  - banner-image
  - lovrin-cornell
tags:
  - cornell
  - lovrin
  - <% tp.system.prompt("Tag 1 (npr. patologija/imunologija)") %>
created: <% tp.file.creation_date("YYYY-MM-DD") %>
predmet: <% tp.system.suggester(["Patologija","Imunologija","Patofiziologija","Farmakologija","Ostalo"],["Patologija","Imunologija","Patofiziologija","Farmakologija","Ostalo"]) %>
source: <% tp.system.prompt("Izvor (npr. BRS, Skripta, Video link)") %>
banner: banner-cornellU.jpg
---

# <% tp.file.title %>

> [!summary-top] Brzi pregled
> - Tema / fokus: …
> - Ključ: Medijatori → Znaci → Terapija.
> - Test pitanje 1: …
> - Test pitanje 2: …

> [!cue] Glavni pojmovi
- (Pojam 1)
- (Pojam 2)
- (Pojam 3)
- (Pojam 4)

---

## Lijevi stupac – Glavne bilješke (tekst)

- **Definicija / kontekst**
  - …
- **Patogeneza / mehanizam**
  - …
- **Klinička slika / makroskopija / mikroskopija**
  - …
- **Terapija / pristup**
  - …

> [!cue] Mikro → Makro
- Ovdje podsjeti sebe kako mikroskopske promjene daju makroskopski nalaz.

---

## Desni stupac – Vizualije, formule, tablice

> [!multi-column]
>
> > [!column] Lijevi vizualni podstupac
> - Tablica faza / medijatora / efekata:
>
> | Faza       | Medijatori             | Efekti            |
> | ---------- | ---------------------- | ----------------- |
> | Vaskularna | Histamin, PG          | Eritem, edem      |
> | Ćelijska   | LTB4, IL‑1, TNF‑α      | Fagocitoza        |
>
> - Formula / jednadžba (LaTeX Suite):
>   \[ E = mc^2 \]
>
> - Skica (Excalidraw – standardiziran naziv):
>   ![[<% tp.file.title %>.excalidraw]]
>
> > [!column] Desni vizualni podstupac
> - Slika lezije:
>   ![[slika-<% tp.file.title %>.png|400]]
>
> - Graf (Charts View – prilagodi vrijednosti):
>   ```chart
>   type: line
>   labels: [Dan 1, Dan 3, Dan 7]
>   series:
>     - title: Neutrofili
>       data:[11]
>     - title: Limfociti
>       data:[11]
>   ```
>
> - Caption (Image Captions):
>   Figura 1. Makroskopski nalaz (eritem, edem) u akutnoj upali.

---

## Donji redak – Linkovi i dodatno učenje

> [!summary] Ukupni sažetak (sticky)
> - (sažetak u 1–3 rečenice – što je srž ove bilješke?)
> - Eksudativna (neutrofili) vs proliferativna (limfociti).
> - Povezivanje:
>   - [[Imunologija – Citokini]]
>   - [[Patofiziologija – Vaskulitis]]
>   - Video: [Patologija upale](https://youtube.com/example)

> [!cue] Dodatne poveznice
> - Koristi ovaj blok za nove članke / videe tijekom revizije.
