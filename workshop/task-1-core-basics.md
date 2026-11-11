# Task 1 - Core Claude Code Basics
`⏱ ~45 min | 🟢 Beginner`

## 1.1 Repository Exploration

**Imagine you just joined the team and need to understand the project.**

Claude Code automatically has access to your working directory — no `@workspace` needed. Start `claude` in the project root and ask:
- `Can you tell me about this repository?`
- `What is the architecture of this application?`
- `Where is the backend API located and what framework is it using?`
- `Where is the frontend located and what framework is it using?`
- `How do the frontend and backend communicate?`
- `Which API endpoints are available in the backend?`
- `Where are the main UI components in the frontend?`
- `What packages does each service use?`

> 💡 To ground an answer in a specific file, reference it with `@`, e.g. `Explain @backend/app.py`. Type `@` to get file autocompletion.

## 1.2 Explore Technologies with Claude

Use Claude to learn the technologies in this project, grounded in the actual codebase. Ask these one by one:
- `How do API endpoints work in Flask? Show me an example from @backend/app.py`
- `What is the App Router pattern in Next.js 14? Where is it used in this project?`
- `How does this project handle CORS between frontend and backend?`
- `What is the difference between server and client components in Next.js 14? Are there examples here?`
- `How does the frontend fetch data from the backend API? Show me an example`

> **Tip:** Notice how Claude cites real files and line numbers because it can read the whole project. Compare that to a generic answer with no repo context.

## 1.3 Project Memory with `CLAUDE.md` (Custom Instructions)

Where Copilot uses `.github/copilot-instructions.md`, **Claude Code uses `CLAUDE.md`** — a memory file it loads automatically at the start of every session. Use it to encode your architecture, conventions, and expectations once so you don't repeat them in every prompt.

**Instructions:**
1. Open the `CLAUDE.md` file at the repo root (this workshop ships one — review it).
2. If you're starting from an empty repo, generate a first draft by running the built-in command inside `claude`:
   ```
   /init
   ```
   Claude will scan the project and propose a `CLAUDE.md`.
3. Confirm the file describes: the separated Next.js + Flask architecture, TypeScript/Tailwind/shadcn on the frontend, Flask/PEP 8 on the backend, and your code-generation guidelines (comments, error handling, loading states, responsive design).
4. Test it: ask Claude any coding question and notice it automatically applies these conventions — TypeScript for frontend, Python for backend, robust error handling, and proper architecture — without you restating them.

> 💡 **Memory tiers:** `CLAUDE.md` (project, shared via git), `CLAUDE.local.md` (project, personal/git-ignored), and `~/.claude/CLAUDE.md` (applies to all your projects). Add a quick note to memory mid-session by starting a message with `#`.

---
> **1.1–1.3: Exploration & Context** — Getting to know the project and configuring Claude's memory
---

## 1.4 Code Reviews with Claude

Claude can review code and suggest improvements — either conversationally or via the built-in `/review` command.

**Instructions:**
1. Open `backend/app.py`.
2. In `claude`, run:
   ```
   /review
   ```
   or ask directly: `Review the get_nba_results function in @backend/app.py for correctness, error handling, and best practices. Suggest concrete changes.`
3. Review Claude's feedback and apply the suggested improvements (Claude can apply them for you — just confirm the diff).
4. Repeat for the other API endpoint functions in the backend.

> 💡 For a security-focused pass, try `/security-review`.

## 1.5 Add Documentation Comments

Documenting code is tedious — let Claude help.

**Instructions:**
1. Open `backend/app.py`.
2. Ask Claude to explain a function first: `Explain the get_nba_results function in @backend/app.py step by step.`
3. Then generate docs: `Add a docstring and inline comments to the get_nba_results function following PEP 257. Keep behavior identical.`
4. Repeat for the other API endpoint functions.

**Notice:** Because your conventions live in `CLAUDE.md`, Claude applies them (style, comment density) automatically on every request.

> 💡 **In the IDE extension:** select the function in VS Code/JetBrains and ask Claude in the side panel — you'll see the documentation applied as an inline diff you can accept or reject.

## 1.6 Generate Unit Tests

**Instructions:**
1. Open `frontend/src/util/calculator.js` — simple calculator utilities.
2. In `claude`, run the workshop's custom command (see `.claude/commands/testing-strategy.md`):
   ```
   /testing-strategy @frontend/src/util/calculator.js
   ```
   or ask: `Generate Jest unit tests for all functions in @frontend/src/util/calculator.js and write them to frontend/src/util/calculator.test.js`.
3. From the `frontend` directory, run: `npm test src/util/calculator.test.js`
4. If tests fail, paste the terminal error back to Claude: `These tests fail with: <error>. Fix them.` Claude will iterate until they pass — and can run the tests itself if you let it.

## 1.7 Fix a Bug with Claude

Claude analyzes context to find and fix errors — and, in its agentic loop, can reproduce, patch, and verify.

**Instructions:**
1. Navigate to the errors page at http://localhost:3000/errors (an "Add NBA player" page).
2. Fill in the form and click **Create player** — you'll get a **404**; the API endpoint wasn't found.
3. Ask Claude: `The /errors page (@frontend/src/app/(dashboard)/errors/page.tsx) posts to /api/players but returns 404. Investigate why.`
4. The frontend POSTs to `/api/players` — does that route exist in `@backend/app.py`?
5. **Find the bug:** there's a mismatch between the backend route name and what the frontend calls.
6. Ask Claude to `Fix the route name in backend/app.py so it matches the frontend request, then explain the change.`
7. Restart the backend and test the form — you should see **"Player created successfully!"**
8. Bonus: `Rename the "errors" page to something descriptive like "add-player", updating the route, nav link, and any references.` Watch Claude update every touchpoint.

## 1.8 Create the Player Info Feature

Build a player-information display by attaching the relevant files as context.

**Instructions:**
1. Reference the API shape and data:
   - `@backend/app.py` — look at `get_player_info`
   - `@backend/data/player-info.json` — the players data
2. Ask Claude:
   ```
   Create a new Next.js page at frontend/src/app/(dashboard)/players-info/page.tsx that
   fetches player data from ${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/player-info.
   Display each player in its own card showing only id, name, team, weight, height, and
   position. Use Tailwind CSS and shadcn/ui. Handle loading and error states.
   ```
3. Open http://localhost:3000/players-info and verify results.

## 1.9 Optimize Code with Claude

Claude can refactor for performance without changing behavior.

**Instructions:**
1. Ensure both services are running (backend on 8080, frontend on 3000).
2. Open the **Optimization** page in the app's left menu — it's intentionally slow.
3. Find the backend route serving it: `@backend/app.py`, the `/api/optimize` endpoint.
4. Switch to a strong model for this: `/model` → **Claude Opus** (or keep Sonnet).
5. Ask: `The /api/optimize endpoint in @backend/app.py is intentionally slow. Optimize it to improve performance without changing its output. Explain what you changed and why.`
6. Apply the changes, restart the backend, and reload the page — it should load faster. The page prints execution time for comparison.

> ✅ **Task 1 Checkpoint:** You should have documented backend functions, passing calculator unit tests, a working `/players-info` page, and a faster `/api/optimize` endpoint.

---

[Previous: Task 0](task-0-install-and-model.md) | [Workshop README](../README.md) | [Next: Task 2](task-2-intermediate-features.md)
