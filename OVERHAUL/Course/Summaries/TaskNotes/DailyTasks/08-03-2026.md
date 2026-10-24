---
title: Tasks Demo – Study & Life
tags: [demo, tasks, uni]
---

# Tasks Demo – Study & Life

Below are example tasks showing different attributes the **Tasks** plugin understands.

## 1. Basic tasks

- [ ] Simple task with no metadata
- [x] Completed task ✅ ✅ 2026-03-08

## 2. Due dates (📅)

- [ ] Revise innate immunity 📅 2026-03-10 #uni
- [ ] Call dentist 📅 2026-03-15 #admin

## 3. Start / scheduled dates (🛫) and done dates (✅ auto‑added by plugin)

- [ ] Start cardiology flashcards 🛫 2026-03-09 📅 2026-03-12 #uni ^325RIDKDAD200
- [ ] Library deep work session 🛫 2026-03-09 09:00 📅 2026-03-09 #deepwork #uni ^K6Q3N9VGAWW0

## 4. Recurring tasks (🔁)

- [ ] Weekly review & planning 🔁 every week 📅 2026-03-09 #planning
- [ ] Clean room 🔁 every 2 weeks 📅 2026-03-16 #life
- [ ] Backup Obsidian vault 🔁 every month 📅 2026-04-01 #systems

## 5. Priorities (⏫ 🔼 🔽 ⏬ 🔺)

- [ ] Pathophysiology – renal revision ⏫ 📅 2026-03-10 #uni #exam
- [ ] Answer non‑urgent emails 🔽 📅 2026-03-20 #admin
- [ ] Prepare slides for presentation 🔼 📅 2026-03-13 #uni
- [ ] Explore new Obsidian plugins ⏬ #meta
- [ ] Critical exam registration 🔺 📅 2026-03-11 #uni #deadline

## 6. Time estimates (⏳) and fake “energy” tags

- [ ] Read 10 pages of immunology ⏳ 25min 📅 2026-03-09 #uni #low_energy
- [ ] Solve 20 physio MCQs ⏳ 45min 📅 2026-03-09 #uni #high_energy
- [ ] Plan next week ⏳ 30min 🔁 every week 📅 2026-03-10 #planning

## 7. Context & project tags

- [ ] Talk to lab assistant about project idea 📅 2026-03-12 #uni #lab #context_in_person
- [ ] Write project outline 📅 2026-03-14 #uni #project_outline
- [ ] Review “[[Exam – Immunology]]” notes ⏳ 60min 📅 2026-03-13 #uni #exam

## 8. Task dependencies (using links / IDs)

First define the subtasks:

- [ ] Find past exams for physiology 📅 2026-03-09 #uni ^t-physio-past-exams
- [ ] Extract key topics from past exams 📅 2026-03-10 #uni ^t-physio-topics
- [ ] Build Anki deck from key topics 📅 2026-03-11 #uni ^t-physio-anki

Then the “parent” task referencing them (semantic dependency, handled via queries):

- [ ] Physiology exam prep pipeline (depends on ^t-physio-past-exams, ^t-physio-topics, ^t-physio-anki) 📅 2026-03-15 #uni #exam

## 9. Subtasks (plain markdown nesting)

- [ ] Prepare for immunology seminar 📅 2026-03-12 #uni
    - [ ] Read assigned article ⏳ 30min
    - [ ] Note 3 questions to ask
    - [ ] Review last seminar notes

## 10. Example Tasks queries (for dashboard use)

### 10.1 Today – all contexts

```tasks
not done
due today
