# Task 6 - Extend Claude Code with Plugins
`⏱ ~10 min | 🟢 Beginner`

Copilot's marketplace extensions map to **Claude Code plugins** — bundles of slash commands, subagents, skills, hooks, and MCP servers you can install from a marketplace.

**Instructions:**
1. Inside `claude`, open the plugin manager:
   ```
   /plugin
   ```
2. Add a marketplace and browse available plugins:
   ```
   /plugin marketplace add anthropics/claude-code
   ```
   (Any GitHub repo that hosts a `.claude-plugin/marketplace.json` can be a marketplace — including your team's internal one.)
3. Install a plugin, then type `/` to see the new commands it contributes, and check `/agents` and `/skills` for anything it added.
4. Explore building your own plugin to package this workshop's `reviewer` agent, `/api-security` command, and `webapp-testing` skill for your team. See [Claude Code plugins](https://code.claude.com/docs/en/plugins).

---

[Previous: Task 5](task-5-web-and-github-actions.md) | [Workshop README](../README.md) | [Next: Task 7](task-7-cli-mastery.md)
