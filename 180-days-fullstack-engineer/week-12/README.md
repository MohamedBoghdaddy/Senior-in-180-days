# Week 12 - CI/CD, Kubernetes Concepts, and Deployment

## Goal

Add CI/CD quality gates, deployment notes, rollback thinking, and Kubernetes-ready architecture documentation.

## Phase

Phase 6: Docker, Kubernetes, CI/CD, and Deployment

## Topic Priorities

| Topic | Priority | Why it matters | Evidence required |
|---|---|---|---|
| GitHub Actions | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| CI gates | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| deployment notes | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| rollback plan | MUST | Required for Phase 6 completion | Evidence in daily artifacts or mini-project |
| Kubernetes manifests | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| secrets handling | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| preview deploys | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |
| Helm comparison | NICE | Optional extension only | Evidence in portfolio extras |
| blue-green deployment note | NICE | Optional extension only | Evidence in portfolio extras |

## Days

| Day | Focus | Artifact |
|-----|-------|----------|
| [Day 111](day-111/README.md) | CI workflow for lint, types, and tests | `tracking/notes/day-111.md` plus a test report or test file link |
| [Day 112](day-112/README.md) | Integration and E2E jobs | `tracking/notes/day-112.md` plus a test report or test file link |
| [Day 113](day-113/README.md) | Docker build in CI | `tracking/notes/day-113.md` with code, docs, or command evidence |
| [Day 114](day-114/README.md) | Workflow permissions and secret handling | `tracking/notes/day-114.md` with code, docs, or command evidence |
| [Day 115](day-115/README.md) | Preview deployment notes | `tracking/reviews/day-115-preview-deployment-notes.md` |
| [Day 116](day-116/README.md) | Production deployment runbook | `tracking/incidents/day-116-production-deployment-runbook.md` |
| [Day 117](day-117/README.md) | Kubernetes deployment concept map | `tracking/notes/day-117.md` with code, docs, or command evidence |
| [Day 118](day-118/README.md) | Kubernetes probes and resources note | `tracking/notes/day-118.md` with code, docs, or command evidence |
| [Day 119](day-119/README.md) | Rollback and smoke test checklist | `tracking/notes/day-119.md` plus a test report or test file link |
| [Day 120](day-120/README.md) | Phase 6 deployment checkpoint | `tracking/notes/day-120-checkpoint.md` and `portfolio/evidence/week-12-phase-6-deployment-checkpoint.md` |

## Mini-Project

Complete [Week 12 mini-project](../mini-projects/week-12.md).

## Interview Layer

- LeetCode target: 24 counted solves this sprint.
- Easy / Medium / Hard breakdown: 0/18/6.
- DSA topic focus: Topological sort, graph cycles, DP review, bit manipulation, hard selected mixed problems.
- Review target: Deployment-style mixed sets; two-problem deployment mock by Day 120.
- Mock interview task: see ../interview-prep/weekly-interview-checkpoints.md and score with ../interview-prep/mock-interview-rubric.md.

## CS Fundamentals Layer

- Operating systems: Runtime signals, graceful shutdown, and deployment lifecycle.
- Networks: TLS certificates, load balancers, health checks, and edge routing.
- Databases: Backups, restore drills, and rollback plans.
- Required CS proof: write the weekly artifact listed in ../interview-prep/cs-fundamentals-plan.md.

## AI Engineering Layer

- Focus: Put AI checks in CI/CD: prompt regression tests, structured-output tests, eval dataset smoke test, rate-limit config.
- Product requirement: Release gate note: what AI quality threshold blocks deploy.
- Failure analysis requirement: Drill: deployment rollback after eval regression.
- AI proof artifact: tracking/ai/week-12-ai-ci-eval-gate.md

## AI / ML / MLOps Integration Layer

- AI/ML topic: Agent/tool-calling demo with explicit permissions, MCP basics, human approval, and safe stop conditions.
- MLOps topic: Prompt regression tests, retrieval eval smoke test, structured-output CI gate, deployment rollback trigger.
- LLM topic: Tool calling, function calling, MCP server/client vocabulary, and agent trace logging.
- Product/communication topic: Release gate note: which AI failures block deploy and which trigger manual review.
- Resource mapping: primary: [Hugging Face Agents Course](https://huggingface.co/learn/agents-course), [Hugging Face MCP Course](https://huggingface.co/learn/mcp-course/unit0/introduction), [GitHub Actions docs](https://docs.github.com/en/actions). Optional: [IBM DevOps and Software Engineering](https://www.coursera.org/professional-certificates/devops-and-software-engineering) CI/CD modules.
- Required artifact: Agent/tool-calling demo, MCP note, CI eval gate, deployment runbook, and rollback checklist for AI features.
- Interview explanation: Explain safe tool execution, MCP basics, CI gates for AI, and deployment rollback for model regressions.
- What not to study this week: Multi-agent systems, self-directed agents, and unsupervised tool execution.

## No-Redundancy Guardrail

- Adds this week: Connects agents and MCP to CI/CD discipline instead of treating them as toys.
- Supports existing roadmap task: Supports deployment pipeline, smoke tests, workflow permissions, secrets, and runbook work.
- Skip to avoid duplicate work: Do not let an agent call privileged tools without auth, allowlists, logs, and human approval.

## Artifact Requirements

- Software engineering: complete the original daily artifacts and the sprint mini-project.
- Interview prep: update DSA totals, mistake types, redo status, and mock notes in ../tracking/progress.md.
- CS fundamentals: include interview notes, at least one diagram or comparison table, and a written explanation.
- AI/product engineering: link the AI artifact, product metric, cost or reliability note, and any failure drill from the weekly review.

## Exit Criteria

- [ ] All daily artifacts exist.
- [ ] The mini-project is complete.
- [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
- [ ] A weekly review exists in `tracking/reviews/week-12.md`.
