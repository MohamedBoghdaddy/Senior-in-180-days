# Production AI Checklist

Use this before any AI feature is considered portfolio-ready.

## Product

- User problem is specific.
- Non-AI baseline is documented.
- Success metric is measurable.
- Failure mode is visible to the user.
- Human override exists when needed.

## Backend

- Model gateway isolates providers.
- Requests have tenant scope, auth, timeout, and trace ID.
- Structured outputs are validated.
- Tool calls use schemas and permissions.
- Background jobs handle slow work.
- Redis or another cache is used only for safe cacheable work.

## Data

- Retrieval data is tenant-filtered.
- Vector records include source, timestamp, version, and permissions.
- PII and secrets are excluded or redacted.
- Deletion and re-indexing paths exist.

## Evaluation

- Golden dataset exists.
- Hallucination tests exist.
- Regression tests run in CI.
- Manual review queue exists for ambiguous failures.

## Operations

- Cost, tokens, latency, errors, refusals, and fallback rate are tracked.
- Rate limits and budgets are enforced.
- Provider outage fallback exists.
- Incident runbook exists.
- Postmortems include prevention work.

## References

- OpenAI production best practices: https://developers.openai.com/api/docs/guides/production-best-practices
- OpenAI safety best practices: https://developers.openai.com/api/docs/guides/safety-best-practices
- OpenTelemetry: https://opentelemetry.io/docs/
- Redis docs: https://redis.io/docs/latest/
- NVIDIA Triton Inference Server: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/index.html