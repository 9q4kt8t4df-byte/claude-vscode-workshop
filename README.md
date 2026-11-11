# Claude Code Workshop - NBA Sports Application

Welcome to the comprehensive **Claude Code Workshop**! This hands-on workshop teaches you to leverage AI-powered development with **Claude** (Anthropic's Claude Code) through a real NBA sports application built with **Next.js 14 (Frontend)** and **Python Flask (Backend)**.

> This workshop is a Claude-focused adaptation of the [GitHub Copilot Workshop by yoavlax](https://github.com/yoavlax/githubcopilotworkshop). Every exercise has been re-tooled around Claude Code — its agentic default loop, `CLAUDE.md` memory, subagents, slash commands, Agent Skills, MCP, plan mode, and checkpoints. If you've done the Copilot version, you'll recognize the app and the goals; the *how* is what changes. See [Credits](#credits--acknowledgments) below.

**Note**: No mastery of JavaScript, Python, or Next.js is needed — Claude will generate most of the code for you in this exercise. Even if you're not very familiar, it's a great opportunity to leverage AI to quickly learn popular frameworks.

## Workshop Objectives

By the end of this workshop, you'll master:
- **Core Claude Code Features**: Natural-language codebase exploration, project memory (`CLAUDE.md`), and inline editing
- **Agentic Workflows**: Claude Code's default agent loop, plan mode, checkpoints/rewind, and vision
- **Extensibility**: Custom subagents, slash commands, Agent Skills, plugins, and MCP servers
- **Automation**: Claude Code on the web, GitHub Actions (`@claude`), and headless mode
- **Best Practices**: Error handling, testing, documentation, and code review with Claude

## Why Claude Code (vs. an in-editor autocomplete)

Claude Code is a **terminal-native, fully agentic coding tool**. Instead of an editor plugin that mainly suggests completions and answers chat questions, Claude Code plans multi-step work, reads and edits files across your repo, runs commands and tests, and iterates on its own errors — all from a conversation. It runs in your terminal, in VS Code / JetBrains (via the extension), on the web, and in CI.

A few conceptual mappings if you're coming from GitHub Copilot:

| GitHub Copilot | Claude Code equivalent |
| --- | --- |
| `.github/copilot-instructions.md` | `CLAUDE.md` (project memory, auto-loaded) |
| `@workspace` / `#codebase` | Claude reads your project automatically; `@path/to/file` to attach a specific file |
| Ask / Edit / **Agent** modes | Claude Code is agentic by default; toggle **Plan mode** with `Shift+Tab` |
| `/explain`, `/doc`, `/fix` | Just ask in natural language, or define your own `/slash-commands` |
| Model selector (GPT / Claude) | `/model` lets you choose among the available Opus, Sonnet and Haiku models |
| `.github/agents/*.agent.md` | `.claude/agents/*.md` (subagents) |
| `.github/prompts/*.prompt.md` | `.claude/commands/*.md` (slash commands) |
| `.github/skills/*/SKILL.md` | `.claude/skills/*/SKILL.md` (Agent Skills) |
| Chat rollback | `Esc Esc` / `/rewind` (checkpoints) |
| Copilot code review | `/review`, `/security-review` |
| AI Contribution Tracker | `/cost`, `/usage`, `/context` |
| Vision (attach image) | Drag, paste, or reference an image path |
| MCP servers (tools icon) | `claude mcp add …` / `.mcp.json` |
| Copilot Coding Agent (assign issue) | Claude Code on the web, GitHub Actions, `@claude` |
| Copilot CLI | Claude Code **is** the CLI |
| Marketplace extensions | Plugins & marketplaces (`/plugin`) |

## Prerequisites

### Required
1. **Claude access**: A Claude account. Claude Code works with a **Claude Pro/Max** subscription or an **Anthropic API** key (Console). See [Set up Claude Code](https://code.claude.com/docs/en/setup).
2. **Claude Code installed**: Install the CLI (see [Task 0](workshop/task-0-install-and-model.md)). Optionally install the **VS Code / JetBrains extension** for an in-editor experience.
3. **Frontend Runtime**: Install [Node.js](https://nodejs.org/en/download) & npm. Verify with:
   ```bash
   node -v
   npm -v
   ```
4. **Backend Runtime**: Install [Python 3.8+](https://www.python.org/downloads/) & pip. Verify with:
   ```bash
   python --version
   pip --version
   ```

### Optional for Advanced Features
- **Docker** (for some MCP servers)
- **A GitHub account** (for the GitHub MCP server and the GitHub Actions task)

## Getting the code

Clone the repository (command in Quick start below) or download it as a ZIP. New to Git, the terminal or VS Code? The step-by-step walkthrough (ZIP download, cloning, opening the folder, first launch of Claude Code) is in [workshop/getting-the-code.md](workshop/getting-the-code.md).

## Quick Start

For people who already know their way around a terminal. First-timers should follow the [Getting the Code walkthrough](workshop/getting-the-code.md) and then [Task 0](workshop/task-0-install-and-model.md).

1. **Clone the repository**
   ```bash
   git clone https://github.com/9q4kt8t4df-byte/claude-vscode-workshop.git
   cd claude-vscode-workshop
   ```

2. **Set up the Backend (Python Flask)**
   ```bash
   cd backend
   python -m venv venv

   # On Windows:
   venv\Scripts\activate

   # On macOS/Linux:
   source venv/bin/activate

   pip install -r requirements.txt
   python app.py
   ```
   Backend runs on http://localhost:8080

3. **Set up the Frontend (Next.js) — in a new terminal**
   ```bash
   cd frontend
   npm install
   echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > .env.local
   npm run dev
   ```
   Frontend runs on http://localhost:3000

4. **Launch Claude Code** in the project root
   ```bash
   claude
   ```

> **Don't have the NBA sample app yet?** This repo ships the Claude-specific configuration (`CLAUDE.md`, `.claude/agents`, `.claude/commands`, `.claude/skills`). If the `backend/` and `frontend/` folders aren't present, [Task 0.5](workshop/task-0-install-and-model.md) shows you how to have Claude Code scaffold the app for you — a great first taste of the agentic loop.

## Application Overview

**Claude NBA Companion** — your dedicated NBA companion! This app brings you:
- **Live NBA Results**: Game scores and statistics
- **Player Information**: Player stats and profiles
- **Stadium Information**: NBA venues and facility details
- **Coach Management**: NBA coaches and their achievements
- **Performance Optimization**: Examples for code-optimization exercises
- **Error Handling**: Debugging and error-resolution practice

## Architecture

A separated frontend/backend architecture. The browser talks to the Next.js frontend, which fetches JSON from the Flask backend.

- **Backend** (Python Flask, port 8080): REST API with CORS enabled, JSON files as storage, and a health check at `/api/health`.
- **Frontend** (Next.js 14, port 3000): App Router, TypeScript, Tailwind CSS, shadcn/ui and React Query.

## Project Structure

```
├── CLAUDE.md                  # Project memory — auto-loaded by Claude Code
├── .claude/
│   ├── agents/                # Custom subagents (plan, doc-updater, …)
│   ├── commands/              # Custom slash commands (reusable prompts)
│   └── skills/                # Agent Skills (e.g. webapp-testing)
├── .mcp.json                  # (optional) Project-scoped MCP servers
├── backend/                   # Python Flask Backend
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt       # Python dependencies
│   └── data/                  # JSON data files (nba-games, stadiums, …)
├── frontend/                  # Next.js Frontend
│   ├── src/
│   │   ├── app/(dashboard)/   # nba-scores, stadiums, optimization, errors …
│   │   ├── components/        # UI components (shadcn/ui under ui/)
│   │   ├── lib/ · hooks/ · util/
│   └── package.json
├── image/                     # Workshop assets
└── workshop/                  # Task 0-8 instructions and the first-timer walkthrough
```

## Workshop tasks

Each task lives in its own file under [workshop/](workshop/). Start with Task 0.

| Task | Title | What you do |
| --- | --- | --- |
| 0 | [Install Claude Code and choose a model](workshop/task-0-install-and-model.md) | Install Claude Code, sign in, start both services, pick a model with `/model` |
| 1 | [Core Claude Code basics](workshop/task-1-core-basics.md) | Explore the repository in natural language, then work with `CLAUDE.md`, review, docs, tests, a bug fix and optimization |
| 2 | [Intermediate Claude Code features](workshop/task-2-intermediate-features.md) | Define custom subagents and slash commands in `.claude/` |
| 3 | [Agentic development, cost tracking and vision](workshop/task-3-agentic-development.md) | Let Claude plan and edit across files in plan mode, track cost, and work from images |
| 4 | [MCP servers and Agent Skills](workshop/task-4-mcp-servers-and-skills.md) | Connect external tools over MCP and use Agent Skills |
| 5 | [Claude Code on the web and GitHub Actions](workshop/task-5-web-and-github-actions.md) | Hand work to Claude asynchronously from an issue, a PR or the web |
| 6 | [Extend Claude Code with plugins](workshop/task-6-plugins.md) | Install plugins from a marketplace |
| 7 | [Master the Claude Code CLI](workshop/task-7-cli-mastery.md) | Use slash commands, plan mode and headless automation |
| 8 | [Build your own MCP server (bonus)](workshop/task-8-build-your-own-mcp-server.md) | Build a Weather MCP server and connect it to Claude Code |

## Learning Path

1. **Task 0** — Install Claude Code, authenticate, pick a model, set up (or scaffold) the app
2. **Task 1** — Core basics: exploration, `CLAUDE.md`, review, docs, tests, bug fix, feature, optimization
3. **Task 2** — Subagents, custom slash commands, checkpoints/rewind
4. **Task 3** — Agentic development, cost/context tracking, vision
5. **Task 4** — MCP servers and Agent Skills
6. **Task 5** — Claude Code on the web & GitHub Actions
7. **Task 6** — Plugins & marketplaces
8. **Task 7** — CLI mastery & headless mode
9. **Bonus: Task 8** — Build your own MCP server

## Tips for Success

- **Experiment freely** — try different prompts, models, and modes
- **Use `CLAUDE.md`** — encode conventions once instead of repeating them
- **Plan first** — `Shift+Tab` into plan mode for anything non-trivial
- **Rewind fearlessly** — `Esc Esc` makes experimentation cheap
- **Ask Claude** — it's your coding assistant *and* your teacher

## Troubleshooting

### Claude Code
- **`claude` not found:** re-run the installer; ensure your shell PATH includes the install dir. Run `claude doctor`.
- **Auth issues:** run `/login` inside `claude`, or re-check your API key / subscription.
- **MCP server won't connect:** run `/mcp` to view status and re-authenticate; check the command/URL you registered.

### Backend
- **Port 8080 in use:** change the port in `backend/app.py`, or `lsof -ti:8080 | xargs kill -9`.
- **Python deps not found:** activate the venv — `source venv/bin/activate` (macOS/Linux) or `venv\Scripts\activate` (Windows).
- **CORS errors:** verify the backend is running and CORS origins in `backend/app.py` match the frontend URL.

### Frontend
- **API connection errors:** confirm the backend is on 8080, `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:8080`, and `curl http://localhost:8080/api/health` works.
- **Build errors:** run `npm install`.
- **Port 3000 conflict:** `npm run dev -- -p 3001`.

**Getting help:** ask Claude to debug (`Explain this error and fix it: <paste>`), check the console, or review `backend/README.md`.

## Credits & Acknowledgments

This workshop is **adapted from the [GitHub Copilot Workshop by yoavlax](https://github.com/yoavlax/githubcopilotworkshop)**. The NBA sample application (Flask backend + Next.js 14 frontend) and the overall task structure originate from that project. Full credit and thanks to the original author for the foundation.

This adaptation re-tools every exercise around **Claude Code** — replacing GitHub Copilot's features with their Claude equivalents (`CLAUDE.md` project memory, subagents, custom slash commands, Agent Skills, MCP, plan mode, checkpoints, Claude on the web / GitHub Actions), rebranding the app, and adding step-by-step explanations of the setup commands.

If you build on this workshop in turn, please keep the attribution chain intact by crediting both this repository and the original.

## License

This project is for educational purposes. It is a derivative of the [original workshop](https://github.com/yoavlax/githubcopilotworkshop); please respect the original author's terms and this attribution when reusing or redistributing.
