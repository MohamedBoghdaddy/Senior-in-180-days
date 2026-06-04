# Week 05 - React and Next.js Application Shell

## Goal

Build the frontend shell, routing, layout, design primitives, and server-state plan.

## Phase

Phase 3: React, Next.js, and Integration

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| Next.js routing | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| TypeScript components | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| layout | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| state boundaries | MUST | Required for Phase 3 completion | Evidence in daily artifacts or mini-project |
| design primitives | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| loading states | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| error states | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| Storybook | NICE | Optional extension only | Evidence in portfolio extras |
| visual regression | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 041](day-41/README.md) | Next.js app router shell | `tracking/notes/day-41.md` with code, docs, or command evidence |
| [Day 042](day-42/README.md) | Navigation and layout system | `tracking/notes/day-42.md` with code, docs, or command evidence |
| [Day 043](day-43/README.md) | Design-system primitives | `tracking/notes/day-43.md` with code, docs, or command evidence |
| [Day 044](day-44/README.md) | Task list route and empty states | `tracking/notes/day-44.md` with code, docs, or command evidence |
| [Day 045](day-45/README.md) | TypeScript props and component contracts | `tracking/notes/day-45.md` with code, docs, or command evidence |
| [Day 046](day-46/README.md) | TanStack Query setup | `tracking/notes/day-46.md` with code, docs, or command evidence |
| [Day 047](day-47/README.md) | Loading and error states | `tracking/notes/day-47.md` with code, docs, or command evidence |
| [Day 048](day-48/README.md) | URL search params for filters | `tracking/notes/day-48.md` with code, docs, or command evidence |
| [Day 049](day-49/README.md) | Frontend test setup | `tracking/notes/day-49.md` plus a test report or test file link |
| [Day 050](day-50/README.md) | Week 5 frontend review | `tracking/notes/day-50-checkpoint.md` and `portfolio/evidence/week-05-week-5-frontend-review.md` |

## Mini-Project

Complete [Week 05 mini-project](../mini-projects/week-05.md).

## Interview Layer

- LeetCode target: 32 counted solves this sprint.
- Easy / Medium / Hard breakdown: 5/27/0.
- DSA topic focus: Min/max heaps, top K, interval merge/insert, binary search on answer intro.
- Review target: Redo heap and interval misses; one 45-minute heap plus interval mock.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Threads, locks, races, and shared state.
- Networks: REST, HTTP caching, CORS, and client/server boundaries.
- Databases: Uniqueness, referential integrity, and constraint-backed correctness.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Introduce LLM fundamentals: tokens, context windows, latency, structured response shape, and prompt as an interface.
- Product requirement: Mini PRD for an AI assistant panel in the task app, including user job and quality bar.
- Failure analysis requirement: Failure note: slow LLM response and user-visible timeout.
- AI proof artifact: tracking/ai/week-05-llm-fundamentals-note.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Expose URL shortener/admin or analytics endpoints through typed frontend contracts.
- MLOps topic: API latency budget, client error taxonomy, and observability fields for user-visible failures.
- LLM topic: LLM fundamentals vocabulary only: tokens, context, latency, and why AI endpoints need stricter UX states.
- Product/communication topic: Frontend workflow note: what users need to create, inspect, and recover from backend failures.
- Resource mapping: primary: [CS50 Web](https://cs50.harvard.edu/web/), [DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) chapter 3, [OpenAI text generation docs](https://developers.openai.com/api/docs/guides/text). Optional: [Google Technical Writing](https://developers.google.com/tech-writing) for concise API docs.
- Required artifact: Typed API design note, OpenAPI update, frontend states, and latency/error budget for one workflow.
- Interview explanation: Explain REST contracts, typed client boundaries, loading/error states, and why AI latency changes UX.
- What not to study this week: Prompt engineering recipes, LangChain, fine-tuning, and model choice debates.

## No-Redundancy Guardrail

- Adds this week: Links backend architecture to user-facing API contracts before adding real AI.
- Supports existing roadmap task: Supports original React/Next app shell, TypeScript props, query setup, and frontend tests.
- Skip to avoid duplicate work: Do not add an AI chat panel yet; use this week to harden API/product fundamentals.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-05.md`.
