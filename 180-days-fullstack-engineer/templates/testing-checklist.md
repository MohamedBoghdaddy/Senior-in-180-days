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
