# Task 3 - Agentic Development, Cost Tracking & Vision
`⏱ ~30 min | 🟡 Intermediate`

Claude Code is **agentic by default** — it plans, edits across files, runs commands, and fixes its own errors. For bigger tasks, use **Plan mode** (`Shift+Tab` to cycle modes) so Claude proposes a plan you approve *before* it edits.

## 3.1 Add the Stadiums Feature (Agentic)

**Instructions:**
1. Ensure both backend and frontend are running.
2. In `claude`, press `Shift+Tab` until you see **plan mode** (optional but recommended), then prompt:
   ```
   Let's add an NBA Stadiums page.

   1. Verify whether the backend stadiums endpoint already exists in backend/app.py
      (it should return data from backend/data/stadiums.json); add it if missing.
   2. Create frontend/src/app/(dashboard)/stadiums/page.tsx that fetches from
      ${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/stadiums.
   3. Display stadiums as cards showing name, location, capacity, and team.
   4. Add a nav link in frontend/src/components/navigation.tsx.
   5. Style with Tailwind CSS and shadcn/ui.

   Implement step by step and let me review each step.
   ```
3. **Agentic prompt tips:** be specific with file paths, number your steps, name the tech (Next.js 14, TypeScript, Tailwind, shadcn/ui, Flask, Python), and ask Claude to proceed incrementally.
4. Review the live diffs, accept/reject each change, then open http://localhost:3000 to verify the Stadiums tab works.

## 3.2 Track AI Usage & Cost

Claude Code has built-in visibility into token usage and (for API-key users) cost.

**Instructions:**
1. Run `/cost` to see token usage and estimated cost for the current session.
2. Run `/context` to visualize how your context window is being used (files, tools, memory).
3. Run `/usage` to check plan usage/limits (Pro/Max).
4. Use this to build intuition for prompt efficiency and when to `/clear` or `/compact` a long session.

> 💡 `/compact` summarizes and shrinks a long conversation; `/clear` starts fresh. Both help you stay within the context window on big tasks.

## 3.3 Build UI from an Image (Vision)

Claude can see images. Give it a screenshot or mockup and ask it to build the UI.

**Instructions:**
1. Add an image to the chat — drag & drop it into the terminal, paste it (`Ctrl+V`), or reference a path: `Build a React login component based on @image/login.png`.
   (Replace `image/login.png` with an actual login-screen mockup.)
2. Prompt:
   ```
   Build a React (Next.js + Tailwind + shadcn/ui) login component that matches this image.
   Track your progress with a todo list and implement it step by step.
   ```
3. Integrate the generated component into the app and verify it in the browser.

> ✅ **Task 3 Checkpoint:** You should have a working `/stadiums` page fed by the backend, a login component generated from an image, and familiarity with `/cost` and `/context`.

---

[Previous: Task 2](task-2-intermediate-features.md) | [Workshop README](../README.md) | [Next: Task 4](task-4-mcp-servers-and-skills.md)
