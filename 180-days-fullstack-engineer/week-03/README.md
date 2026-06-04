# Week 03 - Node.js and Express API Foundations

## Goal

Build a maintainable Express API with validation, routing, errors, and tests.

## Phase

Phase 2: Node.js, Express, and Backend Structure

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| Express routing | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| middleware | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| validation | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| error contracts | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| OpenAPI draft | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| service boundaries | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| request logging | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| NestJS comparison | NICE | Optional extension only | Evidence in portfolio extras |
| generated API client | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 021](day-21/README.md) | Node runtime and event loop notes | `tracking/notes/day-21.md` with code, docs, or command evidence |
| [Day 022](day-22/README.md) | Express project structure | `tracking/notes/day-22.md` with code, docs, or command evidence |
| [Day 023](day-23/README.md) | Routing and controller boundaries | `tracking/notes/day-23.md` with code, docs, or command evidence |
| [Day 024](day-24/README.md) | Zod validation for body, params, and query | `tracking/notes/day-24.md` with code, docs, or command evidence |
| [Day 025](day-25/README.md) | Central error contract | `tracking/notes/day-25.md` with code, docs, or command evidence |
| [Day 026](day-26/README.md) | Request logging and correlation IDs | `tracking/notes/day-26.md` with code, docs, or command evidence |
| [Day 027](day-27/README.md) | Health endpoint and readiness behavior | `tracking/notes/day-27.md` with code, docs, or command evidence |
| [Day 028](day-28/README.md) | Unit tests for validators and services | `tracking/notes/day-28.md` plus a test report or test file link |
| [Day 029](day-29/README.md) | OpenAPI contract draft | `tracking/notes/day-29.md` with code, docs, or command evidence |
| [Day 030](day-30/README.md) | Week 3 API review | `tracking/notes/day-30-checkpoint.md` and `portfolio/evidence/week-03-week-3-api-review.md` |

## Mini-Project

Complete [Week 03 mini-project](../mini-projects/week-03.md).

## Interview Layer

- LeetCode target: 34 counted solves this sprint.
- Easy / Medium / Hard breakdown: 14/20/0.
- DSA topic focus: Stacks, queues, monotonic stack, linked lists, fast/slow pointers, binary search bounds.
- Review target: Redo stack, queue, linked list, and binary-search misses; explain one invariant aloud.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Syscalls, process I/O, and event-loop relationship.
- Networks: HTTP methods, headers, status codes, idempotency, and retries.
- Databases: Indexes, lookup cost, and index/write tradeoffs.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Create a future model-gateway API contract without calling a model. Treat AI like an external dependency.
- Product requirement: API contract note: input, output, errors, timeout, cost budget, and audit fields.
- Failure analysis requirement: Failure note: upstream AI provider timeout and fallback behavior.
- AI proof artifact: tracking/ai/week-03-model-gateway-contract.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Release the Python data CLI v1, add complexity notes, and define how a backend would call or replace it.
- MLOps topic: CLI versioning, test report, structured logs, and failure cases for malformed data.
- LLM topic: No LLM implementation; draft a model-gateway shaped interface as an external dependency.
- Product/communication topic: CLI README with user story, example command, expected output, and known limitations.
- Resource mapping: primary: [CS50 Python](https://cs50.harvard.edu/python/), [freeCodeCamp Back End APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis), [MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) arrays/hash review. Optional: [CS50x](https://cs50.harvard.edu/x/) Python and SQL weeks if fundamentals are shaky.
- Required artifact: Python CLI v1 release with tests, README, data fixture, complexity notes, and handoff note to the API layer.
- Interview explanation: Explain when a backend should call a script, embed logic, or split work into a service.
- What not to study this week: Django, ML model training, agents, and full cloud deployment.

## No-Redundancy Guardrail

- Adds this week: Completes the Month 1 Python project while reinforcing the new Express API boundary.
- Supports existing roadmap task: Supports validation, error contracts, health checks, unit tests, and OpenAPI thinking.
- Skip to avoid duplicate work: Do not duplicate the Express API; use the Python CLI as a small data-processing dependency or comparison.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-03.md`.
