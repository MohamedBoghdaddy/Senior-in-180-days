# Day 1 to Day 180 Roadmap

## FAANG + Applied AI Engineering Extension

The main roadmap remains artifact-driven and production-grade. This extension adds interview readiness, CS fundamentals, applied AI engineering, AI product thinking, AI infrastructure, and production failure analysis without replacing the original full-stack path.

- Interview plan: [interview-prep/leetcode-plan.md](interview-prep/leetcode-plan.md)
- Pattern library: [interview-prep/pattern-library.md](interview-prep/pattern-library.md)
- CS fundamentals: [interview-prep/cs-fundamentals-plan.md](interview-prep/cs-fundamentals-plan.md)
- System design bank: [interview-prep/system-design-question-bank.md](interview-prep/system-design-question-bank.md)
- AI engineering: [ai-engineering/llm-fundamentals.md](ai-engineering/llm-fundamentals.md)
- RAG roadmap: [ai-engineering/rag-roadmap.md](ai-engineering/rag-roadmap.md)
- Agent systems: [ai-engineering/agent-systems-roadmap.md](ai-engineering/agent-systems-roadmap.md)
- Eval framework: [ai-engineering/eval-framework.md](ai-engineering/eval-framework.md)
- Production AI checklist: [ai-engineering/production-ai-checklist.md](ai-engineering/production-ai-checklist.md)
- Career readiness: [career-prep/company-target-matrix.md](career-prep/company-target-matrix.md)

| Sprint | DSA target | Interview focus | CS fundamentals | AI engineering focus | AI/product/failure artifact |
|--------|-----------:|-----------------|-----------------|----------------------|-----------------------------|
| Week 01 | 43 | Arrays, strings, prefix sums, frequency counting, in-place operations, debugging mistakes | OS: Processes vs programs, threads, basic scheduling vocabulary. Networks: DNS, browser request lifecycle, HTTP request/response basics. DB: Relational model, primary keys, simple SELECT and WHERE. | No AI code yet. Identify one real user workflow where AI might help, then define the non-AI baseline first. | tracking/ai/week-01-ai-opportunity-note.md |
| Week 02 | 44 | Hash maps, grouping, anagrams, two pointers, fixed and variable sliding windows | OS: Address spaces and virtual memory overview. Networks: TCP/IP layers, TCP vs UDP, ports, and request latency vocabulary. DB: Normalization, foreign keys, constraints, and data integrity. | No model integration yet. Design AI UX states: loading, uncertainty, citation required, refusal, and fallback. | tracking/ai/week-02-ai-ux-risk-note.md |
| Week 03 | 34 | Stacks, queues, monotonic stack, linked lists, fast/slow pointers, binary search bounds | OS: Syscalls, process I/O, and event-loop relationship. Networks: HTTP methods, headers, status codes, idempotency, and retries. DB: Indexes, lookup cost, and index/write tradeoffs. | Create a future model-gateway API contract without calling a model. Treat AI like an external dependency. | tracking/ai/week-03-model-gateway-contract.md |
| Week 04 | 29 | Recursion, tree DFS/BFS, BST ordering, validation ranges | OS: CPU scheduling, context switching, and latency tradeoffs. Networks: TLS basics, cookies, sessions, and auth token transport. DB: ACID, transaction basics, and consistency expectations. | Threat-model future AI endpoints: prompt injection, data leakage, cost abuse, and auth bypass. | tracking/ai/week-04-ai-threat-model.md |
| Week 05 | 32 | Min/max heaps, top K, interval merge/insert, binary search on answer intro | OS: Threads, locks, races, and shared state. Networks: REST, HTTP caching, CORS, and client/server boundaries. DB: Uniqueness, referential integrity, and constraint-backed correctness. | Introduce LLM fundamentals: tokens, context windows, latency, structured response shape, and prompt as an interface. | tracking/ai/week-05-llm-fundamentals-note.md |
| Week 06 | 27 | Adjacency lists, grids, BFS, DFS, visited state, shortest path intro | OS: Deadlocks, resource ordering, and contention. Networks: Timeouts, retries, backoff, and partial failure. DB: Isolation levels, lost updates, and transaction boundaries. | Build a typed AI interaction boundary: prompt template, structured output schema, validation, and UI error handling. | tracking/ai/week-06-structured-output-contract.md |
| Week 07 | 29 | Subsets, combinations, permutations, pruning, greedy basics, greedy intervals | OS: Paging, memory pressure, and cache locality basics. Networks: Keep-alive, connection pooling, and backend resource reuse. DB: EXPLAIN ANALYZE, index choice, and query plan reading. | Introduce embeddings conceptually and design pgvector storage for tenant-safe documents. | tracking/ai/week-07-embedding-storage-design.md |
| Week 08 | 24 | DP state, 1D DP, 2D DP intro, state transitions, base cases | OS: File systems, persistence, and durability vocabulary. Networks: DNS caching, CDN basics, and stale data tradeoffs. DB: SQL vs NoSQL, consistency, data modeling, and denormalization. | Design RAG v1: chunking, metadata, retrieval, ranking, citations, and no-answer behavior. | tracking/ai/week-08-rag-design-v1.md |
| Week 09 | 28 | Knapsack, LIS, subsequences, string DP, Union Find, components | OS: Process isolation, runtime boundaries, and failure containment. Networks: Sockets, ports, and service endpoints. DB: ORM boundaries, unit of work, and query visibility. | Use Clean Architecture to isolate model providers behind application ports and infrastructure adapters. | tracking/ai/week-09-ai-service-boundary-adr.md |
| Week 10 | 30 | Tries, prefix search, advanced intervals, sweep line, topological sort, bit masks | OS: Synchronization primitives and concurrency bugs. Networks: WebSockets, streaming, gRPC, and protocol tradeoffs. DB: Joins, planner basics, and query-shape tradeoffs. | Introduce agent workflows as deterministic orchestration first: tool calls, state machine, guardrails, and human approval. | tracking/ai/week-10-agent-workflow-design.md |
| Week 11 | 26 | Arrays, strings, hash maps, windows, linked list, binary search, trees, heaps, intervals, graph and DP redo | OS: Containers, namespaces, cgroups, signals, and process lifecycle. Networks: Service discovery, local ports, and internal network boundaries. DB: Connection pooling, migrations, and startup ordering. | Containerize a model gateway mock, add Redis cache plan, async job boundary, and cost/latency logging fields. | tracking/ai/week-11-ai-runtime-compose.md |
| Week 12 | 24 | Topological sort, graph cycles, DP review, bit manipulation, hard selected mixed problems | OS: Runtime signals, graceful shutdown, and deployment lifecycle. Networks: TLS certificates, load balancers, health checks, and edge routing. DB: Backups, restore drills, and rollback plans. | Put AI checks in CI/CD: prompt regression tests, structured-output tests, eval dataset smoke test, rate-limit config. | tracking/ai/week-12-ai-ci-eval-gate.md |
| Week 13 | 26 | Graph/DP mixed, sliding window rate limiters, notification queues, LRU cache, topological dependencies, binary search on answer | OS: Resource saturation, CPU/memory/disk/network bottlenecks. Networks: Backpressure, queues, rate limiting, and load shedding. DB: Replication, sharding, cache invalidation, and read/write tradeoffs. | Design production RAG: ingestion pipeline, re-ranking, citations, freshness, observability, and model routing. | tracking/ai/week-13-production-rag-system-design.md |
| Week 14 | 27 | Layered review of arrays, hashes, graphs, windows, greedy, intervals, DP, binary search, hard deep dive | OS: Test environment contention and resource isolation. Networks: HTTP tracing, request IDs, and distributed debugging. DB: Fixtures, transaction rollback in tests, and test data isolation. | Build eval framework: golden dataset, hallucination tests, regression scoring, structured graders, and manual review queue. | tracking/ai/week-14-ai-eval-report.md |
| Week 15 | 25 | Stack/queue, heap, graphs, DB-style complexity, hard redos, incident-style mocks | OS: CPU, memory, disk, and I/O incident diagnosis. Networks: Retries, circuit breakers, partial failure, and brownouts. DB: Locks, deadlocks, slow queries, and queue backlogs. | Operate AI systems: token/cost metrics, latency percentiles, fallback strategy, alerting, and model-provider incident runbook. | tracking/ai/week-15-ai-incident-postmortem.md |
| Week 16 | 24 | Mixed patterns, bit manipulation, hash/window, Union Find, tries, strings, hard redos, security review mocks | OS: Permissions, secrets, least privilege, and runtime isolation. Networks: Auth flows, TLS, abuse paths, and ingress protection. DB: RLS, least privilege roles, audit trails, and data retention. | Harden AI: prompt injection defenses, tenant-safe retrieval, PII redaction, moderation, model routing, fallback, and audit logs. | tracking/ai/week-16-ai-security-hardening.md |
| Week 17 | 15 | Mixed medium/hard problems chosen for interview stories, redos, verbal walkthroughs | OS: Operational handoff and runbook ownership. Networks: Request lifecycle explanation under interview pressure. DB: Known limitations, scaling plan, and data architecture narrative. | Package AI product proof: case study, demo script, eval report, cost analysis, architecture diagram, and reliability narrative. | tracking/ai/week-17-ai-case-study.md |
| Week 18 | 13 | Full review, selected medium/hard redos, system design drill, code review drill, final timed set | OS: Mixed OS interview review from prior artifacts. Networks: Mixed networking interview review from prior artifacts. DB: Mixed database interview review from prior artifacts. | Final applied AI interview pack: RAG, agents, evals, observability, cost, safety, and production tradeoffs. | tracking/ai/week-18-final-ai-interview-pack.md |

## AI Engineer / ML / MLOps Skill Map

This map integrates the source AI Engineer, MLOps, Machine Learning, and LLM Builder roadmap into the existing 180 days. It does not create a second curriculum: each row supports the existing weekly sprint and must produce evidence.

| Week | Source roadmap stage | Existing roadmap anchor | Added AI/ML/MLOps focus | Course/resource slice | Proof artifact |
|------|----------------------|-------------------------|-------------------------|----------------------|----------------|
| Week 01 | Month 1 - CS foundations and Python mastery | Engineering operating system, Git hygiene, CLI comfort, Markdown evidence | Python CLI foundations and algorithmic thinking | CS50x + CS50 Python + Kaggle Python | tracking/ai/week-01-python-cli-evidence.md |
| Week 02 | Month 1 - CS foundations and Python mastery | Browser, JavaScript, forms, fetch, storage, performance, and XSS basics | Pandas, NumPy, SQL basics, and data wrangling | Kaggle Pandas + Kaggle SQL + CS50 Python | tracking/ai/week-02-data-wrangling-evidence.md |
| Week 03 | Month 1 - CS foundations and Python mastery | Node runtime, Express routing, validation, error contracts, tests, and OpenAPI | Python CLI release and API boundary thinking | CS50 Python + freeCodeCamp Back End APIs + MIT 6.006 | tracking/ai/week-03-python-cli-release.md |
| Week 04 | Month 2 - backend and system design foundations | Authentication, authorization, RBAC, tenant middleware, rate limiting, audit logs | Backend architecture and URL shortener design | CS50 Web + freeCodeCamp Back End APIs + DDIA | tracking/ai/week-04-url-shortener-design.md |
| Week 05 | Month 2 - backend and system design foundations | Next.js shell, navigation, component contracts, TanStack Query, loading and error states | REST integration and product-facing API quality | CS50 Web + DDIA ch.3 + OpenAI text generation docs | tracking/ai/week-05-api-product-contract.md |
| Week 06 | Month 2 - backend and system design foundations | Full-stack integration, signup/login UI, forms, optimistic updates, E2E tests | Deployed REST workflow and backend scalability basics | freeCodeCamp Back End APIs + CS50 Web + DDIA ch.4 | tracking/ai/week-06-rest-service-load-notes.md |
| Week 07 | Month 3 - cloud and DevOps foundations | PostgreSQL schema, migrations, tenant isolation, indexes, EXPLAIN ANALYZE | Cloud data foundations for production systems | AWS Skill Builder + PostgreSQL docs + DDIA | tracking/ai/week-07-cloud-data-architecture.md |
| Week 08 | Month 3 - cloud and DevOps foundations | MongoDB, NoSQL tradeoffs, activity feed, tenant isolation, consistency analysis | Data pipelines, NoSQL tradeoffs, and serverless basics | AWS Skill Builder + Kaggle SQL + DDIA | tracking/ai/week-08-data-pipeline-cloud-note.md |
| Week 09 | Month 3 - cloud and DevOps foundations | .NET clean architecture, service boundaries, DTOs, validation, dependency inversion | Cloud deployment boundaries and service comparison | AWS Skill Builder + IBM DevOps + CS50 Web | tracking/ai/week-09-cloud-boundary-adr.md |
| Week 10 | Month 4 - LLMs, RAG, and AI agents | OOP, design patterns, service boundaries, CQRS comparison, architecture diagram | LLM fundamentals and AI service interfaces | Hugging Face LLM Course + OpenAI structured outputs + Anthropic tool use | tracking/ai/week-10-llm-service-interface.md |
| Week 11 | Month 4 - LLMs, RAG, and AI agents | Dockerfiles, Docker Compose, PostgreSQL/Redis/NoSQL services, health checks, startup ordering | RAG module, embeddings, vector store, and containerized runtime | Hugging Face LLM Course + pgvector + W&B | tracking/ai/week-11-rag-runtime-evidence.md |
| Week 12 | Month 4 - LLMs, RAG, and AI agents | GitHub Actions, CI gates, Docker build, preview deploy, Kubernetes concepts, runbooks | Agents, MCP, AI CI/CD, and deployment gates | Hugging Face Agents + Hugging Face MCP + GitHub Actions | tracking/ai/week-12-agent-ci-gate.md |
| Week 13 | Month 5 - MLOps and AI evaluation | System design, scalability, rate limiting, notifications, cache strategy, async jobs | MLOps system design and model/version lifecycle | DeepLearning.AI MLOps + W&B + DDIA | tracking/ai/week-13-mlops-system-design.md |
| Week 14 | Month 5 - MLOps and AI evaluation | Test pyramid, integration tests, E2E, RBAC negative tests, contract validation, k6 baseline | AI evaluation framework and regression testing | OpenAI evals + W&B + IBM GenAI evaluation | tracking/ai/week-14-ai-eval-report.md |
| Week 15 | Month 5 - MLOps and AI evaluation | Structured logs, metrics, health/readiness, runbooks, database slowdown, postmortems, SLOs | AI observability, drift, reliability, and incident response | DeepLearning.AI MLOps + OpenTelemetry + Google SRE | tracking/ai/week-15-ai-reliability-postmortem.md |
| Week 16 | Month 6 - product, security, and leadership | Threat model, auth/session hardening, tenant proof, file upload security, dependency audit, secrets audit | AI security, privacy, guardrails, and capstone hardening | OWASP LLM Top 10 + Google Cybersecurity + OWASP Cheat Sheets | tracking/ai/week-16-ai-security-hardening.md |
| Week 17 | Month 6 - product, security, and leadership | Portfolio README, ADR index, proof checklist, demo script, case study, release notes | Product validation, MVP planning, and stakeholder communication | YC Startup School + Google PM + Google Technical Writing | tracking/ai/week-17-product-validation-case-study.md |
| Week 18 | Month 6 - product, security, and leadership | Technical question bank, system design drill, code review drill, behavioral stories, final release | Final AI/ML/MLOps readiness and interview packaging | Google Technical Writing + YC Startup School + DDIA/ByteByteGo review | tracking/ai/week-18-final-ai-mlops-interview-pack.md |

See [ai-engineering/course-map.md](ai-engineering/course-map.md), [ai-engineering/skill-stack.md](ai-engineering/skill-stack.md), [ai-engineering/mlops-roadmap.md](ai-engineering/mlops-roadmap.md), and [career-prep/priority-gaps.md](career-prep/priority-gaps.md).

## Daily Roadmap

| Day | Focus | Week | Phase | Artifact |
|---:|---|---|---|---|
| [Day 001](week-01/day-01/README.md) | Repository orientation and proof system | Week 01 | Phase 1 | `tracking/notes/day-01.md` with code, docs, or command evidence |
| [Day 002](week-01/day-02/README.md) | Git workflow, branch hygiene, and commit standards | Week 01 | Phase 1 | `tracking/notes/day-02.md` with code, docs, or command evidence |
| [Day 003](week-01/day-03/README.md) | CLI workflow and environment setup | Week 01 | Phase 1 | `tracking/notes/day-03.md` with code, docs, or command evidence |
| [Day 004](week-01/day-04/README.md) | Markdown evidence templates | Week 01 | Phase 1 | `tracking/notes/day-04.md` with code, docs, or command evidence |
| [Day 005](week-01/day-05/README.md) | HTML semantic structure refresher | Week 01 | Phase 1 | `tracking/notes/day-05.md` with code, docs, or command evidence |
| [Day 006](week-01/day-06/README.md) | CSS layout and responsive rules | Week 01 | Phase 1 | `tracking/notes/day-06.md` with code, docs, or command evidence |
| [Day 007](week-01/day-07/README.md) | JavaScript fundamentals audit | Week 01 | Phase 1 | `tracking/notes/day-07.md` with code, docs, or command evidence |
| [Day 008](week-01/day-08/README.md) | Debugging journal and hypothesis loop | Week 01 | Phase 1 | `tracking/notes/day-08.md` with code, docs, or command evidence |
| [Day 009](week-01/day-09/README.md) | Accessibility baseline note | Week 01 | Phase 1 | `tracking/notes/day-09.md` with code, docs, or command evidence |
| [Day 010](week-01/day-10/README.md) | Week 1 operating-system review | Week 01 | Phase 1 | `tracking/notes/day-10-checkpoint.md` and `portfolio/evidence/week-01-week-1-operating-system-review.md` |
| [Day 011](week-02/day-11/README.md) | DOM traversal and event propagation | Week 02 | Phase 1 | `tracking/notes/day-11.md` with code, docs, or command evidence |
| [Day 012](week-02/day-12/README.md) | Form validation and accessible errors | Week 02 | Phase 1 | `tracking/notes/day-12.md` with code, docs, or command evidence |
| [Day 013](week-02/day-13/README.md) | Fetch, promises, and failure handling | Week 02 | Phase 1 | `tracking/notes/day-13.md` with code, docs, or command evidence |
| [Day 014](week-02/day-14/README.md) | Browser storage and cache behavior | Week 02 | Phase 1 | `tracking/notes/day-14.md` with code, docs, or command evidence |
| [Day 015](week-02/day-15/README.md) | Async debugging with DevTools | Week 02 | Phase 1 | `tracking/notes/day-15.md` with code, docs, or command evidence |
| [Day 016](week-02/day-16/README.md) | JavaScript data structures practice | Week 02 | Phase 1 | `tracking/notes/day-16.md` with code, docs, or command evidence |
| [Day 017](week-02/day-17/README.md) | Client-side performance measurement | Week 02 | Phase 1 | `tracking/notes/day-17.md` with code, docs, or command evidence |
| [Day 018](week-02/day-18/README.md) | Security basics: XSS and safe rendering | Week 02 | Phase 1 | `tracking/notes/day-18.md` with code, docs, or command evidence |
| [Day 019](week-02/day-19/README.md) | Code review of frontend fundamentals | Week 02 | Phase 1 | `tracking/reviews/day-19-code-review-of-frontend-fundamentals.md` |
| [Day 020](week-02/day-20/README.md) | Phase 1 portfolio checkpoint | Week 02 | Phase 1 | `tracking/notes/day-20-checkpoint.md` and `portfolio/evidence/week-02-phase-1-portfolio-checkpoint.md` |
| [Day 021](week-03/day-21/README.md) | Node runtime and event loop notes | Week 03 | Phase 2 | `tracking/notes/day-21.md` with code, docs, or command evidence |
| [Day 022](week-03/day-22/README.md) | Express project structure | Week 03 | Phase 2 | `tracking/notes/day-22.md` with code, docs, or command evidence |
| [Day 023](week-03/day-23/README.md) | Routing and controller boundaries | Week 03 | Phase 2 | `tracking/notes/day-23.md` with code, docs, or command evidence |
| [Day 024](week-03/day-24/README.md) | Zod validation for body, params, and query | Week 03 | Phase 2 | `tracking/notes/day-24.md` with code, docs, or command evidence |
| [Day 025](week-03/day-25/README.md) | Central error contract | Week 03 | Phase 2 | `tracking/notes/day-25.md` with code, docs, or command evidence |
| [Day 026](week-03/day-26/README.md) | Request logging and correlation IDs | Week 03 | Phase 2 | `tracking/notes/day-26.md` with code, docs, or command evidence |
| [Day 027](week-03/day-27/README.md) | Health endpoint and readiness behavior | Week 03 | Phase 2 | `tracking/notes/day-27.md` with code, docs, or command evidence |
| [Day 028](week-03/day-28/README.md) | Unit tests for validators and services | Week 03 | Phase 2 | `tracking/notes/day-28.md` plus a test report or test file link |
| [Day 029](week-03/day-29/README.md) | OpenAPI contract draft | Week 03 | Phase 2 | `tracking/notes/day-29.md` with code, docs, or command evidence |
| [Day 030](week-03/day-30/README.md) | Week 3 API review | Week 03 | Phase 2 | `tracking/notes/day-30-checkpoint.md` and `portfolio/evidence/week-03-week-3-api-review.md` |
| [Day 031](week-04/day-31/README.md) | User model and password hashing | Week 04 | Phase 2 | `tracking/notes/day-31.md` with code, docs, or command evidence |
| [Day 032](week-04/day-32/README.md) | Login and access-token flow | Week 04 | Phase 2 | `tracking/notes/day-32.md` with code, docs, or command evidence |
| [Day 033](week-04/day-33/README.md) | Refresh token and logout behavior | Week 04 | Phase 2 | `tracking/notes/day-33.md` with code, docs, or command evidence |
| [Day 034](week-04/day-34/README.md) | RBAC permission matrix | Week 04 | Phase 2 | `tracking/notes/day-34.md` with code, docs, or command evidence |
| [Day 035](week-04/day-35/README.md) | Organization-scoped middleware | Week 04 | Phase 2 | `tracking/notes/day-35.md` with code, docs, or command evidence |
| [Day 036](week-04/day-36/README.md) | Rate limiting and abuse controls | Week 04 | Phase 2 | `tracking/notes/day-36.md` with code, docs, or command evidence |
| [Day 037](week-04/day-37/README.md) | Audit logging for sensitive actions | Week 04 | Phase 2 | `tracking/notes/day-37.md` with code, docs, or command evidence |
| [Day 038](week-04/day-38/README.md) | Integration tests for auth and RBAC | Week 04 | Phase 2 | `tracking/notes/day-38.md` plus a test report or test file link |
| [Day 039](week-04/day-39/README.md) | Security review of auth flows | Week 04 | Phase 2 | `tracking/reviews/day-39-security-review-of-auth-flows.md` |
| [Day 040](week-04/day-40/README.md) | Phase 2 backend checkpoint | Week 04 | Phase 2 | `tracking/notes/day-40-checkpoint.md` and `portfolio/evidence/week-04-phase-2-backend-checkpoint.md` |
| [Day 041](week-05/day-41/README.md) | Next.js app router shell | Week 05 | Phase 3 | `tracking/notes/day-41.md` with code, docs, or command evidence |
| [Day 042](week-05/day-42/README.md) | Navigation and layout system | Week 05 | Phase 3 | `tracking/notes/day-42.md` with code, docs, or command evidence |
| [Day 043](week-05/day-43/README.md) | Design-system primitives | Week 05 | Phase 3 | `tracking/notes/day-43.md` with code, docs, or command evidence |
| [Day 044](week-05/day-44/README.md) | Task list route and empty states | Week 05 | Phase 3 | `tracking/notes/day-44.md` with code, docs, or command evidence |
| [Day 045](week-05/day-45/README.md) | TypeScript props and component contracts | Week 05 | Phase 3 | `tracking/notes/day-45.md` with code, docs, or command evidence |
| [Day 046](week-05/day-46/README.md) | TanStack Query setup | Week 05 | Phase 3 | `tracking/notes/day-46.md` with code, docs, or command evidence |
| [Day 047](week-05/day-47/README.md) | Loading and error states | Week 05 | Phase 3 | `tracking/notes/day-47.md` with code, docs, or command evidence |
| [Day 048](week-05/day-48/README.md) | URL search params for filters | Week 05 | Phase 3 | `tracking/notes/day-48.md` with code, docs, or command evidence |
| [Day 049](week-05/day-49/README.md) | Frontend test setup | Week 05 | Phase 3 | `tracking/notes/day-49.md` plus a test report or test file link |
| [Day 050](week-05/day-50/README.md) | Week 5 frontend review | Week 05 | Phase 3 | `tracking/notes/day-50-checkpoint.md` and `portfolio/evidence/week-05-week-5-frontend-review.md` |
| [Day 051](week-06/day-51/README.md) | API client and error mapping | Week 06 | Phase 3 | `tracking/notes/day-51.md` with code, docs, or command evidence |
| [Day 052](week-06/day-52/README.md) | Signup and login UI | Week 06 | Phase 3 | `tracking/notes/day-52.md` with code, docs, or command evidence |
| [Day 053](week-06/day-53/README.md) | Project creation form | Week 06 | Phase 3 | `tracking/notes/day-53.md` with code, docs, or command evidence |
| [Day 054](week-06/day-54/README.md) | Task creation and assignment form | Week 06 | Phase 3 | `tracking/notes/day-54.md` with code, docs, or command evidence |
| [Day 055](week-06/day-55/README.md) | Optimistic update and invalidation rules | Week 06 | Phase 3 | `tracking/notes/day-55.md` with code, docs, or command evidence |
| [Day 056](week-06/day-56/README.md) | E2E test for critical path | Week 06 | Phase 3 | `tracking/notes/day-56.md` plus a test report or test file link |
| [Day 057](week-06/day-57/README.md) | Accessibility audit with keyboard flow | Week 06 | Phase 3 | `tracking/notes/day-57.md` with code, docs, or command evidence |
| [Day 058](week-06/day-58/README.md) | Frontend performance profile | Week 06 | Phase 3 | `tracking/notes/day-58.md` with code, docs, or command evidence |
| [Day 059](week-06/day-59/README.md) | Code review of integration boundary | Week 06 | Phase 3 | `tracking/reviews/day-59-code-review-of-integration-boundary.md` |
| [Day 060](week-06/day-60/README.md) | Phase 3 integration checkpoint | Week 06 | Phase 3 | `tracking/notes/day-60-checkpoint.md` and `portfolio/evidence/week-06-phase-3-integration-checkpoint.md` |
| [Day 061](week-07/day-61/README.md) | Organization and user schema | Week 07 | Phase 4 | `tracking/notes/day-61.md` with code, docs, or command evidence |
| [Day 062](week-07/day-62/README.md) | Project, task, comment, and audit schema | Week 07 | Phase 4 | `tracking/notes/day-62.md` with code, docs, or command evidence |
| [Day 063](week-07/day-63/README.md) | Versioned migration workflow | Week 07 | Phase 4 | `tracking/notes/day-63.md` with code, docs, or command evidence |
| [Day 064](week-07/day-64/README.md) | Foreign keys, constraints, and delete behavior | Week 07 | Phase 4 | `tracking/notes/day-64.md` with code, docs, or command evidence |
| [Day 065](week-07/day-65/README.md) | Row-level security or tenant filters | Week 07 | Phase 4 | `tracking/notes/day-65.md` with code, docs, or command evidence |
| [Day 066](week-07/day-66/README.md) | Role-aware database access policy | Week 07 | Phase 4 | `tracking/notes/day-66.md` with code, docs, or command evidence |
| [Day 067](week-07/day-67/README.md) | Indexes and EXPLAIN ANALYZE | Week 07 | Phase 4 | `tracking/notes/day-67.md` with code, docs, or command evidence |
| [Day 068](week-07/day-68/README.md) | Keyset pagination for task lists | Week 07 | Phase 4 | `tracking/notes/day-68.md` with code, docs, or command evidence |
| [Day 069](week-07/day-69/README.md) | Migration rollback drill | Week 07 | Phase 4 | `tracking/notes/day-69.md` with code, docs, or command evidence |
| [Day 070](week-07/day-70/README.md) | Week 7 data-model review | Week 07 | Phase 4 | `tracking/notes/day-70-checkpoint.md` and `portfolio/evidence/week-07-week-7-data-model-review.md` |
| [Day 071](week-08/day-71/README.md) | NoSQL decision record | Week 08 | Phase 4 | `tracking/adrs/day-71-nosql-decision-record.md` |
| [Day 072](week-08/day-72/README.md) | MongoDB collection design | Week 08 | Phase 4 | `tracking/notes/day-72.md` with code, docs, or command evidence |
| [Day 073](week-08/day-73/README.md) | Activity feed write path | Week 08 | Phase 4 | `tracking/notes/day-73.md` with code, docs, or command evidence |
| [Day 074](week-08/day-74/README.md) | Activity feed read path | Week 08 | Phase 4 | `tracking/notes/day-74.md` with code, docs, or command evidence |
| [Day 075](week-08/day-75/README.md) | Aggregation and pagination | Week 08 | Phase 4 | `tracking/notes/day-75.md` with code, docs, or command evidence |
| [Day 076](week-08/day-76/README.md) | NoSQL tenant isolation tests | Week 08 | Phase 4 | `tracking/notes/day-76.md` plus a test report or test file link |
| [Day 077](week-08/day-77/README.md) | Firebase rules comparison note | Week 08 | Phase 4 | `tracking/notes/day-77.md` with code, docs, or command evidence |
| [Day 078](week-08/day-78/README.md) | Data consistency failure analysis | Week 08 | Phase 4 | `tracking/notes/day-78.md` with code, docs, or command evidence |
| [Day 079](week-08/day-79/README.md) | Cost and performance comparison | Week 08 | Phase 4 | `tracking/notes/day-79.md` with code, docs, or command evidence |
| [Day 080](week-08/day-80/README.md) | Phase 4 data checkpoint | Week 08 | Phase 4 | `tracking/notes/day-80-checkpoint.md` and `portfolio/evidence/week-08-phase-4-data-checkpoint.md` |
| [Day 081](week-09/day-81/README.md) | .NET API scaffold | Week 09 | Phase 5 | `tracking/notes/day-81.md` with code, docs, or command evidence |
| [Day 082](week-09/day-82/README.md) | Domain entities and value objects | Week 09 | Phase 5 | `tracking/notes/day-82.md` with code, docs, or command evidence |
| [Day 083](week-09/day-83/README.md) | Application service boundary | Week 09 | Phase 5 | `tracking/notes/day-83.md` with code, docs, or command evidence |
| [Day 084](week-09/day-84/README.md) | Infrastructure adapter boundary | Week 09 | Phase 5 | `tracking/notes/day-84.md` with code, docs, or command evidence |
| [Day 085](week-09/day-85/README.md) | Dependency inversion review | Week 09 | Phase 5 | `tracking/reviews/day-85-dependency-inversion-review.md` |
| [Day 086](week-09/day-86/README.md) | DTOs and validation | Week 09 | Phase 5 | `tracking/notes/day-86.md` with code, docs, or command evidence |
| [Day 087](week-09/day-87/README.md) | xUnit tests for domain rules | Week 09 | Phase 5 | `tracking/notes/day-87.md` plus a test report or test file link |
| [Day 088](week-09/day-88/README.md) | Node vs .NET architecture ADR | Week 09 | Phase 5 | `tracking/adrs/day-88-node-vs-.net-architecture-adr.md` |
| [Day 089](week-09/day-89/README.md) | Code review of Clean Architecture layers | Week 09 | Phase 5 | `tracking/reviews/day-89-code-review-of-clean-architecture-layers.md` |
| [Day 090](week-09/day-90/README.md) | Week 9 architecture checkpoint | Week 09 | Phase 5 | `tracking/notes/day-90-checkpoint.md` and `portfolio/evidence/week-09-week-9-architecture-checkpoint.md` |
| [Day 091](week-10/day-91/README.md) | OOP encapsulation review | Week 10 | Phase 5 | `tracking/reviews/day-91-oop-encapsulation-review.md` |
| [Day 092](week-10/day-92/README.md) | Repository pattern tradeoff | Week 10 | Phase 5 | `tracking/adrs/day-92-repository-pattern-tradeoff.md` |
| [Day 093](week-10/day-93/README.md) | Strategy pattern in permission checks | Week 10 | Phase 5 | `tracking/notes/day-93.md` with code, docs, or command evidence |
| [Day 094](week-10/day-94/README.md) | Factory pattern for service construction | Week 10 | Phase 5 | `tracking/notes/day-94.md` with code, docs, or command evidence |
| [Day 095](week-10/day-95/README.md) | CQRS and command handler comparison | Week 10 | Phase 5 | `tracking/notes/day-95.md` with code, docs, or command evidence |
| [Day 096](week-10/day-96/README.md) | Refactor one capstone service | Week 10 | Phase 5 | `tracking/notes/day-96.md` with code, docs, or command evidence |
| [Day 097](week-10/day-97/README.md) | Test seam and mock boundary review | Week 10 | Phase 5 | `tracking/notes/day-97.md` plus a test report or test file link |
| [Day 098](week-10/day-98/README.md) | Pattern misuse code review | Week 10 | Phase 5 | `tracking/reviews/day-98-pattern-misuse-code-review.md` |
| [Day 099](week-10/day-99/README.md) | Architecture diagram update | Week 10 | Phase 5 | `portfolio/architecture/day-99-architecture-diagram-update.md` |
| [Day 100](week-10/day-100/README.md) | Phase 5 OOP checkpoint | Week 10 | Phase 5 | `tracking/notes/day-100-checkpoint.md` and `portfolio/evidence/week-10-phase-5-oop-checkpoint.md` |
| [Day 101](week-11/day-101/README.md) | API Dockerfile | Week 11 | Phase 6 | `tracking/notes/day-101.md` with code, docs, or command evidence |
| [Day 102](week-11/day-102/README.md) | Frontend Dockerfile | Week 11 | Phase 6 | `tracking/notes/day-102.md` with code, docs, or command evidence |
| [Day 103](week-11/day-103/README.md) | Database and Redis Compose services | Week 11 | Phase 6 | `tracking/notes/day-103.md` with code, docs, or command evidence |
| [Day 104](week-11/day-104/README.md) | NoSQL service in Compose | Week 11 | Phase 6 | `tracking/notes/day-104.md` with code, docs, or command evidence |
| [Day 105](week-11/day-105/README.md) | Environment variable documentation | Week 11 | Phase 6 | `tracking/notes/day-105.md` with code, docs, or command evidence |
| [Day 106](week-11/day-106/README.md) | Health checks and startup ordering | Week 11 | Phase 6 | `tracking/notes/day-106.md` with code, docs, or command evidence |
| [Day 107](week-11/day-107/README.md) | Non-root container hardening | Week 11 | Phase 6 | `tracking/notes/day-107.md` with code, docs, or command evidence |
| [Day 108](week-11/day-108/README.md) | Image size and layer review | Week 11 | Phase 6 | `tracking/reviews/day-108-image-size-and-layer-review.md` |
| [Day 109](week-11/day-109/README.md) | Fresh clone setup test | Week 11 | Phase 6 | `tracking/notes/day-109.md` plus a test report or test file link |
| [Day 110](week-11/day-110/README.md) | Week 11 Docker checkpoint | Week 11 | Phase 6 | `tracking/notes/day-110-checkpoint.md` and `portfolio/evidence/week-11-week-11-docker-checkpoint.md` |
| [Day 111](week-12/day-111/README.md) | CI workflow for lint, types, and tests | Week 12 | Phase 6 | `tracking/notes/day-111.md` plus a test report or test file link |
| [Day 112](week-12/day-112/README.md) | Integration and E2E jobs | Week 12 | Phase 6 | `tracking/notes/day-112.md` plus a test report or test file link |
| [Day 113](week-12/day-113/README.md) | Docker build in CI | Week 12 | Phase 6 | `tracking/notes/day-113.md` with code, docs, or command evidence |
| [Day 114](week-12/day-114/README.md) | Workflow permissions and secret handling | Week 12 | Phase 6 | `tracking/notes/day-114.md` with code, docs, or command evidence |
| [Day 115](week-12/day-115/README.md) | Preview deployment notes | Week 12 | Phase 6 | `tracking/reviews/day-115-preview-deployment-notes.md` |
| [Day 116](week-12/day-116/README.md) | Production deployment runbook | Week 12 | Phase 6 | `tracking/incidents/day-116-production-deployment-runbook.md` |
| [Day 117](week-12/day-117/README.md) | Kubernetes deployment concept map | Week 12 | Phase 6 | `tracking/notes/day-117.md` with code, docs, or command evidence |
| [Day 118](week-12/day-118/README.md) | Kubernetes probes and resources note | Week 12 | Phase 6 | `tracking/notes/day-118.md` with code, docs, or command evidence |
| [Day 119](week-12/day-119/README.md) | Rollback and smoke test checklist | Week 12 | Phase 6 | `tracking/notes/day-119.md` plus a test report or test file link |
| [Day 120](week-12/day-120/README.md) | Phase 6 deployment checkpoint | Week 12 | Phase 6 | `tracking/notes/day-120-checkpoint.md` and `portfolio/evidence/week-12-phase-6-deployment-checkpoint.md` |
| [Day 121](week-13/day-121/README.md) | High-level architecture diagram | Week 13 | Phase 7 | `portfolio/architecture/day-121-high-level-architecture-diagram.md` |
| [Day 122](week-13/day-122/README.md) | Service boundary and ownership map | Week 13 | Phase 7 | `tracking/notes/day-122.md` with code, docs, or command evidence |
| [Day 123](week-13/day-123/README.md) | Rate limiter design drill | Week 13 | Phase 7 | `tracking/notes/day-123.md` with code, docs, or command evidence |
| [Day 124](week-13/day-124/README.md) | Notification system design drill | Week 13 | Phase 7 | `tracking/notes/day-124.md` with code, docs, or command evidence |
| [Day 125](week-13/day-125/README.md) | Cache strategy and invalidation plan | Week 13 | Phase 7 | `tracking/notes/day-125.md` with code, docs, or command evidence |
| [Day 126](week-13/day-126/README.md) | Async job queue design | Week 13 | Phase 7 | `tracking/notes/day-126.md` with code, docs, or command evidence |
| [Day 127](week-13/day-127/README.md) | Capacity estimate for 100K users | Week 13 | Phase 7 | `tracking/notes/day-127.md` with code, docs, or command evidence |
| [Day 128](week-13/day-128/README.md) | Bottleneck analysis at 10x traffic | Week 13 | Phase 7 | `tracking/notes/day-128.md` with code, docs, or command evidence |
| [Day 129](week-13/day-129/README.md) | System design mock interview writeup | Week 13 | Phase 7 | `tracking/notes/day-129.md` with code, docs, or command evidence |
| [Day 130](week-13/day-130/README.md) | Week 13 design checkpoint | Week 13 | Phase 7 | `tracking/notes/day-130-checkpoint.md` and `portfolio/evidence/week-13-week-13-design-checkpoint.md` |
| [Day 131](week-14/day-131/README.md) | Test pyramid plan | Week 14 | Phase 7 | `tracking/notes/day-131.md` plus a test report or test file link |
| [Day 132](week-14/day-132/README.md) | Unit test gaps and additions | Week 14 | Phase 7 | `tracking/notes/day-132.md` plus a test report or test file link |
| [Day 133](week-14/day-133/README.md) | Integration test for tenant isolation | Week 14 | Phase 7 | `tracking/notes/day-133.md` plus a test report or test file link |
| [Day 134](week-14/day-134/README.md) | E2E signup to task creation | Week 14 | Phase 7 | `tracking/notes/day-134.md` plus a test report or test file link |
| [Day 135](week-14/day-135/README.md) | RBAC denial negative test | Week 14 | Phase 7 | `tracking/notes/day-135.md` plus a test report or test file link |
| [Day 136](week-14/day-136/README.md) | OpenAPI contract validation | Week 14 | Phase 7 | `tracking/notes/day-136.md` with code, docs, or command evidence |
| [Day 137](week-14/day-137/README.md) | k6 load test baseline | Week 14 | Phase 7 | `tracking/notes/day-137.md` plus a test report or test file link |
| [Day 138](week-14/day-138/README.md) | Flaky test review and fix | Week 14 | Phase 7 | `tracking/notes/day-138.md` plus a test report or test file link |
| [Day 139](week-14/day-139/README.md) | Coverage report and gap note | Week 14 | Phase 7 | `tracking/notes/day-139.md` with code, docs, or command evidence |
| [Day 140](week-14/day-140/README.md) | Week 14 quality checkpoint | Week 14 | Phase 7 | `tracking/notes/day-140-checkpoint.md` and `portfolio/evidence/week-14-week-14-quality-checkpoint.md` |
| [Day 141](week-15/day-141/README.md) | Structured logging with request IDs | Week 15 | Phase 7 | `tracking/notes/day-141.md` with code, docs, or command evidence |
| [Day 142](week-15/day-142/README.md) | Metrics for latency and errors | Week 15 | Phase 7 | `tracking/notes/day-142.md` with code, docs, or command evidence |
| [Day 143](week-15/day-143/README.md) | Health, readiness, and dependency checks | Week 15 | Phase 7 | `tracking/notes/day-143.md` with code, docs, or command evidence |
| [Day 144](week-15/day-144/README.md) | Runbook for API outage | Week 15 | Phase 7 | `tracking/incidents/day-144-runbook-for-api-outage.md` |
| [Day 145](week-15/day-145/README.md) | Runbook for database slowdown | Week 15 | Phase 7 | `tracking/incidents/day-145-runbook-for-database-slowdown.md` |
| [Day 146](week-15/day-146/README.md) | Break-the-system drill: database unavailable | Week 15 | Phase 7 | `tracking/notes/day-146.md` with code, docs, or command evidence |
| [Day 147](week-15/day-147/README.md) | Incident postmortem | Week 15 | Phase 7 | `tracking/incidents/day-147-incident-postmortem.md` |
| [Day 148](week-15/day-148/README.md) | Alert and SLO plan | Week 15 | Phase 7 | `tracking/notes/day-148.md` with code, docs, or command evidence |
| [Day 149](week-15/day-149/README.md) | Production readiness checklist | Week 15 | Phase 7 | `tracking/notes/day-149.md` with code, docs, or command evidence |
| [Day 150](week-15/day-150/README.md) | Phase 7 reliability checkpoint | Week 15 | Phase 7 | `tracking/notes/day-150-checkpoint.md` and `portfolio/evidence/week-15-phase-7-reliability-checkpoint.md` |
| [Day 151](week-16/day-151/README.md) | Capstone requirements gap review | Week 16 | Phase 8 | `tracking/reviews/day-151-capstone-requirements-gap-review.md` |
| [Day 152](week-16/day-152/README.md) | Threat model update | Week 16 | Phase 8 | `tracking/notes/day-152.md` with code, docs, or command evidence |
| [Day 153](week-16/day-153/README.md) | Auth and session hardening | Week 16 | Phase 8 | `tracking/notes/day-153.md` with code, docs, or command evidence |
| [Day 154](week-16/day-154/README.md) | RBAC and tenant isolation proof | Week 16 | Phase 8 | `tracking/notes/day-154.md` with code, docs, or command evidence |
| [Day 155](week-16/day-155/README.md) | File upload or attachment security | Week 16 | Phase 8 | `tracking/notes/day-155.md` with code, docs, or command evidence |
| [Day 156](week-16/day-156/README.md) | Dependency and secrets audit | Week 16 | Phase 8 | `tracking/notes/day-156.md` with code, docs, or command evidence |
| [Day 157](week-16/day-157/README.md) | Accessibility retest | Week 16 | Phase 8 | `tracking/notes/day-157.md` plus a test report or test file link |
| [Day 158](week-16/day-158/README.md) | Performance regression retest | Week 16 | Phase 8 | `tracking/notes/day-158.md` plus a test report or test file link |
| [Day 159](week-16/day-159/README.md) | Security review writeup | Week 16 | Phase 8 | `tracking/reviews/day-159-security-review-writeup.md` |
| [Day 160](week-16/day-160/README.md) | Week 16 capstone checkpoint | Week 16 | Phase 8 | `tracking/notes/day-160-checkpoint.md` and `portfolio/evidence/week-16-week-16-capstone-checkpoint.md` |
| [Day 161](week-17/day-161/README.md) | Architecture.md final pass | Week 17 | Phase 8 | `portfolio/architecture/day-161-architecture.md-final-pass.md` |
| [Day 162](week-17/day-162/README.md) | ADR index and decision cleanup | Week 17 | Phase 8 | `tracking/adrs/day-162-adr-index-and-decision-cleanup.md` |
| [Day 163](week-17/day-163/README.md) | Portfolio README | Week 17 | Phase 8 | `tracking/notes/day-163.md` with code, docs, or command evidence |
| [Day 164](week-17/day-164/README.md) | Proof checklist with links | Week 17 | Phase 8 | `tracking/notes/day-164.md` with code, docs, or command evidence |
| [Day 165](week-17/day-165/README.md) | Demo script | Week 17 | Phase 8 | `tracking/notes/day-165.md` with code, docs, or command evidence |
| [Day 166](week-17/day-166/README.md) | Case study writeup | Week 17 | Phase 8 | `tracking/notes/day-166.md` with code, docs, or command evidence |
| [Day 167](week-17/day-167/README.md) | Release notes and changelog | Week 17 | Phase 8 | `tracking/notes/day-167.md` with code, docs, or command evidence |
| [Day 168](week-17/day-168/README.md) | Stakeholder update memo | Week 17 | Phase 8 | `tracking/notes/day-168.md` with code, docs, or command evidence |
| [Day 169](week-17/day-169/README.md) | Senior communication rehearsal | Week 17 | Phase 8 | `tracking/notes/day-169.md` with code, docs, or command evidence |
| [Day 170](week-17/day-170/README.md) | Week 17 portfolio checkpoint | Week 17 | Phase 8 | `tracking/notes/day-170-checkpoint.md` and `portfolio/evidence/week-17-week-17-portfolio-checkpoint.md` |
| [Day 171](week-18/day-171/README.md) | Technical question bank review | Week 18 | Phase 8 | `tracking/reviews/day-171-technical-question-bank-review.md` |
| [Day 172](week-18/day-172/README.md) | System design interview drill | Week 18 | Phase 8 | `tracking/notes/day-172.md` with code, docs, or command evidence |
| [Day 173](week-18/day-173/README.md) | Code review interview drill | Week 18 | Phase 8 | `tracking/reviews/day-173-code-review-interview-drill.md` |
| [Day 174](week-18/day-174/README.md) | Behavioral story bank | Week 18 | Phase 8 | `tracking/notes/day-174.md` with code, docs, or command evidence |
| [Day 175](week-18/day-175/README.md) | Debugging story rehearsal | Week 18 | Phase 8 | `tracking/notes/day-175.md` with code, docs, or command evidence |
| [Day 176](week-18/day-176/README.md) | Tradeoff explanation rehearsal | Week 18 | Phase 8 | `tracking/adrs/day-176-tradeoff-explanation-rehearsal.md` |
| [Day 177](week-18/day-177/README.md) | Known limitations and next steps | Week 18 | Phase 8 | `tracking/notes/day-177.md` with code, docs, or command evidence |
| [Day 178](week-18/day-178/README.md) | Final fresh-clone verification | Week 18 | Phase 8 | `tracking/notes/day-178.md` with code, docs, or command evidence |
| [Day 179](week-18/day-179/README.md) | Release tag and final changelog | Week 18 | Phase 8 | `tracking/notes/day-179.md` with code, docs, or command evidence |
| [Day 180](week-18/day-180/README.md) | Day 180 final review and handoff | Week 18 | Phase 8 | `tracking/notes/day-180-checkpoint.md` and `portfolio/evidence/week-18-day-180-final-review-and-handoff.md` |
