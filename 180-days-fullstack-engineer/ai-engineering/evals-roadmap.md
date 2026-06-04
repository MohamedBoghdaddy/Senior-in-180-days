# Evals Roadmap

Evaluation is the quality system for AI features. The roadmap uses evals to decide what ships, what rolls back, and what needs human review.

## Evaluation Layers

| Layer | What to measure | Evidence |
|-------|-----------------|----------|
| Unit checks | schema validity, tool args, citation fields | structured-output tests |
| Retrieval checks | expected source retrieved, tenant filters, freshness | retrieval eval table |
| Generation checks | grounded answer, no-answer behavior, tone, safety | hallucination test cases |
| Regression checks | old failures stay fixed | CI eval gate |
| Human review | ambiguous answers, product judgment, severity | review queue notes |
| Production monitoring | latency, cost, correction rate, escalation rate | dashboard notes |

## Required Report Sections

- Dataset purpose.
- Cases included and excluded.
- Metrics and thresholds.
- Model/prompt/version compared.
- Failure examples.
- Decision: ship, block, rollback, or collect more data.

Use [../templates/ai-eval-report-template.md](../templates/ai-eval-report-template.md).