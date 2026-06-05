# Tracker JSON Schemas

These schemas document the expected shape of files under `tracker/data/`.
`npm run tracker:validate` performs the cross-file checks that JSON Schema cannot
express easily, such as valid IDs, exact 180-day coverage, 500 LeetCode total,
and artifact path existence.

Example exports live in `tracker/examples/`. Real state files in `tracker/data/`
should contain current data only, not placeholder `_comment` or `_shape` maps.

Phase 5 advanced state lives in `progress.json`: `proofLinks` records evidence,
GitHub issue, and PR links by proof artifact ID, while `problemLog` records
per-problem LeetCode practice entries.
