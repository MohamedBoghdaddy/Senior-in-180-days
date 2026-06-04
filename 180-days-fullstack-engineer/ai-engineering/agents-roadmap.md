# Agents Roadmap

Agents are introduced as controlled workflows, not magic autonomy. The safe order is tools, permissions, state, logs, then planning.

## Agent Progression

| Week | Capability | Guardrail | Artifact |
|------|------------|-----------|----------|
| 10 | tool/function contract vocabulary | no execution from raw text | model gateway contract |
| 12 | tool-calling demo and MCP basics | allowlisted tools, human approval, audit log | agent CI gate |
| 13 | async workflow design | queue limits and backpressure | system design doc |
| 15 | incident response | rollback and kill switch | AI incident postmortem |
| 16 | prompt injection and excessive agency tests | least privilege and tenant checks | AI security package |
| 18 | interview explanation | explain failure modes and tradeoffs | final interview pack |

## Required Explanations

- Tool calling vs function calling vs MCP.
- Why model output is a request, not an authorization decision.
- How to prevent stale or unauthorized tool context.
- How to log and replay an agent trace.
- When a deterministic workflow is better than an agent.

## References

- Hugging Face Agents Course: https://huggingface.co/learn/agents-course
- Hugging Face MCP Course: https://huggingface.co/learn/mcp-course/unit0/introduction
- Anthropic tool use: https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview