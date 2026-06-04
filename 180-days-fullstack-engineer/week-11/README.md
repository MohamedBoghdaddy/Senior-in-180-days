# Week 11 - Docker and Local Runtime

## Goal

Make every service run from a clean checkout with Docker, Compose, health checks, and documented environment variables.

## Phase

Phase 6: Docker, Kubernetes, CI/CD, and Deployment

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| Dockerfile | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| Docker Compose | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| health checks | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| env docs | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| non-root containers | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| image size | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| startup order | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| multi-arch build | NICE | Optional extension only | Evidence in portfolio extras |
| container registry | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 101](day-101/README.md) | API Dockerfile | `tracking/notes/day-101.md` with code, docs, or command evidence |
| [Day 102](day-102/README.md) | Frontend Dockerfile | `tracking/notes/day-102.md` with code, docs, or command evidence |
| [Day 103](day-103/README.md) | Database and Redis Compose services | `tracking/notes/day-103.md` with code, docs, or command evidence |
| [Day 104](day-104/README.md) | NoSQL service in Compose | `tracking/notes/day-104.md` with code, docs, or command evidence |
| [Day 105](day-105/README.md) | Environment variable documentation | `tracking/notes/day-105.md` with code, docs, or command evidence |
| [Day 106](day-106/README.md) | Health checks and startup ordering | `tracking/notes/day-106.md` with code, docs, or command evidence |
| [Day 107](day-107/README.md) | Non-root container hardening | `tracking/notes/day-107.md` with code, docs, or command evidence |
| [Day 108](day-108/README.md) | Image size and layer review | `tracking/reviews/day-108-image-size-and-layer-review.md` |
| [Day 109](day-109/README.md) | Fresh clone setup test | `tracking/notes/day-109.md` plus a test report or test file link |
| [Day 110](day-110/README.md) | Week 11 Docker checkpoint | `tracking/notes/day-110-checkpoint.md` and `portfolio/evidence/week-11-week-11-docker-checkpoint.md` |

## Mini-Project

Complete [Week 11 mini-project](../mini-projects/week-11.md).

## Interview Layer

- LeetCode target: 26 counted solves this sprint.
- Easy / Medium / Hard breakdown: 1/23/2.
- DSA topic focus: Arrays, strings, hash maps, windows, linked list, binary search, trees, heaps, intervals, graph and DP redo.
- Review target: Spaced review under Docker workload; one mock pair on Day 108.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Containers, namespaces, cgroups, signals, and process lifecycle.
- Networks: Service discovery, local ports, and internal network boundaries.
- Databases: Connection pooling, migrations, and startup ordering.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Containerize a model gateway mock, add Redis cache plan, async job boundary, and cost/latency logging fields.
- Product requirement: Cost-control note: cacheable requests, token budget, and latency SLO.
- Failure analysis requirement: Drill: AI cache invalidation returns stale answer.
- AI proof artifact: tracking/ai/week-11-ai-runtime-compose.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Production RAG v1: chunking, embeddings, pgvector/vector store, citations, no-answer behavior.
- MLOps topic: Containerized ingestion job, Redis cache note, queue boundary, W&B or equivalent logging plan.
- LLM topic: RAG prompt with citations, retrieval context limits, and hallucination examples.
- Product/communication topic: RAG answer-quality rubric: relevance, citation coverage, freshness, no-answer, and user trust.
- Resource mapping: primary: [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1), [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector), [W&B Models docs](https://docs.wandb.ai/models). Optional: [IBM Generative AI Engineering](https://www.coursera.org/professional-certificates/ibm-generative-ai-engineering) RAG/LangChain sections as skim material.
- Required artifact: RAG module with ingestion script, vector schema, eval seed set, citations, Docker Compose service, and latency/cost notes.
- Interview explanation: Explain how to evaluate RAG retrieval, why citations matter, and how vector search fails.
- What not to study this week: Custom model training, huge document corpora, and agent autonomy.

## No-Redundancy Guardrail

- Adds this week: Places RAG inside the existing Docker/runtime week so it is runnable and observable.
- Supports existing roadmap task: Supports Docker Compose, health checks, Redis/Postgres services, env docs, and image review.
- Skip to avoid duplicate work: Do not build a demo-only chatbot; every RAG answer needs source, eval, and failure evidence.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-11.md`.
