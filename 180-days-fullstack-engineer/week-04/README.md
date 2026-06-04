# Week 04 - Authentication, Authorization, and Backend Production

## Goal

Implement auth, RBAC, tenant boundaries, rate limiting, and integration tests.

## Phase

Phase 2: Node.js, Express, and Backend Structure

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| password hashing | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| JWT sessions | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| RBAC | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| tenant middleware | MUST | Required for Phase 2 completion | Evidence in daily artifacts or mini-project |
| refresh rotation | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| rate limits | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| audit logs | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| OAuth comparison | NICE | Optional extension only | Evidence in portfolio extras |
| permission matrix UI | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 031](day-31/README.md) | User model and password hashing | `tracking/notes/day-31.md` with code, docs, or command evidence |
| [Day 032](day-32/README.md) | Login and access-token flow | `tracking/notes/day-32.md` with code, docs, or command evidence |
| [Day 033](day-33/README.md) | Refresh token and logout behavior | `tracking/notes/day-33.md` with code, docs, or command evidence |
| [Day 034](day-34/README.md) | RBAC permission matrix | `tracking/notes/day-34.md` with code, docs, or command evidence |
| [Day 035](day-35/README.md) | Organization-scoped middleware | `tracking/notes/day-35.md` with code, docs, or command evidence |
| [Day 036](day-36/README.md) | Rate limiting and abuse controls | `tracking/notes/day-36.md` with code, docs, or command evidence |
| [Day 037](day-37/README.md) | Audit logging for sensitive actions | `tracking/notes/day-37.md` with code, docs, or command evidence |
| [Day 038](day-38/README.md) | Integration tests for auth and RBAC | `tracking/notes/day-38.md` plus a test report or test file link |
| [Day 039](day-39/README.md) | Security review of auth flows | `tracking/reviews/day-39-security-review-of-auth-flows.md` |
| [Day 040](day-40/README.md) | Phase 2 backend checkpoint | `tracking/notes/day-40-checkpoint.md` and `portfolio/evidence/week-04-phase-2-backend-checkpoint.md` |

## Mini-Project

Complete [Week 04 mini-project](../mini-projects/week-04.md).

## Interview Layer

- LeetCode target: 29 counted solves this sprint.
- Easy / Medium / Hard breakdown: 8/21/0.
- DSA topic focus: Recursion, tree DFS/BFS, BST ordering, validation ranges.
- Review target: Redo recursion/tree misses; one 30-minute tree walkthrough by checkpoint.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: CPU scheduling, context switching, and latency tradeoffs.
- Networks: TLS basics, cookies, sessions, and auth token transport.
- Databases: ACID, transaction basics, and consistency expectations.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Threat-model future AI endpoints: prompt injection, data leakage, cost abuse, and auth bypass.
- Product requirement: Abuse-case note for AI features tied to auth, RBAC, tenant scope, and rate limits.
- Failure analysis requirement: Incident sketch: tenant data leak through retrieved context.
- AI proof artifact: tracking/ai/week-04-ai-threat-model.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Traditional backend module design before AI: URL shortener requirements, abuse cases, and metrics.
- MLOps topic: Service SLO draft, rate-limit logs, deployment preconditions, and rollback criteria.
- LLM topic: No LLM implementation; identify why this service should not need AI.
- Product/communication topic: API design document with user stories, abuse cases, success metrics, and stakeholder constraints.
- Resource mapping: primary: [CS50 Web](https://cs50.harvard.edu/web/), [freeCodeCamp Back End APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis), [DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) chapters 1-2. Optional: [ByteByteGo guides](https://bytebytego.com/guides/how-it-works/) for URL shortener/system design shape.
- Required artifact: URL shortener or equivalent backend module design doc, OpenAPI draft, auth/rate-limit notes, and threat model.
- Interview explanation: Explain URL shortener requirements, API shape, abuse prevention, and data model tradeoffs.
- What not to study this week: AI agents, RAG, neural networks, and a separate Django build unless used only as comparison notes.

## No-Redundancy Guardrail

- Adds this week: Introduces system design through a concrete backend module while preserving auth/RBAC production work.
- Supports existing roadmap task: Supports original auth, RBAC, tenant, rate-limiting, audit, and integration-test tasks.
- Skip to avoid duplicate work: Do not rebuild the capstone around the shortener; keep it as a backend module or design lab.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-04.md`.
