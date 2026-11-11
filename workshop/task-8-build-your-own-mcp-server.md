# Task 8 - Build Your Own MCP Server ⭐ Bonus
`⏱ ~45 min | 🔴 Advanced`

Create a new project and build a **Weather MCP server**, then connect it to Claude Code.

## 8.1 Requirements
- Latest Node.js installed

## 8.2 Set Up

You're creating a **brand-new Node.js project** for the server (separate from the NBA app). These commands scaffold an empty TypeScript project with the two libraries the server needs.

**macOS/Linux:**
```bash
mkdir weather && cd weather
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript
mkdir src && touch src/index.ts
```

**Windows (PowerShell):**
```powershell
md weather; cd weather
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript
md src; new-item src\index.ts
```

**What each step does and why:**
- `mkdir weather && cd weather` — make a new folder for the project and move into it. *Why:* the MCP server is its own standalone app, kept apart from the NBA workshop code.
- `npm init -y` — create a `package.json` (the project's manifest) with default answers (`-y` = "yes to all", so it doesn't prompt you). *Why:* npm needs this file to track your dependencies and scripts.
- `npm install @modelcontextprotocol/sdk zod` — install the two **runtime** libraries: the **MCP SDK** (lets your code speak the Model Context Protocol so Claude can call it) and **zod** (validates/parses the inputs each tool receives). *Why runtime:* the server needs these while it's actually running.
- `npm install -D @types/node typescript` — install **dev-only** tools (`-D` = devDependency): `typescript` (compiles your `.ts` source to runnable JavaScript) and `@types/node` (type definitions so TypeScript understands Node.js APIs). *Why dev-only:* they're needed to *build* the server, not to *run* the compiled output.
- `mkdir src && touch src/index.ts` — create a `src/` folder and an empty `index.ts` file in it. *Why:* `src/index.ts` is where you'll write the server; `touch` just creates the empty file so it's ready to open. (On Windows, `new-item src\index.ts` does the same thing.)

## 8.3 Build the Weather Server

Let Claude Code help you write it! From the `weather` directory, run `claude` and ask:
```
Build a Weather MCP server in src/index.ts using @modelcontextprotocol/sdk and zod.
Expose two tools: get_alerts(state) and get_forecast(latitude, longitude), backed by
the US National Weather Service API (https://api.weather.gov). Include request helpers,
input validation with zod, and proper error handling. Add a build script to package.json.
```

**Key components:** server setup with the MCP SDK, request helper functions, tool implementations, and validation/error handling.

## 8.4 Connect & Test

1. Build: `npm run build` — compiles your TypeScript in `src/` into runnable JavaScript (typically in a `build/` folder). *Why:* Node runs JavaScript, not `.ts` files directly, so you build first.
2. Register it with Claude Code:
   ```bash
   claude mcp add weather -- node /absolute/path/to/weather/build/index.js
   ```
   Same shape as the local server in Task 4.1: everything after `--` is the command Claude runs to launch your server — here, `node` executing the compiled `build/index.js`. Use the **absolute path** so Claude can find it regardless of which directory you launch it from.
3. In `claude`, run `/mcp` to confirm it's connected, then ask a weather question:
   ```
   Are there any active weather alerts in California? What's the forecast for 47.6,-122.3?
   ```

> Follow the official [MCP quickstart](https://modelcontextprotocol.io/quickstart/server) for a complete reference implementation.

---

[Previous: Task 7](task-7-cli-mastery.md) | [Workshop README](../README.md)
