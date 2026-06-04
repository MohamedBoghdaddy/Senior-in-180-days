# Security For AI Systems

AI security extends normal application security. Auth, RBAC, tenant isolation, secrets, validation, logging, and least privilege still come first.

## Threat Areas

| Threat | Control | Evidence |
|--------|---------|----------|
| Prompt injection | separate instructions/data, allowlisted tools, human approval for sensitive actions | red-team tests and mitigation notes |
| Sensitive data disclosure | tenant filters, PII redaction, retrieval scoping, output review | privacy test cases |
| Insecure output handling | validate structured output, escape/render safely, never execute raw text | output validation tests |
| Excessive agency | tool permissions, rate limits, kill switch, audit log | agent permission matrix |
| Vector/embedding weakness | metadata filters, source freshness, tenant checks, eval misses | retrieval failure report |
| Cost abuse | quotas, budgets, rate limits, alert thresholds | cost dashboard notes |
| Model/provider outage | fallback, timeout, retry/backoff, graceful degradation | incident runbook |

## Required Interview Answer

Explain why a model is not a security boundary, why retrieved context must be tenant-scoped, and why tool calls need application-level authorization.

## References

- OWASP LLM Top 10: https://owasp.org/www-project-top-10-for-large-language-model-applications/
- OWASP Cheat Sheets: https://owasp.org/www-project-cheat-sheets/
- Google Cybersecurity Certificate: https://grow.google/certificates/cybersecurity/