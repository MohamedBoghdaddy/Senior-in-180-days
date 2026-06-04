# System Design Question Bank

Use these prompts for weekly mocks and final interview prep. Every answer should include requirements, APIs, data model, scaling plan, reliability plan, security considerations, observability, and tradeoffs.

## Full-Stack And Backend

| Prompt | Key areas to cover | Proof artifact |
|--------|--------------------|----------------|
| Design a multi-tenant project management SaaS | auth, RBAC, tenant isolation, task schema, audit logs | capstone architecture doc |
| Design rate limiting for an API | token bucket, sliding window, Redis, abuse prevention | Week 13 design drill |
| Design a notification system | queues, fanout, retries, user preferences | async job design |
| Design a file upload system | storage, malware checks, signed URLs, quotas | Week 16 security hardening |
| Design a deployment pipeline | CI gates, preview deploys, rollback, smoke tests | Week 12 deployment checkpoint |

## AI Product Systems

| Prompt | Key areas to cover | Proof artifact |
|--------|--------------------|----------------|
| Design a RAG assistant for a SaaS workspace | ingestion, chunking, pgvector, ranking, citations, evals | production RAG design |
| Design an AI support agent with tools | tool registry, permissions, guardrails, memory, escalation | agent workflow design |
| Design an eval platform for prompts | golden dataset, graders, regression tests, dashboard | eval report |
| Design a model gateway | provider routing, fallback, rate limits, cost tracking, observability | model gateway contract |
| Design AI incident response | hallucination triage, rollback, user comms, prevention | AI incident postmortem |

## Answer Checklist

- What is the user problem?
- What are the functional and nonfunctional requirements?
- What is the high-level architecture?
- What data is stored and why?
- What can fail?
- How is quality measured?
- How is cost controlled?
- How is the system observed?
- What would you simplify for v1?

<!-- TRACKER:START -->
## System Design Topics
> Generated: 2026-06-04  |  1 drilled

| Topic | Category | Difficulty | Done |
|-------|----------|------------|------|
| Rate Limiter | Scalability | Medium | ⬜ |
| Notification System | Messaging | Medium | ⬜ |
| Cache Strategy & Invalidation | Caching | Medium | ⬜ |
| Async Job Queue | Messaging | Medium | ⬜ |
| Capacity Estimation (100K) | Scalability | Medium | ⬜ |
| Bottleneck Analysis (10x) | Scalability | Hard | ⬜ |
| System Design Mock Writeup | Scalability | Hard | ⬜ |
| URL Shortener | API design | Easy | ⬜ |
| Multi-tenant Task SaaS | Scalability | Hard | ⬜ |
| Production RAG System | AI systems | Hard | ⬜ |
| LRU Cache | Caching | Medium | ⬜ |
| Typeahead/Search | Database design | Medium | ⬜ |
| Auth & RBAC System | Security | Medium | ⬜ |
| CI/CD Pipeline | Reliability | Medium | ⬜ |
| Monitoring & Observability | Reliability | Medium | ⬜ |
<!-- TRACKER:END -->
