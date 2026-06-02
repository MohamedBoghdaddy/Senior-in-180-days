from __future__ import annotations

import textwrap
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SYSTEM = ROOT / "180-days-fullstack-engineer"


def clean(text: str) -> str:
    return "\n".join(line.rstrip() for line in textwrap.dedent(text).strip().splitlines()) + "\n"


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(clean(content), encoding="utf-8")


RESOURCES = [
    {
        "name": "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        "url": "https://www.udemy.com/course/nodejs-the-complete-guide/",
        "phase": "Phase 2",
        "days": "Days 021-040",
        "hours": "12-16",
        "mode": "Partial",
        "skip": "Skip GraphQL and Deno until the Express API, auth, validation, and tests are stable.",
        "artifact": "Express API structure, OpenAPI draft, validation tests, and auth/RBAC notes.",
    },
    {
        "name": "Docker & Kubernetes: The Practical Guide",
        "url": "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/",
        "phase": "Phase 6",
        "days": "Days 101-120",
        "hours": "14-18",
        "mode": "Partial",
        "skip": "Skip advanced cloud-provider specifics and deep Helm material unless the capstone deployment needs it.",
        "artifact": "Dockerfiles, Docker Compose, deployment checklist, and Kubernetes concept map.",
    },
    {
        "name": "Mastering Data Structures & Algorithms using C and C++",
        "url": "https://www.udemy.com/course/datastructurescncpp/",
        "phase": "Phase 1 and Phase 7",
        "days": "Days 011-020, 121-130",
        "hours": "8-12",
        "mode": "Partial",
        "skip": "Skip exhaustive C syntax and long implementation sections that do not improve complexity reasoning.",
        "artifact": "Algorithm pattern notes, complexity explanations, and interview-ready tradeoff answers.",
    },
    {
        "name": "ASP.NET Core - SOLID and Clean Architecture",
        "url": "https://www.udemy.com/course/aspnet-core-solid-and-clean-architecture-net-5-and-up/",
        "phase": "Phase 5",
        "days": "Days 081-100",
        "hours": "12-16",
        "mode": "Partial",
        "skip": "Skip repetitive setup and UI sections after the Clean Architecture boundaries are understood.",
        "artifact": ".NET comparison service, architecture ADR, xUnit tests, and dependency-boundary review.",
    },
    {
        "name": "Clean Architecture in .NET Core MVC [2025]",
        "url": "https://www.udemy.com/course/clean-architecture-in-aspnet-core-mvc/",
        "phase": "Phase 5",
        "days": "Days 081-100",
        "hours": "4-6",
        "mode": "Skim",
        "skip": "Skip duplicated Clean Architecture setup covered by the primary .NET course.",
        "artifact": "Comparison note on MVC, service boundaries, and when not to over-abstract.",
    },
    {
        "name": "Software Design and Architecture Specialization",
        "url": "https://www.coursera.org/specializations/software-design-architecture",
        "phase": "Phase 5 and Phase 7",
        "days": "Days 091-100, 121-140",
        "hours": "8-10",
        "mode": "Partial",
        "skip": "Skip broad theory unless it maps to an ADR, design doc, or capstone tradeoff.",
        "artifact": "Design docs, ADRs, architecture diagrams, and refactor rationale.",
    },
    {
        "name": "Introduction to Databases for Back-End Development",
        "url": "https://www.coursera.org/learn/introduction-to-databases-back-end-development",
        "phase": "Phase 4",
        "days": "Days 061-080",
        "hours": "8-10",
        "mode": "Partial",
        "skip": "Skip beginner database definitions once schema, migrations, and query-plan evidence exist.",
        "artifact": "PostgreSQL schema, migrations, indexes, query-plan notes, and data reliability review.",
    },
    {
        "name": "Stanford Algorithms Specialization",
        "url": "https://www.coursera.org/specializations/algorithms",
        "phase": "Phase 1 and Phase 7",
        "days": "Days 011-020, 121-130",
        "hours": "10-14",
        "mode": "Partial",
        "skip": "Skip proof-heavy sections that do not improve implementation, scaling, or interview explanation.",
        "artifact": "Complexity notes, bottleneck analysis, and algorithmic tradeoff explanations.",
    },
    {
        "name": "Cloud Computing Specialization",
        "url": "https://www.coursera.org/specializations/cloud-computing",
        "phase": "Phase 6 and Phase 7",
        "days": "Days 111-130",
        "hours": "8-12",
        "mode": "Partial",
        "skip": "Skip deep distributed-systems formalism unless it improves deployment or reliability decisions.",
        "artifact": "Cloud deployment plan, scaling plan, reliability assumptions, and rollback notes.",
    },
    {
        "name": "Hussein Nasser",
        "url": "https://www.youtube.com/@hnasr",
        "phase": "Phase 2 and Phase 7",
        "days": "Days 021-040, 121-150",
        "hours": "4-6",
        "mode": "Skim",
        "skip": "Skip unrelated opinion videos and long streams not tied to Node, databases, networking, or scaling.",
        "artifact": "Event-loop notes, database failure analysis, scaling notes, and senior explanation snippets.",
    },
    {
        "name": "TechWorld with Nana",
        "url": "https://www.youtube.com/@TechWorldwithNana",
        "phase": "Phase 6",
        "days": "Days 101-120",
        "hours": "4-6",
        "mode": "Skim",
        "skip": "Skip tools not used by the capstone deployment path.",
        "artifact": "Docker, Kubernetes, CI/CD, secrets, and deployment notes.",
    },
    {
        "name": "freeCodeCamp",
        "url": "https://www.youtube.com/@freecodecamp",
        "phase": "Phase 1, Phase 2, and Phase 4",
        "days": "Days 001-040, 061-080",
        "hours": "6-8",
        "mode": "Skim",
        "skip": "Skip full-course viewing when a targeted exercise or official doc answers the current task.",
        "artifact": "Small exercises, validation examples, SQL notes, and testable learning snippets.",
    },
    {
        "name": "NeetCode",
        "url": "https://www.youtube.com/@NeetCode",
        "phase": "Phase 1, Phase 7, and Phase 8",
        "days": "Days 011-020, 121-140, 171-180",
        "hours": "4-6",
        "mode": "Skim",
        "skip": "Skip random grinding; focus on patterns that improve interview explanation and complexity reasoning.",
        "artifact": "Pattern notes, solved examples, and interview answer rehearsal notes.",
    },
]


def resources_markdown() -> str:
    rows = [
        f"| [{item['name']}]({item['url']}) | {item['phase']} | {item['days']} | {item['hours']} | {item['mode']} | {item['skip']} | {item['artifact']} |"
        for item in RESOURCES
    ]
    phase_rows = [
        "| Phase 1 | Days 001-020 | Web foundations, Git, JavaScript, DSA basics | freeCodeCamp, NeetCode, Stanford Algorithms, DSA C/C++ | Daily notes, accessibility proof, algorithm pattern notes |",
        "| Phase 2 | Days 021-040 | Node.js, Express, auth, RBAC | NodeJS course, Hussein Nasser, freeCodeCamp | API scaffold, OpenAPI draft, auth tests, security review |",
        "| Phase 3 | Days 041-060 | React, Next.js, integration | Official React/Next docs plus existing daily resources | UI shell, forms, API integration, E2E flow |",
        "| Phase 4 | Days 061-080 | PostgreSQL, MongoDB, schema design | Intro to Databases, freeCodeCamp, official database docs | Migrations, indexes, query plans, NoSQL comparison |",
        "| Phase 5 | Days 081-100 | .NET, Clean Architecture, OOP | ASP.NET Clean Architecture courses, Software Design specialization | .NET comparison service, ADRs, pattern review |",
        "| Phase 6 | Days 101-120 | Docker, Kubernetes, CI/CD, deployment | Docker & Kubernetes course, TechWorld with Nana, Cloud Computing | Docker runtime, CI/CD workflow, deployment checklist |",
        "| Phase 7 | Days 121-150 | System design, testing, reliability | DDIA, Stanford Algorithms, Cloud Computing, Hussein Nasser, NeetCode | System design pack, test suite, incident postmortem |",
        "| Phase 8 | Days 151-180 | Capstone, portfolio, interviews | NeetCode, technical writing resources, existing roadmap resources | Final release, portfolio proof, interview answers |",
    ]
    lines = [
        "# Curated Resources",
        "",
        "The roadmap prioritizes execution over course collection. Use resources to unblock artifacts. Do not finish a full course unless the artifact requires it.",
        "",
        "## Usage Rules",
        "",
        "| Rule | Meaning |",
        "|------|---------|",
        "| Build first | Start with the daily assignment and use resources only to unblock it. |",
        "| Evidence required | Every resource session must produce notes, code, tests, diagrams, reviews, or portfolio proof. |",
        "| Partial is normal | Most courses are intentionally partial or skimmed. |",
        "| Stop when useful | Stop watching when you can build, test, secure, deploy, or explain the artifact. |",
        "",
        "## Phase Resource Map",
        "",
        "| Phase | Roadmap days | Focus | Primary resources | Expected output |",
        "|-------|--------------|-------|-------------------|-----------------|",
        *phase_rows,
        "",
        "## Required Resource Plan",
        "",
        "| Resource | Phase used in | Roadmap days used in | Estimated hours | Mode | What to skip | Expected artifact/output |",
        "|----------|---------------|----------------------|-----------------|------|--------------|--------------------------|",
        *rows,
        "",
        "## Weekly Resource Discipline",
        "",
        "| Weekly cap | Rule |",
        "|------------|------|",
        "| 4-6 hours | Normal study budget. Spend the rest of the time building. |",
        "| 8 hours | Maximum for difficult backend, data, or deployment weeks. |",
        "| 0 hours | Allowed when the artifact is already clear and implementation needs the time. |",
    ]
    return "\n".join(lines) + "\n"


TEMPLATES = {
    "design-doc-template.md": """
        # Design Doc Template

        ## Summary

        One paragraph describing the problem, proposed change, and expected outcome.

        ## Context

        - Current behavior:
        - User or system pain:
        - Constraints:
        - Non-goals:

        ## Proposal

        | Area | Decision |
        |------|----------|
        | API |  |
        | Data model |  |
        | Auth/RBAC |  |
        | Failure handling |  |
        | Observability |  |

        ## Alternatives

        | Option | Pros | Cons | Decision |
        |--------|------|------|----------|
        | Option A |  |  |  |
        | Option B |  |  |  |

        ## Risks

        | Risk | Mitigation | Owner |
        |------|------------|-------|
        |  |  |  |

        ## Verification Plan

        - Unit tests:
        - Integration tests:
        - E2E tests:
        - Security checks:
        - Performance checks:

        ## Example

        If adding task comments, document endpoint shape, ownership rules, tenant checks, indexes, and failure behavior before coding.
    """,
    "adr-template.md": """
        # Architecture Decision Record

        ## Status

        Proposed / Accepted / Superseded

        ## Context

        What decision is needed and why now?

        ## Decision

        State the decision in one or two clear sentences.

        ## Consequences

        | Positive | Negative | Follow-up |
        |----------|----------|-----------|
        |  |  |  |

        ## Alternatives Considered

        | Alternative | Why not chosen |
        |-------------|----------------|
        |  |  |

        ## Evidence

        Link tests, benchmarks, docs, issue, PR, or prototype.
    """,
    "pr-template.md": """
        # Pull Request Template

        ## Summary

        - What changed:
        - Why it changed:

        ## Artifact

        Link the roadmap day, mini-project, or capstone proof this PR supports.

        ## Checks

        | Check | Result |
        |-------|--------|
        | Tests |  |
        | Types/lint |  |
        | Security review |  |
        | Performance impact |  |
        | Documentation updated |  |

        ## Reviewer Notes

        - Risky files:
        - Expected reviewer focus:
        - Known limitations:
    """,
    "code-review-template.md": """
        # Code Review Template

        ## Scope

        - Files reviewed:
        - Feature or defect:
        - Reviewer:

        ## Findings

        | Severity | File/area | Finding | Recommendation |
        |----------|-----------|---------|----------------|
        | Must fix |  |  |  |
        | Should fix |  |  |  |
        | Nice |  |  |  |

        ## Review Checklist

        - [ ] Correct behavior for happy path and edge cases.
        - [ ] Tenant isolation and RBAC are preserved.
        - [ ] Input validation and error responses are safe.
        - [ ] Tests cover the changed behavior.
        - [ ] Logs and metrics are useful but do not leak secrets.
        - [ ] Performance does not introduce obvious N+1 or unbounded work.

        ## Example Comment

        `api/tasks.ts`: This query filters by task id but not organization id. Add tenant scope to prevent cross-tenant access and include a negative integration test.
    """,
    "incident-report-template.md": """
        # Incident Report Template

        ## Summary

        What happened, who was affected, and current status.

        ## Impact

        | Area | Impact |
        |------|--------|
        | Users |  |
        | Data |  |
        | Availability |  |
        | Security |  |

        ## Timeline

        | Time | Event |
        |------|-------|
        |  |  |

        ## Root Cause

        Explain the technical and process cause.

        ## Detection

        - Alert:
        - Log:
        - User report:

        ## Resolution

        - Immediate fix:
        - Verification:
        - Rollback:

        ## Prevention

        | Action | Owner | Due |
        |--------|-------|-----|
        |  |  |  |
    """,
    "debugging-journal-template.md": """
        # Debugging Journal Template

        ## Symptom

        What is visibly wrong? Include command output, request id, log line, or screenshot reference.

        ## Hypotheses

        | Hypothesis | Why plausible | Test | Result |
        |------------|---------------|------|--------|
        |  |  |  |  |

        ## Investigation Log

        | Step | Action | Observation | Next move |
        |------|--------|-------------|-----------|
        | 1 |  |  |  |

        ## Root Cause

        - Cause:
        - Proof:
        - Why tests missed it:

        ## Fix

        - Code/config changed:
        - Test added:
        - Risk:

        ## Example

        For a 500 on task creation, trace request id, validation result, database query, tenant id, and error mapping before changing code.
    """,
    "system-design-answer-template.md": """
        # System Design Answer Template

        ## Problem

        Restate requirements, users, and constraints.

        ## Requirements

        | Type | Requirement |
        |------|-------------|
        | Functional |  |
        | Non-functional |  |
        | Out of scope |  |

        ## High-Level Design

        - Clients:
        - API:
        - Data stores:
        - Async jobs:
        - Cache:
        - Observability:

        ## Data Model

        List core entities, ownership, indexes, and retention.

        ## Scale And Failure Modes

        | Concern | Plan |
        |---------|------|
        | Bottleneck |  |
        | Backpressure |  |
        | Data consistency |  |
        | Incident response |  |

        ## Tradeoffs

        Explain what you would choose first and what you would revisit at 10x scale.
    """,
    "testing-checklist.md": """
        # Testing Checklist

        ## Unit

        - [ ] Pure functions and validators.
        - [ ] Permission checks.
        - [ ] Error mapping.

        ## Integration

        - [ ] Auth flow.
        - [ ] RBAC allow and deny cases.
        - [ ] Tenant isolation.
        - [ ] Database constraints and migrations.

        ## E2E

        - [ ] Signup/login.
        - [ ] Create organization, project, and task.
        - [ ] Denied access for wrong role or tenant.

        ## Non-Functional

        - [ ] Load-test critical read path.
        - [ ] Accessibility check for core flows.
        - [ ] Dependency and secret scan.
    """,
    "deployment-checklist.md": """
        # Deployment Checklist

        ## Before Deploy

        - [ ] CI is green.
        - [ ] Migrations are reviewed and reversible.
        - [ ] Environment variables are documented.
        - [ ] Secrets are stored outside the repo.
        - [ ] Smoke tests are ready.

        ## Deploy

        | Step | Command or link | Result |
        |------|-----------------|--------|
        | Build image |  |  |
        | Run migrations |  |  |
        | Deploy service |  |  |
        | Smoke test |  |  |

        ## Rollback

        - Previous version:
        - Rollback command:
        - Data rollback plan:
        - Owner:
    """,
    "production-readiness-checklist.md": """
        # Production Readiness Checklist

        | Area | Requirement | Evidence |
        |------|-------------|----------|
        | Auth | Secure signup, login, logout, token/session behavior |  |
        | RBAC | Role checks with negative tests |  |
        | Tenancy | Tenant isolation at API and database boundaries |  |
        | Data | Migrations, indexes, backups, rollback notes |  |
        | API | OpenAPI docs and error contract |  |
        | Tests | Unit, integration, E2E, security, load baseline |  |
        | Runtime | Docker local setup and documented env vars |  |
        | CI/CD | Quality gates and deployment notes |  |
        | Observability | Logs, health checks, metrics, runbooks |  |
        | Security | Threat model, dependency audit, secrets handling |  |
        | Performance | Budget, measurements, bottleneck notes |  |
        | Accessibility | Keyboard and WCAG checks for core flows |  |
        | Portfolio | README, Architecture.md, ADRs, demo script |  |
    """,
    "weekly-review.md": """
        # Weekly Review Template

        ## Week

        - Week:
        - Phase:
        - Dates:
        - Mini-project:

        ## Artifacts Completed

        | Artifact | Link | Quality rating 1-5 | Notes |
        |----------|------|--------------------|-------|
        | Daily evidence |  |  |  |
        | Mini-project |  |  |  |
        | Portfolio proof |  |  |  |

        ## Engineering Signals

        | Signal | Evidence |
        |--------|----------|
        | Debugging ability |  |
        | Code review quality |  |
        | Deployment ability |  |
        | Communication quality |  |
        | System design practice |  |

        ## Next Week Adjustment

        - Keep:
        - Change:
        - Drop:
    """,
    "refactor-review.md": """
        # Refactor Review Template

        ## Target

        - File/module:
        - Current pain:
        - Risk level:

        ## Before

        | Issue | Evidence |
        |-------|----------|
        | Duplication |  |
        | Coupling |  |
        | Test gap |  |
        | Naming or structure |  |

        ## Refactor Plan

        - [ ] Preserve behavior with tests.
        - [ ] Make one small structural change.
        - [ ] Run affected checks.
        - [ ] Record before/after evidence.

        ## Review Notes

        - Behavior changed:
        - Tests added:
        - Tradeoff accepted:
    """,
    "security-review.md": """
        # Security Review Template

        ## Scope

        - Feature or route:
        - Data handled:
        - Actors:

        ## Checklist

        | Area | Question | Evidence |
        |------|----------|----------|
        | Auth | Is the user authenticated where required? |  |
        | RBAC | Are allow and deny cases tested? |  |
        | Tenancy | Can one tenant access another tenant's data? |  |
        | Input | Are request bodies, params, and files validated? |  |
        | Secrets | Are secrets outside the repo and logs? |  |
        | Errors | Do errors avoid sensitive leakage? |  |

        ## Findings

        | Finding | Severity | Fix | Verification |
        |---------|----------|-----|--------------|
        |  |  |  |  |
    """,
    "performance-review.md": """
        # Performance Review Template

        ## Scenario

        - User flow or endpoint:
        - Expected load:
        - Performance budget:

        ## Measurements

        | Metric | Baseline | Target | Result |
        |--------|----------|--------|--------|
        | p95 latency |  |  |  |
        | Error rate |  |  |  |
        | Query time |  |  |  |
        | Bundle or page load |  |  |  |

        ## Bottlenecks

        | Bottleneck | Evidence | Fix considered | Decision |
        |------------|----------|----------------|----------|
        |  |  |  |  |

        ## Follow-Up

        - [ ] Add or update regression test.
        - [ ] Document limit or tradeoff.
        - [ ] Link result in portfolio proof.
    """,
    "incident-postmortem.md": """
        # Incident Postmortem Template

        ## Summary

        - Incident:
        - Date/time:
        - Duration:
        - Impact:

        ## Timeline

        | Time | Event |
        |------|-------|
        |  |  |

        ## Root Cause

        Explain the technical cause and the system condition that allowed it.

        ## Detection And Response

        | Question | Answer |
        |----------|--------|
        | How was it detected? |  |
        | What made diagnosis hard? |  |
        | What fixed it? |  |
        | What evidence proves recovery? |  |

        ## Action Items

        | Action | Owner | Due date | Verification |
        |--------|-------|----------|--------------|
        |  |  |  |  |
    """,
    "adr.md": """
        # Architecture Decision Record

        ## Status

        Proposed / Accepted / Superseded

        ## Context

        What problem forced a decision? Include constraints, alternatives, and production concerns.

        ## Decision

        State the decision in one paragraph.

        ## Consequences

        | Positive | Negative | Mitigation |
        |----------|----------|------------|
        |  |  |  |

        ## Evidence

        - Link to code:
        - Link to tests:
        - Link to design doc or issue:
    """,
}


def capstone_markdown() -> str:
    return """
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
    """


def portfolio_readme() -> str:
    return """
    # Portfolio System

    The portfolio is the public proof layer for the 180-day roadmap. It should show what was built, why decisions were made, how quality was verified, and how the system behaves under production constraints.

    ## Required Portfolio Sections

    | Section | Required evidence |
    |---------|-------------------|
    | Product README | Problem, scope, setup, commands, deployment, limitations |
    | Architecture | Architecture.md, diagrams, service boundaries, data flow |
    | Decisions | ADR index with tradeoffs and consequences |
    | Quality | Unit, integration, E2E, security, load, accessibility checks |
    | Production | Docker, CI/CD, logs, metrics, runbooks, incident report |
    | Debugging | Debugging journals with hypotheses, evidence, root cause, fix |
    | Interview | System design answers, code review stories, tradeoff explanations |

    ## Portfolio Rule

    A portfolio link is valid only when it points to a concrete artifact: code, command output, test result, architecture doc, ADR, log, deployment note, review, or demo.
    """


def proof_checklist() -> str:
    return """
    # Portfolio Proof Checklist

    | Proof | Evidence link | Complete |
    |-------|---------------|----------|
    | Backend API with validation and error contract | `path-or-url` | - [ ] |
    | Auth and RBAC | `path-or-url` | - [ ] |
    | Tenant isolation negative tests | `path-or-url` | - [ ] |
    | Frontend core flows | `path-or-url` | - [ ] |
    | PostgreSQL schema and migrations | `path-or-url` | - [ ] |
    | Index and query-plan notes | `path-or-url` | - [ ] |
    | MongoDB or Firebase comparison module | `path-or-url` | - [ ] |
    | .NET Clean Architecture comparison | `path-or-url` | - [ ] |
    | OpenAPI docs | `path-or-url` | - [ ] |
    | Unit tests | `path-or-url` | - [ ] |
    | Integration tests | `path-or-url` | - [ ] |
    | E2E tests | `path-or-url` | - [ ] |
    | Security review | `path-or-url` | - [ ] |
    | Performance/load baseline | `path-or-url` | - [ ] |
    | Accessibility review | `path-or-url` | - [ ] |
    | Docker local setup | `path-or-url` | - [ ] |
    | CI/CD pipeline | `path-or-url` | - [ ] |
    | Deployment checklist | `path-or-url` | - [ ] |
    | Observability and health checks | `path-or-url` | - [ ] |
    | Runbook and incident report | `path-or-url` | - [ ] |
    | Debugging journal | `path-or-url` | - [ ] |
    | Architecture.md | `path-or-url` | - [ ] |
    | ADR index | `path-or-url` | - [ ] |
    | Final project README | `path-or-url` | - [ ] |
    | Demo script and release notes | `path-or-url` | - [ ] |
    """


def enhance() -> None:
    write(SYSTEM / "resources.md", resources_markdown())
    write(
        SYSTEM / "resources" / "README.md",
        """
        # Resources

        - [Curated resources](../resources.md)
        - [Six-month official-first resource roadmap](roadmap-6-months.md)
        - Daily resource links are embedded in each day file.
        - Weekly resources are summarized in each week README.
        """,
    )

    template_rows = []
    for name, content in TEMPLATES.items():
        write(SYSTEM / "templates" / name, content)
        template_rows.append(f"| [{name}]({name}) | Practical reusable engineering document |")
    template_index = "\n".join(
        [
            "# Engineering Templates",
            "",
            "Use these templates whenever a roadmap day asks for a design doc, ADR, review, debugging log, deployment evidence, or production proof.",
            "",
            "| Template | Use |",
            "|----------|-----|",
            *template_rows,
            "",
            "## Reuse Rule",
            "",
            "Copy the relevant template into `tracking/`, `portfolio/`, or the capstone repository and replace every blank with concrete evidence.",
        ]
    )
    write(SYSTEM / "templates" / "README.md", template_index)

    write(SYSTEM / "capstone" / "final-capstone.md", capstone_markdown())
    write(SYSTEM / "portfolio" / "README.md", portfolio_readme())
    write(SYSTEM / "portfolio" / "proof-checklist.md", proof_checklist())


if __name__ == "__main__":
    enhance()
