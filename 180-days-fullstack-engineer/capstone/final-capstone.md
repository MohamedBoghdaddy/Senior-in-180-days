# Final Capstone Specification

## Product

Production-grade multi-tenant task/project SaaS.

## Required Capabilities

| Area | Requirement | Evidence |
|------|-------------|----------|
| Backend | Node.js and Express API with validation, error contract, auth, RBAC, tenant middleware, OpenAPI | API code, OpenAPI file, integration tests |
| Frontend | React or Next.js UI for auth, organizations, projects, tasks, filters, empty states, and errors | UI code, screenshots, E2E tests |
| Database | PostgreSQL schema, migrations, indexes, tenant isolation, and query-plan notes | SQL/migration files, EXPLAIN notes, negative tests |
| NoSQL comparison | MongoDB or Firebase module for activity feed, notifications, or analytics | Design note, implementation, cost/security tradeoff |
| .NET comparison | Small Clean Architecture service or documented service-boundary comparison | .NET code or ADR with tests/review |
| Deployment | Docker, Docker Compose, CI/CD workflow, environment docs, preview or production deployment notes | Dockerfiles, workflow, deployment checklist |
| Testing | Unit, integration, E2E, security negative tests, load baseline, accessibility check | Test reports and commands |
| Architecture docs | Architecture.md, diagrams, ADR index, design docs, system design answer | Portfolio docs |
| Debugging logs | Debugging journals for meaningful defects and at least one incident report | Tracking logs |
| Production thinking | Logs, metrics, health checks, runbooks, postmortem, rollback plan | Production readiness checklist |

## Functional Requirements

- [ ] Users can sign up, log in, log out, and manage sessions securely.
- [ ] Users can create and switch organizations.
- [ ] Admins can invite, remove, and change roles for organization members.
- [ ] Projects and tasks support CRUD, assignment, filters, sorting, pagination, comments, and archive behavior.
- [ ] Audit logs record sensitive actions.
- [ ] API responses use a consistent error contract.
- [ ] OpenAPI documentation matches implemented routes.

## Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Security | Password hashing, RBAC, tenant isolation, validation, safe errors, dependency and secrets audit |
| Performance | Indexed queries, pagination, load-test baseline, no known N+1 critical path |
| Reliability | Health checks, structured logs, runbooks, rollback notes, incident postmortem |
| Accessibility | Keyboard navigation, labels, focus states, automated accessibility check |
| Maintainability | ADRs, design docs, code review evidence, README standards |

## README Standards

The final project README must include:

- Problem and product scope.
- Architecture diagram or text architecture.
- Local setup from a fresh clone.
- Environment variable table.
- Test commands.
- Deployment instructions.
- Security and production-readiness notes.
- Known limitations and next steps.

## Final Deliverables

- [ ] Working backend.
- [ ] Working frontend.
- [ ] Database migrations and seed strategy.
- [ ] Docker local setup.
- [ ] CI/CD workflow.
- [ ] Architecture.md.
- [ ] ADR index.
- [ ] Debugging logs.
- [ ] Incident report.
- [ ] Production readiness checklist.
- [ ] Portfolio README and proof checklist.
- [ ] Demo script and final release notes.
