# Week 09 - .NET Clean Architecture Foundations

## Goal

Build a small .NET service to compare architecture boundaries, dependency inversion, and OOP design.

## Phase

Phase 5: .NET, Clean Architecture, OOP, and Design Patterns

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| .NET API | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| Clean Architecture layers | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| dependency inversion | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| xUnit tests | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| CQRS comparison | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| FluentValidation | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| domain modeling | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| MediatR | NICE | Optional extension only | Evidence in portfolio extras |
| minimal APIs comparison | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 081](day-81/README.md) | .NET API scaffold | `tracking/notes/day-81.md` with code, docs, or command evidence |
| [Day 082](day-82/README.md) | Domain entities and value objects | `tracking/notes/day-82.md` with code, docs, or command evidence |
| [Day 083](day-83/README.md) | Application service boundary | `tracking/notes/day-83.md` with code, docs, or command evidence |
| [Day 084](day-84/README.md) | Infrastructure adapter boundary | `tracking/notes/day-84.md` with code, docs, or command evidence |
| [Day 085](day-85/README.md) | Dependency inversion review | `tracking/reviews/day-85-dependency-inversion-review.md` |
| [Day 086](day-86/README.md) | DTOs and validation | `tracking/notes/day-86.md` with code, docs, or command evidence |
| [Day 087](day-87/README.md) | xUnit tests for domain rules | `tracking/notes/day-87.md` plus a test report or test file link |
| [Day 088](day-88/README.md) | Node vs .NET architecture ADR | `tracking/adrs/day-88-node-vs-.net-architecture-adr.md` |
| [Day 089](day-89/README.md) | Code review of Clean Architecture layers | `tracking/reviews/day-89-code-review-of-clean-architecture-layers.md` |
| [Day 090](day-90/README.md) | Week 9 architecture checkpoint | `tracking/notes/day-90-checkpoint.md` and `portfolio/evidence/week-09-week-9-architecture-checkpoint.md` |

## Mini-Project

Complete [Week 09 mini-project](../mini-projects/week-09.md).

## Interview Layer

- LeetCode target: 28 counted solves this sprint.
- Easy / Medium / Hard breakdown: 1/27/0.
- DSA topic focus: Knapsack, LIS, subsequences, string DP, Union Find, components.
- Review target: Redo DP and Union Find misses; timed mixed medium set.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Process isolation, runtime boundaries, and failure containment.
- Networks: Sockets, ports, and service endpoints.
- Databases: ORM boundaries, unit of work, and query visibility.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Use Clean Architecture to isolate model providers behind application ports and infrastructure adapters.
- Product requirement: Provider-swap tradeoff note: quality, cost, latency, reliability.
- Failure analysis requirement: Failure note: provider-specific behavior leaks into domain logic.
- AI proof artifact: tracking/ai/week-09-ai-service-boundary-adr.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Cloud adapter ADR: where deployment, storage, queues, and future model gateways live in clean architecture.
- MLOps topic: CI/CD boundary, secrets policy, IAM note, environment variable documentation, and rollback checklist.
- LLM topic: Provider adapter vocabulary only; compare AI provider adapters to database/cloud adapters.
- Product/communication topic: Tradeoff note for choosing AWS-managed services vs local/dev-only services.
- Resource mapping: primary: [AWS Skill Builder](https://aws.amazon.com/training/digital/), [IBM DevOps and Software Engineering](https://www.coursera.org/professional-certificates/devops-and-software-engineering), [CS50 Web](https://cs50.harvard.edu/web/) testing/CI material. Optional: [DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) reliability review.
- Required artifact: Cloud adapter ADR, IAM/secrets notes, env var docs, and rollback checklist for the backend module.
- Interview explanation: Explain service boundaries, dependency inversion, and how cloud dependencies stay outside domain logic.
- What not to study this week: Agent frameworks, Kubernetes deep dives, and multi-cloud comparisons.

## No-Redundancy Guardrail

- Adds this week: Uses the .NET comparison week to deepen architecture and cloud boundary judgment.
- Supports existing roadmap task: Supports clean architecture, dependency inversion, DTO validation, and Node vs .NET ADR.
- Skip to avoid duplicate work: Do not duplicate deployment work that belongs in weeks 11-12; define boundaries and run a small lab.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-09.md`.
