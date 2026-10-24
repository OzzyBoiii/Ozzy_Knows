# 📦 INSTALLATION INSTRUCTIONS

## What You Have

This folder contains a **complete Obsidian vault system** with:
- ✅ Fixed text/visual column separation
- ✅ 150+ LaTeX shortcuts
- ✅ Professional CSS styling
- ✅ Complete documentation
- ✅ Working example notes

---

## 📁 File Overview

| File | Purpose | Where It Goes |
|------|---------|---------------|
| `lovrin-cornell-ultimate.css` | Main styling | `.obsidian/snippets/` |
| `latex-suite-snippets.json` | LaTeX shortcuts | `.obsidian/` |
| `Lovrin_Cornell_Ultimate.md` | Note template | `Templates/` |
| `README.md` | System overview | Read first! |
| `QUICK_START_CHECKLIST.md` | 15-min setup | Follow this |
| `LOVRIN_CORNELL_COMPLETE_GUIDE.md` | Full guide | Reference |
| `PLUGIN_INSTALLATION_GUIDE.md` | Plugin help | Step-by-step |
| `LATEX_QUICK_REFERENCE.md` | LaTeX cheat sheet | Keep open |
| `EXAMPLE_COMPLETE_NOTE.md` | Working example | Study this |

---

## 🚀 Installation Steps

### Option 1: Quick Install (15 minutes)

1. **Open your Obsidian vault folder**
   - Right-click vault name in Obsidian → "Show in system explorer"
   - Or navigate to where you keep your vault

2. **Install CSS**:
   ```
   Copy: lovrin-cornell-ultimate.css
   To:   YourVault/.obsidian/snippets/
   ```
   - If `snippets` folder doesn't exist, create it
   - In Obsidian: Settings → Appearance → CSS snippets → Enable it

3. **Install LaTeX snippets**:
   ```
   Copy: latex-suite-snippets.json
   To:   YourVault/.obsidian/
   ```

4. **Install template**:
   ```
   Copy: Lovrin_Cornell_Ultimate.md
   To:   YourVault/Templates/
   ```
   - If `Templates` folder doesn't exist, create it

5. **Install plugins** (Settings → Community Plugins → Browse):
   - Templater (required)
   - Dataview (required)
   - LaTeX Suite (required)
   - Advanced Tables (required)
   - Excalidraw (recommended)

6. **Configure LaTeX Suite**:
   - Settings → LaTeX Suite
   - Click "Import snippets"
   - Select: `.obsidian/latex-suite-snippets.json`

7. **Configure Templater**:
   - Settings → Templater
   - Template folder: `Templates/`
   - ✓ Trigger Templater on new file creation

8. **Restart Obsidian** (Ctrl+R or Cmd+R)

9. **Test**:
   - Create new note
   - Command Palette (Ctrl+P): "Templater: Insert Template"
   - Select "Lovrin_Cornell_Ultimate"
   - Should work!

---

### Option 2: Guided Install

Follow **QUICK_START_CHECKLIST.md** for detailed step-by-step instructions with checkboxes.

---

## 📖 What to Read First

**Brand new?**
1. README.md (5 min overview)
2. QUICK_START_CHECKLIST.md (install)
3. EXAMPLE_COMPLETE_NOTE.md (see it in action)

**Need plugin help?**
→ PLUGIN_INSTALLATION_GUIDE.md

**Learning LaTeX?**
→ LATEX_QUICK_REFERENCE.md (keep this open!)

**Want deep dive?**
→ LOVRIN_CORNELL_COMPLETE_GUIDE.md

---

## ✅ Your Vault Structure Should Look Like This

```
YourVault/
├── .obsidian/
│   ├── snippets/
│   │   └── lovrin-cornell-ultimate.css      ← Install here
│   └── latex-suite-snippets.json            ← Install here
│
├── Templates/
│   └── Lovrin_Cornell_Ultimate.md           ← Install here
│
└── (your notes)
```

---

## 🎯 Quick Test

After installation:

1. **Test CSS**:
   - Create test note
   - Add to frontmatter:
     ```yaml
     ---
     cssclasses:
       - lovrin-cornell
     ---
     ```
   - Should see column layout

2. **Test LaTeX**:
   - In test note, type: `alpha`
   - Press TAB
   - Should expand to: `\alpha`

3. **Test Template**:
   - Command Palette (Ctrl+P)
   - Type: "Templater: Insert"
   - Select your template
   - Should fill in automatically

If all three work → ✅ You're ready!

---

## 🐛 Common Issues

### "CSS not working"
- **Fix**: Enable snippet in Settings → Appearance → CSS snippets
- Restart Obsidian

### "LaTeX triggers not expanding"
- **Fix**: Import JSON in LaTeX Suite settings
- Make sure "Trigger on TAB" is enabled

### "Template not found"
- **Fix**: Check file is in `Templates/` folder
- Verify Templater folder path

### "Plugins not working"
- **Fix**: Settings → Community Plugins
- Make sure Safe Mode is OFF
- Check each plugin is enabled

---

## 💡 Pro Tips

1. **Read README.md first** - It explains everything
2. **Follow QUICK_START_CHECKLIST.md** - Don't skip steps
3. **Study EXAMPLE_COMPLETE_NOTE.md** - See how it works
4. **Keep LATEX_QUICK_REFERENCE.md open** - Learn shortcuts
5. **Don't install all plugins at once** - Start with required ones

---

## 📞 Need Help?

1. Check **LOVRIN_CORNELL_COMPLETE_GUIDE.md** Troubleshooting section
2. All answers are in the documentation files
3. [Obsidian Forum](https://forum.obsidian.md) for community help
4. [r/ObsidianMD](https://reddit.com/r/ObsidianMD) for questions

---

## 🎉 You're All Set!

Everything you need is in this folder. Just:
1. Follow installation steps above
2. Read the documentation
3. Create your first note
4. Start learning!

**Total time**: 15-30 minutes
**Difficulty**: Easy (just copy files and enable plugins)
**Result**: Professional note-taking system

---

*Good luck with your studies! 📚*
*Sretno s učenjem! 🎓*
