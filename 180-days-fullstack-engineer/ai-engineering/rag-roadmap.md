# RAG Roadmap

RAG is introduced only after data modeling, backend boundaries, and Docker runtime work are in place.

## Production RAG Components

| Component | What to build | Evidence |
|-----------|---------------|----------|
| Source data | small tenant-safe document set | source inventory and privacy note |
| Chunking | chunk size, overlap, metadata | chunking decision table |
| Embeddings | embedding job and storage | embedding pipeline log |
| Vector store | pgvector/vector database schema | migration and index notes |
| Retrieval | top-k search and filters | retrieval examples and misses |
| Ranking | simple re-rank or score threshold | relevance table |
| Generation | answer with citations and no-answer path | prompt/schema contract |
| Evaluation | golden questions and expected sources | eval report |
| Operations | latency, token cost, cache, fallback | cost/latency report and runbook |

## Required Failure Examples

- Correct answer with weak citation.
- Relevant source not retrieved.
- Stale document retrieved.
- Wrong tenant document blocked.
- Model fabricates when retrieval has no answer.

Use [../templates/rag-design-doc-template.md](../templates/rag-design-doc-template.md) and [../templates/ai-eval-report-template.md](../templates/ai-eval-report-template.md).