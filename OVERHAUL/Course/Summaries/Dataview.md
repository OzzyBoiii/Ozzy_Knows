# Dashboard

not done
due today
## This week – uni (Tasks plugin)
not done
tag includes #uni
due after today
due before in 7 days
sort by priority
sort by due
## Tasks by file (Dataview)
TABLE WITHOUT ID
  regexreplace(Tasks.text, "\\[.*$", "") AS Task,
  Tasks.due AS "Due",
  meta(Tasks.section).subpath AS "Section",
  file.link AS "File"
FROM ""
WHERE file.tasks
FLATTEN file.tasks AS Tasks
WHERE !Tasks.completed
SORT Tasks.due ASC


