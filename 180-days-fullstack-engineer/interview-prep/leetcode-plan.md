# LeetCode / DSA 180-Day Plan

This is the FAANG-style DSA layer for the 180-day roadmap. It supports the production roadmap instead of replacing it: solve problems to sharpen pattern recognition, then turn mistakes into written proof and interview explanations.

## Target

- Finish exactly **500 counted LeetCode solves** by Day 180.
- A counted solve can be a new problem or a redo solved cleanly without looking at the old solution.
- If a redo slot has no failed problem available, convert it to a new problem from the same pattern.
- Keep at least one written problem log per day, even on high-volume easy days.
- Protect the main roadmap: heavy engineering days intentionally have lower DSA volume.

## Quality Rules

Every logged problem must include:

- Pattern name.
- Time complexity.
- Space complexity.
- Edge cases.
- Why the chosen approach works.
- What mistake I made.
- Whether the problem should be redone.

Use [problem-log-template.md](problem-log-template.md) for the daily writeup.

## Progression

| Sprint | Target | Easy/Medium/Hard | Focus | Topics |
|--------|--------|------------------|-------|--------|
| Week 01 | 43 | 31/12/0 | Arrays and strings fundamentals | Arrays, strings, prefix sums, frequency counting, in-place operations, debugging mistakes |
| Week 02 | 44 | 20/24/0 | Hash maps, two pointers, sliding window | Hash maps, grouping, anagrams, two pointers, fixed and variable sliding windows |
| Week 03 | 34 | 14/20/0 | Stack, queue, linked list, binary search | Stacks, queues, monotonic stack, linked lists, fast/slow pointers, binary search bounds |
| Week 04 | 29 | 8/21/0 | Recursion, trees, BST | Recursion, tree DFS/BFS, BST ordering, validation ranges |
| Week 05 | 32 | 5/27/0 | Heap, priority queue, intervals | Min/max heaps, top K, interval merge/insert, binary search on answer intro |
| Week 06 | 27 | 2/25/0 | Graphs, BFS, DFS | Adjacency lists, grids, BFS, DFS, visited state, shortest path intro |
| Week 07 | 29 | 3/26/0 | Backtracking and greedy | Subsets, combinations, permutations, pruning, greedy basics, greedy intervals |
| Week 08 | 24 | 3/21/0 | Dynamic programming intro | DP state, 1D DP, 2D DP intro, state transitions, base cases |
| Week 09 | 28 | 1/27/0 | DP patterns and Union Find | Knapsack, LIS, subsequences, string DP, Union Find, components |
| Week 10 | 30 | 2/26/2 | Tries, intervals, topological sort, bit manipulation | Tries, prefix search, advanced intervals, sweep line, topological sort, bit masks |
| Week 11 | 26 | 1/23/2 | Spaced review under Docker workload | Arrays, strings, hash maps, windows, linked list, binary search, trees, heaps, intervals, graph and DP redo |
| Week 12 | 24 | 0/18/6 | Topological review, graph cycles, DP, bit manipulation, deployment-style mixed sets | Topological sort, graph cycles, DP review, bit manipulation, hard selected mixed problems |
| Week 13 | 26 | 0/16/10 | System design algorithm support | Graph/DP mixed, sliding window rate limiters, notification queues, LRU cache, topological dependencies, binary search on answer |
| Week 14 | 27 | 0/21/6 | Quality engineering DSA review | Layered review of arrays, hashes, graphs, windows, greedy, intervals, DP, binary search, hard deep dive |
| Week 15 | 25 | 0/16/9 | Reliability interview mix | Stack/queue, heap, graphs, DB-style complexity, hard redos, incident-style mocks |
| Week 16 | 24 | 0/15/9 | Capstone hardening interview mix | Mixed patterns, bit manipulation, hash/window, Union Find, tries, strings, hard redos, security review mocks |
| Week 17 | 15 | 0/9/6 | Portfolio and communication mocks | Mixed medium/hard problems chosen for interview stories, redos, verbal walkthroughs |
| Week 18 | 13 | 0/7/6 | Final mixed mock interviews | Full review, selected medium/hard redos, system design drill, code review drill, final timed set |

## Daily Plan

| Day | Sprint | Mode | Topic | Count | Mix | Review / redo requirement | Running total | Roadmap-load note |
|-----|--------|------|-------|------:|-----|---------------------------|--------------:|-------------------|
| 001 | Week 01 | New learning | Arrays basics and input scans | 3 | 3E/0M/0H | Write brute force then one-pass; no redo backlog | 3 | Light setup day |
| 002 | Week 01 | New learning | Arrays prefix sums | 4 | 4E/0M/0H | Redo any Day 001 miss before new problems | 7 | Git workflow day |
| 003 | Week 01 | New learning | Arrays frequency counting | 4 | 3E/1M/0H | Mark any hash-style mistake for Day 010 | 11 | CLI setup day |
| 004 | Week 01 | New learning | Strings basics and character counts | 4 | 3E/1M/0H | Redo 1 missed easy if needed | 15 | Evidence template day |
| 005 | Week 01 | New learning | Strings parsing and normalization | 5 | 4E/1M/0H | Write edge cases for empty and one-char strings | 20 | HTML day allows higher count |
| 006 | Week 01 | New learning | Arrays in-place operations | 5 | 4E/1M/0H | Redo one failed array problem from Days 001-005 | 25 | CSS day; still fundamentals |
| 007 | Week 01 | New learning | Arrays and strings mixed | 5 | 3E/2M/0H | Start timed 20-minute easy attempts | 30 | JS audit day |
| 008 | Week 01 | Review and redo | Debugging DSA mistakes | 4 | 2E/2M/0H | Redo failed problems first; add new only after clean redo | 34 | Debugging journal aligns with mistakes |
| 009 | Week 01 | Review | Accessibility-style edge cases in strings | 4 | 2E/2M/0H | List edge cases before coding each problem | 38 | Checkpoint prep |
| 010 | Week 01 | Review and redo | Week 1 mixed arrays and strings | 5 | 3E/2M/0H | Redo all marked misses; convert extras to mixed new | 43 | Weekly review |
| 011 | Week 02 | New learning | Hash maps for membership and counts | 5 | 4E/1M/0H | Redo 1 Day 010 miss before new work | 48 | DOM day; fast pattern |
| 012 | Week 02 | New learning | Hash maps for grouping and anagrams | 5 | 3E/2M/0H | Record collision between sort and hash approaches | 53 | Forms day |
| 013 | Week 02 | New learning | Two pointers on sorted arrays | 5 | 3E/2M/0H | Redo one missed hash map problem | 58 | Fetch day |
| 014 | Week 02 | New learning | Two pointers on strings | 5 | 2E/3M/0H | Explain invariant before coding | 63 | Storage day |
| 015 | Week 02 | New learning | Sliding window fixed size | 4 | 2E/2M/0H | Redo one two-pointer miss | 67 | Async debugging day |
| 016 | Week 02 | New learning | Sliding window variable size | 4 | 1E/3M/0H | Write shrink condition explicitly | 71 | DSA practice day |
| 017 | Week 02 | Review | Strings plus sliding window review | 4 | 1E/3M/0H | Redo one failed window problem | 75 | Performance day |
| 018 | Week 02 | Review and redo | XSS-safe strings and maps | 3 | 1E/2M/0H | Focus on failed edge cases; no speed goal | 78 | Security day is heavier |
| 019 | Week 02 | Review and redo | Frontend fundamentals timed set | 4 | 1E/3M/0H | Redo misses from Days 011-018 before new timed work | 82 | Code review day |
| 020 | Week 02 | Review | Phase 1 mixed fundamentals | 5 | 2E/3M/0H | Create weak-pattern list for Week 3 | 87 | Portfolio checkpoint |
| 021 | Week 03 | New learning | Stack basics and valid sequences | 4 | 2E/2M/0H | Redo one Day 020 miss | 91 | Node runtime day |
| 022 | Week 03 | New learning | Queue and deque patterns | 4 | 2E/2M/0H | Write when FIFO is required | 95 | Express structure day |
| 023 | Week 03 | New learning | Monotonic stack intro | 3 | 1E/2M/0H | Explain increasing vs decreasing stack invariant | 98 | Routing day |
| 024 | Week 03 | New learning | Linked list basics | 4 | 3E/1M/0H | Draw pointer movement before coding | 102 | Validation day |
| 025 | Week 03 | New learning | Linked list fast and slow pointers | 3 | 1E/2M/0H | Redo one pointer bug from Day 024 | 105 | Error contract day |
| 026 | Week 03 | New learning | Binary search basics | 4 | 2E/2M/0H | Write bounds invariant before code | 109 | Logging day |
| 027 | Week 03 | New learning | Binary search boundaries | 3 | 1E/2M/0H | Redo one failed binary search problem | 112 | Health endpoint day |
| 028 | Week 03 | Review and redo | Stack linked list and binary search test set | 3 | 1E/2M/0H | Redo failed problems first; log exact bug | 115 | Unit test day |
| 029 | Week 03 | Review | Binary search under API-contract workload | 2 | 0E/2M/0H | Only new if OpenAPI task is under control | 117 | OpenAPI heavy day |
| 030 | Week 03 | Review and redo | Week 3 mixed data structures | 4 | 1E/3M/0H | Redo all stack and pointer misses | 121 | API review |
| 031 | Week 04 | New learning | Recursion basics | 3 | 2E/1M/0H | Write base case before recursive case | 124 | User model day |
| 032 | Week 04 | New learning | Recursion to backtracking bridge | 3 | 1E/2M/0H | Redo one recursion base-case miss | 127 | Login flow day |
| 033 | Week 04 | New learning | Binary tree traversal | 4 | 2E/2M/0H | Write recursive and iterative traversal notes | 131 | Refresh token day |
| 034 | Week 04 | New learning | Binary tree DFS patterns | 3 | 1E/2M/0H | Explain preorder/inorder/postorder choice | 134 | RBAC matrix day |
| 035 | Week 04 | New learning | Binary tree BFS patterns | 3 | 1E/2M/0H | Redo one tree traversal miss | 137 | Tenant middleware day |
| 036 | Week 04 | New learning | BST basics | 3 | 1E/2M/0H | Write ordering invariant | 140 | Rate limit day |
| 037 | Week 04 | New learning | BST validation and ranges | 3 | 0E/3M/0H | Record min/max boundary mistakes | 143 | Audit logging day |
| 038 | Week 04 | Review and redo | Tree and BST redo under test load | 2 | 0E/2M/0H | Redo failed tree problems only | 145 | Auth integration tests heavy |
| 039 | Week 04 | Review and redo | Security review plus tree recap | 2 | 0E/2M/0H | No new topic; clean up explanation quality | 147 | Security review heavy |
| 040 | Week 04 | Review | Phase 2 tree and recursion checkpoint | 3 | 0E/3M/0H | Summarize tree patterns in one page | 150 | Backend checkpoint |
| 041 | Week 05 | New learning | Heap and priority queue intro | 3 | 1E/2M/0H | Compare heap vs sorted list | 153 | Next.js shell day |
| 042 | Week 05 | New learning | Priority queue scheduling patterns | 3 | 0E/3M/0H | Redo one heap ordering miss | 156 | Navigation day |
| 043 | Week 05 | New learning | Top K and frequency with heaps | 4 | 1E/3M/0H | State why heap size is bounded | 160 | Design primitives day |
| 044 | Week 05 | New learning | Intervals basics | 4 | 2E/2M/0H | Draw intervals before coding | 164 | Task list route day |
| 045 | Week 05 | New learning | Merge and insert intervals | 4 | 1E/3M/0H | Redo one interval boundary miss | 168 | TypeScript contracts day |
| 046 | Week 05 | Review | Frontend state mixed DSA review | 3 | 0E/3M/0H | Focus on heap and interval explanation | 171 | TanStack Query day |
| 047 | Week 05 | Review and redo | Heap and interval error-state review | 3 | 0E/3M/0H | Redo failed medium problems first | 174 | Loading and error states day |
| 048 | Week 05 | New learning | Binary search on answer intro | 3 | 0E/3M/0H | Write monotonic predicate before code | 177 | URL filters day |
| 049 | Week 05 | Review and redo | Frontend test day DSA redo | 2 | 0E/2M/0H | Redo only; no new topic | 179 | Test setup heavy |
| 050 | Week 05 | Review | Week 5 timed frontend-friendly set | 3 | 0E/3M/0H | One 45-minute mock-style pair | 182 | Frontend review |
| 051 | Week 06 | New learning | Graphs adjacency lists and matrices | 4 | 2E/2M/0H | Draw graph representation first | 186 | API client day |
| 052 | Week 06 | New learning | BFS on grids | 4 | 0E/4M/0H | Write queue state and visited rule | 190 | Signup login UI day |
| 053 | Week 06 | New learning | DFS on grids | 3 | 0E/3M/0H | Compare recursive and iterative DFS | 193 | Project form day |
| 054 | Week 06 | New learning | Visited state modeling | 3 | 0E/3M/0H | Record off-by-one grid mistakes | 196 | Task form day |
| 055 | Week 06 | New learning | Shortest path intro | 2 | 0E/2M/0H | Focus on why BFS works for unit weights | 198 | Optimistic update day |
| 056 | Week 06 | Review and redo | Graph redo with E2E workload | 2 | 0E/2M/0H | Redo failed graph problems only | 200 | E2E heavy day |
| 057 | Week 06 | Review | Matrix graph review | 2 | 0E/2M/0H | Practice explaining visited-state edge cases | 202 | Accessibility heavy day |
| 058 | Week 06 | Review | Performance-aware graph and heap review | 2 | 0E/2M/0H | Write complexity before coding | 204 | Performance profile day |
| 059 | Week 06 | Review and redo | Integration boundary DSA redo | 3 | 0E/3M/0H | Redo all graph misses from Week 6 | 207 | Code review day |
| 060 | Week 06 | Review | Phase 3 graph checkpoint | 2 | 0E/2M/0H | One timed medium plus one redo | 209 | Integration checkpoint |
| 061 | Week 07 | New learning | Backtracking subsets | 4 | 2E/2M/0H | Write include/exclude tree | 213 | Schema day |
| 062 | Week 07 | New learning | Backtracking combinations | 3 | 0E/3M/0H | Explain pruning rule | 216 | Schema day |
| 063 | Week 07 | New learning | Backtracking permutations | 3 | 0E/3M/0H | Track used-state mistakes | 219 | Migration day |
| 064 | Week 07 | New learning | Backtracking pruning | 2 | 0E/2M/0H | Only deep notes; no speed goal | 221 | Constraint-heavy DB day |
| 065 | Week 07 | New learning | Greedy basics | 4 | 1E/3M/0H | Write exchange argument in plain English | 225 | RLS day |
| 066 | Week 07 | New learning | Greedy intervals | 3 | 0E/3M/0H | Redo one interval miss before new work | 228 | Role policy day |
| 067 | Week 07 | Review and redo | Greedy heap redo with EXPLAIN workload | 2 | 0E/2M/0H | Redo failed greedy or heap problems | 230 | Index day is heavy |
| 068 | Week 07 | Review | Pagination-friendly binary search and greedy | 3 | 0E/3M/0H | Tie invariant notes to keyset pagination thinking | 233 | Pagination day |
| 069 | Week 07 | Review and redo | Rollback day redo set | 2 | 0E/2M/0H | Redo only; update mistake taxonomy | 235 | Migration rollback heavy |
| 070 | Week 07 | Review | Phase 4 backtracking and greedy checkpoint | 3 | 0E/3M/0H | Write one pattern summary artifact | 238 | Data-model review |
| 071 | Week 08 | New learning | Dynamic programming state intro | 3 | 1E/2M/0H | Write state transition before code | 241 | NoSQL ADR day |
| 072 | Week 08 | New learning | One-dimensional DP basics | 4 | 1E/3M/0H | Redo one Day 071 miss | 245 | MongoDB design day |
| 073 | Week 08 | New learning | Climbing and house-robber variants | 3 | 1E/2M/0H | Explain overlapping subproblems | 248 | Activity feed write path |
| 074 | Week 08 | New learning | Min max path DP | 2 | 0E/2M/0H | State base cases and iteration order | 250 | Activity feed read path |
| 075 | Week 08 | New learning | Two-dimensional DP intro | 2 | 0E/2M/0H | Draw table shape before code | 252 | Aggregation day |
| 076 | Week 08 | Review and redo | DP redo under NoSQL test load | 2 | 0E/2M/0H | Redo failed DP only | 254 | NoSQL tests heavy |
| 077 | Week 08 | Review | DP state-definition review | 2 | 0E/2M/0H | Explain state in one sentence per problem | 256 | Firebase rules day |
| 078 | Week 08 | Review and redo | Consistency plus DP failure analysis | 2 | 0E/2M/0H | Map DSA failure to wrong state or transition | 258 | Consistency analysis day |
| 079 | Week 08 | Review and redo | Mixed DP redo and cost-aware thinking | 3 | 0E/3M/0H | Redo failed DP plus one new medium | 261 | Cost and performance day |
| 080 | Week 08 | Review | Phase 4 DP explanation checkpoint | 1 | 0E/1M/0H | One deep writeup beats volume today | 262 | Data checkpoint |
| 081 | Week 09 | New learning | Knapsack intro | 3 | 0E/3M/0H | State capacity dimension | 265 | .NET scaffold day |
| 082 | Week 09 | New learning | Knapsack variants | 3 | 0E/3M/0H | Redo one transition mistake | 268 | Domain modeling day |
| 083 | Week 09 | New learning | LIS and subsequence DP | 3 | 0E/3M/0H | Compare O(n2) and optimized direction | 271 | Application service day |
| 084 | Week 09 | New learning | String DP intro | 2 | 0E/2M/0H | Draw table and base row/column | 273 | Infrastructure adapter day |
| 085 | Week 09 | Review and redo | DP architecture review redo | 2 | 0E/2M/0H | Redo failed DP; no new pattern | 275 | Dependency review heavy |
| 086 | Week 09 | New learning | Union Find intro | 4 | 1E/3M/0H | Write find and union invariants | 279 | DTO validation day |
| 087 | Week 09 | New learning | Union Find components | 2 | 0E/2M/0H | Track path compression mistake if any | 281 | xUnit day heavy |
| 088 | Week 09 | Review | Graph plus Union Find comparisons | 3 | 0E/3M/0H | Decide BFS/DFS vs Union Find explicitly | 284 | Architecture ADR day |
| 089 | Week 09 | Review and redo | Clean Architecture week DSA redo | 3 | 0E/3M/0H | Redo DP and Union Find misses | 287 | Code review day |
| 090 | Week 09 | Review | Phase 5 DP and Union Find checkpoint | 3 | 0E/3M/0H | Timed mixed medium set | 290 | Architecture checkpoint |
| 091 | Week 10 | New learning | Trie intro | 4 | 1E/3M/0H | Write node shape and terminal marker | 294 | Encapsulation review day |
| 092 | Week 10 | New learning | Trie prefix and search | 3 | 0E/3M/0H | Redo one trie implementation miss | 297 | Repository ADR day |
| 093 | Week 10 | New learning | Advanced intervals | 3 | 0E/3M/0H | Explain sorting key choice | 300 | Strategy pattern day |
| 094 | Week 10 | New learning | Sweep line intro | 3 | 0E/3M/0H | Track event ordering edge cases | 303 | Factory pattern day |
| 095 | Week 10 | New learning | Topological sort intro | 4 | 0E/4M/0H | Explain indegree invariant | 307 | CQRS day |
| 096 | Week 10 | Review and redo | Topological redo under refactor load | 2 | 0E/2M/0H | Redo failed topo problems only | 309 | Refactor day heavy |
| 097 | Week 10 | New learning | Bit manipulation basics | 3 | 1E/2M/0H | Write bit meaning before code | 312 | Test boundary day |
| 098 | Week 10 | New learning | Bit masks and pattern misuse | 3 | 0E/2M/1H | One selected hard if medium set is clean | 315 | Pattern review day |
| 099 | Week 10 | Review and redo | Architecture diagram redo set | 2 | 0E/2M/0H | Redo trie interval or topo misses | 317 | Architecture diagram day |
| 100 | Week 10 | Review | Phase 5 mixed pattern checkpoint | 3 | 0E/2M/1H | One mock-style medium plus one selected hard | 320 | OOP checkpoint |
| 101 | Week 11 | Review | Timed arrays and strings review | 4 | 1E/3M/0H | Redo any old fundamentals miss first | 324 | API Dockerfile heavy |
| 102 | Week 11 | Review | Hash map and sliding window review | 3 | 0E/3M/0H | One timed window medium | 327 | Frontend Dockerfile heavy |
| 103 | Week 11 | Review | Linked list and binary search review | 3 | 0E/3M/0H | Redo pointer or bounds bugs | 330 | Compose DB day |
| 104 | Week 11 | Review | Tree review | 4 | 0E/4M/0H | Explain recursive invariant aloud | 334 | NoSQL Compose day |
| 105 | Week 11 | Review | Heap and interval review | 3 | 0E/2M/1H | One selected hard only if timeboxed | 337 | Environment docs day |
| 106 | Week 11 | Review and redo | Graph redo under runtime workload | 2 | 0E/2M/0H | Redo failed graph mediums | 339 | Health startup day |
| 107 | Week 11 | Review and redo | DP redo under hardening workload | 2 | 0E/2M/0H | Redo failed DP only | 341 | Container hardening day |
| 108 | Week 11 | Mock interview | Mock pair under image review workload | 2 | 0E/1M/1H | One interviewer-style explanation plus one hard redo | 343 | Image review day |
| 109 | Week 11 | Review and redo | Fresh-clone DSA redo | 2 | 0E/2M/0H | Redo only; preserve setup time | 345 | Fresh clone heavy |
| 110 | Week 11 | Review | Docker checkpoint deep problem | 1 | 0E/1M/0H | One medium with full written analysis | 346 | Docker checkpoint |
| 111 | Week 12 | Review | Topological sort CI review | 2 | 0E/2M/0H | Redo one topo miss | 348 | CI workflow heavy |
| 112 | Week 12 | Review | Graph cycle detection | 2 | 0E/2M/0H | Explain cycle detection choice | 350 | Integration CI day |
| 113 | Week 12 | Review | DP review plus selected hard | 2 | 0E/1M/1H | One hard only if CI work is done | 352 | Docker build CI day |
| 114 | Week 12 | Review | Bit manipulation review | 2 | 0E/2M/0H | Write bit operations in words | 354 | Secrets day |
| 115 | Week 12 | Review and redo | Intervals preview-deploy redo | 3 | 0E/2M/1H | Redo interval misses before hard | 357 | Preview deployment day |
| 116 | Week 12 | Mock interview | System-style mixed set | 2 | 0E/1M/1H | One medium and one hard with rubric scoring | 359 | Production runbook day |
| 117 | Week 12 | Review | Graph and topological Kubernetes review | 3 | 0E/2M/1H | Tie dependency DAG to deployment thinking | 362 | Kubernetes concept day |
| 118 | Week 12 | Review | Heap and priority queue review | 2 | 0E/2M/0H | Redo heap ordering bug if present | 364 | Probe resources day |
| 119 | Week 12 | Review and redo | Rollback redo set | 2 | 0E/1M/1H | Redo one medium and one selected hard | 366 | Rollback day |
| 120 | Week 12 | Mock interview | Phase 6 deployment mock set | 4 | 0E/3M/1H | Timed two-problem mock plus two redos | 370 | Deployment checkpoint |
| 121 | Week 13 | Mock interview | Architecture-day mixed graph DP | 2 | 0E/1M/1H | Explain tradeoffs before code | 372 | Architecture diagram day |
| 122 | Week 13 | Review | Boundary-aware graph and DP mixed | 3 | 0E/2M/1H | Pick pattern before writing code | 375 | Service boundary day |
| 123 | Week 13 | New learning | Rate limiter sliding window hard mix | 3 | 0E/2M/1H | Explain window invariant and rate-limit analogy | 378 | Rate limiter drill |
| 124 | Week 13 | Review | Notification heap and queue mix | 3 | 0E/2M/1H | Compare heap queue and BFS queue | 381 | Notification design day |
| 125 | Week 13 | New learning | LRU cache hash linked list mix | 3 | 0E/2M/1H | Write data-structure invariant | 384 | Cache strategy day |
| 126 | Week 13 | Review | Async queue topological and graph mix | 3 | 0E/2M/1H | Explain dependency graph | 387 | Async job design day |
| 127 | Week 13 | Review | Capacity binary search on answer | 3 | 0E/2M/1H | Write monotonic predicate | 390 | Capacity estimate day |
| 128 | Week 13 | Review and redo | Bottleneck DP hard redo | 2 | 0E/1M/1H | Redo hardest failed DP problem | 392 | Bottleneck analysis day |
| 129 | Week 13 | Mock interview | System design mock plus one algorithm | 2 | 0E/1M/1H | Score communication with rubric | 394 | System design mock day |
| 130 | Week 13 | Mock interview | Week 13 design checkpoint set | 2 | 0E/1M/1H | One medium redo plus one hard selected | 396 | Design checkpoint |
| 131 | Week 14 | Review | Test-pyramid medium review | 4 | 0E/4M/0H | Classify mistakes like test failures | 400 | Test pyramid day |
| 132 | Week 14 | Review | Arrays hash timed review | 3 | 0E/2M/1H | Timed medium pair plus one hard if clean | 403 | Unit gaps day |
| 133 | Week 14 | Review | Graph tenant-isolation mix | 3 | 0E/2M/1H | Explain visited-state isolation | 406 | Tenant isolation tests day |
| 134 | Week 14 | Review and redo | Sliding window and string redo | 3 | 0E/3M/0H | Redo old string/window misses | 409 | E2E heavy day |
| 135 | Week 14 | Review | Greedy and interval negative cases | 4 | 0E/3M/1H | Write counterexample check | 413 | RBAC negative test day |
| 136 | Week 14 | Review | DP contract-validation mix | 3 | 0E/2M/1H | Validate state and transition like an API contract | 416 | OpenAPI validation day |
| 137 | Week 14 | Review | Binary search under load-test workload | 2 | 0E/1M/1H | One medium plus one selected hard | 418 | k6 heavy day |
| 138 | Week 14 | Review and redo | Flaky-test redo set | 2 | 0E/2M/0H | Redo problems failed due to carelessness | 420 | Flaky test day |
| 139 | Week 14 | Review and redo | Coverage gap weak-pattern set | 2 | 0E/2M/0H | Choose only weakest two patterns | 422 | Coverage day |
| 140 | Week 14 | Mock interview | Quality checkpoint hard deep dive | 1 | 0E/0M/1H | One hard with full proof and edge cases | 423 | Quality checkpoint |
| 141 | Week 15 | Review | Stack queue timed review | 4 | 0E/3M/1H | One hard only after two clean mediums | 427 | Logging day |
| 142 | Week 15 | Review | Heap priority incident mix | 2 | 0E/1M/1H | Explain heap invariant under pressure | 429 | Metrics day |
| 143 | Week 15 | Review | Graph health-check mix | 2 | 0E/1M/1H | State failure modes before code | 431 | Health readiness day |
| 144 | Week 15 | Review | Network-style mixed DSA | 2 | 0E/2M/0H | Tie queue/window ideas to traffic | 433 | API outage runbook |
| 145 | Week 15 | Review | DB slowdown binary DP mix | 4 | 0E/3M/1H | Write complexity like query cost | 437 | DB slowdown runbook |
| 146 | Week 15 | Review and redo | Database-unavailable redo | 2 | 0E/1M/1H | Redo hardest failed graph or DP | 439 | Break-system day |
| 147 | Week 15 | Mock interview | Incident mock pair | 2 | 0E/1M/1H | Use rubric and postmortem mistake notes | 441 | Postmortem day |
| 148 | Week 15 | Review | Alert SLO weak-pattern set | 3 | 0E/2M/1H | Target top two mistake types | 444 | Alert SLO day |
| 149 | Week 15 | Review and redo | Production-readiness redo set | 3 | 0E/2M/1H | Redo failed hard or convert to medium if blocked | 447 | Production readiness day |
| 150 | Week 15 | Mock interview | Reliability checkpoint hard problem | 1 | 0E/0M/1H | One hard with incident-style reflection | 448 | Reliability checkpoint |
| 151 | Week 16 | Review | Capstone gap mixed set | 3 | 0E/2M/1H | Pick patterns blocking interview confidence | 451 | Requirements gap day |
| 152 | Week 16 | Review | Bit manipulation and security-adjacent reasoning | 2 | 0E/1M/1H | Write bit reasoning step by step | 453 | Threat model day |
| 153 | Week 16 | Review | Hash map and sliding window auth mix | 2 | 0E/2M/0H | Keep count low for hardening workload | 455 | Auth session day |
| 154 | Week 16 | Review | Union Find tenant proof mix | 2 | 0E/1M/1H | Explain components and isolation analogy | 457 | Tenant proof day |
| 155 | Week 16 | Review | Trie and string file-upload mix | 2 | 0E/1M/1H | Redo string parsing mistakes | 459 | File upload security day |
| 156 | Week 16 | Review and redo | Dependency audit redo set | 2 | 0E/2M/0H | Redo only; no new topic | 461 | Dependency audit day |
| 157 | Week 16 | Review | Timed arrays strings retest | 3 | 0E/2M/1H | Use accessibility-style edge cases | 464 | Accessibility retest day |
| 158 | Week 16 | Review | Binary search and heap performance set | 2 | 0E/1M/1H | Explain complexity first | 466 | Performance retest day |
| 159 | Week 16 | Mock interview | Security review mock pair | 2 | 0E/1M/1H | Score communication and correctness | 468 | Security review day |
| 160 | Week 16 | Mock interview | Capstone checkpoint final hardening set | 4 | 0E/2M/2H | Two redos plus two selected hard problems | 472 | Capstone checkpoint |
| 161 | Week 17 | Mock interview | Architecture final mixed set | 2 | 0E/1M/1H | Explain system tradeoff and code tradeoff | 474 | Architecture final pass |
| 162 | Week 17 | Review and redo | ADR cleanup redo | 1 | 0E/1M/0H | Redo one decision-related weak pattern | 475 | ADR cleanup day |
| 163 | Week 17 | Review | Portfolio README mixed proof | 2 | 0E/1M/1H | Choose problems that create interview stories | 477 | Portfolio README day |
| 164 | Week 17 | Review and redo | Proof checklist redo | 1 | 0E/1M/0H | Redo one old miss from tracker | 478 | Proof checklist day |
| 165 | Week 17 | Mock interview | Demo-script mock pair | 2 | 0E/1M/1H | Practice speaking while solving | 480 | Demo script day |
| 166 | Week 17 | Mock interview | Case-study hard deep dive | 1 | 0E/0M/1H | One hard plus written case-study style explanation | 481 | Case study day |
| 167 | Week 17 | Review and redo | Release notes medium redo | 1 | 0E/1M/0H | Redo one medium cleanly | 482 | Release notes day |
| 168 | Week 17 | Review | Stakeholder memo medium | 1 | 0E/1M/0H | Explain solution in non-jargon language | 483 | Stakeholder memo day |
| 169 | Week 17 | Mock interview | Senior communication mock pair | 2 | 0E/1M/1H | Use rubric; record communication score | 485 | Communication rehearsal |
| 170 | Week 17 | Mock interview | Portfolio checkpoint final pair | 2 | 0E/1M/1H | Redo one miss and solve one selected hard | 487 | Portfolio checkpoint |
| 171 | Week 18 | Review and redo | Technical question bank redo | 1 | 0E/1M/0H | Choose one weak medium from the full log | 488 | Question bank day |
| 172 | Week 18 | Mock interview | System design drill hard algorithm | 1 | 0E/0M/1H | One hard with tradeoff explanation | 489 | System design drill |
| 173 | Week 18 | Mock interview | Code review drill medium | 1 | 0E/1M/0H | Solve while explaining review concerns | 490 | Code review drill |
| 174 | Week 18 | Review | Behavioral story medium | 1 | 0E/1M/0H | Pick a problem that maps to a story | 491 | Behavioral story day |
| 175 | Week 18 | Review and redo | Debugging story hard redo | 1 | 0E/0M/1H | Redo a hard failed due to debugging issue | 492 | Debugging story day |
| 176 | Week 18 | Mock interview | Tradeoff rehearsal hard | 1 | 0E/0M/1H | Explain two valid approaches and choose one | 493 | Tradeoff day |
| 177 | Week 18 | Review | Known limitations medium | 1 | 0E/1M/0H | Write limitation and next-step note | 494 | Limitations day |
| 178 | Week 18 | Review | Fresh clone final mixed pair | 2 | 0E/1M/1H | One medium redo plus one hard selected | 496 | Fresh clone day |
| 179 | Week 18 | Review | Release tag final medium | 1 | 0E/1M/0H | Keep it light; protect release work | 497 | Release tag day |
| 180 | Week 18 | Mock interview | Final interview handoff set | 3 | 0E/1M/2H | Final timed set; update all totals and redo flags | 500 | Final review day |

## Spaced Repetition Rules

- Redo failed problems after 2 days, 7 days, and 21 days when possible.
- A redo only counts if solved without looking and the original mistake is explained in the log.
- Every checkpoint day must produce a weak-pattern list.
- By the end of each sprint, mark each pattern as green, yellow, or red.
- Carry red patterns into the next sprint's redo slots before adding extra new problems.