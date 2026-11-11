# Task 0 - Install Claude Code & Choose a Model
`⏱ ~15 min | 🟢 Beginner`

## 0.1 Install Claude Code

Pick **one** of the methods below — they all install the same `claude` command, just via different package managers.

**npm (all platforms):**
```bash
npm install -g @anthropic-ai/claude-code
```
`-g` installs it **globally**, so you can run `claude` from any folder (not just this project). Choose this if you already have Node.js/npm.

**macOS/Linux/WSL (native installer):**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```
This downloads Anthropic's install script and runs it — it fetches a standalone `claude` binary, so you don't need Node.js. (`curl` downloads the script; `| bash` pipes it straight into your shell to execute.)

**Windows (PowerShell):**
```powershell
irm https://claude.ai/install.ps1 | iex
```
The PowerShell equivalent of the line above: `irm` (Invoke-RestMethod) downloads the script and `iex` (Invoke-Expression) runs it.

Verify the install and run the built-in doctor:
```bash
claude --version    # prints the installed version — confirms `claude` is on your PATH
claude doctor       # health check: verifies the install, auth, and config are set up correctly
```

**IDE extension (optional but recommended):** Install the **Claude Code** extension for [VS Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) or JetBrains. It gives you inline diffs, an in-editor chat panel, and shares the same `CLAUDE.md` / `.claude/` configuration as the CLI.

## 0.2 Authenticate

From your project directory, start Claude Code and follow the login flow:
```bash
claude
```
On first run you'll be prompted to sign in with your **Claude account** (Pro/Max) or an **Anthropic API key**. See [Set up Claude Code](https://code.claude.com/docs/en/setup) for details.

## 0.3 Environment Setup

The app has **two services that run at the same time**: a Python backend (the API/data) and a Next.js frontend (the web UI). You'll start each in **its own terminal window** and leave both running for the whole workshop — the frontend calls the backend over HTTP, so if either is stopped, the app won't work. Set up the backend first (the frontend needs it to answer requests).

### Backend Setup (Python Flask) — Terminal 1

```bash
cd backend
python -m venv venv
# Windows:  venv\Scripts\activate
# macOS/Linux:  source venv/bin/activate
pip install -r requirements.txt
python app.py            # http://localhost:8080
```

Line by line — **what each step does and why**:
- `cd backend` — move into the backend folder so the following commands run against the Flask app.
- `python -m venv venv` — create a **virtual environment** (a private, project-local Python with its own packages) in a new `venv/` folder. *Why:* it keeps this project's dependencies isolated from your system Python and other projects, so nothing conflicts.
- `source venv/bin/activate` (or `venv\Scripts\activate` on Windows) — **activate** that virtual environment for this terminal. *Why:* after this, `python` and `pip` point at the project's isolated environment instead of your system-wide one. You'll know it worked when your prompt shows `(venv)`.
- `pip install -r requirements.txt` — install the exact Python packages the backend needs (Flask, Flask-CORS, …), as listed in `requirements.txt`. *Why:* the app can't run without its libraries.
- `python app.py` — start the Flask API server. *Why:* this is the backend. Leave it running; it serves data at **http://localhost:8080**.

**Verify it's up** (in a separate terminal, or your browser):
```bash
curl http://localhost:8080/api/health
```
A JSON response like `{"status": "healthy", ...}` means the backend is working.

### Frontend Setup (Next.js) — Terminal 2

Open a **new** terminal (leave the backend running in the first one) and:

```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > .env.local
npm run dev              # http://localhost:3000
```

Line by line — **what each step does and why**:
- `cd frontend` — move into the frontend folder.
- `npm install` — download the JavaScript/TypeScript packages listed in `package.json` into a local `node_modules/` folder. *Why:* the Next.js app needs its dependencies before it can run (this is the frontend equivalent of `pip install`).
- `echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > .env.local` — create a file named `.env.local` containing one **environment variable** that tells the frontend where the backend lives. *Why:* the app reads `NEXT_PUBLIC_API_URL` at runtime instead of hard-coding the backend URL, so you can point it at a different backend later without editing code. The `>` just writes that line into the file (creating it if needed). You could also create `.env.local` by hand in your editor — the `echo` command is only a shortcut.
- `npm run dev` — start the Next.js **development server**. *Why:* this is the frontend. It serves the UI at **http://localhost:3000** and hot-reloads as you (or Claude) edit files. Leave it running.

Now open **http://localhost:3000** in your browser — you should see the app, and it should be pulling data from the backend on port 8080.

> 💡 **Mental model:** Terminal 1 = backend API (port 8080). Terminal 2 = frontend UI (port 3000). Your browser talks to 3000, and 3000 talks to 8080. Keep both terminals open for the whole workshop.

## 0.4 Choose Your Claude Model

Claude Code lets you switch models at any time with the **`/model`** slash command. Pick based on the task:

- **Claude Opus** (e.g. `claude-opus-4-8`): Deepest reasoning — best for complex, multi-file features, tricky debugging, architecture, and agent-mode work.
- **Claude Sonnet**: Excellent all-rounder — great for everyday development, UI components, API routes, refactors, and optimization. A strong default.
- **Claude Haiku**: Fastest & most economical — great for quick edits, simple lookups, and high-volume tasks.

**How to switch models:**
```
/model
```
Then pick from the list. You can change mid-session; Claude keeps the conversation context.

> 💡 **Tip:** Claude Code also supports **extended thinking**. Ask Claude to "think", "think hard", or "think harder" about a tough problem to allocate more reasoning budget before it acts.

## 0.5 (If needed) Scaffold the Sample App with Claude Code

If `backend/` and `frontend/` don't exist yet, let Claude build them — your first agentic task. In `claude`, try:
```
Scaffold a two-service NBA demo app described in CLAUDE.md:
1. A Python Flask backend in backend/ on port 8080 with JSON data files under
   backend/data/ (nba-games.json, stadiums.json, player-info.json, coaches.json)
   and REST endpoints: /api/health, /api/nba-results, /api/stadiums,
   /api/player-info, /api/coaches, and an intentionally slow /api/optimize.
2. A Next.js 14 (App Router, TypeScript, Tailwind, shadcn/ui) frontend in
   frontend/ on port 3000 with a (dashboard) route group containing
   nba-scores, stadiums, optimization, and errors pages, plus a sidebar nav.
Create everything step by step and let me review each step.
```
Watch Claude plan, create files, and wire the two services together. Accept or refine as it goes.

---

[Workshop README](../README.md) | [Next: Task 1](task-1-core-basics.md)
