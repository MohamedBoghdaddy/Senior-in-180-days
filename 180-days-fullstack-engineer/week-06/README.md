# Week 06 - Full-Stack Integration and UX Quality

## Goal

Connect the frontend and backend through typed contracts, forms, E2E tests, and accessibility proof.

## Phase

Phase 3: React, Next.js, and Integration

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| API integration | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| forms | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| E2E flows | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| accessibility | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| optimistic updates | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| cache invalidation | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| performance profiling | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| offline queue | NICE | Optional extension only | Evidence in portfolio extras |
| storybook docs | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 051](day-51/README.md) | API client and error mapping | `tracking/notes/day-51.md` with code, docs, or command evidence |
| [Day 052](day-52/README.md) | Signup and login UI | `tracking/notes/day-52.md` with code, docs, or command evidence |
| [Day 053](day-53/README.md) | Project creation form | `tracking/notes/day-53.md` with code, docs, or command evidence |
| [Day 054](day-54/README.md) | Task creation and assignment form | `tracking/notes/day-54.md` with code, docs, or command evidence |
| [Day 055](day-55/README.md) | Optimistic update and invalidation rules | `tracking/notes/day-55.md` with code, docs, or command evidence |
| [Day 056](day-56/README.md) | E2E test for critical path | `tracking/notes/day-56.md` plus a test report or test file link |
| [Day 057](day-57/README.md) | Accessibility audit with keyboard flow | `tracking/notes/day-57.md` with code, docs, or command evidence |
| [Day 058](day-58/README.md) | Frontend performance profile | `tracking/notes/day-58.md` with code, docs, or command evidence |
| [Day 059](day-59/README.md) | Code review of integration boundary | `tracking/reviews/day-59-code-review-of-integration-boundary.md` |
| [Day 060](day-60/README.md) | Phase 3 integration checkpoint | `tracking/notes/day-60-checkpoint.md` and `portfolio/evidence/week-06-phase-3-integration-checkpoint.md` |

## Mini-Project

Complete [Week 06 mini-project](../mini-projects/week-06.md).

## Interview Layer

- LeetCode target: 27 counted solves this sprint.
- Easy / Medium / Hard breakdown: 2/25/0.
- DSA topic focus: Adjacency lists, grids, BFS, DFS, visited state, shortest path intro.
- Review target: Redo graph BFS/DFS misses; one graph explanation checkpoint.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Deadlocks, resource ordering, and contention.
- Networks: Timeouts, retries, backoff, and partial failure.
- Databases: Isolation levels, lost updates, and transaction boundaries.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Build a typed AI interaction boundary: prompt template, structured output schema, validation, and UI error handling.
- Product requirement: AI quality checklist for the first user-facing workflow.
- Failure analysis requirement: Failure note: schema-invalid model output and retry/fallback behavior.
- AI proof artifact: tracking/ai/week-06-structured-output-contract.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Complete URL shortener or backend module integration with schema, indexes, load notes, and deployed endpoint if available.
- MLOps topic: Smoke test, load test baseline, environment variables, and deployment checklist draft.
- LLM topic: Structured-output schema concept only; compare backend JSON validation to AI output validation.
- Product/communication topic: Write a user-facing API reliability note: what happens when create/read/update fails.
- Resource mapping: primary: [freeCodeCamp Back End APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis), [CS50 Web](https://cs50.harvard.edu/web/), [DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) chapter 4. Optional: [Grafana k6 docs](https://grafana.com/docs/k6/latest/) for a tiny load test.
- Required artifact: Deployed or locally runnable REST endpoint, OpenAPI spec, schema/indexing notes, and load test notes.
- Interview explanation: Explain how to design, deploy, and test a small REST service under load.
- What not to study this week: AWS migration, Kubernetes, RAG, and model evaluations.

## No-Redundancy Guardrail

- Adds this week: Closes Month 2 by making backend instincts architectural and measurable.
- Supports existing roadmap task: Supports original E2E task flow, API client, optimistic updates, and integration checkpoint.
- Skip to avoid duplicate work: Do not create a second backend stack; extend the existing Node/API capstone or compare Django in notes only.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-06.md`.
