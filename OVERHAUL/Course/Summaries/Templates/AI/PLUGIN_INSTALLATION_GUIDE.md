# 📦 OBSIDIAN PLUGINS - Installation Checklist

## ⭐ PRIORITY 1: Essential (Install First)

### Templater
- **What it does**: Powers your template with dynamic content
- **Why you need it**: Creates notes with auto-filled dates, prompts, etc.
- **Install**: Settings → Community Plugins → Browse → Search "Templater"
- **Setup**:
  ```
  Template folder: Templates/
  ✓ Trigger Templater on new file creation
  ✓ Enable syntax highlighting
  ```

### Style Settings
- **What it does**: Lets you customize colors/spacing without editing CSS
- **Why you need it**: Easy theme customization
- **Install**: Settings → Community Plugins → Browse → Search "Style Settings"
- **Setup**: No configuration needed

### Dataview
- **What it does**: Smart queries to find and list notes
- **Why you need it**: Auto-generates lists of related notes
- **Install**: Settings → Community Plugins → Browse → Search "Dataview"
- **Setup**:
  ```
  ✓ Enable JavaScript queries
  ✓ Enable inline queries
  ✓ Enable inline JavaScript
  ```

### LaTeX Suite
- **What it does**: Fast math/formula input with shortcuts
- **Why you need it**: Type `alpha` + TAB → α, `//` → fraction, etc.
- **Install**: Settings → Community Plugins → Browse → Search "LaTeX Suite"
- **Setup**:
  ```
  ✓ Trigger on TAB
  □ Trigger on Space (optional)
  Import snippets from: .obsidian/latex-suite-snippets.json
  ```

### Advanced Tables
- **What it does**: Excel-like table editing
- **Why you need it**: Auto-formats tables, easy cell navigation
- **Install**: Settings → Community Plugins → Browse → Search "Advanced Tables"
- **Setup**:
  ```
  ✓ Format on tab
  ✓ Auto-format tables
  ```

---

## ⭐ PRIORITY 2: Visual Content (Install for rich notes)

### Excalidraw
- **What it does**: Draw diagrams, sketches, annotations
- **Why you need it**: Hand-drawn illustrations in notes
- **Install**: Settings → Community Plugins → Browse → Search "Excalidraw"
- **Setup**:
  ```
  ✓ Auto-create new drawings
  Embed type: PNG
  Default theme: Match Obsidian theme
  ```

### Charts View / Obsidian Charts
- **What it does**: Create bar/line/pie charts from data
- **Why you need it**: Visualize data trends
- **Install**: Settings → Community Plugins → Browse → Search "Charts View"
  - OR Search "Obsidian Charts" (both work)
- **Setup**: Default settings

### PlantUML
- **What it does**: Create flowcharts, UML diagrams, sequence diagrams
- **Why you need it**: Professional diagrams from simple text
- **Install**: Settings → Community Plugins → Browse → Search "PlantUML"
- **Setup**:
  ```
  Server URL: https://www.plantuml.com/plantuml
  Format: SVG
  ```

### Obsidian Chem
- **What it does**: Draw chemical structures
- **Why you need it**: Chemistry notes with molecular diagrams
- **Install**: Settings → Community Plugins → Browse → Search "Obsidian Chem"
- **Setup**: Default settings

### Image Toolkit
- **What it does**: Zoom, pan, rotate images
- **Why you need it**: Better image viewing experience
- **Install**: Settings → Community Plugins → Browse → Search "Image Toolkit"
- **Setup**:
  ```
  View trigger: Click
  Pin after opening: No
  ```

---

## ⭐ PRIORITY 3: Workflow Enhancement (Highly Recommended)

### QuickAdd
- **What it does**: Create notes with hotkeys
- **Why you need it**: Press Ctrl+Shift+N → instant new Cornell note
- **Install**: Settings → Community Plugins → Browse → Search "QuickAdd"
- **Setup**:
  ```
  1. Add Choice → "Lovrin Cornell"
  2. Type: Template
  3. Template: Templates/Lovrin_Cornell_Ultimate.md
  4. Folder: Notes/Medicina/ (your choice)
  5. ✓ Create new file
  6. ✓ Open new file
  7. Assign hotkey in Settings → Hotkeys
  ```

### Banner
- **What it does**: Adds banner images to notes
- **Why you need it**: Beautiful visual headers
- **Install**: Settings → Community Plugins → Browse → Search "Banner"
- **Alternative**: CSS already includes banner support
- **Setup**: Banner folder: `Assets/Banners/`

### Calendar
- **What it does**: Visual calendar for daily notes
- **Why you need it**: Track study sessions by date
- **Install**: Settings → Community Plugins → Browse → Search "Calendar"
- **Setup**: Default settings

### Recent Files
- **What it does**: Sidebar showing recently opened files
- **Why you need it**: Quick access to notes you're working on
- **Install**: Settings → Community Plugins → Browse → Search "Recent Files"
- **Setup**: Number of files: 10-20

---

## 🔧 PRIORITY 4: Power User Features (Optional)

### Sliding Panes (Andy's Mode)
- **What it does**: Side-by-side note viewing
- **Why helpful**: Compare notes while studying
- **Install**: Search "Sliding Panes"

### Folder Note
- **What it does**: Create notes that represent folders
- **Why helpful**: Index notes for each subject
- **Install**: Search "Folder Note"

### Tag Wrangler
- **What it does**: Rename/merge/organize tags
- **Why helpful**: Clean up messy tags
- **Install**: Search "Tag Wrangler"

### Note Refactor
- **What it does**: Split/merge notes easily
- **Why helpful**: Break up large notes into smaller ones
- **Install**: Search "Note Refactor"

### Dictionary
- **What it does**: Look up word definitions while writing
- **Why helpful**: Quick reference without leaving Obsidian
- **Install**: Search "Dictionary"

### Spaced Repetition
- **What it does**: Flashcards with spaced repetition algorithm
- **Why helpful**: Active recall for studying
- **Install**: Search "Spaced Repetition"

### Review
- **What it does**: Schedule notes for review
- **Why helpful**: Periodic review of important topics
- **Install**: Search "Review"

### Kanban
- **What it does**: Create Kanban boards for tasks
- **Why helpful**: Visual task management
- **Install**: Search "Kanban"

### Paste URL into selection
- **What it does**: Select text → paste URL → auto-creates link
- **Why helpful**: Faster linking workflow
- **Install**: Search "Paste URL into selection"

---

## ⚙️ Installation Order Recommendation

**Day 1** (Get started):
1. Templater
2. Dataview
3. LaTeX Suite
4. Advanced Tables

**Day 2** (Add visuals):
5. Excalidraw
6. Charts View
7. Image Toolkit

**Day 3** (Optimize workflow):
8. QuickAdd
9. Style Settings
10. Calendar

**Day 4+** (Power features):
- Add any from Priority 4 based on your needs

---

## 🔍 How to Install Plugins

### Step-by-Step:

1. **Open Settings**: Click gear icon (⚙️) or press `Ctrl+,`

2. **Go to Community Plugins**:
   - Settings → Community Plugins
   - If first time: Turn OFF "Safe mode"

3. **Browse Plugins**:
   - Click "Browse" button
   - Search for plugin name
   - Click on plugin card

4. **Install**:
   - Click "Install" button
   - Wait for download
   - Click "Enable" button

5. **Configure**:
   - Settings → Plugin name (in left sidebar)
   - Follow setup instructions above

---

## ✅ Verification Checklist

After installing, verify each plugin works:

### Templater
- [ ] Create new note
- [ ] Insert template
- [ ] Prompts appear (date, subject, tags)

### LaTeX Suite
- [ ] Type `alpha` + TAB → should expand to `\alpha`
- [ ] Type `//` + TAB → should create fraction

### Dataview
- [ ] Create query: 
  ```dataview
  LIST
  FROM ""
  LIMIT 5
  ```
- [ ] Should show list of notes

### Excalidraw
- [ ] Create new Excalidraw
- [ ] Draw something
- [ ] Embed in note: `![[Drawing.excalidraw]]`

### Charts View
- [ ] Create chart block:
  ````
  ```chart
  type: bar
  labels: [A,B,C]
  series:
    - title: Test
      data: [1,2,3]
  ```
  ````
- [ ] Chart should render

### Advanced Tables
- [ ] Create table with `|`
- [ ] Press TAB → should move to next cell
- [ ] Table should auto-format

---

## 🚨 Common Installation Issues

### "Plugin failed to load"
- **Solution**: Update Obsidian to latest version
- Settings → About → Check for updates

### "Cannot find plugin"
- **Solution**: Check spelling, try exact name from list

### Plugin installed but not working
- **Solution**: 
  1. Disable plugin
  2. Restart Obsidian
  3. Enable plugin again

### Conflicting plugins
- **Solution**: Disable plugins one by one to find conflict

---

## 📝 Notes

- **Don't install everything at once**: Start with Priority 1, add more as needed
- **Keep plugins updated**: Settings → Community Plugins → Check for updates
- **Disable unused plugins**: They slow down Obsidian
- **Backup before major updates**: Copy vault folder regularly

---

## 🎯 Recommended Plugin Loadout by Use Case

### For Medical Students:
- Templater ✓
- Dataview ✓
- LaTeX Suite ✓
- Excalidraw ✓
- Advanced Tables ✓
- Obsidian Chem ✓
- Image Toolkit ✓

### For Math/Physics Students:
- Templater ✓
- LaTeX Suite ✓ (ESSENTIAL)
- Charts View ✓
- Excalidraw ✓
- PlantUML ✓

### For General Note-Taking:
- Templater ✓
- Dataview ✓
- Advanced Tables ✓
- QuickAdd ✓
- Calendar ✓

### For Researchers:
- Templater ✓
- Dataview ✓
- LaTeX Suite ✓
- Citations (additional plugin) ✓
- Zotero Integration (additional) ✓

---

*Last updated: 2026-03-24*
