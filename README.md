BluePath: Next-Gen Academic Graph Platform
BluePath is a high-performance, graph-based academic planning engine. It replaces legacy static degree visualizations with a dynamic, AI-maintained ecosystem using Next.js, FastAPI, and Neo4j.

Note for AI Agents: Read docs/AGENT.md and docs/ARCHITECTURE.md before writing any code. Follow the Platform-First directive: Build for UofT today, but ensure the schema and UI are university-agnostic for tomorrow.

🏗️ System Architecture
Frontend: Next.js 15 (App Router) + React Flow (@xyflow/react).

Backend: FastAPI (Python 3.12) - RESTful API for graph traversal.

Database: Neo4j (Graph Database) - Stores courses as nodes and prerequisites as edges.

AI/RAG: Dify + Local LLM (Llama 3) - Automated extraction of course data from university calendars.

Infrastructure: Native Linux (Ubuntu/Debian) with dedicated GPU support for LLM tasks.

📂 Repository Structure
Plaintext
BluePath/
├── apps/
│   ├── api/            # Python FastAPI Backend
│   │   ├── main.py     # Entry point
│   │   ├── database.py # Neo4j connection logic
│   │   └── config.py   # Pydantic environment management
│   └── web/            # Next.js Frontend
│       ├── app/        # Page routes (React Flow Canvas)
│       └── components/ # UI Components (Bento grids, Shadcn)
├── docs/               # Technical Specifications (AI Knowledge Base)
├── packages/
│   └── ingestion/      # Scrapers and RAG extraction scripts
└── .clinerules         # Critical AI operational guardrails
🚦 Getting Started (Native Linux)
1. Database (Neo4j)
Ensure Neo4j is running locally:

Bash
sudo systemctl start neo4j
# Default: http://localhost:7474 | Bolt: localhost:7687
2. Backend Setup
Bash
cd apps/api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
3. Frontend Setup
Bash
cd apps/web
npm install
npm run dev
🤖 Instructions for AI Agents
Core Engineering Principles
Graph-First: Do not use relational (SQL) logic. Every course connection must be a RELATIONSHIP in Neo4j.

Platform Abstraction: Use the institution property on all nodes. Reference tailwind.config.ts for theme-able colors.

Vibe Coding Style: Prioritize high-quality, modern UI (Glassmorphism, Bento grids, Framer Motion) and concise, performant Python code.

No Static Assets: Do not generate static SVG graphs. All graphs must be interactive via @xyflow/react.

Initial Task Sequence
Verify Environment: Check .env files in apps/api and apps/web.

Schema Sync: Run the Neo4j initialization script in docs/BOOTSTRAP.md to set constraints.

API Heartbeat: Implement a GET /health endpoint in FastAPI that checks the Neo4j connection.

Canvas Setup: Create a basic React Flow canvas in apps/web/app/page.tsx that fetches a dummy "Hello World" node from the API.

📈 Roadmap
[ ] Phase 1: The Skeleton. Linux Native environment, Neo4j connection, and basic Flow canvas.

[ ] Phase 2: The Migration. Port UofT Courseography data into the Neo4j graph.

[ ] Phase 3: The Brain. Implement Dijkstra-based pathfinding for degree planning.

[ ] Phase 4: The Ingestor. Build the Dify-powered RAG scraper for automated updates.

[ ] Phase 5: The Platform. Reskin for a second university (e.g., Waterloo) using the institution namespace.
