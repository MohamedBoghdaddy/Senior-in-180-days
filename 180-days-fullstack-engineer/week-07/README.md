# Week 07 - PostgreSQL Schema, Migrations, and Query Design

## Goal

Design the relational core with versioned migrations, tenant isolation, indexes, and query plans.

## Phase

Phase 4: SQL, MongoDB, PostgreSQL, and Schema Design

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| schema design | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| migrations | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| foreign keys | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| indexes | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| RLS | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| query plans | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| keyset pagination | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| pgTAP | NICE | Optional extension only | Evidence in portfolio extras |
| read replica plan | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 061](day-61/README.md) | Organization and user schema | `tracking/notes/day-61.md` with code, docs, or command evidence |
| [Day 062](day-62/README.md) | Project, task, comment, and audit schema | `tracking/notes/day-62.md` with code, docs, or command evidence |
| [Day 063](day-63/README.md) | Versioned migration workflow | `tracking/notes/day-63.md` with code, docs, or command evidence |
| [Day 064](day-64/README.md) | Foreign keys, constraints, and delete behavior | `tracking/notes/day-64.md` with code, docs, or command evidence |
| [Day 065](day-65/README.md) | Row-level security or tenant filters | `tracking/notes/day-65.md` with code, docs, or command evidence |
| [Day 066](day-66/README.md) | Role-aware database access policy | `tracking/notes/day-66.md` with code, docs, or command evidence |
| [Day 067](day-67/README.md) | Indexes and EXPLAIN ANALYZE | `tracking/notes/day-67.md` with code, docs, or command evidence |
| [Day 068](day-68/README.md) | Keyset pagination for task lists | `tracking/notes/day-68.md` with code, docs, or command evidence |
| [Day 069](day-69/README.md) | Migration rollback drill | `tracking/notes/day-69.md` with code, docs, or command evidence |
| [Day 070](day-70/README.md) | Week 7 data-model review | `tracking/notes/day-70-checkpoint.md` and `portfolio/evidence/week-07-week-7-data-model-review.md` |

## Mini-Project

Complete [Week 07 mini-project](../mini-projects/week-07.md).

## Interview Layer

- LeetCode target: 29 counted solves this sprint.
- Easy / Medium / Hard breakdown: 3/26/0.
- DSA topic focus: Subsets, combinations, permutations, pruning, greedy basics, greedy intervals.
- Review target: Redo backtracking/greedy misses; write one pattern summary.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Paging, memory pressure, and cache locality basics.
- Networks: Keep-alive, connection pooling, and backend resource reuse.
- Databases: EXPLAIN ANALYZE, index choice, and query plan reading.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Introduce embeddings conceptually and design pgvector storage for tenant-safe documents.
- Product requirement: Retrieval use case note: what knowledge users need and how freshness is measured.
- Failure analysis requirement: Failure note: wrong tenant vector returned by retrieval.
- AI proof artifact: tracking/ai/week-07-embedding-storage-design.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Cloud-ready data model for analytics/AI: RDS vs local Postgres, S3 raw data, tenant-safe data boundaries.
- MLOps topic: IAM least privilege notes, data retention, backup/restore checklist, and cost tags.
- LLM topic: Embedding storage vocabulary only; define what data could later become vector-searchable.
- Product/communication topic: Cost/security tradeoff note for storing user data and AI-ready documents.
- Resource mapping: primary: [AWS Skill Builder](https://aws.amazon.com/training/digital/), [PostgreSQL docs](https://www.postgresql.org/docs/current/), [DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) storage chapters. Optional: [Google Cybersecurity Certificate](https://grow.google/certificates/cybersecurity/) IAM/privacy vocabulary.
- Required artifact: AWS data architecture note with RDS/S3/IAM assumptions, indexing notes, and backup/restore checklist.
- Interview explanation: Explain RDS vs self-managed DB, index cost, backups, IAM boundaries, and tenant data protection.
- What not to study this week: Training models, full Kubernetes, and advanced VPC labs.

## No-Redundancy Guardrail

- Adds this week: Maps cloud infrastructure depth onto the existing database design sprint.
- Supports existing roadmap task: Supports migrations, constraints, RLS/tenant filters, EXPLAIN ANALYZE, and rollback drills.
- Skip to avoid duplicate work: Do not migrate the capstone prematurely; produce deployable architecture notes and a tiny AWS lab only if time allows.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-07.md`.
