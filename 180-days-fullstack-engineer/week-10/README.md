# Week 10 - OOP, Design Patterns, and Service Boundaries

## Goal

Apply OOP and pattern thinking only where it clarifies production code and tradeoffs.

## Phase

Phase 5: .NET, Clean Architecture, OOP, and Design Patterns

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| encapsulation | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| interfaces | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| repository tradeoff | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| strategy pattern | MUST | Required for Phase 5 completion | Evidence in daily artifacts or mini-project |
| factory pattern | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| CQRS tradeoff | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| test seams | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| domain events | NICE | Optional extension only | Evidence in portfolio extras |
| hexagonal architecture comparison | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 091](day-91/README.md) | OOP encapsulation review | `tracking/reviews/day-91-oop-encapsulation-review.md` |
| [Day 092](day-92/README.md) | Repository pattern tradeoff | `tracking/adrs/day-92-repository-pattern-tradeoff.md` |
| [Day 093](day-93/README.md) | Strategy pattern in permission checks | `tracking/notes/day-93.md` with code, docs, or command evidence |
| [Day 094](day-94/README.md) | Factory pattern for service construction | `tracking/notes/day-94.md` with code, docs, or command evidence |
| [Day 095](day-95/README.md) | CQRS and command handler comparison | `tracking/notes/day-95.md` with code, docs, or command evidence |
| [Day 096](day-96/README.md) | Refactor one capstone service | `tracking/notes/day-96.md` with code, docs, or command evidence |
| [Day 097](day-97/README.md) | Test seam and mock boundary review | `tracking/notes/day-97.md` plus a test report or test file link |
| [Day 098](day-98/README.md) | Pattern misuse code review | `tracking/reviews/day-98-pattern-misuse-code-review.md` |
| [Day 099](day-99/README.md) | Architecture diagram update | `portfolio/architecture/day-99-architecture-diagram-update.md` |
| [Day 100](day-100/README.md) | Phase 5 OOP checkpoint | `tracking/notes/day-100-checkpoint.md` and `portfolio/evidence/week-10-phase-5-oop-checkpoint.md` |

## Mini-Project

Complete [Week 10 mini-project](../mini-projects/week-10.md).

## Interview Layer

- LeetCode target: 30 counted solves this sprint.
- Easy / Medium / Hard breakdown: 2/26/2.
- DSA topic focus: Tries, prefix search, advanced intervals, sweep line, topological sort, bit masks.
- Review target: Redo trie/interval/topological/bit misses; one mixed-pattern mock.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Synchronization primitives and concurrency bugs.
- Networks: WebSockets, streaming, gRPC, and protocol tradeoffs.
- Databases: Joins, planner basics, and query-shape tradeoffs.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Introduce agent workflows as deterministic orchestration first: tool calls, state machine, guardrails, and human approval.
- Product requirement: Agent workflow PRD: user goal, allowed tools, stop conditions, escalation path.
- Failure analysis requirement: Incident sketch: tool call executed with stale or unauthorized context.
- AI proof artifact: tracking/ai/week-10-agent-workflow-design.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: LLM fundamentals: tokens, context windows, inference, embeddings vocabulary, and model/provider comparison.
- MLOps topic: Model gateway interface, request/response logs, timeout budget, cost estimate, and schema validation.
- LLM topic: Prompt/context engineering, structured outputs, function/tool calling contracts, and provider adapters.
- Product/communication topic: AI feature PRD v0: user problem, non-AI baseline, quality bar, and failure modes.
- Resource mapping: primary: [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1), [OpenAI structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs), [Anthropic tool use](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview). Optional: [CS50 AI](https://cs50.harvard.edu/ai/) search/ML overview if AI fundamentals are weak.
- Required artifact: LLM service interface, prompt/schema contract, provider comparison, and cost/latency estimate.
- Interview explanation: Explain tokens, context windows, structured outputs, model routing, and provider tradeoffs.
- What not to study this week: Fine-tuning, RLHF, custom training, and autonomous agents.

## No-Redundancy Guardrail

- Adds this week: Introduces LLMs exactly when service boundaries and design patterns are being practiced.
- Supports existing roadmap task: Supports strategy/factory patterns, service refactor, interface design, and architecture updates.
- Skip to avoid duplicate work: Do not make prompt engineering a separate track; treat prompts as versioned API contracts.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-10.md`.
