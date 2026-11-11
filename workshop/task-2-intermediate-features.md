# Task 2 - Intermediate Claude Code Features
`⏱ ~20 min | 🟡 Intermediate`

## 2.1 Custom Subagents

Where Copilot uses `.agent.md` files, **Claude Code uses subagents** — specialized assistants defined in `.claude/agents/*.md` with their own description, tools, and (optionally) model. Claude can delegate to them automatically, or you can invoke them explicitly.

**Instructions:**
1. **Explore the shipped subagents:** open `.claude/agents/plan.md` and `.claude/agents/doc-updater.md` to see the frontmatter format (`name`, `description`, `tools`, optional `model`).
2. **List them** from inside `claude`:
   ```
   /agents
   ```
   (Use `/agents` to view, create, and edit subagents interactively.)
3. **Create your own reviewer subagent** — add `.claude/agents/reviewer.md`:
   ```markdown
   ---
   name: reviewer
   description: Thorough code reviewer focused on best practices and maintainability. Use proactively after code changes.
   tools: Read, Grep, Glob
   ---

   You are a thorough code reviewer focused on best practices and maintainability.

   When reviewing:
   - Prefer single quotes in TypeScript
   - Check for proper error handling
   - Ensure consistent formatting
   - Verify accessibility standards
   - Look for performance optimizations
   - Suggest improvements for readability

   Report findings as a concise, prioritized list.
   ```
4. Invoke it: `Use the reviewer subagent to review my recent changes to backend/app.py.`

**Why subagents are powerful:** each runs in its **own context window** (keeping your main conversation clean), can be restricted to specific tools, and encodes repeatable, team-shareable expertise.

## 2.2 Reusable Prompts as Slash Commands

Copilot's `.prompt.md` files map to **Claude Code custom slash commands** in `.claude/commands/*.md`. The filename becomes the command name.

**Instructions:**
1. **Explore the shipped command:** open `.claude/commands/testing-strategy.md` — running `/testing-strategy` invokes it.
2. **Create a custom command** — add `.claude/commands/api-security.md`:
   ```markdown
   ---
   description: Secure REST API review checklist
   ---
   Perform a secure REST API review of $ARGUMENTS:
   - Ensure all endpoints enforce authentication and authorization
   - Validate all user inputs and sanitize data
   - Implement rate limiting and throttling
   - Add logging and monitoring for security events

   Report issues as a prioritized checklist with concrete fixes.
   ```
3. Test it: `/api-security @backend/app.py`

> 💡 `$ARGUMENTS` (and `$1`, `$2`, …) let commands take parameters. Commands can live in `.claude/commands/` (project, shared) or `~/.claude/commands/` (personal, all projects). Browse community commands and agents in the [Claude Code docs](https://code.claude.com/docs/en/slash-commands) and marketplaces.

## 2.3 Checkpoints, Rewind, and Prompt Editing

Copilot's "chat rollback" maps to **Claude Code checkpoints**. Claude automatically snapshots your codebase before each change so you can undo both the conversation *and* the file edits.

**Instructions:**
1. Ask Claude to create a simple NBA player card component.
2. To rewind, press **`Esc` twice** (`Esc Esc`) or run **`/rewind`**, then pick a checkpoint to restore code and/or conversation to that point.
3. Edit your earlier prompt to request more (e.g. "also add player statistics and hover effects") and re-run.
4. Try a different model first with `/model` (e.g. switch Sonnet ↔ Opus) and compare the results.

**Why this is powerful:** non-linear, low-risk experimentation — try an approach, rewind if you don't like it, adjust the prompt or model, and go again without losing your place.

> ✅ **Task 2 Checkpoint:** You should have a working `reviewer` subagent, a reusable `/api-security` command, and hands-on experience with `/rewind`.

---

[Previous: Task 1](task-1-core-basics.md) | [Workshop README](../README.md) | [Next: Task 3](task-3-agentic-development.md)
