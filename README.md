# Senior in 180 Days

## Production-Grade Full-Stack Engineering System

![Duration](https://img.shields.io/badge/Duration-180_days-0B5394) ![Format](https://img.shields.io/badge/Format-artifact_driven-1D76DB) ![Focus](https://img.shields.io/badge/Focus-full_stack_AI_engineering-0E8A16)

This repository is a unified 180-day engineering transformation system. The canonical curriculum lives in [180-days-fullstack-engineer/](180-days-fullstack-engineer/).

The goal is not to say "I studied for 180 days." The goal is to produce portfolio proof: projects, deployments, architecture docs, debugging logs, code reviews, tests, incident reports, and interview-ready explanations.

> Note: a "week" in this repo is a 10-day learning sprint. The roadmap has 18 sprints, each with daily assignments and one mini-project.

## FAANG + Applied AI Upgrade

The roadmap now targets full-stack, backend, and applied AI engineering roles without turning into an ML research or course-watching plan. Software engineering remains the base; AI is introduced only when the learner has enough backend, database, deployment, and reliability context to build it responsibly.

- FAANG interview readiness: 500 non-evenly distributed LeetCode solves, pattern logs, CS fundamentals, mock interviews, and system design practice.
- Applied AI engineering: Python/data foundations, LLM fundamentals, structured outputs, tool calling, RAG, agents, evals, MLOps, observability, cost control, and production safety.
- AI product engineering: PRDs, quality metrics, UX tradeoffs, evaluation reports, cost analyses, failure analyses, and reliability notes.
- Production failure analysis: API outage, database slowdown, hallucination incident, vector search failure, cache invalidation, queue backlog, rollback, and auth incident drills.

Start with [180-days-fullstack-engineer/roadmap.md](180-days-fullstack-engineer/roadmap.md), then use [180-days-fullstack-engineer/interview-prep/leetcode-plan.md](180-days-fullstack-engineer/interview-prep/leetcode-plan.md), [180-days-fullstack-engineer/ai-engineering/production-ai-checklist.md](180-days-fullstack-engineer/ai-engineering/production-ai-checklist.md), and [180-days-fullstack-engineer/career-prep/applied-ai-readiness-scorecard.md](180-days-fullstack-engineer/career-prep/applied-ai-readiness-scorecard.md) as execution gates.

## What You Will Build

- A production-grade multi-tenant task/project SaaS capstone.
- A backend API with validation, auth, RBAC, logging, health checks, tests, and OpenAPI documentation.
- A typed frontend with React, Next.js, forms, server-state handling, accessibility checks, and E2E coverage.
- PostgreSQL and MongoDB data models with migrations, indexes, tenant isolation, query notes, and data reliability analysis.
- Dockerized local runtime, CI/CD workflows, deployment runbooks, rollback checklists, and Kubernetes concept notes.
- System design documents, ADRs, test strategy, observability notes, incident postmortems, portfolio proof, and interview stories.
- Applied AI product proof: RAG design, agent workflow design, eval report, AI incident postmortem, cost/latency notes, and production AI checklist.

## Who It Is For

- Developers preparing for full-stack or backend engineering roles.
- Engineers targeting FAANG, top AI labs, AI infrastructure companies, and modern AI startups.
- Self-taught engineers who need production-grade proof.
- Frontend engineers moving into backend, databases, DevOps, and system design.
- Backend engineers strengthening frontend integration, portfolio proof, and interview readiness.

## Time Commitment

Expect 2-4 focused hours on weekdays and longer checkpoint blocks on weekends. The resource plan is intentionally artifact-driven: study only enough to build, verify, document, or explain the current assignment.

## How To Use The Repo

1. Start at [180-days-fullstack-engineer/README.md](180-days-fullstack-engineer/README.md).
2. Follow the daily roadmap in [180-days-fullstack-engineer/roadmap.md](180-days-fullstack-engineer/roadmap.md).
3. Run `npm run tracker:serve` and open `http://localhost:3456` to use the canonical browser tracker.
4. Export progress from the tracker, run `npm run tracker:save-export -- path/to/progress.json`, then run `npm run tracker:validate`, `npm run tracker:sync`, and `npm run tracker:sync:dry-run`.
5. Complete weekly mini-projects in [180-days-fullstack-engineer/mini-projects/](180-days-fullstack-engineer/mini-projects/).
6. Build portfolio proof in [180-days-fullstack-engineer/portfolio/](180-days-fullstack-engineer/portfolio/).
7. Use templates from [180-days-fullstack-engineer/templates/](180-days-fullstack-engineer/templates/).
8. Use the curated resource map at [180-days-fullstack-engineer/resources.md](180-days-fullstack-engineer/resources.md) and the official-first resource folder at [180-days-fullstack-engineer/resources/](180-days-fullstack-engineer/resources/).
9. Finish the capstone in [180-days-fullstack-engineer/capstone/final-capstone.md](180-days-fullstack-engineer/capstone/final-capstone.md).
10. Use [180-days-fullstack-engineer/interview-prep/](180-days-fullstack-engineer/interview-prep/), [180-days-fullstack-engineer/ai-engineering/](180-days-fullstack-engineer/ai-engineering/), and [180-days-fullstack-engineer/career-prep/](180-days-fullstack-engineer/career-prep/) for the FAANG + Applied AI layers.

## Weekly Learning Map

| Week | Days | What you will learn | Core topics | Proof artifact | Cited starting points |
|------|------|---------------------|-------------|----------------|-----------------------|
| [Week 01](180-days-fullstack-engineer/week-01/README.md) | 001-010 | Build the engineering operating system for the whole roadmap. | Git workflow, branch hygiene, CLI setup, Markdown evidence, HTML/CSS/JS baseline, debugging journal, accessibility baseline. | [Roadmap Evidence CLI](180-days-fullstack-engineer/mini-projects/week-01.md) plus daily notes and a weekly review. | [Pro Git](https://git-scm.com/book/en/v2), [MDN Core Web Learning](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core), [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [web.dev Accessibility](https://web.dev/learn/accessibility/) |
| [Week 02](180-days-fullstack-engineer/week-02/README.md) | 011-020 | Turn browser fundamentals into a usable, testable frontend prototype. | DOM traversal, event propagation, forms, accessible errors, fetch, promises, browser storage, cache behavior, DevTools, performance, XSS basics. | [Accessible Task Form Prototype](180-days-fullstack-engineer/mini-projects/week-02.md) and a Phase 1 portfolio checkpoint. | [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [MDN Core Web Learning](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core), [web.dev Performance](https://web.dev/learn/performance/), [OWASP Cheat Sheet Series](https://owasp.org/www-project-cheat-sheets/) |
| [Week 03](180-days-fullstack-engineer/week-03/README.md) | 021-030 | Create the first production-shaped Node.js API skeleton. | Node runtime, event loop notes, Express structure, routing, controllers, Zod validation, error contracts, correlation IDs, health checks, unit tests, OpenAPI. | [Validated Express API Skeleton](180-days-fullstack-engineer/mini-projects/week-03.md) and an API review. | [Node.js Learn](https://nodejs.org/learn), [Express Routing](https://expressjs.com/en/guide/routing/), [Zod](https://zod.dev/), [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) |
| [Week 04](180-days-fullstack-engineer/week-04/README.md) | 031-040 | Make the backend secure enough to reason about real users and organizations. | User model, password hashing, login flow, access tokens, refresh tokens, logout, RBAC, tenant middleware, rate limiting, audit logging, auth integration tests. | [Auth and RBAC Test Harness](180-days-fullstack-engineer/mini-projects/week-04.md) and a backend security review. | [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html), [OWASP Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [OWASP Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html), [Express Guide](https://expressjs.com/) |
| [Week 05](180-days-fullstack-engineer/week-05/README.md) | 041-050 | Build the typed application shell for the capstone frontend. | Next.js App Router, layouts, navigation, design primitives, task list route, empty states, TypeScript props, component contracts, TanStack Query, loading/error states, URL filters, frontend tests. | [Task Board Frontend Shell](180-days-fullstack-engineer/mini-projects/week-05.md) and a frontend review. | [React Learn](https://react.dev/learn), [Next.js Docs](https://nextjs.org/docs), [TypeScript Docs](https://www.typescriptlang.org/docs/), [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) |
| [Week 06](180-days-fullstack-engineer/week-06/README.md) | 051-060 | Connect the frontend and backend into a user-facing workflow. | API client, error mapping, signup/login UI, project and task forms, optimistic updates, cache invalidation, E2E testing, keyboard accessibility, performance profiling. | [End-to-End Task Creation Flow](180-days-fullstack-engineer/mini-projects/week-06.md) and a Phase 3 integration checkpoint. | [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview), [Playwright](https://playwright.dev/docs/intro), [web.dev Accessibility](https://web.dev/learn/accessibility/), [web.dev Performance](https://web.dev/learn/performance/) |
| [Week 07](180-days-fullstack-engineer/week-07/README.md) | 061-070 | Design a tenant-safe relational data model. | Organizations, users, projects, tasks, comments, audit schema, migrations, foreign keys, constraints, delete behavior, row-level security or tenant filters, indexes, EXPLAIN ANALYZE, keyset pagination, rollback drill. | [Tenant-Safe Schema Migration Lab](180-days-fullstack-engineer/mini-projects/week-07.md) and a data-model review. | [PostgreSQL Documentation](https://www.postgresql.org/docs/current/), [12-Factor App](https://12factor.net/), [OWASP Cheat Sheet Series](https://owasp.org/www-project-cheat-sheets/) |
| [Week 08](180-days-fullstack-engineer/week-08/README.md) | 071-080 | Compare relational and NoSQL tradeoffs through an activity-feed module. | NoSQL decision record, MongoDB collection design, activity feed write/read paths, aggregation, pagination, tenant isolation tests, Firebase rules comparison, consistency failure analysis, cost/performance comparison. | [Activity Feed NoSQL Module](180-days-fullstack-engineer/mini-projects/week-08.md) and a Phase 4 data checkpoint. | [MongoDB Manual](https://www.mongodb.com/docs/manual/), [Firebase Security Rules](https://firebase.google.com/docs/rules), [PostgreSQL Documentation](https://www.postgresql.org/docs/current/) |
| [Week 09](180-days-fullstack-engineer/week-09/README.md) | 081-090 | Use .NET as a comparison lab for clean service boundaries. | .NET API scaffold, domain entities, value objects, application services, infrastructure adapters, dependency inversion, DTOs, validation, xUnit tests, Node vs .NET ADR. | [.NET Clean Service Comparison](180-days-fullstack-engineer/mini-projects/week-09.md) and an architecture checkpoint. | [ASP.NET Core Fundamentals](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/), [Microsoft Modern Web App Architecture](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/), [.NET Unit Testing](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test) |
| [Week 10](180-days-fullstack-engineer/week-10/README.md) | 091-100 | Practice OOP and design patterns without over-abstracting the capstone. | Encapsulation, interfaces, repository tradeoffs, strategy pattern, factory pattern, CQRS comparison, service refactor, test boundaries, pattern misuse review, architecture diagram update. | [Pattern Refactor and Review Package](180-days-fullstack-engineer/mini-projects/week-10.md) and a Phase 5 OOP checkpoint. | [.NET Design Guidelines](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/), [Martin Fowler Architecture Guide](https://martinfowler.com/architecture/), [Microsoft Modern Web App Architecture](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/) |
| [Week 11](180-days-fullstack-engineer/week-11/README.md) | 101-110 | Make the system reproducible from a fresh clone. | API Dockerfile, frontend Dockerfile, PostgreSQL/Redis Compose services, NoSQL Compose service, environment docs, health checks, startup ordering, non-root containers, image size review. | [Dockerized Local Runtime](180-days-fullstack-engineer/mini-projects/week-11.md) and a Docker checkpoint. | [Docker Docs](https://docs.docker.com/), [Docker Compose](https://docs.docker.com/compose/), [12-Factor App](https://12factor.net/) |
| [Week 12](180-days-fullstack-engineer/week-12/README.md) | 111-120 | Add delivery gates, deployment discipline, and rollback thinking. | GitHub Actions, lint/type/test jobs, integration and E2E jobs, Docker build in CI, workflow permissions, secret handling, preview deploy notes, production runbook, Kubernetes concepts, probes, resources, smoke tests. | [Preview Deploy Pipeline](180-days-fullstack-engineer/mini-projects/week-12.md) and a Phase 6 deployment checkpoint. | [GitHub Actions Docs](https://docs.github.com/en/actions), [Secure Use of GitHub Actions](https://docs.github.com/en/actions/reference/security/secure-use), [Docker Docs](https://docs.docker.com/), [Kubernetes Docs](https://kubernetes.io/docs/home/) |
| [Week 13](180-days-fullstack-engineer/week-13/README.md) | 121-130 | Explain the capstone like a senior engineer in system design terms. | High-level architecture, service boundaries, ownership map, rate limiter drill, notification system drill, cache strategy, invalidation, async jobs, capacity estimate, bottleneck analysis, mock system design writeup. | [Capstone System Design Pack](180-days-fullstack-engineer/mini-projects/week-13.md) and a design checkpoint. | [Martin Fowler Architecture Guide](https://martinfowler.com/architecture/), [Google SRE Book](https://sre.google/sre-book/table-of-contents/), [12-Factor App](https://12factor.net/), [OpenTelemetry](https://opentelemetry.io/docs/) |
| [Week 14](180-days-fullstack-engineer/week-14/README.md) | 131-140 | Build confidence through a layered testing strategy. | Test pyramid, unit gaps, integration tests, tenant isolation tests, E2E signup-to-task flow, RBAC negative tests, OpenAPI contract validation, k6 load baseline, flaky test fixes, coverage review. | [Critical Path Test Suite](180-days-fullstack-engineer/mini-projects/week-14.md) and a quality checkpoint. | [Playwright](https://playwright.dev/docs/intro), [Grafana k6](https://grafana.com/docs/k6/latest/), [OpenAPI Specification](https://spec.openapis.org/oas/latest.html), [OWASP Cheat Sheet Series](https://owasp.org/www-project-cheat-sheets/) |
| [Week 15](180-days-fullstack-engineer/week-15/README.md) | 141-150 | Practice production reliability, observability, and incident response. | Structured logging, request IDs, latency/error metrics, health/readiness checks, outage runbooks, database slowdown runbook, break-the-system drill, postmortem, alerts, SLO plan, production readiness checklist. | [Incident Drill and Production Readiness Review](180-days-fullstack-engineer/mini-projects/week-15.md) and a reliability checkpoint. | [OpenTelemetry](https://opentelemetry.io/docs/), [Google SRE Book](https://sre.google/sre-book/table-of-contents/), [Grafana Docs](https://grafana.com/docs/grafana/latest/), [Atlassian Postmortem Guide](https://www.atlassian.com/incident-management/postmortem/templates) |
| [Week 16](180-days-fullstack-engineer/week-16/README.md) | 151-160 | Close capstone gaps and harden the system before release. | Requirements gap review, threat model update, auth/session hardening, RBAC and tenant proof, file upload security, dependency audit, secrets audit, accessibility retest, performance retest, security review. | [Security Hardening Package](180-days-fullstack-engineer/mini-projects/week-16.md) and a capstone checkpoint. | [OWASP Cheat Sheet Series](https://owasp.org/www-project-cheat-sheets/), [Secure Use of GitHub Actions](https://docs.github.com/en/actions/reference/security/secure-use), [web.dev Accessibility](https://web.dev/learn/accessibility/), [web.dev Performance](https://web.dev/learn/performance/) |
| [Week 17](180-days-fullstack-engineer/week-17/README.md) | 161-170 | Package the work so another engineer or interviewer can evaluate it quickly. | Architecture final pass, ADR index, portfolio README, proof checklist, demo script, case study, release notes, changelog, stakeholder memo, senior communication rehearsal. | [Portfolio Proof Package](180-days-fullstack-engineer/mini-projects/week-17.md) and a portfolio checkpoint. | [Google Technical Writing](https://developers.google.com/tech-writing), [GitHub ReadME Project Guides](https://github.com/readme/guides), [GitHub Releases Docs](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository), [Martin Fowler Architecture Guide](https://martinfowler.com/architecture/) |
| [Week 18](180-days-fullstack-engineer/week-18/README.md) | 171-180 | Turn the portfolio into interview-ready stories and a final release. | Technical question bank, system design drill, code review interview drill, behavioral story bank, debugging story rehearsal, tradeoff explanations, known limitations, fresh-clone verification, release tag, final changelog, handoff. | [Final Release and Interview Pack](180-days-fullstack-engineer/mini-projects/week-18.md) and the Day 180 final review. | [GitHub Releases Docs](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository), [Google Technical Writing](https://developers.google.com/tech-writing), [Google SRE Book](https://sre.google/sre-book/table-of-contents/), [Pro Git](https://git-scm.com/book/en/v2) |

## Resource Discipline

- Use official documentation first when implementing or debugging.
- Use courses and videos only to unblock the current artifact.
- Cite the resource you used in the daily note, review, ADR, runbook, or portfolio artifact.
- Stop studying once you can build, test, secure, deploy, or explain the thing in front of you.

For the complete resource plan, see [180-days-fullstack-engineer/resources.md](180-days-fullstack-engineer/resources.md).

## Progress Tracking

The tracker records each day, focus, phase, completion state, reflection state, and artifact required. Every task must produce evidence.

Use the tracker through a local HTTP server so the JSON data files load correctly:

```bash
npm run tracker:serve
```

Then open `http://localhost:3456`. Avoid relying on `file://` or directly opening `tracker/index.html`, because browser JSON fetches can fail and the tracker may fall back to stale embedded data.

The canonical tracker is [tracker/index.html](tracker/index.html). The root legacy tracker pages now redirect there to preserve old links.

Daily automation flow:

```text
npm run tracker:serve
open http://localhost:3456
update tracker
export progress JSON
npm run tracker:save-export -- path/to/progress.json
npm run tracker:validate
npm run tracker:sync
npm run tracker:sync:dry-run
git status
git add .
git commit
git push
```

[tracker/data/progress.json](tracker/data/progress.json) is the repo-visible source of truth after export/save, including `meta.startDate`. Browser `localStorage` is a convenience cache for daily use; it is not visible to CI, sync scripts, or GitHub Actions until you export and save the JSON.

Use `npm run tracker:sync:dry-run` to check whether generated markdown is up to date without writing files. CI runs the same dry-run check and fails with a clear message if generated tracker markdown needs to be committed.

The existing sync GitHub Action auto-commits generated markdown only after `tracker/data/*.json` changes are pushed. Pull requests only validate and dry-run; they do not auto-commit.

## Interview Prep

Interview readiness is built from the artifacts: system design docs, code reviews, debugging logs, tests, ADRs, incident postmortems, and final capstone explanations. See [180-days-fullstack-engineer/portfolio/interview-readiness.md](180-days-fullstack-engineer/portfolio/interview-readiness.md).

## Reminders

Daily reminder automation is documented in [180-days-fullstack-engineer/reminders.md](180-days-fullstack-engineer/reminders.md). It can run locally or through GitHub Actions and can optionally email the daily plan.

## Final Outcome

By Day 180, the repo should prove you can design, build, secure, test, deploy, observe, debug, review, and explain a production-grade full-stack system.

It should also prove you can pass technical interviews, explain CS fundamentals, design and evaluate AI product workflows, operate production AI systems, and communicate tradeoffs like a Full-Stack AI Engineer, Applied AI Engineer, ML Engineer and MLOps Engineer, AI Product Engineer, and LLM Engineer.
