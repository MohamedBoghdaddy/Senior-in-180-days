# Curated Resources

The roadmap prioritizes execution over course collection. Use resources to unblock artifacts. Do not finish a full course unless the artifact requires it.

## Usage Rules

| Rule | Meaning |
|------|---------|
| Build first | Start with the daily assignment and use resources only to unblock it. |
| Evidence required | Every resource session must produce notes, code, tests, diagrams, reviews, or portfolio proof. |
| Partial is normal | Most courses are intentionally partial or skimmed. |
| Stop when useful | Stop watching when you can build, test, secure, deploy, or explain the artifact. |

## Phase Resource Map

| Phase | Roadmap days | Focus | Primary resources | Expected output |
|-------|--------------|-------|-------------------|-----------------|
| Phase 1 | Days 001-020 | Web foundations, Git, JavaScript, DSA basics | freeCodeCamp, NeetCode, Stanford Algorithms, DSA C/C++ | Daily notes, accessibility proof, algorithm pattern notes |
| Phase 2 | Days 021-040 | Node.js, Express, auth, RBAC | NodeJS course, Hussein Nasser, freeCodeCamp | API scaffold, OpenAPI draft, auth tests, security review |
| Phase 3 | Days 041-060 | React, Next.js, integration | Official React/Next docs plus existing daily resources | UI shell, forms, API integration, E2E flow |
| Phase 4 | Days 061-080 | PostgreSQL, MongoDB, schema design | Intro to Databases, freeCodeCamp, official database docs | Migrations, indexes, query plans, NoSQL comparison |
| Phase 5 | Days 081-100 | .NET, Clean Architecture, OOP | ASP.NET Clean Architecture courses, Software Design specialization | .NET comparison service, ADRs, pattern review |
| Phase 6 | Days 101-120 | Docker, Kubernetes, CI/CD, deployment | Docker & Kubernetes course, TechWorld with Nana, Cloud Computing | Docker runtime, CI/CD workflow, deployment checklist |
| Phase 7 | Days 121-150 | System design, testing, reliability | DDIA, Stanford Algorithms, Cloud Computing, Hussein Nasser, NeetCode | System design pack, test suite, incident postmortem |
| Phase 8 | Days 151-180 | Capstone, portfolio, interviews | NeetCode, technical writing resources, existing roadmap resources | Final release, portfolio proof, interview answers |

## Required Resource Plan

| Resource | Phase used in | Roadmap days used in | Estimated hours | Mode | What to skip | Expected artifact/output |
|----------|---------------|----------------------|-----------------|------|--------------|--------------------------|
| [NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)](https://www.udemy.com/course/nodejs-the-complete-guide/) | Phase 2 | Days 021-040 | 12-16 | Partial | Skip GraphQL and Deno until the Express API, auth, validation, and tests are stable. | Express API structure, OpenAPI draft, validation tests, and auth/RBAC notes. |
| [Docker & Kubernetes: The Practical Guide](https://www.udemy.com/course/docker-kubernetes-the-practical-guide/) | Phase 6 | Days 101-120 | 14-18 | Partial | Skip advanced cloud-provider specifics and deep Helm material unless the capstone deployment needs it. | Dockerfiles, Docker Compose, deployment checklist, and Kubernetes concept map. |
| [Mastering Data Structures & Algorithms using C and C++](https://www.udemy.com/course/datastructurescncpp/) | Phase 1 and Phase 7 | Days 011-020, 121-130 | 8-12 | Partial | Skip exhaustive C syntax and long implementation sections that do not improve complexity reasoning. | Algorithm pattern notes, complexity explanations, and interview-ready tradeoff answers. |
| [ASP.NET Core - SOLID and Clean Architecture](https://www.udemy.com/course/aspnet-core-solid-and-clean-architecture-net-5-and-up/) | Phase 5 | Days 081-100 | 12-16 | Partial | Skip repetitive setup and UI sections after the Clean Architecture boundaries are understood. | .NET comparison service, architecture ADR, xUnit tests, and dependency-boundary review. |
| [Clean Architecture in .NET Core MVC [2025]](https://www.udemy.com/course/clean-architecture-in-aspnet-core-mvc/) | Phase 5 | Days 081-100 | 4-6 | Skim | Skip duplicated Clean Architecture setup covered by the primary .NET course. | Comparison note on MVC, service boundaries, and when not to over-abstract. |
| [Software Design and Architecture Specialization](https://www.coursera.org/specializations/software-design-architecture) | Phase 5 and Phase 7 | Days 091-100, 121-140 | 8-10 | Partial | Skip broad theory unless it maps to an ADR, design doc, or capstone tradeoff. | Design docs, ADRs, architecture diagrams, and refactor rationale. |
| [Introduction to Databases for Back-End Development](https://www.coursera.org/learn/introduction-to-databases-back-end-development) | Phase 4 | Days 061-080 | 8-10 | Partial | Skip beginner database definitions once schema, migrations, and query-plan evidence exist. | PostgreSQL schema, migrations, indexes, query-plan notes, and data reliability review. |
| [Stanford Algorithms Specialization](https://www.coursera.org/specializations/algorithms) | Phase 1 and Phase 7 | Days 011-020, 121-130 | 10-14 | Partial | Skip proof-heavy sections that do not improve implementation, scaling, or interview explanation. | Complexity notes, bottleneck analysis, and algorithmic tradeoff explanations. |
| [Cloud Computing Specialization](https://www.coursera.org/specializations/cloud-computing) | Phase 6 and Phase 7 | Days 111-130 | 8-12 | Partial | Skip deep distributed-systems formalism unless it improves deployment or reliability decisions. | Cloud deployment plan, scaling plan, reliability assumptions, and rollback notes. |
| [Hussein Nasser](https://www.youtube.com/@hnasr) | Phase 2 and Phase 7 | Days 021-040, 121-150 | 4-6 | Skim | Skip unrelated opinion videos and long streams not tied to Node, databases, networking, or scaling. | Event-loop notes, database failure analysis, scaling notes, and senior explanation snippets. |
| [TechWorld with Nana](https://www.youtube.com/@TechWorldwithNana) | Phase 6 | Days 101-120 | 4-6 | Skim | Skip tools not used by the capstone deployment path. | Docker, Kubernetes, CI/CD, secrets, and deployment notes. |
| [freeCodeCamp](https://www.youtube.com/@freecodecamp) | Phase 1, Phase 2, and Phase 4 | Days 001-040, 061-080 | 6-8 | Skim | Skip full-course viewing when a targeted exercise or official doc answers the current task. | Small exercises, validation examples, SQL notes, and testable learning snippets. |
| [NeetCode](https://www.youtube.com/@NeetCode) | Phase 1, Phase 7, and Phase 8 | Days 011-020, 121-140, 171-180 | 4-6 | Skim | Skip random grinding; focus on patterns that improve interview explanation and complexity reasoning. | Pattern notes, solved examples, and interview answer rehearsal notes. |

## Weekly Resource Discipline

| Weekly cap | Rule |
|------------|------|
| 4-6 hours | Normal study budget. Spend the rest of the time building. |
| 8 hours | Maximum for difficult backend, data, or deployment weeks. |
| 0 hours | Allowed when the artifact is already clear and implementation needs the time. |
