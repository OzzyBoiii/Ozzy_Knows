# ⚡ WORKFLOW AUTOMATION SCRIPTS
## QuickAdd Macros & Templater Scripts

---

## 📋 TABLE OF CONTENTS

1. [QuickAdd Macros](#quickadd-macros)
2. [Templater User Scripts](#templater-user-scripts)
3. [Batch Processing Tools](#batch-processing-tools)
4. [Custom Commands](#custom-commands)

---

# 🎯 QUICKADD MACROS

## Setup Location
Save these in your vault as `.js` files, then configure in QuickAdd settings.

---

## Macro 1: Smart Cornell Note Creator

**File:** `create-cornell-note.js`

```javascript
module.exports = async (params) => {
    const {quickAddApi: {inputPrompt, suggester}, app} = params;
    
    // Ask for note type
    const noteType = await suggester(
        ["Predavanje", "Teorija", "Dimostrazione", "Lab", "Ispit"],
        ["lecture", "theory", "proof", "lab", "exam"]
    );
    
    // Ask for subject
    const subject = await suggester(
        ["Matematika", "Fizika", "Kemija", "Biologija", "Medicina"],
        ["Matematika", "Fizika", "Kemija", "Biologija", "Medicina"]
    );
    
    // Ask for topic
    const topic = await inputPrompt("Tema bilješke:");
    
    // Generate filename
    const date = new Date().toISOString().split('T')[0];
    const filename = `${date} - ${subject} - ${topic}`;
    
    // Select appropriate template based on type
    const templates = {
        lecture: "Templates/Lovrin_Cornell_Ultimate.md",
        theory: "Templates/Template_Matematika_Teorija.md",
        proof: "Templates/Template_Matematika_Dimostrazione.md",
        lab: "Templates/Lovrin_Cornell_Ultimate.md",
        exam: "Templates/Lovrin_Cornell_Ultimate.md"
    };
    
    // Create the file
    const file = await app.vault.create(
        `Notes/${subject}/${filename}.md`,
        ""
    );
    
    // Apply template
    await app.foldManager.save(file, {
        templatePath: templates[noteType],
        targetFile: file
    });
    
    // Open the file
    await app.workspace.openLinkText(file.path, '', false);
    
    return filename;
};
```

---

## Macro 2: Weekly Review Generator

**File:** `weekly-review.js`

```javascript
module.exports = async (params) => {
    const {quickAddApi, app} = params;
    
    // Get current week number
    const now = new Date();
    const week = getWeekNumber(now);
    const year = now.getFullYear();
    
    // Query all notes from this week
    const { metadataCache, vault } = app;
    const files = vault.getMarkdownFiles();
    
    const thisWeekNotes = files.filter(file => {
        const created = metadataCache.getFileCache(file)?.frontmatter?.created;
        if (!created) return false;
        const createdDate = new Date(created);
        return getWeekNumber(createdDate) === week && createdDate.getFullYear() === year;
    });
    
    // Generate summary
    let content = `# Weekly Review - Week ${week}, ${year}\n\n`;
    content += `## Notes Created This Week (${thisWeekNotes.length})\n\n`;
    
    // Group by subject
    const bySubject = {};
    thisWeekNotes.forEach(file => {
        const subject = metadataCache.getFileCache(file)?.frontmatter?.predmet || "Other";
        if (!bySubject[subject]) bySubject[subject] = [];
        bySubject[subject].push(file);
    });
    
    // Write grouped notes
    for (const [subject, notes] of Object.entries(bySubject)) {
        content += `### ${subject}\n\n`;
        notes.forEach(note => {
            content += `- [[${note.basename}]]\n`;
        });
        content += `\n`;
    }
    
    // Add reflection prompts
    content += `## Reflection\n\n`;
    content += `### What did I learn this week?\n\n\n`;
    content += `### What went well?\n\n\n`;
    content += `### What needs improvement?\n\n\n`;
    content += `### Goals for next week\n\n- [ ] \n- [ ] \n- [ ] \n`;
    
    // Create file
    const filename = `Weekly Review ${year}-W${week}.md`;
    await vault.create(`Reviews/${filename}`, content);
    
    return filename;
};

function getWeekNumber(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}
```

---

## Macro 3: Study Session Timer

**File:** `study-session.js`

```javascript
module.exports = async (params) => {
    const {quickAddApi: {inputPrompt, suggester}, app} = params;
    
    // Choose subject
    const subject = await suggester(
        ["Matematika", "Fizika", "Kemija", "Biologija", "Medicina"],
        ["Matematika", "Fizika", "Kemija", "Biologija", "Medicina"]
    );
    
    // Choose duration
    const duration = await suggester(
        ["25 min (Pomodoro)", "50 min (Lecture)", "90 min (Deep Work)", "Custom"],
        [25, 50, 90, "custom"]
    );
    
    let minutes = duration;
    if (duration === "custom") {
        minutes = parseInt(await inputPrompt("Koliko minuta?"));
    }
    
    // Create study session note
    const now = new Date();
    const start = now.toISOString();
    const end = new Date(now.getTime() + minutes * 60000).toISOString();
    
    const content = `---
type: study-session
subject: ${subject}
start: ${start}
end: ${end}
duration: ${minutes}
---

# Study Session: ${subject}

**Started:** ${now.toLocaleTimeString()}
**Duration:** ${minutes} minutes
**End Time:** ${new Date(end).toLocaleTimeString()}

## Goals
- [ ] 
- [ ] 
- [ ] 

## Notes


## Pomodoro Tracker
- [ ] Block 1 (25 min)
- [ ] Block 2 (25 min)
- [ ] Block 3 (25 min)
- [ ] Block 4 (25 min)

## Session Review
**Accomplished:**


**Challenges:**


**Next session:**

`;
    
    const filename = `Study Session ${now.toISOString().split('T')[0]} ${now.toLocaleTimeString().replace(/:/g, '-')}.md`;
    await app.vault.create(`Study Sessions/${filename}`, content);
    
    // Set reminder
    new Notice(`Study session started! ${minutes} minutes.`);
    
    return filename;
};
```

---

## Macro 4: Link Finder (Find Related Notes)

**File:** `find-related.js`

```javascript
module.exports = async (params) => {
    const {app, quickAddApi} = params;
    const activeFile = app.workspace.getActiveFile();
    
    if (!activeFile) {
        new Notice("No active file!");
        return;
    }
    
    // Get tags from current note
    const cache = app.metadataCache.getFileCache(activeFile);
    const tags = cache?.frontmatter?.tags || [];
    
    // Find notes with same tags
    const allFiles = app.vault.getMarkdownFiles();
    const related = [];
    
    allFiles.forEach(file => {
        if (file.path === activeFile.path) return;
        
        const fileCache = app.metadataCache.getFileCache(file);
        const fileTags = fileCache?.frontmatter?.tags || [];
        
        // Count matching tags
        const matches = tags.filter(tag => fileTags.includes(tag)).length;
        
        if (matches > 0) {
            related.push({
                file: file,
                matches: matches,
                tags: fileTags
            });
        }
    });
    
    // Sort by relevance
    related.sort((a, b) => b.matches - a.matches);
    
    // Generate content
    let content = `\n\n## 🔗 Related Notes (Auto-generated)\n\n`;
    content += `Found ${related.length} related notes:\n\n`;
    
    related.slice(0, 10).forEach(item => {
        content += `- [[${item.file.basename}]] (${item.matches} matching tags)\n`;
    });
    
    // Append to current note
    const currentContent = await app.vault.read(activeFile);
    await app.vault.modify(activeFile, currentContent + content);
    
    new Notice(`Found ${related.length} related notes!`);
};
```

---

# 🔧 TEMPLATER USER SCRIPTS

## Setup
1. Create folder: `Scripts/Templater/`
2. Save these as `.js` files
3. Settings → Templater → Script files folder: `Scripts/Templater/`

---

## Script 1: Smart Date Functions

**File:** `dates.js`

```javascript
function getCurrentSemester() {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    
    if (month >= 9 || month <= 1) {
        return `Zimski ${year}/${year + 1}`;
    } else {
        return `Ljetni ${year}`;
    }
}

function getAcademicYear() {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    
    if (month >= 9) {
        return `${year}/${year + 1}`;
    } else {
        return `${year - 1}/${year}`;
    }
}

function getWeekOfSemester() {
    const semesterStart = new Date(2024, 8, 1); // Sept 1
    const now = new Date();
    const diff = now - semesterStart;
    const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
    return Math.max(1, weeks + 1);
}

function getDaysUntilExam(examDate) {
    const exam = new Date(examDate);
    const now = new Date();
    const diff = exam - now;
    const days = Math.ceil(diff / (24 * 60 * 60 * 1000));
    return days;
}

function formatCroatianDate(date = new Date()) {
    const months = [
        "siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja",
        "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}. ${month} ${year}.`;
}

module.exports = {
    getCurrentSemester,
    getAcademicYear,
    getWeekOfSemester,
    getDaysUntilExam,
    formatCroatianDate
};
```

**Usage in template:**
```markdown
<%* const {getCurrentSemester} = tp.user.dates() %>
Semestar: <% getCurrentSemester() %>

<%* const {formatCroatianDate} = tp.user.dates() %>
Datum: <% formatCroatianDate() %>
```

---

## Script 2: Exam Counter

**File:** `exam-tracker.js`

```javascript
async function getUpcomingExams(app) {
    const files = app.vault.getMarkdownFiles();
    const exams = [];
    
    for (const file of files) {
        const cache = app.metadataCache.getFileCache(file);
        const frontmatter = cache?.frontmatter;
        
        if (frontmatter?.tip === "ispit" || frontmatter?.type === "exam") {
            const examDate = frontmatter.datum || frontmatter.date;
            if (examDate) {
                exams.push({
                    name: file.basename,
                    date: new Date(examDate),
                    subject: frontmatter.predmet || "Unknown"
                });
            }
        }
    }
    
    // Sort by date
    exams.sort((a, b) => a.date - b.date);
    
    // Filter upcoming
    const now = new Date();
    return exams.filter(exam => exam.date > now);
}

function formatExamList(exams) {
    if (exams.length === 0) {
        return "Nema nadolazećih ispita!";
    }
    
    let output = "";
    exams.forEach((exam, i) => {
        const days = Math.ceil((exam.date - new Date()) / (24 * 60 * 60 * 1000));
        output += `${i + 1}. [[${exam.name}]] (${exam.subject}) - za ${days} dana\n`;
    });
    
    return output;
}

module.exports = {
    getUpcomingExams,
    formatExamList
};
```

---

## Script 3: Study Statistics

**File:** `stats.js`

```javascript
async function getStudyStats(app, days = 7) {
    const files = app.vault.getMarkdownFiles();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    
    let stats = {
        totalNotes: 0,
        bySubject: {},
        byType: {},
        totalWords: 0,
        studySessions: 0
    };
    
    for (const file of files) {
        const cache = app.metadataCache.getFileCache(file);
        const created = cache?.frontmatter?.created;
        
        if (!created) continue;
        
        const createdDate = new Date(created);
        if (createdDate < cutoff) continue;
        
        stats.totalNotes++;
        
        // By subject
        const subject = cache.frontmatter.predmet || "Other";
        stats.bySubject[subject] = (stats.bySubject[subject] || 0) + 1;
        
        // By type
        const type = cache.frontmatter.tip || cache.frontmatter.type || "note";
        stats.byType[type] = (stats.byType[type] || 0) + 1;
        
        // Word count
        const content = await app.vault.read(file);
        const words = content.split(/\s+/).length;
        stats.totalWords += words;
        
        // Study sessions
        if (type === "study-session") {
            stats.studySessions++;
        }
    }
    
    return stats;
}

function formatStats(stats) {
    let output = `## Study Statistics (Last 7 Days)\n\n`;
    output += `**Total Notes:** ${stats.totalNotes}\n`;
    output += `**Total Words:** ${stats.totalWords.toLocaleString()}\n`;
    output += `**Study Sessions:** ${stats.studySessions}\n\n`;
    
    output += `### By Subject\n`;
    for (const [subject, count] of Object.entries(stats.bySubject)) {
        output += `- ${subject}: ${count}\n`;
    }
    
    return output;
}

module.exports = {
    getStudyStats,
    formatStats
};
```

---

# 🔄 BATCH PROCESSING TOOLS

## Tool 1: Add Frontmatter to All Notes

**File:** `add-frontmatter.js`

```javascript
// Run from Templater
module.exports = async (tp) => {
    const {app} = this;
    const files = app.vault.getMarkdownFiles();
    let updated = 0;
    
    for (const file of files) {
        const content = await app.vault.read(file);
        
        // Skip if already has frontmatter
        if (content.startsWith('---')) continue;
        
        // Get file stats
        const stats = await app.vault.adapter.stat(file.path);
        const created = new Date(stats.ctime).toISOString().split('T')[0];
        
        // Generate frontmatter
        const frontmatter = `---
created: ${created}
modified: ${created}
tags: []
---

`;
        
        // Add frontmatter
        await app.vault.modify(file, frontmatter + content);
        updated++;
    }
    
    new Notice(`Updated ${updated} files with frontmatter!`);
};
```

---

## Tool 2: Find Broken Links

**File:** `find-broken-links.js`

```javascript
module.exports = async (tp) => {
    const {app} = this;
    const files = app.vault.getMarkdownFiles();
    const brokenLinks = [];
    
    for (const file of files) {
        const cache = app.metadataCache.getFileCache(file);
        const links = cache?.links || [];
        
        links.forEach(link => {
            const linkFile = app.metadataCache.getFirstLinkpathDest(link.link, file.path);
            if (!linkFile) {
                brokenLinks.push({
                    file: file.path,
                    link: link.link
                });
            }
        });
    }
    
    // Generate report
    let report = `# Broken Links Report\n\n`;
    report += `Found ${brokenLinks.length} broken links:\n\n`;
    
    brokenLinks.forEach(item => {
        report += `- In [[${item.file}]]: \`[[${item.link}]]\`\n`;
    });
    
    // Create report file
    await app.vault.create(`Reports/Broken Links ${new Date().toISOString().split('T')[0]}.md`, report);
    
    new Notice(`Found ${brokenLinks.length} broken links!`);
};
```

---

## Tool 3: Bulk Tag Updater

**File:** `update-tags.js`

```javascript
module.exports = async (tp) => {
    const {app} = this;
    
    // Define tag replacements
    const tagMap = {
        "#old-tag": "#new-tag",
        "#deprecated": "#archived",
        // Add more mappings
    };
    
    const files = app.vault.getMarkdownFiles();
    let updated = 0;
    
    for (const file of files) {
        let content = await app.vault.read(file);
        let modified = false;
        
        for (const [oldTag, newTag] of Object.entries(tagMap)) {
            if (content.includes(oldTag)) {
                content = content.replaceAll(oldTag, newTag);
                modified = true;
            }
        }
        
        if (modified) {
            await app.vault.modify(file, content);
            updated++;
        }
    }
    
    new Notice(`Updated tags in ${updated} files!`);
};
```

---

# 🎨 CUSTOM COMMANDS

## Command 1: Insert Current Time

Add to Templater:

```javascript
<%  moment().format("HH:mm:ss") %>
```

## Command 2: Random Quote

```javascript
<%* 
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal. - Winston Churchill",
    "Education is the most powerful weapon. - Nelson Mandela"
];
const random = quotes[Math.floor(Math.random() * quotes.length)];
%>
> <% random %>
```

## Command 3: Auto-Generate Filename

```javascript
<%* 
const subject = await tp.system.prompt("Subject?");
const topic = await tp.system.prompt("Topic?");
const date = tp.date.now("YYYY-MM-DD");
const filename = `${date} - ${subject} - ${topic}`;
await tp.file.rename(filename);
%>
```

---

# 📚 USAGE EXAMPLES

## Example 1: Creating Cornell Note with Automation

1. Press your QuickAdd hotkey
2. Select "Lovrin Cornell"
3. Script automatically:
   - Asks for subject
   - Asks for topic
   - Generates filename
   - Applies template
   - Opens file

## Example 2: Weekly Review

1. Run QuickAdd macro "Weekly Review"
2. Script automatically:
   - Finds all notes from this week
   - Groups by subject
   - Generates summary
   - Adds reflection prompts

## Example 3: Study Session

1. Run QuickAdd macro "Study Session"
2. Choose subject and duration
3. Script creates:
   - Timed session note
   - Pomodoro checklist
   - Goals section
   - End time calculation

---

# ⚙️ INSTALLATION

1. Create folders:
   - `Scripts/QuickAdd/`
   - `Scripts/Templater/`
   - `Scripts/Tools/`

2. Copy scripts to appropriate folders

3. Configure plugins:
   - QuickAdd: Add macros, assign to choices
   - Templater: Set script folder path

4. Test each script individually

5. Assign hotkeys in Settings → Hotkeys

---

**These automations save hours of manual work!**
**Customize them for your specific needs!**

*Last updated: 2024-03-24*
