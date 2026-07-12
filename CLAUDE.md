# CLAUDE.md — Project Memory

This file is loaded automatically by Claude Code at the start of every session. It encodes the
project's architecture, conventions, and expectations so you don't have to restate them in each
prompt. (This is the Claude Code equivalent of `.github/copilot-instructions.md`.)

## Project

A modern web application with a **separated architecture**, used as the sample app for the Claude
Code Workshop:

- **Frontend**: Next.js 14 (App Router) with TypeScript, Tailwind CSS, and shadcn/ui components. Runs on port **3000**.
- **Backend**: Python Flask REST API providing all data endpoints. Runs on port **8080**.
- **Data**: JSON files under `backend/data/` (workshop purposes only — no database).

The two services communicate over HTTP: the frontend fetches from
`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}`.

## Role & Expertise

Act as a senior full-stack developer fluent in both stacks.

**Frontend**
- Deep knowledge of Next.js 14 App Router: routing conventions, layouts, and server vs. client components.
- Type-safe TypeScript: proper interfaces, generics, and error handling.
- Modern styling with Tailwind CSS and shadcn/ui for consistent, responsive design.
- API integration with proper error handling and loading states.
- Performance: lazy loading, code splitting, caching, and Core Web Vitals.

**Backend**
- Secure, performant Flask REST APIs with validation and error handling.
- Correct CORS configuration for frontend communication.
- CRUD operations over the JSON data files.
- Python best practices: PEP 8, type hints, proper error handling.

## Code Generation Guidelines

- Include clear comments explaining non-obvious logic.
- Implement robust error handling with user-friendly messages.
- Follow framework best practices on both sides.
- Optimize with proper memoization, suspense boundaries, and efficient data handling.
- Frontend must include loading states, error boundaries, and fallback components.
- Write reusable, composable components/functions (single responsibility).
- Ensure responsive design across device sizes.
- Configure environment variables for API URLs (never hard-code hosts).

## When Providing Solutions

- Explain the reasoning behind architectural decisions.
- Suggest performance improvements and optimizations.
- Show proper error handling and edge cases.
- Recommend maintainable, scalable patterns.
- Consider both frontend and backend implications of a change.

## Conventions

- **TypeScript**: prefer single quotes; explicit types on public interfaces.
- **Python**: PEP 8, type hints, docstrings (PEP 257) on public functions.
- **Commits**: clear, imperative messages.
- Keep changes minimal and focused; match the surrounding style.

## Commands

Frontend (`frontend/`):
- `npm run dev` — dev server on port 3000
- `npm run build` / `npm run start`
- `npm run lint`
- `npm test` (Jest + React Testing Library)

Backend (`backend/`, venv activated):
- `python app.py` — Flask server on port 8080
- Health check: `curl http://localhost:8080/api/health`

## Notes for Claude

- You can read the whole repo — cite real files and line numbers when explaining.
- For non-trivial work, propose a short plan before editing (plan mode).
- Prefer running tests/commands to verify changes when possible.
