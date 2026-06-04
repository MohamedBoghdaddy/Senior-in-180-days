# CS Fundamentals Plan

This plan adds a weekly operating systems, networks, and databases layer to every 10-day sprint. Each block should produce one small proof artifact and a few interview-ready written answers.

## Primary References

- Operating Systems: [Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Networks: [Computer Networking: A Top-Down Approach](https://gaia.cs.umass.edu/kurose_ross/index.php)
- Databases: [PostgreSQL Documentation](https://www.postgresql.org/docs/current/)
- Systems support: [CMU 15-213 Introduction to Computer Systems](https://www.cs.cmu.edu/~213/)
- Roadmap support: [../resources.md](../resources.md)

## Weekly Blocks

| Sprint | Concepts to study | Interview questions to answer | Proof artifact |
|--------|-------------------|-------------------------------|----------------|
| Week 01 | Operating systems: process vs program and process vs thread. Networks: DNS, HTTP request lifecycle, and browser request overview. Databases: relational model, primary keys, simple SELECT. | What happens when you type google.com?; Process vs thread comparison; Why do primary keys matter? | `tracking/interview/week-01-google-lifecycle.md` |
| Week 02 | Operating systems: address spaces and virtual memory overview. Networks: TCP/IP layers, TCP vs UDP, ports. Databases: normalization, foreign keys, and basic constraints. | TCP vs UDP table; What is normalization?; When does a sliding window shrink? | `tracking/interview/week-02-tcp-udp-normalization.md` |
| Week 03 | Operating systems: syscalls, events, and the Node.js event loop connection. Networks: HTTP methods, headers, status codes. Databases: basic indexes and lookup cost. | What is a syscall?; What does an HTTP status code communicate?; Why can indexes speed reads but slow writes? | `tracking/interview/week-03-syscalls-http-indexes.md` |
| Week 04 | Operating systems: CPU scheduling and context switching. Networks: TLS basics, cookies, sessions. Databases: ACID and transaction basics. | What is a context switch?; TLS vs plain HTTP; What makes a transaction atomic? | `tracking/interview/week-04-scheduling-tls-transactions.md` |
| Week 05 | Operating systems: threads, locks, and race conditions. Networks: REST, caching, CORS. Databases: constraints, uniqueness, and referential integrity. | What is a race condition?; When does CORS apply?; What does a unique constraint guarantee? | `tracking/interview/week-05-locks-cors-constraints.md` |
| Week 06 | Operating systems: deadlocks and resource ordering. Networks: latency, timeouts, retries. Databases: isolation levels and lost updates. | How can deadlock happen?; Why do clients need timeouts?; Read committed vs serializable? | `tracking/interview/week-06-deadlocks-timeouts-isolation.md` |
| Week 07 | Operating systems: paging and virtual memory details. Networks: connection pooling and keep-alive. Databases: EXPLAIN ANALYZE, indexes, and query plans. | Why does paging exist?; What does keep-alive save?; How do you read EXPLAIN ANALYZE at a basic level? | `tracking/interview/week-07-paging-connection-pooling-explain.md` |
| Week 08 | Operating systems: file systems and persistence. Networks: DNS caching and CDN basics. Databases: SQL vs NoSQL consistency and data modeling. | What does a filesystem persist?; What can DNS cache?; When would NoSQL be a better fit? | `tracking/interview/week-08-filesystems-dns-nosql.md` |
| Week 09 | Operating systems: process isolation and runtime boundaries. Networks: sockets, ports, and service endpoints. Databases: ORM boundaries and unit-of-work tradeoffs. | What is process isolation?; What is a socket?; What can an ORM hide from you? | `tracking/interview/week-09-isolation-sockets-orm.md` |
| Week 10 | Operating systems: synchronization primitives and concurrency bugs. Networks: WebSockets, gRPC, and API protocol tradeoffs. Databases: joins, planner basics, and query-shape tradeoffs. | Mutex vs semaphore; REST vs WebSocket; Why can joins become expensive? | `tracking/interview/week-10-sync-protocols-joins.md` |
| Week 11 | Operating systems: containers, namespaces, cgroups, signals. Networks: service discovery and local ports. Databases: connection pooling and migration safety. | What is a container namespace?; Why do services need discovery?; What makes a migration safe? | `tracking/interview/week-11-containers-service-discovery-migrations.md` |
| Week 12 | Operating systems: runtime signals and deployment lifecycle. Networks: TLS certificates, load balancers, health checks. Databases: backups, restore drills, rollback plans. | What should SIGTERM trigger?; What does a load balancer check?; Backup vs restore drill? | `tracking/interview/week-12-signals-load-balancers-backups.md` |
| Week 13 | Operating systems: resource saturation and capacity. Networks: backpressure, queues, rate limiting. Databases: replication, sharding, cache invalidation. | What saturates first: CPU, memory, disk, or network?; What is backpressure?; Replication vs sharding? | `tracking/interview/week-13-capacity-backpressure-replication.md` |
| Week 14 | Operating systems: test environment resource contention. Networks: HTTP observability and tracing. Databases: test data, fixtures, transaction rollback in tests. | Why do tests fail under resource contention?; What request fields help debugging?; How do transactions help test cleanup? | `tracking/interview/week-14-test-env-observability-fixtures.md` |
| Week 15 | Operating systems: CPU, memory, disk, and I/O incident diagnosis. Networks: retries, circuit breakers, partial failure. Databases: locks, deadlocks, slow queries. | How do you triage high CPU?; Retry vs circuit breaker?; How do DB deadlocks happen? | `tracking/interview/week-15-incidents-circuit-breakers-deadlocks.md` |
| Week 16 | Operating systems: permissions, secrets, and least privilege. Networks: auth flows, TLS, abuse paths. Databases: RLS, least privilege roles, audit trails. | What is least privilege?; How does TLS support auth flows?; How does RLS protect tenants? | `tracking/interview/week-16-least-privilege-rls-audit.md` |
| Week 17 | Operating systems: operational runbooks and system handoff. Networks: request lifecycle explanation under interview pressure. Databases: architecture docs and known limitations. | How would you explain your architecture to a new engineer?; Full DNS/HTTP/TLS lifecycle; What DB limitation remains? | `tracking/interview/week-17-architecture-request-lifecycle-limitations.md` |
| Week 18 | Operating systems, networks, and databases mixed interview review across all prior artifacts. | Teach process/thread, DNS/HTTP/TLS, transactions, indexes, deadlocks, and isolation from memory. | `tracking/interview/week-18-final-cs-interview-pack.md` |

## Weekly Study Protocol

1. Read only enough to answer the week's questions and connect the topic to the capstone.
2. Write practical notes in `tracking/interview/` or the matching daily artifact.
3. Include one diagram, command output, SQL example, comparison table, or lifecycle trace.
4. Add one paragraph explaining how the concept appears in a production full-stack system.
5. Link the proof artifact from [../tracking/progress.md](../tracking/progress.md).
