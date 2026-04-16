# BluePath System Architecture

## 1. System Components
- **Frontend**: Next.js (Node.js/TypeScript) + React Flow.
- **Backend**: FastAPI (Python 3.10+).
- **Database**: Neo4j (Graph Database).
- **Automation**: Dify + Local LLM (Llama 3) for RAG-based ingestion.

## 2. Data Flow
1. **User Request**: User opens a graph -> Next.js calls FastAPI.
2. **Graph Retrieval**: FastAPI runs a Cypher query -> Neo4j returns Nodes/Edges.
3. **Rendering**: React Flow draws the JSON data dynamically.
4. **Maintenance**: Dify script scrapes UofT Calendar -> LLM extracts data -> Python updates Neo4j.

## 3. High-Level Diagram
