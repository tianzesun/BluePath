graph TD
    subgraph Frontend [Next.js App]
        A[React Flow Canvas]
    end

    subgraph Backend [FastAPI Server]
        B[Python API]
        E[RAG Ingestion Engine]
    end

    subgraph Storage [Neo4j]
        C[(Course Graph DB)]
    end

    subgraph External [University Site]
        D[Official Calendar]
    end

    A <--> B
    B <--> C
    D --> E
    E --> C
