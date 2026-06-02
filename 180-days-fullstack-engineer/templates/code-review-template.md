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
