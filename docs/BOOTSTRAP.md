# BluePath Bootstrap Guide (Step 0)

## 1. Environment Configuration
- Create a `.env` file in the root with:
  - `NEO4J_URI=bolt://localhost:7687`
  - `NEO4J_USER=neo4j`
  - `NEO4J_PASSWORD=password`
  - `NEXT_PUBLIC_API_URL=http://localhost:8000`

## 2. Shared Data Contract
To ensure the Python backend and Next.js frontend speak the same language, all Course objects must follow this JSON structure:
```json
{
  "id": "CSC148H1",
  "data": { "label": "Intro to CS", "credits": 0.5 },
  "position": { "x": 0, "y": 0 },
  "type": "courseNode"
}
