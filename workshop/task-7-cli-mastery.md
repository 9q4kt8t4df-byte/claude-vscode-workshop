# Task 7 - Master the Claude Code CLI
`⏱ ~30 min | 🟡 Intermediate`

Claude Code **is** a terminal-native agent — this is its home turf. Beyond interactive chat, it supports plan mode, headless automation, and handy slash commands.

## 7.1 Useful Slash Commands & Shortcuts

Inside `claude`:
```
/help        → List all commands
/model       → Switch Claude model mid-session
/agents      → View / create / edit subagents
/mcp         → Manage MCP servers & authentication
/rewind      → Restore a previous checkpoint (or press Esc Esc)
/clear       → Start a fresh conversation
/compact     → Summarize & shrink the current conversation
/cost        → Show token usage & cost
/context     → Visualize context-window usage
/init        → Generate or refresh CLAUDE.md
/review      → Review code / a PR
/vim         → Enable vim keybindings
```
Shortcuts: **`Shift+Tab`** cycles modes (default → auto-accept → plan); **`Esc`** interrupts Claude; **`Esc Esc`** rewinds; **`Ctrl+V`** pastes an image.

## 7.2 Hands-On: Enhance the NBA App

**Exercise 1 — Add a Teams feature.** In `claude`:
```
Create a new Teams API route (backend) and a /teams page (frontend). The API
returns NBA teams with name, city, and conference. The page shows them as cards
(Tailwind + shadcn/ui) and there's a nav link. Plan it first, then implement.
```

**Exercise 2 — Add search.** Continue the session:
```
Add a search bar to the Teams page that filters teams by name or city in real
time as the user types.
```

**Exercise 3 — Player statistics.**
```
Create a /player-stats page with an API route returning sample data for the top
10 NBA players (points, rebounds, assists), displayed in a sortable table, with
a nav link.
```

## 7.3 Headless Mode (Automation)

Run Claude non-interactively for scripts, CI, and one-off tasks with `-p` (print):
```bash
# Ask a question and print the answer
claude -p "List every API route defined in backend/app.py"

# Pipe context in and get structured output
git diff | claude -p "Summarize these changes as bullet points"

# JSON output for scripting
claude -p "How many test files are in frontend/?" --output-format json
```
Headless mode is how you wire Claude into pre-commit hooks, issue tri/age bots, and batch migrations. See [Headless mode](https://code.claude.com/docs/en/headless).

---

[Previous: Task 6](task-6-plugins.md) | [Workshop README](../README.md) | [Next: Task 8](task-8-build-your-own-mcp-server.md)
