from __future__ import annotations

import shutil
import textwrap
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SYSTEM = ROOT / "180-days-fullstack-engineer"


def clean(text: str) -> str:
    return textwrap.dedent(text).strip() + "\n"


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    rendered = clean(content)
    if path.suffix.lower() == ".md":
        rendered = "\n".join(line.lstrip() for line in rendered.splitlines()).strip() + "\n"
    path.write_text(rendered, encoding="utf-8")


def day_slug(day: int) -> str:
    return f"day-{day:02d}" if day < 100 else f"day-{day}"


PHASES = [
    {
        "id": 1,
        "name": "Web and Engineering Foundations",
        "days": "001-020",
        "weeks": "01-02",
        "goal": "Build the execution system, web fundamentals, Git discipline, debugging notes, and first portfolio artifacts.",
    },
    {
        "id": 2,
        "name": "Node.js, Express, and Backend Structure",
        "days": "021-040",
        "weeks": "03-04",
        "goal": "Build a production-shaped API with validation, errors, auth, RBAC, logging, and integration tests.",
    },
    {
        "id": 3,
        "name": "React, Next.js, and Integration",
        "days": "041-060",
        "weeks": "05-06",
        "goal": "Build a typed frontend, integrate with the API, handle forms, server state, accessibility, and E2E flows.",
    },
    {
        "id": 4,
        "name": "SQL, MongoDB, PostgreSQL, and Schema Design",
        "days": "061-080",
        "weeks": "07-08",
        "goal": "Design tenant-safe data models, migrations, indexes, query plans, MongoDB/Firebase comparison, and data tests.",
    },
    {
        "id": 5,
        "name": ".NET, Clean Architecture, OOP, and Design Patterns",
        "days": "081-100",
        "weeks": "09-10",
        "goal": "Use .NET and Clean Architecture as a comparison lab for OOP, dependency boundaries, patterns, and service design.",
    },
    {
        "id": 6,
        "name": "Docker, Kubernetes, CI/CD, and Deployment",
        "days": "101-120",
        "weeks": "11-12",
        "goal": "Make the system reproducible, containerized, deployable, and governed by CI/CD quality gates.",
    },
    {
        "id": 7,
        "name": "System Design, Testing, Scalability, and Reliability",
        "days": "121-150",
        "weeks": "13-15",
        "goal": "Practice senior-level design tradeoffs, testing strategy, observability, reliability drills, and incident response.",
    },
    {
        "id": 8,
        "name": "Capstone, Portfolio, and Interview Readiness",
        "days": "151-180",
        "weeks": "16-18",
        "goal": "Finish the production-grade capstone, portfolio proof, release package, and interview explanations.",
    },
]


WEEKS = [
    {
        "week": 1,
        "phase": 1,
        "title": "Engineering Operating System",
        "goal": "Create the repo operating rhythm, baseline tools, Git hygiene, and evidence system.",
        "must": ["Git workflow", "daily notes", "artifact tracking", "CLI comfort"],
        "should": ["debugging journal", "technical writing baseline", "local automation"],
        "nice": ["personal dashboard", "shell aliases"],
        "resources": ["GitHub Docs", "MDN Web Docs", "CS50x"],
        "mini": "Roadmap Evidence CLI",
        "days": [
            "Repository orientation and proof system",
            "Git workflow, branch hygiene, and commit standards",
            "CLI workflow and environment setup",
            "Markdown evidence templates",
            "HTML semantic structure refresher",
            "CSS layout and responsive rules",
            "JavaScript fundamentals audit",
            "Debugging journal and hypothesis loop",
            "Accessibility baseline note",
            "Week 1 operating-system review",
        ],
    },
    {
        "week": 2,
        "phase": 1,
        "title": "Browser, JavaScript, and Web Foundations",
        "goal": "Turn web fundamentals into inspectable UI and debugging artifacts.",
        "must": ["DOM model", "forms", "fetch", "async JavaScript"],
        "should": ["performance profiling", "browser storage", "accessibility testing"],
        "nice": ["animation polish", "Web Components comparison"],
        "resources": ["MDN JavaScript", "web.dev", "freeCodeCamp JavaScript Algorithms"],
        "mini": "Accessible Task Form Prototype",
        "days": [
            "DOM traversal and event propagation",
            "Form validation and accessible errors",
            "Fetch, promises, and failure handling",
            "Browser storage and cache behavior",
            "Async debugging with DevTools",
            "JavaScript data structures practice",
            "Client-side performance measurement",
            "Security basics: XSS and safe rendering",
            "Code review of frontend fundamentals",
            "Phase 1 portfolio checkpoint",
        ],
    },
    {
        "week": 3,
        "phase": 2,
        "title": "Node.js and Express API Foundations",
        "goal": "Build a maintainable Express API with validation, routing, errors, and tests.",
        "must": ["Express routing", "middleware", "validation", "error contracts"],
        "should": ["OpenAPI draft", "service boundaries", "request logging"],
        "nice": ["NestJS comparison", "generated API client"],
        "resources": ["Node.js Docs", "Express Docs", "OpenAPI Initiative"],
        "mini": "Validated Express API Skeleton",
        "days": [
            "Node runtime and event loop notes",
            "Express project structure",
            "Routing and controller boundaries",
            "Zod validation for body, params, and query",
            "Central error contract",
            "Request logging and correlation IDs",
            "Health endpoint and readiness behavior",
            "Unit tests for validators and services",
            "OpenAPI contract draft",
            "Week 3 API review",
        ],
    },
    {
        "week": 4,
        "phase": 2,
        "title": "Authentication, Authorization, and Backend Production",
        "goal": "Implement auth, RBAC, tenant boundaries, rate limiting, and integration tests.",
        "must": ["password hashing", "JWT sessions", "RBAC", "tenant middleware"],
        "should": ["refresh rotation", "rate limits", "audit logs"],
        "nice": ["OAuth comparison", "permission matrix UI"],
        "resources": ["OWASP Cheat Sheets", "JWT Introduction", "Supertest"],
        "mini": "Auth and RBAC Test Harness",
        "days": [
            "User model and password hashing",
            "Login and access-token flow",
            "Refresh token and logout behavior",
            "RBAC permission matrix",
            "Organization-scoped middleware",
            "Rate limiting and abuse controls",
            "Audit logging for sensitive actions",
            "Integration tests for auth and RBAC",
            "Security review of auth flows",
            "Phase 2 backend checkpoint",
        ],
    },
    {
        "week": 5,
        "phase": 3,
        "title": "React and Next.js Application Shell",
        "goal": "Build the frontend shell, routing, layout, design primitives, and server-state plan.",
        "must": ["Next.js routing", "TypeScript components", "layout", "state boundaries"],
        "should": ["design primitives", "loading states", "error states"],
        "nice": ["Storybook", "visual regression"],
        "resources": ["React Docs", "Next.js Docs", "TanStack Query"],
        "mini": "Task Board Frontend Shell",
        "days": [
            "Next.js app router shell",
            "Navigation and layout system",
            "Design-system primitives",
            "Task list route and empty states",
            "TypeScript props and component contracts",
            "TanStack Query setup",
            "Loading and error states",
            "URL search params for filters",
            "Frontend test setup",
            "Week 5 frontend review",
        ],
    },
    {
        "week": 6,
        "phase": 3,
        "title": "Full-Stack Integration and UX Quality",
        "goal": "Connect the frontend and backend through typed contracts, forms, E2E tests, and accessibility proof.",
        "must": ["API integration", "forms", "E2E flows", "accessibility"],
        "should": ["optimistic updates", "cache invalidation", "performance profiling"],
        "nice": ["offline queue", "storybook docs"],
        "resources": ["React Hook Form", "Playwright", "WAI Accessibility"],
        "mini": "End-to-End Task Creation Flow",
        "days": [
            "API client and error mapping",
            "Signup and login UI",
            "Project creation form",
            "Task creation and assignment form",
            "Optimistic update and invalidation rules",
            "E2E test for critical path",
            "Accessibility audit with keyboard flow",
            "Frontend performance profile",
            "Code review of integration boundary",
            "Phase 3 integration checkpoint",
        ],
    },
    {
        "week": 7,
        "phase": 4,
        "title": "PostgreSQL Schema, Migrations, and Query Design",
        "goal": "Design the relational core with versioned migrations, tenant isolation, indexes, and query plans.",
        "must": ["schema design", "migrations", "foreign keys", "indexes"],
        "should": ["RLS", "query plans", "keyset pagination"],
        "nice": ["pgTAP", "read replica plan"],
        "resources": ["PostgreSQL Docs", "Supabase Docs", "Use The Index Luke"],
        "mini": "Tenant-Safe Schema Migration Lab",
        "days": [
            "Organization and user schema",
            "Project, task, comment, and audit schema",
            "Versioned migration workflow",
            "Foreign keys, constraints, and delete behavior",
            "Row-level security or tenant filters",
            "Role-aware database access policy",
            "Indexes and EXPLAIN ANALYZE",
            "Keyset pagination for task lists",
            "Migration rollback drill",
            "Week 7 data-model review",
        ],
    },
    {
        "week": 8,
        "phase": 4,
        "title": "MongoDB, NoSQL Tradeoffs, and Data Reliability",
        "goal": "Implement a NoSQL comparison module and document tradeoffs against the relational model.",
        "must": ["MongoDB modeling", "NoSQL tradeoffs", "data consistency", "tenant isolation"],
        "should": ["aggregation", "change history", "cost analysis"],
        "nice": ["Firebase comparison", "event sourcing sketch"],
        "resources": ["MongoDB Docs", "Firebase Docs", "DDIA"],
        "mini": "Activity Feed NoSQL Module",
        "days": [
            "NoSQL decision record",
            "MongoDB collection design",
            "Activity feed write path",
            "Activity feed read path",
            "Aggregation and pagination",
            "NoSQL tenant isolation tests",
            "Firebase rules comparison note",
            "Data consistency failure analysis",
            "Cost and performance comparison",
            "Phase 4 data checkpoint",
        ],
    },
    {
        "week": 9,
        "phase": 5,
        "title": ".NET Clean Architecture Foundations",
        "goal": "Build a small .NET service to compare architecture boundaries, dependency inversion, and OOP design.",
        "must": [".NET API", "Clean Architecture layers", "dependency inversion", "xUnit tests"],
        "should": ["CQRS comparison", "FluentValidation", "domain modeling"],
        "nice": ["MediatR", "minimal APIs comparison"],
        "resources": ["Microsoft .NET Docs", "Clean Architecture notes", "xUnit Docs"],
        "mini": ".NET Clean Service Comparison",
        "days": [
            ".NET API scaffold",
            "Domain entities and value objects",
            "Application service boundary",
            "Infrastructure adapter boundary",
            "Dependency inversion review",
            "DTOs and validation",
            "xUnit tests for domain rules",
            "Node vs .NET architecture ADR",
            "Code review of Clean Architecture layers",
            "Week 9 architecture checkpoint",
        ],
    },
    {
        "week": 10,
        "phase": 5,
        "title": "OOP, Design Patterns, and Service Boundaries",
        "goal": "Apply OOP and pattern thinking only where it clarifies production code and tradeoffs.",
        "must": ["encapsulation", "interfaces", "repository tradeoff", "strategy pattern"],
        "should": ["factory pattern", "CQRS tradeoff", "test seams"],
        "nice": ["domain events", "hexagonal architecture comparison"],
        "resources": ["Microsoft Design Guidelines", "Refactoring", "Google Code Review"],
        "mini": "Pattern Refactor and Review Package",
        "days": [
            "OOP encapsulation review",
            "Repository pattern tradeoff",
            "Strategy pattern in permission checks",
            "Factory pattern for service construction",
            "CQRS and command handler comparison",
            "Refactor one capstone service",
            "Test seam and mock boundary review",
            "Pattern misuse code review",
            "Architecture diagram update",
            "Phase 5 OOP checkpoint",
        ],
    },
    {
        "week": 11,
        "phase": 6,
        "title": "Docker and Local Runtime",
        "goal": "Make every service run from a clean checkout with Docker, Compose, health checks, and documented environment variables.",
        "must": ["Dockerfile", "Docker Compose", "health checks", "env docs"],
        "should": ["non-root containers", "image size", "startup order"],
        "nice": ["multi-arch build", "container registry"],
        "resources": ["Docker Docs", "Docker Compose Docs", "OWASP Docker Cheat Sheet"],
        "mini": "Dockerized Local Runtime",
        "days": [
            "API Dockerfile",
            "Frontend Dockerfile",
            "Database and Redis Compose services",
            "NoSQL service in Compose",
            "Environment variable documentation",
            "Health checks and startup ordering",
            "Non-root container hardening",
            "Image size and layer review",
            "Fresh clone setup test",
            "Week 11 Docker checkpoint",
        ],
    },
    {
        "week": 12,
        "phase": 6,
        "title": "CI/CD, Kubernetes Concepts, and Deployment",
        "goal": "Add CI/CD quality gates, deployment notes, rollback thinking, and Kubernetes-ready architecture documentation.",
        "must": ["GitHub Actions", "CI gates", "deployment notes", "rollback plan"],
        "should": ["Kubernetes manifests", "secrets handling", "preview deploys"],
        "nice": ["Helm comparison", "blue-green deployment note"],
        "resources": ["GitHub Actions Docs", "Kubernetes Docs", "Vercel Docs"],
        "mini": "Preview Deploy Pipeline",
        "days": [
            "CI workflow for lint, types, and tests",
            "Integration and E2E jobs",
            "Docker build in CI",
            "Workflow permissions and secret handling",
            "Preview deployment notes",
            "Production deployment runbook",
            "Kubernetes deployment concept map",
            "Kubernetes probes and resources note",
            "Rollback and smoke test checklist",
            "Phase 6 deployment checkpoint",
        ],
    },
    {
        "week": 13,
        "phase": 7,
        "title": "System Design and Scalability",
        "goal": "Practice senior system design with capstone-specific scaling, bottleneck, and tradeoff artifacts.",
        "must": ["system boundaries", "scaling plan", "cache strategy", "async jobs"],
        "should": ["rate limiter design", "read model", "capacity estimate"],
        "nice": ["multi-region note", "cost model"],
        "resources": ["DDIA", "System Design Primer", "ByteByteGo"],
        "mini": "Capstone System Design Pack",
        "days": [
            "High-level architecture diagram",
            "Service boundary and ownership map",
            "Rate limiter design drill",
            "Notification system design drill",
            "Cache strategy and invalidation plan",
            "Async job queue design",
            "Capacity estimate for 100K users",
            "Bottleneck analysis at 10x traffic",
            "System design mock interview writeup",
            "Week 13 design checkpoint",
        ],
    },
    {
        "week": 14,
        "phase": 7,
        "title": "Testing Strategy and Quality Engineering",
        "goal": "Build a practical test pyramid and prove quality with unit, integration, E2E, security, and performance tests.",
        "must": ["unit tests", "integration tests", "E2E tests", "security negative tests"],
        "should": ["contract tests", "load tests", "coverage gates"],
        "nice": ["mutation testing", "visual regression"],
        "resources": ["Jest Docs", "Playwright Docs", "k6 Docs"],
        "mini": "Critical Path Test Suite",
        "days": [
            "Test pyramid plan",
            "Unit test gaps and additions",
            "Integration test for tenant isolation",
            "E2E signup to task creation",
            "RBAC denial negative test",
            "OpenAPI contract validation",
            "k6 load test baseline",
            "Flaky test review and fix",
            "Coverage report and gap note",
            "Week 14 quality checkpoint",
        ],
    },
    {
        "week": 15,
        "phase": 7,
        "title": "Reliability, Observability, and Incident Response",
        "goal": "Add logs, metrics, runbooks, failure drills, postmortems, and production readiness evidence.",
        "must": ["structured logs", "metrics", "runbooks", "postmortem"],
        "should": ["tracing", "alerts", "SLOs"],
        "nice": ["Grafana dashboard", "chaos drill"],
        "resources": ["Google SRE", "OpenTelemetry Docs", "Sentry Docs"],
        "mini": "Incident Drill and Production Readiness Review",
        "days": [
            "Structured logging with request IDs",
            "Metrics for latency and errors",
            "Health, readiness, and dependency checks",
            "Runbook for API outage",
            "Runbook for database slowdown",
            "Break-the-system drill: database unavailable",
            "Incident postmortem",
            "Alert and SLO plan",
            "Production readiness checklist",
            "Phase 7 reliability checkpoint",
        ],
    },
    {
        "week": 16,
        "phase": 8,
        "title": "Capstone Completion and Security Hardening",
        "goal": "Close core capstone requirements and prove auth, RBAC, tenant isolation, uploads, and dependency security.",
        "must": ["capstone feature completeness", "security review", "dependency audit", "tenant proof"],
        "should": ["threat model", "abuse-case tests", "accessibility retest"],
        "nice": ["SSO comparison", "backup drill"],
        "resources": ["OWASP Top 10", "OWASP Cheat Sheets", "Lighthouse"],
        "mini": "Security Hardening Package",
        "days": [
            "Capstone requirements gap review",
            "Threat model update",
            "Auth and session hardening",
            "RBAC and tenant isolation proof",
            "File upload or attachment security",
            "Dependency and secrets audit",
            "Accessibility retest",
            "Performance regression retest",
            "Security review writeup",
            "Week 16 capstone checkpoint",
        ],
    },
    {
        "week": 17,
        "phase": 8,
        "title": "Portfolio Proof and Senior Communication",
        "goal": "Turn the capstone into portfolio evidence with architecture docs, ADRs, demos, and senior-level narratives.",
        "must": ["Architecture.md", "portfolio README", "ADR index", "demo script"],
        "should": ["case study", "release notes", "leadership narrative"],
        "nice": ["demo video", "live deployment"],
        "resources": ["Google Technical Writing", "MADR", "Make a README"],
        "mini": "Portfolio Proof Package",
        "days": [
            "Architecture.md final pass",
            "ADR index and decision cleanup",
            "Portfolio README",
            "Proof checklist with links",
            "Demo script",
            "Case study writeup",
            "Release notes and changelog",
            "Stakeholder update memo",
            "Senior communication rehearsal",
            "Week 17 portfolio checkpoint",
        ],
    },
    {
        "week": 18,
        "phase": 8,
        "title": "Interview Readiness and Final Release",
        "goal": "Prepare interview-ready explanations, system design answers, code review stories, and a final release.",
        "must": ["technical interview prep", "system design prep", "code review stories", "release tag"],
        "should": ["behavioral stories", "mock interviews", "known limitations"],
        "nice": ["public demo", "case study PDF"],
        "resources": ["interviewing.io", "ByteByteGo", "Google Code Review"],
        "mini": "Final Release and Interview Pack",
        "days": [
            "Technical question bank review",
            "System design interview drill",
            "Code review interview drill",
            "Behavioral story bank",
            "Debugging story rehearsal",
            "Tradeoff explanation rehearsal",
            "Known limitations and next steps",
            "Final fresh-clone verification",
            "Release tag and final changelog",
            "Day 180 final review and handoff",
        ],
    },
]


RESOURCE_LINKS = {
    "GitHub Docs": "https://docs.github.com/",
    "MDN Web Docs": "https://developer.mozilla.org/",
    "CS50x": "https://cs50.harvard.edu/x/",
    "MDN JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "web.dev": "https://web.dev/learn",
    "freeCodeCamp JavaScript Algorithms": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
    "Node.js Docs": "https://nodejs.org/en/learn",
    "Express Docs": "https://expressjs.com/",
    "OpenAPI Initiative": "https://www.openapis.org/",
    "OWASP Cheat Sheets": "https://cheatsheetseries.owasp.org/",
    "JWT Introduction": "https://jwt.io/introduction",
    "Supertest": "https://github.com/ladjs/supertest",
    "React Docs": "https://react.dev/",
    "Next.js Docs": "https://nextjs.org/docs",
    "TanStack Query": "https://tanstack.com/query/latest",
    "React Hook Form": "https://react-hook-form.com/",
    "Playwright": "https://playwright.dev/",
    "WAI Accessibility": "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
    "PostgreSQL Docs": "https://www.postgresql.org/docs/",
    "Supabase Docs": "https://supabase.com/docs",
    "Use The Index Luke": "https://use-the-index-luke.com/",
    "MongoDB Docs": "https://www.mongodb.com/docs/",
    "Firebase Docs": "https://firebase.google.com/docs",
    "DDIA": "https://dataintensive.net/",
    "Microsoft .NET Docs": "https://learn.microsoft.com/en-us/dotnet/",
    "Clean Architecture notes": "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures",
    "xUnit Docs": "https://xunit.net/",
    "Microsoft Design Guidelines": "https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/",
    "Refactoring": "https://refactoring.com/",
    "Google Code Review": "https://google.github.io/eng-practices/review/",
    "Docker Docs": "https://docs.docker.com/",
    "Docker Compose Docs": "https://docs.docker.com/compose/",
    "OWASP Docker Cheat Sheet": "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html",
    "GitHub Actions Docs": "https://docs.github.com/en/actions",
    "Kubernetes Docs": "https://kubernetes.io/docs/home/",
    "Vercel Docs": "https://vercel.com/docs",
    "System Design Primer": "https://github.com/donnemartin/system-design-primer",
    "ByteByteGo": "https://bytebytego.com/",
    "Jest Docs": "https://jestjs.io/docs/getting-started",
    "Playwright Docs": "https://playwright.dev/",
    "k6 Docs": "https://grafana.com/docs/k6/latest/",
    "Google SRE": "https://sre.google/sre-book/table-of-contents/",
    "OpenTelemetry Docs": "https://opentelemetry.io/docs/",
    "Sentry Docs": "https://docs.sentry.io/",
    "OWASP Top 10": "https://owasp.org/www-project-top-ten/",
    "Lighthouse": "https://developer.chrome.com/docs/lighthouse/overview/",
    "Google Technical Writing": "https://developers.google.com/tech-writing",
    "MADR": "https://adr.github.io/madr/",
    "Make a README": "https://www.makeareadme.com/",
    "interviewing.io": "https://interviewing.io/",
}


def phase_for_week(week: dict) -> dict:
    return next(phase for phase in PHASES if phase["id"] == week["phase"])


def link_resource(name: str) -> str:
    return f"[{name}]({RESOURCE_LINKS[name]})"


def artifact_for_day(day: int, week: dict, title: str) -> str:
    short = title.lower().replace(" ", "-").replace("/", "-").replace(":", "")
    if day % 10 == 0:
        return f"`tracking/notes/day-{day:02d}-checkpoint.md` and `portfolio/evidence/week-{week['week']:02d}-{short}.md`"
    if "test" in title.lower() or "e2e" in title.lower():
        return f"`tracking/notes/{day_slug(day)}.md` plus a test report or test file link"
    if "adr" in title.lower() or "decision" in title.lower() or "tradeoff" in title.lower():
        return f"`tracking/adrs/day-{day:02d}-{short}.md`"
    if "review" in title.lower():
        return f"`tracking/reviews/day-{day:02d}-{short}.md`"
    if "diagram" in title.lower() or "architecture" in title.lower():
        return f"`portfolio/architecture/day-{day:02d}-{short}.md`"
    if "runbook" in title.lower() or "incident" in title.lower():
        return f"`tracking/incidents/day-{day:02d}-{short}.md`"
    return f"`tracking/notes/{day_slug(day)}.md` with code, docs, or command evidence"


def make_system_readme() -> None:
    phase_rows = "\n".join(
        f"| Phase {p['id']} | {p['days']} | Weeks {p['weeks']} | {p['name']} | {p['goal']} |"
        for p in PHASES
    )
    week_rows = "\n".join(
        f"| [Week {w['week']:02d}](week-{w['week']:02d}/README.md) | Phase {w['phase']} | {w['title']} | [Mini-project](mini-projects/week-{w['week']:02d}.md) |"
        for w in WEEKS
    )
    write(
        SYSTEM / "README.md",
        f"""
        # 180 Days Full-Stack Engineer

        ![Duration](https://img.shields.io/badge/Duration-180_days-0B5394) ![Format](https://img.shields.io/badge/Format-artifact_driven-1D76DB) ![Outcome](https://img.shields.io/badge/Outcome-production_grade-0E8A16)

        This is the canonical 6-month engineering transformation system for the repository. It fuses the original 60-day structure, the 90-day production content, the external roadmap improvements, curated resources, portfolio proof, and senior engineering expectations into one path.

        The outcome is not "I studied for 180 days." The outcome is evidence that you can build, debug, test, deploy, explain, and improve production-grade systems.

        ## Who This Is For

        | Profile | Fit |
        |---------|-----|
        | Full-stack learner | Needs one practical path from web basics to deployment and interviews |
        | Backend-focused engineer | Needs stronger APIs, databases, architecture, reliability, and system design |
        | Self-taught developer | Needs artifact-driven proof for interviews and portfolio review |
        | Working engineer | Needs structured progression without abandoning production expectations |

        ## Time Commitment

        | Day type | Expected time | Output |
        |----------|---------------|--------|
        | Weekday | 2-4 focused hours | one artifact, note, test, review, or doc |
        | Weekend or checkpoint | 4-6 focused hours | mini-project, review, or capstone milestone |

        ## Phases

        | Phase | Days | Weeks | Focus | Goal |
        |------:|------|-------|-------|------|
        {phase_rows}

        ## Weekly Execution

        | Week | Phase | Focus | Mini-project |
        |------|-------|-------|--------------|
        {week_rows}

        ## How To Use This System

        1. Set a start date in [tracking/progress.md](tracking/progress.md).
        2. Open the current [day](week-01/day-01/README.md) file.
        3. Complete the assignment and commit the required artifact.
        4. Update [tracking/progress.md](tracking/progress.md).
        5. Complete the weekly mini-project in [mini-projects/](mini-projects/README.md).
        6. Keep portfolio evidence in [portfolio/proof-checklist.md](portfolio/proof-checklist.md).
        7. Use [resources.md](resources.md) for curated resources and [resources/roadmap-6-months.md](resources/roadmap-6-months.md) for the official-first six-month map.
        8. Use reusable engineering templates from [templates/](templates/).
        9. Finish the capstone in [capstone/final-capstone.md](capstone/final-capstone.md).

        ## Interview Prep

        Interview prep is embedded into each week through technical explanations, code review thinking, system design drills, debugging stories, and capstone narratives. Final packaging happens in [portfolio/interview-readiness.md](portfolio/interview-readiness.md).

        ## Reminders

        Daily reminder automation is documented in [reminders.md](reminders.md). It reads the day files, calculates the current day from `START_DATE`, prints the daily plan, and can optionally email it through SMTP secrets.

        ## Capstone

        The capstone is a production-grade multi-tenant task/project SaaS. The complete specification lives in [capstone/final-capstone.md](capstone/final-capstone.md).

        ## Final Outcomes

        - A full-stack SaaS capstone with auth, RBAC, database schema, migrations, API docs, tests, Docker, CI/CD, observability, security, performance, accessibility, and deployment notes.
        - A portfolio proof checklist with real links.
        - Architecture docs, ADRs, debugging logs, code reviews, incident postmortems, and system design explanations.
        - Interview-ready stories about design tradeoffs, failures, reviews, and production decisions.
        """,
    )


def make_week_and_day_files() -> None:
    day_index = []
    for week in WEEKS:
        phase = phase_for_week(week)
        week_dir = SYSTEM / f"week-{week['week']:02d}"
        start = (week["week"] - 1) * 10 + 1
        end = start + 9
        days_rows = []
        for offset, title in enumerate(week["days"]):
            day = start + offset
            slug = day_slug(day)
            estimated = "2-4 hours" if offset not in (4, 9) else "3-5 hours"
            artifact = artifact_for_day(day, week, title)
            linked_resources = "\n".join(f"- {link_resource(r)}" for r in week["resources"])
            topics = ", ".join(week["must"][:2])
            days_rows.append(f"| [Day {day:03d}](day-{day:02d}/README.md) | {title} | {artifact} |")
            day_index.append(f"| [Day {day:03d}](week-{week['week']:02d}/day-{day:02d}/README.md) | {title} | Week {week['week']:02d} | Phase {week['phase']} | {artifact} |")
            write(
                week_dir / f"day-{day:02d}" / "README.md",
                f"""
                # Day {day:02d} - {title}

                ## Goal

                Produce practical evidence for **{week['title']}** by completing the daily objective and committing the required artifact.

                ## Topics

                | Priority | Topics | Why it matters |
                |----------|--------|----------------|
                | MUST | {", ".join(week["must"])} | Required to complete this phase and keep the capstone production-ready |
                | SHOULD | {", ".join(week["should"])} | Strong senior signal when time allows |
                | NICE | {", ".join(week["nice"])} | Optional extension after required work is complete |

                ## Resources

                {linked_resources}

                ## Assignment

                | Field | Daily plan |
                |-------|------------|
                | Primary objective | {title} |
                | Study material | Review the resources above only as needed for the artifact |
                | Practical task | Write notes, commands, diagrams, tests, or review findings tied to {topics} |
                | Build task | Add or improve one capstone-relevant artifact |
                | Reflection/output to commit | Explain what changed, why it matters, and how you would defend it in an interview |
                | Estimated time | {estimated} |
                | Why this matters | This creates evidence for Phase {week['phase']}: {phase['name']} |
                | Artifact required | {artifact} |

                ## Exit Criteria

                - [ ] The required artifact exists.
                - [ ] The artifact is linked from [../../tracking/progress.md](../../tracking/progress.md) or the relevant portfolio checklist.
                - [ ] Security, testing, and maintainability impact were considered.
                - [ ] The work can be explained in a short interview answer.

                ## Artifact to Commit

                {artifact}

                ## Reflection Prompt

                What did this artifact prove about your ability to build, debug, test, deploy, or explain a production system?
                """,
            )

        priority_rows = "\n".join(
            [
                f"| {topic} | MUST | Required for Phase {week['phase']} completion | Evidence in daily artifacts or mini-project |"
                for topic in week["must"]
            ]
            + [
                f"| {topic} | SHOULD | Important senior signal if time allows | Evidence in review notes or capstone docs |"
                for topic in week["should"]
            ]
            + [
                f"| {topic} | NICE | Optional extension only | Evidence in portfolio extras |"
                for topic in week["nice"]
            ]
        )
        write(
            week_dir / "README.md",
            f"""
            # Week {week['week']:02d} - {week['title']}

            ## Goal

            {week['goal']}

            ## Phase

            Phase {phase['id']}: {phase['name']}

            ## Topic Priorities

            | Topic | Priority | Why it matters | Evidence required |
            |---|---|---|---|
            {priority_rows}

            ## Days

            | Day | Focus | Artifact |
            |-----|-------|----------|
            {chr(10).join(days_rows)}

            ## Mini-Project

            Complete [Week {week['week']:02d} mini-project](../mini-projects/week-{week['week']:02d}.md).

            ## Exit Criteria

            - [ ] All daily artifacts exist.
            - [ ] The mini-project is complete.
            - [ ] Progress is updated in [../tracking/progress.md](../tracking/progress.md).
            - [ ] A weekly review exists in `tracking/reviews/week-{week['week']:02d}.md`.
            """,
        )

    write(
        SYSTEM / "roadmap.md",
        f"""
        # Day 1 to Day 180 Roadmap

        | Day | Focus | Week | Phase | Artifact |
        |---:|---|---|---|---|
        {chr(10).join(day_index)}
        """,
    )


def make_mini_projects() -> None:
    rows = []
    for week in WEEKS:
        phase = phase_for_week(week)
        rows.append(f"| [Week {week['week']:02d}](week-{week['week']:02d}.md) | {week['mini']} | Phase {week['phase']} |")
        write(
            SYSTEM / "mini-projects" / f"week-{week['week']:02d}.md",
            f"""
            # Week {week['week']:02d} Mini-Project - {week['mini']}

            ## Objective

            Build a focused proof artifact for **{week['title']}**.

            ## Requirements

            - Connect the artifact to the production-grade capstone.
            - Use at least one MUST topic from the week.
            - Include commands, screenshots, logs, tests, diagrams, or docs as evidence.

            ## Security Requirement

            Identify one auth, RBAC, tenant isolation, secrets, input validation, dependency, or abuse-prevention concern.

            ## Testing Requirement

            Include an automated test, manual verification checklist, or review evidence.

            ## Documentation Requirement

            Document objective, implementation, tradeoffs, verification, and remaining risk.

            ## Definition of Done

            - [ ] Artifact is committed.
            - [ ] Evidence is linked in [../tracking/progress.md](../tracking/progress.md).
            - [ ] The work is referenced in [../portfolio/proof-checklist.md](../portfolio/proof-checklist.md) if portfolio-relevant.
            - [ ] You can explain how it supports Phase {phase['id']}: {phase['name']}.
            """,
        )

    write(
        SYSTEM / "mini-projects" / "README.md",
        f"""
        # Mini-Projects

        | Week | Mini-project | Phase |
        |------|--------------|-------|
        {chr(10).join(rows)}
        """,
    )


def make_tracking() -> None:
    rows = []
    priority_rows = []
    for week in WEEKS:
        phase = phase_for_week(week)
        start = (week["week"] - 1) * 10 + 1
        for offset, title in enumerate(week["days"]):
            day = start + offset
            artifact = artifact_for_day(day, week, title)
            rows.append(f"| {day:03d} | [Day {day:03d}](../week-{week['week']:02d}/day-{day:02d}/README.md) | {title} | Phase {week['phase']} | - [ ] | - [ ] | {artifact} |")
        for priority, why, topics in [
            ("MUST", "Required to complete the 180-day plan", week["must"]),
            ("SHOULD", "Important but reducible if time is tight", week["should"]),
            ("NICE", "Optional extension only", week["nice"]),
        ]:
            for topic in topics:
                priority_rows.append(f"| Week {week['week']:02d} | {phase['name']} | {topic} | {priority} | {why} | Week evidence or mini-project |")

    write(
        SYSTEM / "tracking" / "progress.md",
        f"""
        # Progress Tracker

        | Day | Link | Focus | Phase | Complete | Reflection | Artifact |
        |---:|---|---|---|---|---|---|
        {chr(10).join(rows)}
        """,
    )
    write(
        SYSTEM / "tracking" / "topic-priority-map.md",
        f"""
        # Topic Priority Map

        | Week | Phase | Topic | Priority | Why it matters | Evidence required |
        |------|-------|-------|----------|----------------|-------------------|
        {chr(10).join(priority_rows)}
        """,
    )
    write(
        SYSTEM / "tracking" / "migration-notes.md",
        """
        # Migration Notes

        ## Sources Merged

        | Source | Destination |
        |--------|-------------|
        | Original 60-day roadmap | Web, Node, React, database, testing, deployment, and capstone days |
        | Existing 90-day production content | Break-the-system drills, redesign reviews, Docker, Kubernetes, observability, system design, incident response, and portfolio narrative |
        | External roadmap improvements | 6-month phase structure, curated resources, cloud/devops, AI-adjacent production thinking, communication, and portfolio proof |
        | Curated resources | `resources.md`, `resources/roadmap-6-months.md`, and daily resource sections |

        ## Removed As Duplicates

        - Old archive folders.
        - Old `90-days-fullstack-engineer/` tree.
        - Top-level generated day/module/template/resource folders after migration into `180-days-fullstack-engineer/`.
        """,
    )
    write(
        SYSTEM / "reminders.md",
        """
        # Daily Reminder System

        ## Architecture Overview

        | Component | Responsibility |
        |-----------|----------------|
        | `.github/workflows/daily-plan-reminder.yml` | Runs the reminder on a cron schedule or manual trigger |
        | `scripts/daily_reminder.py` | Calculates the roadmap day, parses the day README, prints the reminder, and optionally sends email |
        | `START_DATE` | Defines Day 1 of the 180-day roadmap |
        | `ROADMAP_PATH` | Allows the script to parse a different roadmap root when needed |
        | SMTP secrets | Enable optional email delivery without storing credentials in the repo |

        The workflow reads the daily files under `180-days-fullstack-engineer/week-XX/day-XXX/README.md` and extracts Goal, Topics, Resources, Assignment, Exit Criteria, and Artifact to Commit.

        ## Workflow Behavior

        The workflow runs daily at `06:00 UTC` and can also be run manually from GitHub Actions.

        | Step | Behavior |
        |------|----------|
        | Checkout | Reads the current repository state |
        | Python setup | Uses Python 3.12 |
        | Day calculation | Calculates the current roadmap day from `START_DATE` |
        | Parsing | Loads the matching day README and required sections |
        | Logs | Prints the reminder in the Actions log |
        | Email | Sends only when all SMTP secrets are configured |

        ## START_DATE

        Set `START_DATE` to the calendar date that should count as Day 1.

        ```text
        START_DATE=2026-06-02
        ```

        If `START_DATE` is missing, the script defaults to Day 1 preview mode and exits successfully. If it is invalid, the script prints a clear error and exits with failure.

        ## SMTP Configuration

        Set these as GitHub repository secrets:

        | Secret | Purpose |
        |--------|---------|
        | `SMTP_HOST` | SMTP server host |
        | `SMTP_PORT` | SMTP server port |
        | `SMTP_USER` | SMTP username or sender address |
        | `SMTP_PASS` | SMTP password or provider app password |
        | `REMINDER_EMAIL_TO` | Destination email address |

        For this repository, set `REMINDER_EMAIL_TO` to `mohamedhammad3.142@gmail.com`.

        ## Manual Run

        ```bash
        START_DATE=2026-06-02 python scripts/daily_reminder.py
        ```

        ```bash
        START_DATE=2026-06-02 REMINDER_DATE=2026-06-12 python scripts/daily_reminder.py
        ```

        ```bash
        START_DATE=2026-06-02 ROADMAP_PATH=180-days-fullstack-engineer python scripts/daily_reminder.py
        ```

        ## Fallback Behavior

        | Scenario | Behavior |
        |----------|----------|
        | SMTP secrets missing | Prints reminder, skips email, exits successfully |
        | Date before `START_DATE` | Prints "not started yet", exits successfully |
        | Date after Day 180 | Prints "roadmap is complete", exits successfully |
        | Missing day README | Fails with a clear file path |
        | Missing required section | Fails with the missing section name |
        | Invalid `START_DATE` | Fails with the required date format |
        | Invalid `ROADMAP_PATH` | Fails if the path escapes the repository or does not exist |

        ## Security Notes

        - Secrets are read only from environment variables.
        - The workflow does not print SMTP values.
        - `ROADMAP_PATH` is validated to stay inside the repository.
        - Email is optional and never blocks log-based reminders when SMTP is not configured.
        """,
    )
    write(
        SYSTEM / "tracking" / "reminders.md",
        """
        # Reminder Documentation

        The daily reminder system is documented at [../reminders.md](../reminders.md).
        """,
    )


def make_resources() -> None:
    course_rows = "\n".join(
        f"| Week {w['week']:02d} | Phase {w['phase']} | {w['title']} | {', '.join(link_resource(r) for r in w['resources'])} |"
        for w in WEEKS
    )
    write(
        SYSTEM / "resources" / "roadmap-6-months.md",
        f"""
        # Six-Month Resource Roadmap

        Resources are official-first and artifact-driven. Use them to unblock the daily assignment, not as passive binge material.

        | Week | Phase | Focus | Resources |
        |------|-------|-------|-----------|
        {course_rows}

        ## Core Books

        - [Designing Data-Intensive Applications](https://dataintensive.net/)
        - [Refactoring](https://refactoring.com/)
        - [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/)
        - [Building Secure and Reliable Systems](https://sre.google/books/building-secure-reliable-systems/)
        - [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

        ## Skip Rule

        Skip any resource section that does not help you build, secure, test, deploy, debug, review, or explain the current artifact.
        """,
    )
    write(
        SYSTEM / "resources" / "README.md",
        """
        # Resources

        - [Six-month resource roadmap](roadmap-6-months.md)
        - Daily resource links are embedded in each day file.
        - Weekly resources are summarized in each week README.
        """,
    )


def make_capstone_portfolio_templates() -> None:
    write(
        SYSTEM / "capstone" / "final-capstone.md",
        """
        # Final Capstone

        ## Product

        Production-grade multi-tenant task/project SaaS.

        ## Required Scope

        | Area | Requirement |
        |------|-------------|
        | Frontend | React or Next.js with TypeScript |
        | Backend | Node.js and Express API |
        | Comparison service | Small .NET Clean Architecture service or documented equivalent |
        | Data | PostgreSQL primary schema plus MongoDB or Firebase comparison module |
        | Auth | Signup, login, logout, password hashing, sessions or tokens |
        | Authorization | Admin, Manager, Member, Guest RBAC |
        | API docs | OpenAPI |
        | Tests | Unit, integration, E2E, security negative tests |
        | Runtime | Docker and Docker Compose |
        | Delivery | CI/CD workflow and deployment notes |
        | Production | Logs, metrics, health checks, runbooks, incident postmortem |
        | Portfolio | README, Architecture.md, ADRs, demo script, proof checklist |

        ## Definition of Done

        - [ ] Fresh clone setup works.
        - [ ] Auth, RBAC, and tenant isolation are implemented and tested.
        - [ ] Database migrations are versioned.
        - [ ] OpenAPI docs match the API.
        - [ ] Docker local runtime works.
        - [ ] CI runs meaningful checks.
        - [ ] Security, performance, accessibility, and reliability reviews are complete.
        - [ ] Portfolio proof links point to real artifacts.
        """,
    )
    write(
        SYSTEM / "portfolio" / "proof-checklist.md",
        """
        # Portfolio Proof Checklist

        | Proof | Evidence link | Complete |
        |-------|---------------|----------|
        | Auth and RBAC | `path-or-url` | - [ ] |
        | Tenant-safe database schema and migrations | `path-or-url` | - [ ] |
        | OpenAPI docs | `path-or-url` | - [ ] |
        | Unit, integration, and E2E tests | `path-or-url` | - [ ] |
        | Docker local setup | `path-or-url` | - [ ] |
        | CI/CD pipeline | `path-or-url` | - [ ] |
        | Observability basics | `path-or-url` | - [ ] |
        | Security review | `path-or-url` | - [ ] |
        | Performance review | `path-or-url` | - [ ] |
        | Accessibility review | `path-or-url` | - [ ] |
        | Architecture.md | `path-or-url` | - [ ] |
        | ADR index | `path-or-url` | - [ ] |
        | Incident postmortem | `path-or-url` | - [ ] |
        | Demo script | `path-or-url` | - [ ] |
        | Final release notes | `path-or-url` | - [ ] |
        """,
    )
    write(
        SYSTEM / "portfolio" / "interview-readiness.md",
        """
        # Interview Readiness

        | Interview area | Artifact to use | Prepared |
        |----------------|-----------------|----------|
        | Technical fundamentals | Daily notes and tests | - [ ] |
        | Backend design | API, auth, RBAC, OpenAPI docs | - [ ] |
        | Frontend integration | Next.js UI and E2E flows | - [ ] |
        | Database design | Schema, migrations, indexes, NoSQL comparison | - [ ] |
        | System design | Architecture.md, capacity estimates, tradeoff docs | - [ ] |
        | Code review | Review notes and refactor logs | - [ ] |
        | Debugging | Debugging journals and incident reports | - [ ] |
        | Behavioral senior stories | Stakeholder memo and release narrative | - [ ] |
        """,
    )
    write(
        SYSTEM / "portfolio" / "README.md",
        """
        # Portfolio

        Use this folder for the final public proof package.

        - [Proof checklist](proof-checklist.md)
        - [Interview readiness](interview-readiness.md)
        """,
    )
    template_files = {
        "weekly-review.md": "# Weekly Review\n\n| Field | Value |\n|-------|-------|\n| Week |  |\n| Phase |  |\n| Artifacts completed |  |\n| Tests or verification |  |\n| Risks found |  |\n| Next action |  |\n",
        "adr.md": "# Architecture Decision Record\n\n## Context\n\n## Decision\n\n## Alternatives Considered\n\n## Consequences\n\n## Evidence\n\n",
        "refactor-review.md": "# Refactor Review\n\n## Before\n\n## After\n\n## Why This Improves The System\n\n## Verification\n\n## Risk\n\n",
        "security-review.md": "# Security Review\n\n## Scope\n\n## Controls Checked\n\n## Findings\n\n## Fixes\n\n## Remaining Risk\n\n",
        "performance-review.md": "# Performance Review\n\n## Scenario\n\n## Baseline\n\n## Bottleneck\n\n## Change\n\n## Result\n\n",
        "incident-postmortem.md": "# Incident Postmortem\n\n## Summary\n\n## Impact\n\n## Timeline\n\n## Root Cause\n\n## Resolution\n\n## Prevention\n\n",
    }
    rows = []
    for name, content in template_files.items():
        write(SYSTEM / "templates" / name, content)
        rows.append(f"| [{name}]({name}) | Reusable engineering template |")
    write(
        SYSTEM / "templates" / "README.md",
        f"""
        # Templates

        | Template | Use |
        |----------|-----|
        {chr(10).join(rows)}
        """,
    )


def make_root_readme() -> None:
    write(
        ROOT / "README.md",
        """
        # Senior in 180 Days

        ## Production-Grade Full-Stack Engineering System

        ![Duration](https://img.shields.io/badge/Duration-180_days-0B5394) ![Format](https://img.shields.io/badge/Format-artifact_driven-1D76DB) ![Focus](https://img.shields.io/badge/Focus-full_stack_backend-0E8A16)

        This repository is now a unified 180-day engineering transformation system. The canonical curriculum lives in [180-days-fullstack-engineer/](180-days-fullstack-engineer/).

        The goal is not to say "I studied for 180 days." The goal is to produce a portfolio of projects, deployments, architecture docs, debugging logs, code reviews, tests, incident reports, and interview-ready explanations.

        ## Who It Is For

        - Developers preparing for full-stack or backend engineering roles.
        - Self-taught engineers who need production-grade proof.
        - Frontend engineers moving into backend, databases, DevOps, and system design.
        - Backend engineers strengthening frontend integration, portfolio proof, and interview readiness.

        ## Time Commitment

        Expect 2-4 focused hours on weekdays and longer checkpoint blocks on weekends.

        ## How To Use The Repo

        1. Start at [180-days-fullstack-engineer/README.md](180-days-fullstack-engineer/README.md).
        2. Follow the daily roadmap in [180-days-fullstack-engineer/roadmap.md](180-days-fullstack-engineer/roadmap.md).
        3. Track progress in [180-days-fullstack-engineer/tracking/progress.md](180-days-fullstack-engineer/tracking/progress.md).
        4. Complete weekly mini-projects in [180-days-fullstack-engineer/mini-projects/](180-days-fullstack-engineer/mini-projects/).
        5. Build portfolio proof in [180-days-fullstack-engineer/portfolio/](180-days-fullstack-engineer/portfolio/).
        6. Use templates from [180-days-fullstack-engineer/templates/](180-days-fullstack-engineer/templates/).
        7. Use the curated resource map at [180-days-fullstack-engineer/resources.md](180-days-fullstack-engineer/resources.md) and the official-first resource folder at [180-days-fullstack-engineer/resources/](180-days-fullstack-engineer/resources/).
        8. Finish the capstone in [180-days-fullstack-engineer/capstone/final-capstone.md](180-days-fullstack-engineer/capstone/final-capstone.md).

        ## Progress Tracking

        The tracker records each day, focus, phase, completion state, reflection state, and artifact required. Every task must produce evidence.

        ## Interview Prep

        Interview readiness is built from the artifacts: system design docs, code reviews, debugging logs, tests, ADRs, incident postmortems, and final capstone explanations. See [180-days-fullstack-engineer/portfolio/interview-readiness.md](180-days-fullstack-engineer/portfolio/interview-readiness.md).

        ## Reminders

        Daily reminder automation is documented in [180-days-fullstack-engineer/reminders.md](180-days-fullstack-engineer/reminders.md). It can run locally or through GitHub Actions and can optionally email the daily plan.

        ## Final Outcome

        By Day 180, the repo should prove you can design, build, secure, test, deploy, observe, debug, review, and explain a production-grade full-stack system.
        """,
    )


def make_reminder_script_and_workflow() -> None:
    write(
        ROOT / "scripts" / "daily_reminder.py",
        r'''
        from __future__ import annotations

        import os
        import re
        import smtplib
        import sys
        from dataclasses import dataclass
        from datetime import date, datetime
        from email.message import EmailMessage
        from pathlib import Path


        ROOT = Path(__file__).resolve().parents[1]
        DEFAULT_ROADMAP_PATH = "180-days-fullstack-engineer"
        TOTAL_DAYS = 180
        REQUIRED_SECTIONS = [
            "Goal",
            "Topics",
            "Resources",
            "Assignment",
            "Exit Criteria",
            "Artifact to Commit",
        ]


        @dataclass(frozen=True)
        class PlanDate:
            day: int | None
            status: str
            message: str


        def repo_path_from_env() -> Path:
            configured = os.getenv("ROADMAP_PATH", DEFAULT_ROADMAP_PATH).strip()
            if not configured:
                configured = DEFAULT_ROADMAP_PATH
            path = (ROOT / configured).resolve()
            try:
                path.relative_to(ROOT)
            except ValueError as exc:
                raise ValueError("ROADMAP_PATH must resolve inside the repository") from exc
            return path


        def today_from_env() -> date:
            override = os.getenv("REMINDER_DATE", "").strip()
            if override:
                return datetime.strptime(override, "%Y-%m-%d").date()
            return date.today()


        def calculate_plan_day(today: date) -> PlanDate:
            start = os.getenv("START_DATE", "").strip()
            if not start:
                return PlanDate(
                    day=1,
                    status="missing_start_date",
                    message="START_DATE is not set. Defaulting to Day 1 for preview mode.",
                )

            try:
                start_date = datetime.strptime(start, "%Y-%m-%d").date()
            except ValueError:
                return PlanDate(
                    day=None,
                    status="invalid_start_date",
                    message="START_DATE must use YYYY-MM-DD format. No reminder was sent.",
                )

            offset = (today - start_date).days + 1
            if offset < 1:
                return PlanDate(
                    day=None,
                    status="before_start",
                    message=f"Roadmap has not started yet. START_DATE={start_date.isoformat()}, today={today.isoformat()}.",
                )
            if offset > TOTAL_DAYS:
                return PlanDate(
                    day=None,
                    status="after_finish",
                    message=f"Roadmap is complete. START_DATE={start_date.isoformat()} puts today beyond Day {TOTAL_DAYS}.",
                )
            return PlanDate(day=offset, status="active", message=f"Today is roadmap Day {offset}.")


        def day_file_for(roadmap_root: Path, day: int) -> Path:
            week = ((day - 1) // 10) + 1
            return roadmap_root / f"week-{week:02d}" / f"day-{day:02d}" / "README.md"


        def extract_section(text: str, heading: str) -> str:
            pattern = rf"^## {re.escape(heading)}\s*\n(.*?)(?=^## |\Z)"
            match = re.search(pattern, text, flags=re.M | re.S)
            return match.group(1).strip() if match else ""


        def load_day_plan(roadmap_root: Path, day: int) -> tuple[Path, str, dict[str, str]]:
            path = day_file_for(roadmap_root, day)
            if not path.exists():
                raise FileNotFoundError(f"Roadmap day file not found: {path.relative_to(ROOT)}")

            text = path.read_text(encoding="utf-8")
            title = next((line.removeprefix("# ").strip() for line in text.splitlines() if line.startswith("# ")), f"Day {day:02d}")
            sections = {section: extract_section(text, section) for section in REQUIRED_SECTIONS}
            missing = [name for name, value in sections.items() if not value]
            if missing:
                raise ValueError(f"{path.relative_to(ROOT)} is missing required section(s): {', '.join(missing)}")
            return path, title, sections


        def build_message(roadmap_root: Path, plan_date: PlanDate) -> str:
            if plan_date.day is None:
                return "\n".join(
                    [
                        "Daily Engineering Reminder",
                        "",
                        "No active roadmap task today.",
                        "",
                        plan_date.message,
                    ]
                )

            path, title, sections = load_day_plan(roadmap_root, plan_date.day)
            body = [
                "Daily Engineering Reminder",
                "",
                title,
                "",
                plan_date.message,
                f"File: {path.relative_to(ROOT).as_posix()}",
                "",
            ]
            for name in REQUIRED_SECTIONS:
                body.extend([f"## {name}", sections[name], ""])
            return "\n".join(body).rstrip()


        def smtp_configured() -> bool:
            required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "REMINDER_EMAIL_TO"]
            return all(os.getenv(key, "").strip() for key in required)


        def maybe_email(message: str) -> None:
            if not smtp_configured():
                print("SMTP is not fully configured; reminder was printed only.")
                return

            email = EmailMessage()
            email["Subject"] = "Daily 180-Day Engineering Plan"
            email["From"] = os.environ["SMTP_USER"]
            email["To"] = os.environ["REMINDER_EMAIL_TO"]
            email.set_content(message)

            port = int(os.environ["SMTP_PORT"])
            with smtplib.SMTP(os.environ["SMTP_HOST"], port, timeout=30) as server:
                server.starttls()
                server.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
                server.send_message(email)
            print("Reminder email sent.")


        def main() -> int:
            try:
                roadmap_root = repo_path_from_env()
                if not roadmap_root.exists():
                    raise FileNotFoundError(f"ROADMAP_PATH does not exist: {roadmap_root.relative_to(ROOT)}")
                plan_date = calculate_plan_day(today_from_env())
                message = build_message(roadmap_root, plan_date)
                print(message)
                if plan_date.status == "invalid_start_date":
                    return 1
                if plan_date.day is not None:
                    maybe_email(message)
                return 0
            except Exception as exc:
                print(f"daily_reminder error: {exc}", file=sys.stderr)
                return 1


        if __name__ == "__main__":
            raise SystemExit(main())
        ''',
    )
    write(
        ROOT / ".github" / "workflows" / "daily-plan-reminder.yml",
        """
        name: Daily Plan Reminder

        on:
          schedule:
            - cron: "0 6 * * *"
          workflow_dispatch:
            inputs:
              start_date:
                description: "Plan start date in YYYY-MM-DD format"
                required: false
              reminder_date:
                description: "Optional date override for testing in YYYY-MM-DD format"
                required: false
              roadmap_path:
                description: "Roadmap path to parse"
                required: false
                default: "180-days-fullstack-engineer"

        jobs:
          reminder:
            runs-on: ubuntu-latest
            permissions:
              contents: read
            steps:
              - name: Checkout
                uses: actions/checkout@v4

              - name: Set up Python
                uses: actions/setup-python@v5
                with:
                  python-version: "3.12"

              - name: Print or send daily reminder
                env:
                  START_DATE: ${{ github.event.inputs.start_date || vars.START_DATE }}
                  REMINDER_DATE: ${{ github.event.inputs.reminder_date }}
                  ROADMAP_PATH: ${{ github.event.inputs.roadmap_path || vars.ROADMAP_PATH || '180-days-fullstack-engineer' }}
                  SMTP_HOST: ${{ secrets.SMTP_HOST }}
                  SMTP_PORT: ${{ secrets.SMTP_PORT }}
                  SMTP_USER: ${{ secrets.SMTP_USER }}
                  SMTP_PASS: ${{ secrets.SMTP_PASS }}
                  REMINDER_EMAIL_TO: ${{ secrets.REMINDER_EMAIL_TO }}
                run: python scripts/daily_reminder.py
        """,
    )


def generate() -> None:
    if SYSTEM.exists():
        shutil.rmtree(SYSTEM)
    make_system_readme()
    make_week_and_day_files()
    make_mini_projects()
    make_tracking()
    make_resources()
    make_capstone_portfolio_templates()
    make_reminder_script_and_workflow()
    make_root_readme()


if __name__ == "__main__":
    generate()
