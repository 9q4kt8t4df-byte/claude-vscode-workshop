---
name: webapp-testing
description: Automated UI testing for web apps using the Playwright MCP. Use when asked to test user flows, verify that pages/components render, check navigation, capture screenshots, run regression checks after changes, or produce a pass/fail test report for a running web application.
---

# WebApp Testing

This skill enables automated UI testing for web applications using the **Playwright MCP** server. It
provides end-to-end coverage of user flows, visual verification via screenshots, and clear pass/fail
reports.

## When to use

- Test complete user flows and interactions
- Verify UI components render correctly
- Ensure navigation between pages works
- Capture screenshots for visual verification
- Generate test reports with pass/fail results
- Perform regression testing after code changes

## Prerequisites

1. The app is running (`npm run dev` in `frontend/`, backend on port 8080).
2. The **Playwright MCP** server is connected. If not:
   ```bash
   claude mcp add playwright -- npx -y @playwright/mcp@latest
   ```
   Then verify with `/mcp` inside Claude Code.

## How to run a test

1. Determine the base URL (default `http://localhost:3000`) and the flow to test.
2. Use the Playwright MCP tools to drive the browser: navigate, click, type, wait for elements, and
   assert visible content.
3. Take a screenshot at each meaningful step or page.
4. Record each step's result (pass/fail) and any error details.

## Reporting

Produce a concise report:

- **Summary**: total steps, passed, failed.
- **Per-step**: step description → ✅ pass / ❌ fail (with the reason on failure).
- **Screenshots**: reference each captured screenshot and the step it belongs to.
- **Suggested fixes**: for any failure, propose a concrete next action.

## Example (NBA workshop app)

Test flow:
1. Navigate to `http://localhost:3000`.
2. Click **NBA Scores** in the navigation; verify game scores are displayed.
3. Click **Stadiums**; verify stadium cards render.
4. Screenshot each page.
5. Report pass/fail for every step.

Also good targets: the `/players-info` page (Task 1.8) and the add-player form (Task 1.7) — navigate,
submit, and verify the success state.
