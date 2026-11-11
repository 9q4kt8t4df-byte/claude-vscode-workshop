# Task 4 - MCP Servers & Agent Skills
`⏱ ~30 min | 🔴 Advanced`

**MCP (Model Context Protocol)** is the open standard for connecting Claude to external tools and data sources. Claude Code can use MCP servers for GitHub, browser automation (Playwright), databases, issue trackers, and more.

## 4.1 Add MCP Servers

An MCP server is a small program that exposes extra tools to Claude. There are two kinds you'll add here: a **remote** server Claude reaches over the web (GitHub), and a **local** server that runs as a command on your machine (Playwright). The `claude mcp add` command registers one so Claude Code can use it.

```bash
# GitHub (remote, OAuth) — great for issues/PRs/repos
claude mcp add --transport http github https://api.githubcopilot.com/mcp

# Playwright (local, via npx) — browser automation & E2E testing
claude mcp add playwright -- npx -y @playwright/mcp@latest
```

**Reading these commands — what each piece means and why:**
- `claude mcp add <name> …` — register a new MCP server under a short `name` (here `github` / `playwright`) that you'll see in `/mcp`.
- `--transport http` (first command) — tells Claude to talk to this server over **HTTP** at the given URL, because GitHub's MCP server is **remote/hosted**. *Why:* remote servers are reached by URL, not launched locally. (The default transport is `stdio` — a local command — which is why the second command doesn't need this flag.)
- `-- npx -y @playwright/mcp@latest` (second command) — everything **after the `--`** is the command Claude runs to start the server locally. *Why the `--`?* it separates `claude`'s own options from the command-to-run, so flags like `-y` are passed to `npx`, not misread by `claude`. Here `npx -y @playwright/mcp@latest` downloads (if needed) and runs the Playwright MCP server on demand.

Inside `claude`, manage and inspect servers with:
```
/mcp
```
Use `/mcp` to see connected servers, authenticate (the GitHub **OAuth** browser sign-in happens here), and view the tools each server provides. **Scope** controls who shares the server: `--scope local` (default — just you, this project), `--scope project` (shared with your team via a committed `.mcp.json`), `--scope user` (you, across all your projects).

> 💡 A project-scoped `.mcp.json` lets your whole team share the same MCP setup. Commit it to the repo.

## 4.2 End-to-End Testing with the Playwright MCP

**Goal:** test your NBA app's critical flows without writing test code.

**Instructions:**
1. Ensure the app is running (`npm run dev`).
2. With the Playwright MCP connected, ask Claude:
   ```
   Using the Playwright MCP, test this flow:
   1. Navigate to http://localhost:3000
   2. Click "NBA Scores" in the navigation
   3. Verify game scores are displayed
   4. Click "Stadiums"
   5. Verify stadium cards render
   6. Take a screenshot of each page
   7. Report pass/fail results
   ```
3. Review the automated run and screenshots; ask Claude to fix any failures or improve coverage.

## 4.3 Working with Agent Skills

**Agent Skills** are Anthropic's open standard for packaging repeatable expertise. Claude Code auto-discovers skills in `.claude/skills/<name>/SKILL.md` and loads them **only when relevant** (progressive disclosure), keeping context lean.

This workshop ships a **WebApp Testing** skill at `.claude/skills/webapp-testing/SKILL.md`.

**When to use it:** testing user flows, verifying components render, checking navigation, capturing screenshots, generating test reports, and regression testing after changes.

**How to use it:**
1. Start the app: `npm run dev`
2. Ensure the Playwright MCP is connected (`/mcp`).
3. Just describe the testing task — Claude will discover and apply the skill automatically:
   ```
   Test the complete user flow of the NBA app: open the home page, navigate to
   NBA Scores and verify scores show, go to Stadiums and verify cards render,
   screenshot each page, and give me a pass/fail report.
   ```
4. Manage installed skills from inside `claude` with `/skills` (or via plugins).

**Create your own skill:**
```bash
mkdir -p .claude/skills/my-custom-skill
```
```markdown
---
name: my-custom-skill
description: Brief description of what this skill does and when Claude should use it.
---

# My Custom Skill

Detailed instructions on when and how to perform this task...
```
Add supporting scripts/templates alongside `SKILL.md`, then commit it so your whole team benefits.

**Learn more:**
- 📖 [Claude Docs: Agent Skills](https://code.claude.com/docs/en/skills)
- 🔬 [Anthropic Skills Repository](https://github.com/anthropics/skills)
- 🌐 [Model Context Protocol](https://modelcontextprotocol.io)

> ✅ **Task 4 Checkpoint:** You've connected at least one MCP server and run an automated, skill-driven test flow against the running NBA app.

---

[Previous: Task 3](task-3-agentic-development.md) | [Workshop README](../README.md) | [Next: Task 5](task-5-web-and-github-actions.md)
