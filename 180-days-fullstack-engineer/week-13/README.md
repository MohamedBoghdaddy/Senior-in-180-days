# Week 13 - System Design and Scalability

## Goal

Practice senior system design with capstone-specific scaling, bottleneck, and tradeoff artifacts.

## Phase

Phase 7: System Design, Testing, Scalability, and Reliability

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| system boundaries | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| scaling plan | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| cache strategy | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| async jobs | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| rate limiter design | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| read model | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| capacity estimate | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| multi-region note | NICE | Optional extension only | Evidence in portfolio extras |
| cost model | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 121](day-121/README.md) | High-level architecture diagram | `portfolio/architecture/day-121-high-level-architecture-diagram.md` |
| [Day 122](day-122/README.md) | Service boundary and ownership map | `tracking/notes/day-122.md` with code, docs, or command evidence |
| [Day 123](day-123/README.md) | Rate limiter design drill | `tracking/notes/day-123.md` with code, docs, or command evidence |
| [Day 124](day-124/README.md) | Notification system design drill | `tracking/notes/day-124.md` with code, docs, or command evidence |
| [Day 125](day-125/README.md) | Cache strategy and invalidation plan | `tracking/notes/day-125.md` with code, docs, or command evidence |
| [Day 126](day-126/README.md) | Async job queue design | `tracking/notes/day-126.md` with code, docs, or command evidence |
| [Day 127](day-127/README.md) | Capacity estimate for 100K users | `tracking/notes/day-127.md` with code, docs, or command evidence |
| [Day 128](day-128/README.md) | Bottleneck analysis at 10x traffic | `tracking/notes/day-128.md` with code, docs, or command evidence |
| [Day 129](day-129/README.md) | System design mock interview writeup | `tracking/notes/day-129.md` with code, docs, or command evidence |
| [Day 130](day-130/README.md) | Week 13 design checkpoint | `tracking/notes/day-130-checkpoint.md` and `portfolio/evidence/week-13-week-13-design-checkpoint.md` |

## Mini-Project

Complete [Week 13 mini-project](../mini-projects/week-13.md).

## Interview Layer

- LeetCode target: 26 counted solves this sprint.
- Easy / Medium / Hard breakdown: 0/16/10.
- DSA topic focus: Graph/DP mixed, sliding window rate limiters, notification queues, LRU cache, topological dependencies, binary search on answer.
- Review target: System design algorithm support; system design plus algorithm mock on Day 129.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Resource saturation, CPU/memory/disk/network bottlenecks.
- Networks: Backpressure, queues, rate limiting, and load shedding.
- Databases: Replication, sharding, cache invalidation, and read/write tradeoffs.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Design production RAG: ingestion pipeline, re-ranking, citations, freshness, observability, and model routing.
- Product requirement: RAG system design doc with success metrics, cost estimate, and failure modes.
- Failure analysis requirement: Drill: retrieval quality regression after new ingestion.
- AI proof artifact: tracking/ai/week-13-production-rag-system-design.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: ML vs software lifecycle, baseline model, model versions, dataset versions, registry concept, and feedback loops.
- MLOps topic: Experiment tracking, model registry plan, data drift definition, queue/backpressure for ingestion, and model routing.
- LLM topic: Model comparison: OpenAI vs Anthropic vs local/open-source model tradeoffs.
- Product/communication topic: Define AI product metrics: task success, answer quality, latency, cost, escalation rate, user correction rate.
- Resource mapping: primary: [DeepLearning.AI Machine Learning in Production](https://www.deeplearning.ai/courses/machine-learning-in-production), [W&B Models](https://docs.wandb.ai/models), [DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/). Optional: [Machine Learning Specialization](https://www.deeplearning.ai/specializations/machine-learning) only for baseline/error-analysis concepts.
- Required artifact: MLOps system design doc with model/data versions, registry plan, feedback loop, drift signals, and cost metrics.
- Interview explanation: Explain how ML differs from traditional software and how model/data versions change release management.
- What not to study this week: Training large models, full ML specialization completion, and unrelated ML algorithms.

## No-Redundancy Guardrail

- Adds this week: Maps MLOps lifecycle thinking onto the existing system-design sprint.
- Supports existing roadmap task: Supports async jobs, rate limiting, cache strategy, capacity estimates, and bottleneck analysis.
- Skip to avoid duplicate work: Do not train a model just to say MLOps; design lifecycle controls around the RAG/AI feature.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-13.md`.
