# Task 5 - Claude Code on the Web & GitHub Actions
`⏱ ~15 min | 🟡 Intermediate`

Claude can pick up work asynchronously — from a GitHub issue or PR, or from the web — and open pull requests for you.

## Option A — Claude Code on the web
1. Go to [claude.ai/code](https://claude.ai/code), connect your GitHub, and select this repository.
2. Describe a task, e.g. *"Create a dark-mode toggle in the top-right corner of the app."*
3. Claude runs in an isolated cloud environment, implements the change on a branch, and opens a **pull request** you review. See [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web).

## Option B — GitHub Actions (`@claude`)
1. Install the Claude GitHub App and add your `ANTHROPIC_API_KEY` as a repo secret. The fastest path: run `/install-github-app` from inside `claude`, or follow [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions).
2. Create an issue, e.g.:
   - **Title:** `Create dark mode toggle for this web app`
   - **Body:** `Add a dark-mode toggle in the top-right corner of every page. @claude please implement this.`
3. Mentioning **`@claude`** in an issue or PR comment triggers the Action; Claude implements the change and opens/updates a PR.
4. Review the diff and merge or refine.

> ✅ **Task 5 Checkpoint:** You have an open PR created by Claude. Review the diff, then merge or close it.

---

[Previous: Task 4](task-4-mcp-servers-and-skills.md) | [Workshop README](../README.md) | [Next: Task 6](task-6-plugins.md)
