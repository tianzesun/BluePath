# Automated Maintenance Strategy

## Goal: Zero Manual Updates
To avoid the "Static SVG" problem of the legacy project, BluePath uses an automated pipeline.

## Ingestion Workflow
1. **Scrape**: Python script crawls `https://art-science.calendar.utoronto.ca/`.
2. **Analyze**: Send raw text to Local LLM via Dify.
3. **Extract**: Prompt LLM to identify "Prerequisites," "Corequisites," and "Exclusions."
4. **Update**: If a delta is found, generate a Cypher `MERGE` statement to update Neo4j.
