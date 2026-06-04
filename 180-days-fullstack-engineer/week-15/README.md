# Week 15 - Reliability, Observability, and Incident Response

## Goal

Add logs, metrics, runbooks, failure drills, postmortems, and production readiness evidence.

## Phase

Phase 7: System Design, Testing, Scalability, and Reliability

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| structured logs | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| metrics | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| runbooks | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| postmortem | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| tracing | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| alerts | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| SLOs | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| Grafana dashboard | NICE | Optional extension only | Evidence in portfolio extras |
| chaos drill | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 141](day-141/README.md) | Structured logging with request IDs | `tracking/notes/day-141.md` with code, docs, or command evidence |
| [Day 142](day-142/README.md) | Metrics for latency and errors | `tracking/notes/day-142.md` with code, docs, or command evidence |
| [Day 143](day-143/README.md) | Health, readiness, and dependency checks | `tracking/notes/day-143.md` with code, docs, or command evidence |
| [Day 144](day-144/README.md) | Runbook for API outage | `tracking/incidents/day-144-runbook-for-api-outage.md` |
| [Day 145](day-145/README.md) | Runbook for database slowdown | `tracking/incidents/day-145-runbook-for-database-slowdown.md` |
| [Day 146](day-146/README.md) | Break-the-system drill: database unavailable | `tracking/notes/day-146.md` with code, docs, or command evidence |
| [Day 147](day-147/README.md) | Incident postmortem | `tracking/incidents/day-147-incident-postmortem.md` |
| [Day 148](day-148/README.md) | Alert and SLO plan | `tracking/notes/day-148.md` with code, docs, or command evidence |
| [Day 149](day-149/README.md) | Production readiness checklist | `tracking/notes/day-149.md` with code, docs, or command evidence |
| [Day 150](day-150/README.md) | Phase 7 reliability checkpoint | `tracking/notes/day-150-checkpoint.md` and `portfolio/evidence/week-15-phase-7-reliability-checkpoint.md` |

## Mini-Project

Complete [Week 15 mini-project](../mini-projects/week-15.md).

## Interview Layer

- LeetCode target: 25 counted solves this sprint.
- Easy / Medium / Hard breakdown: 0/16/9.
- DSA topic focus: Stack/queue, heap, graphs, DB-style complexity, hard redos, incident-style mocks.
- Review target: Reliability interview mix; incident-style mock and hard checkpoint.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: CPU, memory, disk, and I/O incident diagnosis.
- Networks: Retries, circuit breakers, partial failure, and brownouts.
- Databases: Locks, deadlocks, slow queries, and queue backlogs.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Operate AI systems: token/cost metrics, latency percentiles, fallback strategy, alerting, and model-provider incident runbook.
- Product requirement: AI reliability review: SLOs, dashboards, alert thresholds, cost guardrails.
- Failure analysis requirement: Postmortem: AI hallucination, vector search failure, or queue backlog.
- AI proof artifact: tracking/ai/week-15-ai-incident-postmortem.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: LLM/RAG production failure modes: hallucination, stale retrieval, vector search miss, cost spike, provider outage.
- MLOps topic: Drift monitoring notes, token/cost/latency dashboard, alert thresholds, rollback plan, and incident runbook.
- LLM topic: Fallback strategy, model routing, rate limits, retry/backoff, and prompt/version rollback.
- Product/communication topic: User communication and reliability policy for wrong, stale, or slow AI responses.
- Resource mapping: primary: [DeepLearning.AI Machine Learning in Production](https://www.deeplearning.ai/courses/machine-learning-in-production), [OpenTelemetry](https://opentelemetry.io/docs/), [Google SRE Book](https://sre.google/sre-book/table-of-contents/). Optional: [W&B Models](https://docs.wandb.ai/models) monitoring/registry notes.
- Required artifact: AI incident postmortem, drift/latency/cost dashboard notes, alert plan, rollback checklist, and prevention actions.
- Interview explanation: Explain how LLM apps fail in production and how you monitor, triage, rollback, and prevent recurrence.
- What not to study this week: GPU infrastructure, custom inference servers, and fine-tuning experiments.

## No-Redundancy Guardrail

- Adds this week: Extends reliability week with LLMOps and MLOps failure analysis.
- Supports existing roadmap task: Supports original incident drills, SLO plan, production readiness checklist, and runbooks.
- Skip to avoid duplicate work: Do not make observability cosmetic; every metric must tie to user harm, cost, or reliability.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-15.md`.
