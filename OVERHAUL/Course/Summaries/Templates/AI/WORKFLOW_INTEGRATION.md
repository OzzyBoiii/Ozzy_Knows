# 🔄 REAL-WORLD WORKFLOW INTEGRATION
## How to Actually Use Everything Together

---

## 📋 TABLE OF CONTENTS

1. [Complete Study Workflow](#complete-study-workflow)
2. [Research Paper Workflow](#research-paper-workflow)
3. [Exam Preparation Workflow](#exam-preparation-workflow)
4. [Daily Note-Taking Workflow](#daily-note-taking-workflow)
5. [Project Management Workflow](#project-management-workflow)

---

# 📚 COMPLETE STUDY WORKFLOW

## Morning Routine (10 minutes)

### Step 1: Open Today's Dashboard
```
Hotkey: Ctrl+Shift+D (QuickAdd macro)
```

**Auto-creates:**
- Daily note with today's schedule
- List of today's classes
- Pending tasks from yesterday
- Upcoming exam countdown

### Step 2: Review Study Goals
**Dataview query shows:**
```dataview
TABLE WITHOUT ID 
  file.link as "Goal",
  progress as "Progress"
FROM "Goals"
WHERE contains(deadline, date(today) + dur(7 days))
SORT deadline ASC
```

### Step 3: Check Spaced Repetition
```
Command: Spaced Repetition: Review
```
- 15-20 cards from previous notes
- Focus on weak areas

---

## Attending Lecture (During Class)

### Step 1: Quick Note Creation
```
Hotkey: Ctrl+Shift+N (QuickAdd: Lovrin Cornell)
```

**Prompts ask:**
1. Subject? → Matematika
2. Lecture number? → 15
3. Topic? → Derivacije

**Auto-generates:** `2024-03-24 - Matematika - Predavanje 15 - Derivacije.md`

### Step 2: Take Notes Using Structure

**Left side (Text):**
- Type main concepts as you hear them
- Use cue callouts: `> [!cue] Definicija`
- Keep it brief, expand later

**Quick capture mode:**
```markdown
> [!cue] Derivacija

f'(x) = lim [f(x+h) - f(x)] / h as h→0

Power rule: d/dx(x^n) = nx^(n-1)

> [!cue] Primjene

- Brzina (derivative of position)
- Optimization problems
- Tangent lines
```

### Step 3: Photo Board for Visuals
- Take photos of board diagrams
- Don't stop to organize
- Add to note later

---

## After Lecture (30 minutes)

### Step 1: Process Photos
```
1. Upload photos to vault
2. Compress using TinyPNG
3. Rename: lecture-15-diagram-1.png
```

### Step 2: Complete Visual Section

````markdown
> [!lovrin-visuals] Vizualije

<div class="lovrin-visual-block">
<div>

#### Grafički prikaz

![[lecture-15-diagram-1.png|350]]
*Derivacija kao nagib tangente*

#### Tablica formula

| Funkcija | Derivacija |
|----------|------------|
| x^n | nx^(n-1) |
| sin x | cos x |
| e^x | e^x |

</div>
<div>

#### LaTeX formule

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

#### Graf primjera

```chart
type: line
labels: [-2, -1, 0, 1, 2]
series:
  - title: f(x)=x²
    data: [4, 1, 0, 1, 4]
  - title: f'(x)=2x
    data: [-4, -2, 0, 2, 4]
```

</div>
</div>
````

### Step 3: Add Links
```markdown
**Povezano:**
- [[Prethodno: Limesi]]
- [[Sljedeće: Integrali]]
- [[Primjene: Optimizacija]]
```

### Step 4: Create Flashcards
```markdown
What is the derivative of x^n?::nx^(n-1)

Derivative of sin(x)?::cos(x)

Product rule formula::
$$\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$
```

---

## Evening Review (20 minutes)

### Step 1: Re-read Today's Notes
- Don't edit, just read
- Highlight unclear parts
- Add questions to ask

### Step 2: Update Summary Section
```markdown
> [!summary] Sažetak

**Ključne formule:**
- Power rule
- Product rule
- Quotient rule
- Chain rule

**Razumijem:**
- Basic derivatives ✓
- Product rule ✓

**Ne razumijem potpuno:**
- Chain rule with multiple compositions
- When to use quotient vs product rule

**Za pitati:**
- [ ] Chain rule example with 3+ functions
```

### Step 3: Link to Related Content
```
Run QuickAdd macro: "Find Related Notes"
```
- Auto-finds notes with similar tags
- Adds "Related Notes" section

---

## Weekly Review (Sunday, 1 hour)

### Step 1: Generate Review
```
QuickAdd macro: "Weekly Review"
```

**Auto-creates:**
- All notes from this week
- Grouped by subject
- Statistics (notes created, words written)

### Step 2: Consolidate Learning
```markdown
## What I Learned This Week

### Matematika
- Derivatives: Power, product, quotient, chain rules
- Integration basics
- Link: [[Summary of Derivations]]

### Fizika
- Newton's laws applications
- Free body diagrams
```

### Step 3: Plan Next Week
```markdown
## Goals for Next Week

- [ ] Master chain rule
- [ ] Finish integration practice problems
- [ ] Review for midterm (in 2 weeks!)
```

---

# 🔬 RESEARCH PAPER WORKFLOW

## Phase 1: Literature Search

### Step 1: Create Project Note
```
Template: Project Overview
```

```markdown
---
project: Literature Review - Neural Networks
status: in-progress
deadline: 2024-05-15
---

# Neural Networks Literature Review

> [!cue] Research Questions
> - How do CNNs process images?
> - What are current limitations?
> - Recent improvements (2022-2024)?

## Sources to Read
- [ ] [[Paper 1 - Attention Is All You Need]]
- [ ] [[Paper 2 - ResNet]]
- [ ] [[Paper 3 - Vision Transformers]]
```

### Step 2: Create Paper Notes
**Template:** Literature Note

```markdown
---
type: paper
authors: ["Vaswani et al."]
year: 2017
read-date: 2024-03-24
---

# Attention Is All You Need

> [!cue] Key Contributions
> - Transformer architecture
> - Self-attention mechanism
> - No recurrence needed

## Summary

[Your notes here]

## Key Quotes

> "Attention mechanisms have become..."

## Relevance to My Research

This paper is relevant because...

## Citations
- Cited by: [[Paper 5]], [[Paper 6]]
- Cites: [[Paper 0]], [[Paper 1]]
```

### Step 3: Use Zotero Integration
```
1. Add paper to Zotero
2. Plugin auto-creates note
3. Add your annotations
4. Link to other papers
```

---

## Phase 2: Synthesis

### Step 1: Create Concept Maps
```
Excalidraw: Concept Map - Neural Architectures
```
- Draw connections between papers
- Group similar approaches
- Identify gaps

### Step 2: Create Comparison Table
```markdown
| Architecture | Year | Key Feature | Performance | Limitations |
|--------------|------|-------------|-------------|-------------|
| CNN | 2012 | Convolution | 95% | Fixed receptive field |
| Attention | 2017 | Self-attention | 97% | Quadratic complexity |
| ViT | 2020 | Patches + attention | 98% | Needs large data |
```

### Step 3: Dataview for Analysis
```dataview
TABLE authors, year, tags
FROM "Research/Papers"
WHERE contains(tags, "neural-networks")
SORT year DESC
```

---

## Phase 3: Writing

### Step 1: Outline in Obsidian
```markdown
# Paper Outline

## 1. Introduction
- [[Background on Neural Networks]]
- [[Research Gap]]
- [[Research Questions]]

## 2. Literature Review
- [[CNNs - History and Development]]
- [[Attention Mechanisms]]
- [[Transformer Architecture]]

## 3. Methodology
- [[Dataset Selection]]
- [[Model Architecture]]

## 4. Results
[Link to analysis notes]

## 5. Discussion
[Link to interpretation notes]

## 6. Conclusion
```

### Step 2: Write Sections Separately
Each section = separate note
- Easier to focus
- Can reorganize later
- Better version control with Git

### Step 3: Export with Pandoc
```
Plugin: Pandoc
Export to: Word / LaTeX / PDF
```

---

# 📝 EXAM PREPARATION WORKFLOW

## 4 Weeks Before Exam

### Week 1: Consolidation
1. **Collect all notes** for this subject
2. **Create exam overview note**

```markdown
# Exam: Matematika - Analiza

**Date:** 2024-04-20
**Time:** 10:00
**Location:** Dvorana A

## Topics Covered
```dataview
TABLE file.ctime as "Created"
FROM "Notes/Matematika"
WHERE contains(tags, "analiza")
SORT file.name ASC
```

## Study Plan
- Week 1: Consolidate notes
- Week 2: Practice problems
- Week 3: Past exams
- Week 4: Review + rest
```

3. **Identify weak areas**
```dataview
LIST
FROM "Notes/Matematika"
WHERE contains(file.content, "ne razumijem") OR contains(file.content, "pitati")
```

---

### Week 2: Practice

1. **Create problem sets**
```markdown
# Practice Problems - Derivacije

## Easy (Master these first)
- [ ] Find f'(x) for f(x) = x³ + 2x² - 5
- [ ] Derivative of sin(2x)

## Medium
- [ ] Chain rule: f(g(h(x)))
- [ ] Implicit differentiation

## Hard
- [ ] Related rates problem
- [ ] Optimization with constraints
```

2. **Track progress**
```markdown
| Topic | Easy | Medium | Hard | Mastered? |
|-------|------|--------|------|-----------|
| Power rule | 5/5 | 3/3 | 2/2 | ✓ |
| Chain rule | 5/5 | 2/3 | 0/2 | |
```

---

### Week 3: Past Exams

1. **Simulate exam conditions**
```markdown
# Past Exam 2023

**Time limit:** 90 minutes
**Started:** <% tp.date.now("HH:mm") %>

## Problems
[Work problems here]

## Results
- Score: __/100
- Time taken: __ minutes
- Mistakes: [List]
```

2. **Review mistakes**
- Each mistake → flashcard
- Link to concept notes
- Practice similar problems

---

### Week 4: Final Review

1. **Spaced repetition** (daily)
2. **Skim all notes** (don't deep study)
3. **Rest well** (8+ hours sleep)
4. **Light review day before** (don't cram!)

---

# 🗓️ DAILY NOTE-TAKING WORKFLOW

## Using Calendar + Daily Notes

### Setup
```
Settings → Daily notes
- Template: Templates/Daily Note
- Folder: Daily
- Format: YYYY-MM-DD
```

### Daily Note Template
```markdown
---
created: <% tp.date.now("YYYY-MM-DD") %>
type: daily
---

# <% tp.date.now("dddd, MMMM DD, YYYY") %>

## 🎯 Today's Goals
- [ ] 
- [ ] 
- [ ] 

## 📚 Classes Today
<%* 
const days = ["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"];
const today = days[new Date().getDay()];

if (today === "Ponedjeljak") {
  tR += "- Matematika 10:00\n- Fizika 14:00";
} else if (today === "Utorak") {
  tR += "- Kemija 09:00\n- Lab 13:00";
}
// etc
%>

## 📝 Notes Created
```dataview
LIST
FROM ""
WHERE contains(created, date(today))
```

## ⏰ Time Tracking
- Study: ___ hours
- Classes: ___ hours
- Break: ___ hours

## 💭 Reflection
**What went well:**


**What to improve:**


**Tomorrow's priority:**


## 🔗 Quick Links
- [[Yesterday|← Previous Day]]
- [[Tomorrow|Next Day →]]
- [[Weekly Review]]
```

---

# 🎯 PROJECT MANAGEMENT WORKFLOW

## Using Kanban + Tasks

### Setup Kanban Board
```
1. Create: Projects.md
2. Enable Kanban plugin view
3. Create columns:
   - 📋 Backlog
   - 🎯 To Do
   - 🔄 In Progress
   - ✅ Done
```

### Link to Notes
Each task links to detailed note:

```
- [ ] [[Write Chapter 1]] @2024-04-01 #writing
- [ ] [[Research Topic X]] @2024-04-05 #research
- [ ] [[Practice Problems Set 3]] @2024-04-10 #study
```

### Daily Review
```dataview
TASK
WHERE !completed
SORT due ASC
LIMIT 10
```

---

## 🔄 PUTTING IT ALL TOGETHER

### Example: Full Day Workflow

**7:00 AM - Morning**
1. Open Obsidian
2. Daily note auto-opens (Calendar plugin)
3. Review today's schedule
4. Check spaced repetition (10 cards)

**9:00 AM - Lecture: Matematika**
1. QuickAdd macro: Create Cornell note
2. Type main points (text column)
3. Photo diagrams from board

**10:30 AM - Break**
1. Upload photos
2. Quick-add visuals to note
3. Add cue callouts

**11:00 AM - Study Session**
1. QuickAdd macro: Start study session
2. Work through practice problems
3. Create new notes for unclear concepts

**1:00 PM - Lunch & Review**
1. Skim morning's notes
2. Add questions to ask professor
3. Link related notes (QuickAdd macro)

**2:00 PM - Lab: Fizika**
1. Create lab note from template
2. Record observations
3. Photo results

**4:00 PM - Library Study**
1. Process lab data
2. Create graphs (Charts plugin)
3. Write lab report in Obsidian
4. Export to PDF

**7:00 PM - Evening Review**
1. Re-read all today's notes
2. Update summaries
3. Create flashcards (5-10 cards)
4. Update weekly goals

**9:00 PM - Prep for Tomorrow**
1. Check tomorrow's daily note
2. Prepare materials needed
3. Quick spaced repetition (5 min)

**Sunday Evening - Weekly Review**
1. QuickAdd macro: Generate weekly review
2. Consolidate week's learning
3. Plan next week's goals
4. Archive completed projects

---

## 📊 Success Metrics

### Track These Weekly
- Notes created: __
- Flashcards reviewed: __
- Practice problems solved: __
- Study hours: __
- Exams upcoming: __

### Monthly Goals
```dataview
TABLE status, progress
FROM "Goals"
WHERE contains(period, "March 2024")
```

---

**The key is consistency, not perfection!**
**Start with one workflow, then expand.**

*Customize these to fit YOUR study style!*

---

*Last updated: 2024-03-24*
