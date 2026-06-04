# DSA Pattern Library

This file is the pattern index for the 500-problem track. It should be updated whenever a pattern moves from memorized to explainable.

## Quality Bar

For every pattern, know:

- Prompt signals.
- Brute force baseline.
- Optimized invariant.
- Time complexity.
- Space complexity.
- Common edge cases.
- Common mistake.
- One clean explanation you can say in an interview.

## Core Patterns

| Pattern | Roadmap window | Prompt signals | Common mistakes | Portfolio proof |
|---------|----------------|----------------|-----------------|-----------------|
| Arrays and prefix sums | Weeks 01, 11, 14 | contiguous values, range sum, frequency | off-by-one, mutating input unexpectedly | problem logs plus one pattern note |
| Strings | Weeks 01-02, 16 | characters, parsing, normalization | Unicode assumptions, empty strings | edge-case table |
| Hash maps | Weeks 02, 11, 14, 16 | membership, counts, grouping | missing decrement/delete, wrong key | frequency-map explanation |
| Two pointers | Week 02 | sorted input, palindrome, pair search | moving wrong pointer | invariant note |
| Sliding window | Weeks 02, 13, 16 | longest/shortest contiguous window | shrink condition | window invariant note |
| Stack and queue | Weeks 03, 15 | nesting, next greater, BFS order | stale stack state | monotonic stack sketch |
| Linked list | Week 03 | pointer manipulation | losing next pointer | pointer diagram |
| Binary search | Weeks 03, 05, 13, 14 | sorted or monotonic predicate | infinite loop, wrong bound | predicate explanation |
| Recursion and trees | Week 04 | hierarchy, traversal | missing base case | traversal comparison |
| BST | Week 04 | ordered tree | local-only validation | min/max range proof |
| Heap | Weeks 05, 11, 15 | top K, scheduling, priority | wrong heap size/order | heap invariant note |
| Graph BFS/DFS | Weeks 06, 11, 13-15 | connected components, grid, path | visited timing | graph representation diagram |
| Backtracking | Week 07 | all combinations/permutations | missing undo/pruning | decision tree diagram |
| Greedy | Weeks 07, 14 | local choice, intervals | no counterexample check | exchange argument |
| Dynamic programming | Weeks 08-09, 11-16 | overlapping subproblems | wrong state/transition | state table |
| Union Find | Weeks 09, 16 | components, connectivity | missing path compression | component invariant |
| Trie | Weeks 10, 16 | prefix search | terminal marker bug | node-shape diagram |
| Intervals | Weeks 05, 10, 14 | time ranges, overlaps | wrong sort key | event ordering note |
| Topological sort | Weeks 10, 12-13 | dependencies, prerequisites | indegree update bug | DAG explanation |
| Bit manipulation | Weeks 10, 12, 16 | flags, masks, parity | operator precedence | bit table |

## Redo Policy

Mark a problem for redo when:

- The pattern was not recognized within five minutes.
- The invariant was wrong.
- The code passed samples but failed hidden edge cases.
- Complexity was wrong or unexplained.
- You could not explain the approach clearly.