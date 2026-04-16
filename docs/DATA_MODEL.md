# BluePath Data Model (Neo4j)

## Nodes
- **Course**: `{ code: string, title: string, description: string, fce: float, department: string }`
- **Program**: `{ name: string, type: "Major" | "Minor" | "Specialist" }`
- **User**: `{ id: string, name: string }`

## Relationships
- `(Course)-[:PREREQ_FOR]->(Course)`
- `(Course)-[:COREQ_WITH]->(Course)`
- `(Course)-[:EXCLUSION_OF]->(Course)`
- `(Program)-[:REQUIRES]->(Course)`
- `(User)-[:SAVED_PLAN]->(Course)`
