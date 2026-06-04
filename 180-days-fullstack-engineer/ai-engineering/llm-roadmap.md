# LLM Roadmap

The LLM layer starts after backend and data foundations are credible. Treat prompts, model calls, and provider adapters like production interfaces.

## Progression

| Weeks | Focus | Evidence |
|-------|-------|----------|
| 01-04 | No implementation; learn where AI should not be used and how to frame risk | AI opportunity note, model-gateway contract, threat model |
| 05-06 | Vocabulary and typed boundaries | structured-output contract, JSON validation comparison |
| 10 | Model gateway and provider comparison | prompt/schema contract, timeout budget, cost estimate |
| 11 | RAG prompt with citations | retrieval context, no-answer behavior, hallucination examples |
| 12 | Tool calling and MCP basics | tool registry, allowed actions, CI eval gate |
| 13-15 | Model routing, monitoring, fallback, rollback | model/version comparison, cost dashboard, incident postmortem |
| 16-18 | Security and communication | guardrail tests, risk register, final interview pack |

## Required Explanations

- Tokens, context windows, embeddings, inference latency.
- Why structured outputs are still validated by application code.
- How function/tool calling differs from executing arbitrary model text.
- How to compare OpenAI, Anthropic, and local/open-source models.
- How to reduce cost and latency without quietly reducing quality.

## References

- OpenAI text generation: https://developers.openai.com/api/docs/guides/text
- OpenAI structured outputs: https://developers.openai.com/api/docs/guides/structured-outputs
- Anthropic tool use: https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview
- Hugging Face LLM Course: https://huggingface.co/learn/llm-course/chapter1/1