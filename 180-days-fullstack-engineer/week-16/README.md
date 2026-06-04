# Week 16 - Capstone Completion and Security Hardening

## Goal

Close core capstone requirements and prove auth, RBAC, tenant isolation, uploads, and dependency security.

## Phase

Phase 8: Capstone, Portfolio, and Interview Readiness

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| capstone feature completeness | MUST | Required for Phase 8 completion | Evidence in daily artifacts or mini-project |
| security review | MUST | Required for Phase 8 completion | Evidence in daily artifacts or mini-project |
| dependency audit | MUST | Required for Phase 8 completion | Evidence in daily artifacts or mini-project |
| tenant proof | MUST | Required for Phase 8 completion | Evidence in daily artifacts or mini-project |
| threat model | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| abuse-case tests | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| accessibility retest | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| SSO comparison | NICE | Optional extension only | Evidence in portfolio extras |
| backup drill | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 151](day-151/README.md) | Capstone requirements gap review | `tracking/reviews/day-151-capstone-requirements-gap-review.md` |
| [Day 152](day-152/README.md) | Threat model update | `tracking/notes/day-152.md` with code, docs, or command evidence |
| [Day 153](day-153/README.md) | Auth and session hardening | `tracking/notes/day-153.md` with code, docs, or command evidence |
| [Day 154](day-154/README.md) | RBAC and tenant isolation proof | `tracking/notes/day-154.md` with code, docs, or command evidence |
| [Day 155](day-155/README.md) | File upload or attachment security | `tracking/notes/day-155.md` with code, docs, or command evidence |
| [Day 156](day-156/README.md) | Dependency and secrets audit | `tracking/notes/day-156.md` with code, docs, or command evidence |
| [Day 157](day-157/README.md) | Accessibility retest | `tracking/notes/day-157.md` plus a test report or test file link |
| [Day 158](day-158/README.md) | Performance regression retest | `tracking/notes/day-158.md` plus a test report or test file link |
| [Day 159](day-159/README.md) | Security review writeup | `tracking/reviews/day-159-security-review-writeup.md` |
| [Day 160](day-160/README.md) | Week 16 capstone checkpoint | `tracking/notes/day-160-checkpoint.md` and `portfolio/evidence/week-16-week-16-capstone-checkpoint.md` |

## Mini-Project

Complete [Week 16 mini-project](../mini-projects/week-16.md).

## Interview Layer

- LeetCode target: 24 counted solves this sprint.
- Easy / Medium / Hard breakdown: 0/15/9.
- DSA topic focus: Mixed patterns, bit manipulation, hash/window, Union Find, tries, strings, hard redos, security review mocks.
- Review target: Capstone hardening mixed set; security review mock and hardening set.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Permissions, secrets, least privilege, and runtime isolation.
- Networks: Auth flows, TLS, abuse paths, and ingress protection.
- Databases: RLS, least privilege roles, audit trails, and data retention.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Harden AI: prompt injection defenses, tenant-safe retrieval, PII redaction, moderation, model routing, fallback, and audit logs.
- Product requirement: AI risk register with mitigations and acceptance criteria.
- Failure analysis requirement: Drill: prompt injection causes unsafe tool request.
- AI proof artifact: tracking/ai/week-16-ai-security-hardening.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: AI security hardening: prompt injection, data privacy, tenant-safe retrieval, output handling, overreliance, excessive agency.
- MLOps topic: Secrets management, provider key rotation, audit logs, PII redaction, safety evals, and release-blocking risk register.
- LLM topic: Guardrails, refusal/fallback behavior, tool permission checks, and indirect prompt injection tests.
- Product/communication topic: AI risk register with acceptance criteria and stakeholder-readable safety tradeoffs.
- Resource mapping: primary: [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [Google Cybersecurity Certificate](https://grow.google/certificates/cybersecurity/), [OWASP Cheat Sheets](https://owasp.org/www-project-cheat-sheets/). Optional: [OpenAI safety best practices](https://developers.openai.com/api/docs/guides/safety-best-practices).
- Required artifact: AI security hardening package with prompt-injection tests, retrieval privacy checks, audit log proof, and risk register.
- Interview explanation: Explain how to design an AI feature safely and what residual risks remain.
- What not to study this week: Red-team theatrics without mitigations, jailbreak lists without tests, and security claims without evidence.

## No-Redundancy Guardrail

- Adds this week: Maps AI-specific security onto the existing capstone hardening sprint.
- Supports existing roadmap task: Supports threat model, RBAC/tenant proof, dependency audit, secrets audit, and security review.
- Skip to avoid duplicate work: Do not bolt on AI after security; harden the exact RAG/agent workflows already built.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-16.md`.
