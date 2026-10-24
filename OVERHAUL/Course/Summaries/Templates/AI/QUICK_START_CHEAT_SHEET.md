# 🚀 LOVRIN CORNELL - Quick Start Cheat Sheet

## ⚡ 5-Minute Setup

### 1️⃣ Install CSS (2 minutes)
```
1. Copy: lovrin-cornell-ultimate.css
2. Paste into: YourVault/.obsidian/snippets/
3. Obsidian → Settings → Appearance → CSS snippets
4. Enable "lovrin-cornell-ultimate"
5. Disable any old Cornell snippets
6. Restart Obsidian (Ctrl+R)
```

### 2️⃣ Install Plugins (3 minutes)
```
Essential only:
☐ Templater
☐ Dataview
☐ LaTeX Suite (import JSON file!)
☐ Advanced Tables
```

### 3️⃣ Copy Template
```
Copy: Lovrin_Cornell_Ultimate.md
To: YourVault/Templates/
```

---

## 📝 Create Your First Note

### Method 1: Quick
```
1. New note
2. Ctrl+P → "Templater: Insert Template"
3. Select "Lovrin_Cornell_Ultimate"
4. Fill in prompts
5. Done!
```

### Method 2: Hotkey (Setup QuickAdd first)
```
1. Press Ctrl+Shift+N (or your hotkey)
2. Enter title
3. Select subject
4. Done!
```

---

## 📐 Note Structure

```
┌─────────────────────────────────────┐
│         BANNER (optional)           │
│            # TITLE                  │
└─────────────────────────────────────┘

┌──────────┬──────────────────────────┐
│  CUE     │   TEXT CONTENT          │
│  (Left   │   (Explanations only)   │
│  margin) │                         │
│          ├─────────────────────────┤
│          │   VISUAL CONTENT        │
│          │   ┌────────┬──────────┐ │
│          │   │ Col 1  │  Col 2   │ │
│          │   │Tables  │ Diagrams │ │
│          │   │Math    │ Images   │ │
│          │   └────────┴──────────┘ │
└──────────┴─────────────────────────┘

┌─────────────────────────────────────┐
│    STICKY SUMMARY (always visible)  │
└─────────────────────────────────────┘
```

---

## 🎯 Where to Put Content

### LEFT SIDE (Text Only)
```markdown
> [!cue] Key Concept

## Section Title
Write explanations here.
- Bullet points
- Lists
- Paragraphs
- Links: [[Other Note]]
```

### RIGHT SIDE (Visuals Only)
```markdown
> [!lovrin-visuals] Vizualije

<div class="lovrin-visual-block">
<div>

#### Table
| A | B |
|---|---|
| 1 | 2 |

#### Math
$$E = mc^2$$

</div>
<div>

#### Image
![[image.png|300]]

#### Chart
```chart
type: bar
...
```

</div>
</div>
```

---

## ⚡ LaTeX Shortcuts (Press TAB after typing)

### Most Used
```
alpha → α       beta → β        gamma → γ
// → fraction   sq → √          sr → ²
sum → Σ         int → ∫         lim → lim
>= → ≥          <= → ≤          != → ≠
-> → →          => → ⇒          <-> → ↔
RR → ℝ          CC → ℂ          NN → ℕ
```

### Quick Examples
```
Type this:     Get this:
---------      ---------
x sr           x²
// x y         x/y
sq x           √x
alpha theta    αθ
sum i=1 n      Σᵢ₌₁ⁿ
int 0 1        ∫₀¹
```

---

## 🎨 Common Tasks

### Add Cue
```markdown
> [!cue] Main Point
```

### Add Table
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```
(Use Advanced Tables plugin: TAB to move between cells)

### Add Chart
```markdown
```chart
type: line
labels: [A, B, C]
series:
  - title: Data
    data: [1, 2, 3]
```
```

### Add Image
```markdown
![[image-name.png|400]]
*Caption text*
```

### Add Math
```markdown
Inline: $x^2$
Display: $$x^2$$
```

### Add Link
```markdown
Internal: [[Note Name]]
External: [Text](https://url.com)
```

---

## 🔍 Dataview Queries

### List Cornell Notes
```dataview
TABLE predmet, created
FROM ""
WHERE contains(tags, "cornell")
SORT created DESC
LIMIT 10
```

### Find by Subject
```dataview
TABLE created, tags
FROM ""
WHERE predmet = "Patologija"
SORT created DESC
```

### Recent Notes
```dataview
TABLE file.mtime as Modified
FROM ""
SORT file.mtime DESC
LIMIT 5
```

---

## 🎨 Customization

### Change Colors
Edit CSS variables:
```css
:root {
  --lovrin-accent: #4a90e2;  /* Your color */
  --lovrin-bg-visual: rgba(245, 245, 250, 0.4);
}
```

### Change Widths
```css
:root {
  --cornell-cue-width: 280px;  /* Cue column */
  --cornell-visual-width: 45%; /* Visual column */
}
```

---

## 🐛 Quick Troubleshooting

### Columns not showing?
```
✓ Check: CSS snippet enabled?
✓ Check: Note has cssclasses: lovrin-cornell?
✓ Try: Restart Obsidian (Ctrl+R)
✓ Disable: Other Cornell CSS snippets
```

### LaTeX not expanding?
```
✓ Install: LaTeX Suite plugin
✓ Import: latex-suite-snippets.json
✓ Enable: "Trigger on TAB"
✓ Try: Type trigger + press TAB (not Space)
```

### Charts not showing?
```
✓ Install: Charts View plugin
✓ Check: Block starts with ```chart
✓ Check: Syntax is correct
```

### Images too large?
```
Add size: ![[image.png|300]]
```

---

## 📚 Full Documentation

For detailed guides, see:
- `LOVRIN_CORNELL_COMPLETE_GUIDE.md` - Full manual
- `PLUGIN_INSTALLATION_GUIDE.md` - All plugins
- `EXAMPLE_COMPLETE_NOTE.md` - See it in action

---

## ✅ Daily Workflow

```
1. Ctrl+Shift+N (or hotkey)
2. Enter note title
3. Select subject
4. Write text content (left)
5. Add visuals (right)
6. Add summary (bottom)
7. Link to related notes
8. Tag appropriately
9. Save (Ctrl+S)
```

---

## 💡 Pro Tips

1. ✅ **Use cue callouts** - They're searchable and scannable
2. ✅ **Link everything** - Build your knowledge graph
3. ✅ **Write summary last** - After note is complete
4. ✅ **Keep text separate** - Don't mix with visuals
5. ✅ **Practice LaTeX** - It gets faster with time
6. ✅ **Review weekly** - Use backlinks to discover connections

---

## 🎯 Keyboard Shortcuts

### Essential
```
Ctrl+N         New note
Ctrl+O         Open quick switcher
Ctrl+P         Command palette
Ctrl+E         Edit/Preview mode
Ctrl+,         Settings
Ctrl+R         Reload Obsidian
```

### With Plugins
```
Ctrl+Shift+N   QuickAdd (create Cornell note)
Ctrl+Shift+D   Templater (insert template)
Alt+Left/Right Navigate back/forward
```

---

## 📊 Template Variables

Your template uses:
```
<% tp.file.title %>           - File name
<% tp.file.creation_date %>   - Creation date
<% tp.system.prompt() %>      - User prompt
<% tp.system.suggester() %>   - Dropdown menu
```

---

## 🎓 Learning Path

### Week 1: Basics
- [ ] Install CSS and essential plugins
- [ ] Create 5 practice notes
- [ ] Learn basic LaTeX shortcuts

### Week 2: Visual Content
- [ ] Add tables to notes
- [ ] Create your first chart
- [ ] Draw with Excalidraw

### Week 3: Advanced
- [ ] Set up QuickAdd
- [ ] Master LaTeX shortcuts
- [ ] Create Dataview queries

### Week 4: Optimization
- [ ] Customize CSS colors
- [ ] Build note network with links
- [ ] Develop personal workflow

---

## 🔗 Quick Links

- Obsidian Forum: https://forum.obsidian.md
- LaTeX Suite: https://github.com/artisticat1/obsidian-latex-suite
- Dataview Docs: https://blacksmithgu.github.io/obsidian-dataview/

---

*Print this cheat sheet and keep it handy!*
*Last updated: 2026-03-24*
