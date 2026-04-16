BluePath
BluePath is a next-generation academic graph platform designed for the Department of Computer Science. It serves as a high-performance, AI-driven evolution of the original Courseography project, modernized to help students and faculty navigate complex prerequisite chains with ease.

Built with a focus on speed, data integrity, and automated ingestion, BluePath transitions from a static Haskell-based parser to a dynamic Graph Database (Neo4j) and RAG-powered data pipeline.

🚀 Key Features
Interactive Dependency Graphs: Powered by React Flow, providing a fluid, IDE-like interface for exploring course relationships.

Pathfinding Engine: Instantly calculate the "Shortest Path to Graduation" or visualize how a single 100-level course unlocks future 400-level opportunities.

AI-Driven Ingestion: Uses a RAG (Retrieval-Augmented Generation) pipeline to automatically parse academic calendars and syllabi into structured graph nodes.

Faculty Impact Analysis: A specialized view for department administrators to see how curriculum changes ripple through the prerequisite ecosystem.

Departmental Privacy: Fully self-hosted infrastructure ensuring institutional data stays within the department's GPU cluster.

🛠 Tech Stack
Frontend: Next.js (TypeScript), Tailwind CSS, React Flow

Backend: Python FastAPI (High-performance asynchronous API)

Database: Neo4j (Native Property Graph Database)

AI/Orchestration: Dify / LangChain (for automated PDF/Syllabus parsing)

Infrastructure: Self-hosted on Linux GPU Cluster

📂 Project Structure
Plaintext
├── apps/
│   ├── web/          # Next.js frontend (React Flow implementation)
│   └── api/          # FastAPI backend (Neo4j logic & Pathfinding)
├── packages/
│   ├── ingestion/    # Python scripts for RAG & PDF parsing
│   └── schema/       # Shared TypeScript types and Cypher queries
├── docker-compose.yml
└── README.md
⚡ Quick Start (Development)
Prerequisites
Docker & Docker Compose

Node.js (v20+)

Python 3.10+

1. Clone the Repository
Bash
git clone https://github.com/your-username/bluepath.git
cd bluepath
2. Launch Infrastructure
This starts the Neo4j instance and the Dify orchestration environment.

Bash
docker-compose up -d
3. Setup Frontend
Bash
cd apps/web
npm install
npm run dev
4. Setup Backend
Bash
cd apps/api
pip install -r requirements.txt
python main.py
🧠 Development Workflow: "Vibe Coding"
This project is optimized for AI-assisted development. If using Cline CLI or a local LLM, you can reference the existing courseography logic to scaffold new BluePath features:

Map Data: Use the ingestion scripts to port legacy JSON data into Neo4j.

Generate Logic: Ask the AI to write Cypher queries for complex prerequisite logic (e.g., "Find all exclusions for CSC209").

Iterate UI: Use Tailwind components to rapidly build out the student "Sandbox" planner.

🛡 License
Internal use only – Department of Computer Science.
