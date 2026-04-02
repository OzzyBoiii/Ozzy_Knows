# ⚡ PERFORMANCE OPTIMIZATION & VAULT MAINTENANCE
## Keep Your Obsidian Fast and Clean

---

## 📋 TABLE OF CONTENTS

1. [Performance Optimization](#performance-optimization)
2. [Vault Maintenance](#vault-maintenance)
3. [Mobile Optimization](#mobile-optimization)
4. [Backup Strategies](#backup-strategies)
5. [Troubleshooting Performance](#troubleshooting-performance)

---

# 🚀 PERFORMANCE OPTIMIZATION

## 🎯 Quick Wins (Do These First)

### 1. Disable Unused Plugins
```
Settings → Community Plugins → Installed plugins
```
- Disable plugins you don't use daily
- Each plugin adds ~50-200ms to startup time
- Keep only essentials enabled

**Recommended to keep:**
- Templater
- Dataview
- LaTeX Suite
- Advanced Tables

**Can disable when not actively using:**
- Excalidraw
- PlantUML
- Charts View
- PDF++

---

### 2. Optimize Dataview Queries

**❌ Slow Query:**
```dataview
TABLE file.ctime, file.mtime, tags
FROM ""
WHERE true
SORT file.ctime DESC
```

**✅ Fast Query:**
```dataview
TABLE created
FROM "Notes/Medicina"
WHERE contains(tags, "cornell")
SORT created DESC
LIMIT 10
```

**Rules:**
- Always use `FROM "specific/folder"` (not `""`)
- Always use `LIMIT` (10-50 max)
- Avoid complex `WHERE` conditions
- Cache results in variables

---

### 3. Reduce Vault Size

**Images:**
- Compress images before importing
- Use JPEG for photos (not PNG)
- Resize images to actual display size
- Target: < 500KB per image

**Tools:**
- https://tinypng.com
- https://squoosh.app
- Bulk Image Resizer (Windows/Mac)

**Videos:**
- Don't embed large videos
- Use YouTube links instead
- Or compress videos heavily

---

### 4. Limit Excalidraw Complexity

**Settings → Excalidraw:**
- Export as: **PNG** (not SVG for large drawings)
- Autosave interval: **60 seconds** (not 5s)
- Compress exported PNGs: **ON**

---

### 5. Clean CSS Snippets

```
Settings → Appearance → CSS snippets
```

- Disable unused snippets
- Combine multiple snippets into one
- Remove !important overrides
- Minimize use of expensive selectors

**Check:**
- Are you using ALL active snippets?
- Can snippets be combined?

---

## 🔧 Advanced Optimizations

### 6. Configure Cache

**Settings → Files and Links:**
- Deleted files: **System trash** (not Obsidian trash)
- Attachment folder: **Single folder** (not subfolders)
- Default location: **Same folder as current**

---

### 7. Optimize LaTeX

**Settings → LaTeX Suite:**
- Only enable triggers you actually use
- Remove unused snippets
- Use simple triggers (not regex)

---

### 8. Reduce Plugin Overhead

**Heavy Plugins** (use sparingly):
- Full Calendar
- Multiple Dataview queries per note
- Real-time sync plugins
- Multiple canvas files open

**Measure Impact:**
1. Settings → About → Show debug info
2. Note startup time
3. Disable suspect plugin
4. Restart Obsidian
5. Compare startup time

---

### 9. File Organization

**Optimal Structure:**
```
Vault/
├── Notes/
│   ├── Matematika/
│   ├── Fizika/
│   └── Kemija/
├── Templates/
├── Attachments/
│   ├── Images/
│   └── PDFs/
└── Archive/
```

**Avoid:**
- Too many folders (> 50)
- Too many files in root
- Very deep nesting (> 5 levels)

---

### 10. Search Optimization

**Fast Searches:**
```
path:Notes/Medicina tag:#important
file:lecture
```

**Slow Searches:**
```
/regex.*pattern/
content:"exact phrase match"
```

**Tips:**
- Use simple keywords
- Combine with path/tag filters
- Avoid regex unless necessary

---

# 🧹 VAULT MAINTENANCE

## 📅 Weekly Maintenance (15 minutes)

### Sunday Cleanup Checklist

- [ ] **Find unlinked notes**
  - Plugin: "Find orphaned files and broken links"
  - Review and link or archive

- [ ] **Find broken links**
  - Run automation script (from AUTOMATION_SCRIPTS.md)
  - Fix or remove broken links

- [ ] **Review tags**
  - Settings → Tag pane
  - Rename inconsistent tags (#Math vs #matematika)
  - Merge duplicate tags

- [ ] **Check for duplicates**
  - Search for common note names
  - Merge or differentiate

- [ ] **Archive old daily notes**
  - Move notes > 3 months to Archive/

---

## 📆 Monthly Maintenance (30 minutes)

### First of Month Checklist

- [ ] **Update plugins**
  - Settings → Community plugins → Check for updates
  - Read changelogs before updating

- [ ] **Backup vault**
  - Full backup to external drive
  - Test restore process

- [ ] **Review plugin usage**
  - Disable unused plugins
  - Remove abandoned plugins

- [ ] **Optimize images**
  - Find large images: `size:>1000000`
  - Compress or resize

- [ ] **Clean temporary files**
  - Delete .trash folder contents
  - Clear browser cache (if using web clipper)

- [ ] **Generate vault statistics**
  - Total notes
  - Notes per subject
  - Growth rate

---

## 🎯 Quarterly Maintenance (1 hour)

### Every 3 Months

- [ ] **Major cleanup**
  - Review ALL orphaned notes
  - Archive completed projects
  - Delete truly unnecessary notes

- [ ] **Reorganize if needed**
  - Assess folder structure
  - Move notes if organization changed

- [ ] **CSS audit**
  - Remove unused CSS snippets
  - Optimize remaining CSS

- [ ] **Plugin audit**
  - Check for plugin alternatives
  - Remove redundant functionality

- [ ] **Template review**
  - Update templates based on usage
  - Remove unused templates

- [ ] **Backup strategy review**
  - Test backup restore
  - Update backup location if needed

---

## 🛠️ Maintenance Tools

### Built-in Tools

**File Explorer → ... (More options):**
- Reveal file in system explorer
- Copy Obsidian URL
- Delete file

**Command Palette (Ctrl+P):**
- "Show debug info"
- "Clear cache and restart"
- "Export to PDF"

---

### Plugin-Based Tools

**Recommended Maintenance Plugins:**

1. **Find orphaned files and broken links**
   - Finds unlinked notes
   - Detects broken links
   - Generates reports

2. **Linter**
   - Auto-formats markdown
   - Fixes common issues
   - Runs on save

3. **Janitor**
   - Cleans empty notes
   - Removes orphaned attachments
   - Batch operations

4. **Obsidian Git**
   - Automatic backups
   - Version history
   - Cross-device sync

---

### Automated Maintenance

**Create Templater Script:**

```markdown
---
scheduled: daily at 23:00
---

# Vault Maintenance Report
<% tp.date.now("YYYY-MM-DD HH:mm") %>

## Statistics
- Total notes: <% app.vault.getMarkdownFiles().length %>
- Created today: <%* 
  const today = tp.date.now("YYYY-MM-DD");
  const files = app.vault.getMarkdownFiles();
  const created = files.filter(f => {
    const cache = app.metadataCache.getFileCache(f);
    return cache?.frontmatter?.created === today;
  });
  tR += created.length;
%>

## Orphaned Notes
<%* 
  const allFiles = app.vault.getMarkdownFiles();
  const orphaned = [];
  allFiles.forEach(file => {
    const cache = app.metadataCache.getFileCache(file);
    const backlinks = app.metadataCache.getBacklinksForFile(file);
    if (backlinks.data.size === 0 && !cache?.frontmatter?.pinned) {
      orphaned.push(file.basename);
    }
  });
  orphaned.forEach(name => tR += `- [[${name}]]\n`);
%>

## Action Items
- [ ] Review orphaned notes
- [ ] Check for broken links
- [ ] Archive old notes
```

---

# 📱 MOBILE OPTIMIZATION

## 📲 Settings for Mobile

### Performance Settings

**Settings → Options:**
```
✓ Disable sliding panes on mobile
✓ Reduce motion (if laggy)
✓ Default view: Reading view
✓ Line numbers: OFF
✓ Spell check: OFF (while typing)
```

---

### Mobile-Friendly CSS

Add to your CSS:

```css
/* Mobile optimizations */
@media (max-width: 700px) {
  /* Larger text */
  body {
    font-size: 16px;
    line-height: 1.8;
  }
  
  /* Larger touch targets */
  a, button {
    min-height: 44px;
    padding: 12px;
  }
  
  /* Simpler layout */
  .lovrin-cornell .callout[data-callout="cue"] {
    float: none;
    width: 100%;
    margin: 10px 0;
  }
  
  /* Hide complex elements */
  .complex-chart {
    display: none;
  }
  
  /* Replace with text */
  .complex-chart::after {
    content: "View on desktop for chart";
    display: block;
    padding: 20px;
    background: var(--background-secondary);
  }
}
```

---

### Mobile Workflow

**Best Practices:**
- Use Reading view on mobile
- Edit only simple notes
- Do heavy editing on desktop
- Use mobile for:
  - Quick capture
  - Reading
  - Reviewing flashcards
  - Checking references

---

## 💾 BACKUP STRATEGIES

### Strategy 1: Obsidian Git (Recommended)

**Pros:**
- Automatic
- Version history
- Free (GitHub)
- Cross-device sync

**Setup:**
1. Create GitHub repo (private)
2. Install Obsidian Git plugin
3. Configure credentials
4. Set auto-commit interval: 30 minutes

**Cons:**
- Requires Git knowledge
- GitHub account needed

---

### Strategy 2: Cloud Sync

**Options:**
- **Obsidian Sync** ($8/month)
  - Official
  - End-to-end encrypted
  - Fast
  - Mobile support

- **Remotely Save** (Free)
  - S3, Dropbox, OneDrive
  - Self-configured
  - Open source

- **Syncthing** (Free)
  - Peer-to-peer
  - No cloud needed
  - More complex setup

---

### Strategy 3: Manual Backup

**Schedule:**
- Daily: Quick backup to external drive
- Weekly: Full backup with verification
- Monthly: Offsite backup (cloud/another location)

**Script (Windows):**
```batch
@echo off
set SOURCE=C:\Users\YourName\Obsidian\YourVault
set DEST=E:\Backups\Obsidian\%date:~-4,4%-%date:~-7,2%-%date:~-10,2%
xcopy "%SOURCE%" "%DEST%" /E /I /Y
echo Backup complete!
pause
```

**Script (Mac/Linux):**
```bash
#!/bin/bash
SOURCE=~/Obsidian/YourVault
DEST=~/Backups/Obsidian/$(date +%Y-%m-%d)
rsync -av "$SOURCE/" "$DEST/"
echo "Backup complete!"
```

---

### Backup Verification

**Monthly Check:**
1. Restore backup to test folder
2. Open in Obsidian
3. Verify:
   - All notes present
   - Links work
   - Attachments load
   - Plugins work

---

# 🐛 TROUBLESHOOTING PERFORMANCE

## Common Issues & Fixes

### Issue: Slow Startup

**Diagnosis:**
```
Settings → About → Show debug info
Look at: Plugin loading time
```

**Solutions:**
1. Disable heavy plugins
2. Reduce auto-loading notes
3. Clear cache: Settings → About → Clear cache
4. Reinstall Obsidian (keep vault folder safe!)

---

### Issue: Laggy Typing

**Causes:**
- LaTeX Suite enabled in large notes
- Live preview with many formatting
- Spell check on
- Vim mode

**Solutions:**
1. Switch to Reading view for complex notes
2. Disable LaTeX Suite when not needed
3. Settings → Editor → Spell check: OFF
4. Use simpler formatting

---

### Issue: High Memory Usage

**Check:**
- Task Manager (Windows) / Activity Monitor (Mac)
- Look for Obsidian process

**Normal:** 200-500 MB
**High:** > 1 GB

**Solutions:**
1. Close unused tabs
2. Close graph view
3. Restart Obsidian daily
4. Reduce canvas use
5. Compress images

---

### Issue: Sync Conflicts

**Prevention:**
- Don't edit same note on two devices
- Wait for sync to complete before switching
- Use Obsidian Sync or Git (not both)

**Resolution:**
1. Find conflict files (filename.sync-conflict.md)
2. Compare with original
3. Merge manually
4. Delete conflict file

---

### Issue: Search Not Finding Notes

**Causes:**
- Indexing incomplete
- Cache outdated
- File excluded

**Solutions:**
1. Wait for indexing (status bar)
2. Settings → About → Reload without saving
3. Check: Settings → Files & Links → Excluded files

---

## 🎯 Performance Benchmarks

### Target Performance

| Metric | Target | Good | Needs Work |
|--------|--------|------|------------|
| Startup time | < 2s | < 5s | > 5s |
| Search time | < 1s | < 2s | > 3s |
| Switch notes | < 0.5s | < 1s | > 2s |
| Open graph | < 3s | < 5s | > 10s |
| Memory usage | < 500MB | < 1GB | > 1.5GB |

---

### How to Measure

**Startup Time:**
1. Close Obsidian
2. Start timer
3. Open Obsidian
4. Stop when fully loaded

**Search Time:**
1. Open search (Ctrl+Shift+F)
2. Type query
3. Time until results appear

**Memory Usage:**
- Task Manager → Details → Obsidian.exe
- Right-click → Set Priority → Normal
- Monitor over time

---

## 📊 Vault Health Dashboard

**Create this note:**

```markdown
# Vault Health Dashboard
Updated: <% tp.date.now("YYYY-MM-DD") %>

## Size Statistics
- Total notes: <% app.vault.getMarkdownFiles().length %>
- Total size: [Check in file explorer]
- Avg note size: [Total size / Total notes]

## Quality Metrics
- Orphaned notes: [Run script]
- Broken links: [Run script]
- Notes without tags: [Run Dataview query]
- Empty notes: [Run Dataview query]

## Performance
- Startup time: [Measure]
- Memory usage: [Check Task Manager]
- Enabled plugins: [Count]

## Backups
- Last backup: [Date]
- Backup location: [Path]
- Backup verified: [Yes/No]

## Action Items
- [ ] Fix broken links
- [ ] Tag untagged notes
- [ ] Archive completed projects
- [ ] Update templates
- [ ] Review plugin usage
```

---

**Keep your vault healthy and Obsidian will stay fast! ⚡**

*Maintenance is boring but necessary - schedule it!*

---

*Last updated: 2024-03-24*
