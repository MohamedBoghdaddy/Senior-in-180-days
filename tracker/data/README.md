# Tracker Data Model

`tracker/data/` contains live tracker catalogs and persisted state.

- `months.json`, `weeks.json`, and `days.json` define the normalized roadmap timeline.
- Catalog files such as `courses.json`, `leetcode.json`, `artifacts.json`, `ai-engineering.json`, `system-design.json`, `readiness.json`, and `skills.json` define canonical IDs used by the UI, validator, and sync script.
- `progress.json`, `journal.json`, and `interviews.json` are live exported state files.
- `progress.json` also stores optional advanced state such as `proofLinks` and `problemLog`.
- JSON Schema contracts live in `tracker/schemas/`.
- Example export shapes live in `tracker/examples/`.

Do not put placeholder `_comment`, `_shape`, `_entryShape`, or `_sessionShape` examples in the live state files. Keep examples in `tracker/examples/` and run `npm run tracker:validate` after edits.
