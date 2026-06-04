# LLM Fundamentals For Full-Stack AI Engineers

This is not an ML researcher track. Learn enough model behavior to build reliable AI product systems.

## Study Order

| Stage | Weeks | Focus | Artifact |
|-------|-------|-------|----------|
| Observe | 01-04 | AI product opportunities, risks, API boundaries, threat modeling | opportunity note and model-gateway contract |
| Integrate | 05-06 | tokens, context windows, structured outputs, tool/function calling contracts | structured-output contract |
| Retrieve | 07-08 | embeddings, vector storage, chunking, metadata, citations | embedding storage and RAG design |
| Orchestrate | 09-12 | provider adapters, deterministic workflows, tool orchestration, CI eval gates | service boundary and agent workflow docs |
| Operate | 13-16 | production RAG, evals, observability, safety, fallback, cost | eval report and AI postmortem |
| Package | 17-18 | case study, interview pack, readiness scorecards | final AI portfolio proof |

## Concepts To Know

- Tokens: cost, latency, truncation, and context budgeting.
- Context windows: what fits, what gets retrieved, what should be summarized.
- Embeddings: vector representations used for similarity search.
- Inference latency: model time, network time, queue time, and post-processing time.
- Structured outputs: schema-constrained model output validated by application code.
- Tool calling: model-selected tool requests executed by trusted application code.
- Model gateway: one backend boundary for providers, routing, fallbacks, logging, and budgets.

## Official References

- OpenAI text generation: https://developers.openai.com/api/docs/guides/text
- OpenAI function calling: https://developers.openai.com/api/docs/guides/function-calling
- OpenAI structured outputs: https://developers.openai.com/api/docs/guides/structured-outputs
- OpenAI embeddings: https://developers.openai.com/api/docs/guides/embeddings
- Anthropic features overview: https://platform.claude.com/docs/en/build-with-claude/overview
- Anthropic tool use: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview

## Engineering Rule

Never ship an AI feature without an owner, a user workflow, an eval set, a cost budget, an observability plan, and a fallback.