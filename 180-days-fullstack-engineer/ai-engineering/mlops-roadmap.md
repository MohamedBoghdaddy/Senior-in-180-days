# MLOps Roadmap

MLOps in this roadmap means production control over data, models, prompts, evals, releases, monitoring, and rollback. It is not a separate modeling track.

## Skill Map

| Area | Weeks | Evidence |
|------|-------|----------|
| Reproducibility | 01-03 | pinned dependencies, CLI tests, deterministic data transformations |
| Deployment foundations | 06-09 | endpoint, load notes, env docs, IAM notes, rollback checklist |
| AI runtime | 10-12 | model gateway, RAG runtime, agent CI gate |
| Model/data versions | 13 | model registry plan, dataset version notes, feedback loop |
| Evaluation | 14 | golden dataset, regression evals, hallucination tests |
| Monitoring | 15 | drift notes, cost/latency dashboard, alert thresholds |
| Security and release | 16 | provider secrets, audit logs, risk register |
| Final readiness | 18 | scorecard and interview pack |

## Required Explanations

- How ML differs from deterministic software releases.
- How data drift and concept drift can break a production system.
- Why model, prompt, dataset, and eval versions must be tracked together.
- How rollback works for an AI feature.
- How human feedback becomes product data.

## References

- DeepLearning.AI Machine Learning in Production: https://www.deeplearning.ai/courses/machine-learning-in-production
- W&B Models: https://docs.wandb.ai/models
- OpenTelemetry: https://opentelemetry.io/docs/