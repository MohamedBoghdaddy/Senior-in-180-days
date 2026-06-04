# Week 08 - MongoDB, NoSQL Tradeoffs, and Data Reliability

## Goal

Implement a NoSQL comparison module and document tradeoffs against the relational model.

## Phase

Phase 4: SQL, MongoDB, PostgreSQL, and Schema Design

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| MongoDB modeling | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| NoSQL tradeoffs | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| data consistency | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| tenant isolation | MUST | Required for Phase 4 completion | Evidence in daily artifacts or mini-project |
| aggregation | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| change history | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| cost analysis | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| Firebase comparison | NICE | Optional extension only | Evidence in portfolio extras |
| event sourcing sketch | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 071](day-71/README.md) | NoSQL decision record | `tracking/adrs/day-71-nosql-decision-record.md` |
| [Day 072](day-72/README.md) | MongoDB collection design | `tracking/notes/day-72.md` with code, docs, or command evidence |
| [Day 073](day-73/README.md) | Activity feed write path | `tracking/notes/day-73.md` with code, docs, or command evidence |
| [Day 074](day-74/README.md) | Activity feed read path | `tracking/notes/day-74.md` with code, docs, or command evidence |
| [Day 075](day-75/README.md) | Aggregation and pagination | `tracking/notes/day-75.md` with code, docs, or command evidence |
| [Day 076](day-76/README.md) | NoSQL tenant isolation tests | `tracking/notes/day-76.md` plus a test report or test file link |
| [Day 077](day-77/README.md) | Firebase rules comparison note | `tracking/notes/day-77.md` with code, docs, or command evidence |
| [Day 078](day-78/README.md) | Data consistency failure analysis | `tracking/notes/day-78.md` with code, docs, or command evidence |
| [Day 079](day-79/README.md) | Cost and performance comparison | `tracking/notes/day-79.md` with code, docs, or command evidence |
| [Day 080](day-80/README.md) | Phase 4 data checkpoint | `tracking/notes/day-80-checkpoint.md` and `portfolio/evidence/week-08-phase-4-data-checkpoint.md` |

## Mini-Project

Complete [Week 08 mini-project](../mini-projects/week-08.md).

## Interview Layer

- LeetCode target: 24 counted solves this sprint.
- Easy / Medium / Hard breakdown: 3/21/0.
- DSA topic focus: DP state, 1D DP, 2D DP intro, state transitions, base cases.
- Review target: Redo DP-state misses; one deep DP explanation on Day 080.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: File systems, persistence, and durability vocabulary.
- Networks: DNS caching, CDN basics, and stale data tradeoffs.
- Databases: SQL vs NoSQL, consistency, data modeling, and denormalization.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Design RAG v1: chunking, metadata, retrieval, ranking, citations, and no-answer behavior.
- Product requirement: RAG answer-quality rubric with citation and no-answer rules.
- Failure analysis requirement: Incident sketch: vector search returns stale or irrelevant chunks.
- AI proof artifact: tracking/ai/week-08-rag-design-v1.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Raw-to-clean data pipeline design, object storage patterns, NoSQL vs relational tradeoffs for AI retrieval.
- MLOps topic: Pipeline run log, data validation checks, idempotent job note, and serverless/Lambda fit analysis.
- LLM topic: RAG vocabulary only: chunks, metadata, retrieval, freshness, and citation requirements.
- Product/communication topic: Explain what freshness means for activity feeds and AI answers.
- Resource mapping: primary: [AWS Skill Builder](https://aws.amazon.com/training/digital/), [Kaggle SQL](https://www.kaggle.com/learn/sql), [DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) data model chapters. Optional: [IBM DevOps and Software Engineering](https://www.coursera.org/professional-certificates/devops-and-software-engineering) cloud-native/serverless modules.
- Required artifact: Data pipeline design note with S3/raw-cleaned folders, NoSQL comparison, validation checks, and freshness metric.
- Interview explanation: Explain SQL vs NoSQL vs object storage for activity feeds, analytics, and future RAG.
- What not to study this week: Fine-tuning, vector DB implementation, and production ML monitoring.

## No-Redundancy Guardrail

- Adds this week: Connects data reliability to future AI retrieval without adding a separate data-engineering track.
- Supports existing roadmap task: Supports NoSQL decision record, activity feed module, consistency failure analysis, and cost comparison.
- Skip to avoid duplicate work: Do not turn the week into a cloud certificate grind; use one cloud concept per artifact.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-08.md`.
