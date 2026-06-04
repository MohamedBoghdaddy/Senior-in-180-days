# Week 14 - Testing Strategy and Quality Engineering

## Goal

Build a practical test pyramid and prove quality with unit, integration, E2E, security, and performance tests.

## Phase

Phase 7: System Design, Testing, Scalability, and Reliability

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| unit tests | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| integration tests | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| E2E tests | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| security negative tests | MUST | Required for Phase 7 completion | Evidence in daily artifacts or mini-project |
| contract tests | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| load tests | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| coverage gates | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| mutation testing | NICE | Optional extension only | Evidence in portfolio extras |
| visual regression | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 131](day-131/README.md) | Test pyramid plan | `tracking/notes/day-131.md` plus a test report or test file link |
| [Day 132](day-132/README.md) | Unit test gaps and additions | `tracking/notes/day-132.md` plus a test report or test file link |
| [Day 133](day-133/README.md) | Integration test for tenant isolation | `tracking/notes/day-133.md` plus a test report or test file link |
| [Day 134](day-134/README.md) | E2E signup to task creation | `tracking/notes/day-134.md` plus a test report or test file link |
| [Day 135](day-135/README.md) | RBAC denial negative test | `tracking/notes/day-135.md` plus a test report or test file link |
| [Day 136](day-136/README.md) | OpenAPI contract validation | `tracking/notes/day-136.md` with code, docs, or command evidence |
| [Day 137](day-137/README.md) | k6 load test baseline | `tracking/notes/day-137.md` plus a test report or test file link |
| [Day 138](day-138/README.md) | Flaky test review and fix | `tracking/notes/day-138.md` plus a test report or test file link |
| [Day 139](day-139/README.md) | Coverage report and gap note | `tracking/notes/day-139.md` with code, docs, or command evidence |
| [Day 140](day-140/README.md) | Week 14 quality checkpoint | `tracking/notes/day-140-checkpoint.md` and `portfolio/evidence/week-14-week-14-quality-checkpoint.md` |

## Mini-Project

Complete [Week 14 mini-project](../mini-projects/week-14.md).

## Interview Layer

- LeetCode target: 27 counted solves this sprint.
- Easy / Medium / Hard breakdown: 0/21/6.
- DSA topic focus: Layered review of arrays, hashes, graphs, windows, greedy, intervals, DP, binary search, hard deep dive.
- Review target: Quality engineering review; one hard quality checkpoint on Day 140.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Test environment contention and resource isolation.
- Networks: HTTP tracing, request IDs, and distributed debugging.
- Databases: Fixtures, transaction rollback in tests, and test data isolation.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Build eval framework: golden dataset, hallucination tests, regression scoring, structured graders, and manual review queue.
- Product requirement: Eval report with pass/fail examples and next dataset gaps.
- Failure analysis requirement: Drill: hallucination incident found by regression eval.
- AI proof artifact: tracking/ai/week-14-ai-eval-report.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Golden dataset, retrieval precision checks, hallucination tests, human review queue, and model/version comparison.
- MLOps topic: Regression eval suite in CI, W&B/equivalent eval logging, pass/fail thresholds, and data quality checks.
- LLM topic: Eval prompts, structured graders, citation checks, and no-answer tests.
- Product/communication topic: Quality report with examples users would trust, reject, or escalate.
- Resource mapping: primary: [OpenAI evals docs](https://developers.openai.com/api/docs/guides/evals), [W&B Models](https://docs.wandb.ai/models), [IBM Generative AI Engineering](https://www.coursera.org/professional-certificates/ibm-generative-ai-engineering) evaluation sections. Optional: [CS50 AI](https://cs50.harvard.edu/ai/) ML/classification overview for evaluation vocabulary.
- Required artifact: AI eval report, golden dataset, regression tests, hallucination examples, and model/version comparison table.
- Interview explanation: Explain how to evaluate RAG, detect hallucinations, and design regression tests for AI.
- What not to study this week: Leaderboard chasing, Kaggle competitions, and black-box accuracy claims without examples.

## No-Redundancy Guardrail

- Adds this week: Turns the testing week into a real AI quality engineering sprint.
- Supports existing roadmap task: Supports test pyramid, contract validation, load baseline, flaky test fixes, and coverage review.
- Skip to avoid duplicate work: Do not replace normal tests with AI evals; add evals as a separate quality gate.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-14.md`.
