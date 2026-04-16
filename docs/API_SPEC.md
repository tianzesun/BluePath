# BluePath API Specification

## Endpoints
- `GET /api/v1/courses`: Returns all course nodes.
- `GET /api/v1/graph/:course_code`: Returns the full prerequisite tree for a specific course.
- `GET /api/v1/pathfinding`: Query params `from` and `to`. Returns the shortest path.
- `POST /api/v1/ingest`: Admin-only endpoint to trigger a calendar scrape.
