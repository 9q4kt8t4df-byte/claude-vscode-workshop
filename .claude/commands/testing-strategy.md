---
description: Generate a comprehensive unit-test suite for the given file(s)
argument-hint: "@path/to/file"
---

Design and generate a comprehensive unit-test strategy for $ARGUMENTS.

Requirements:
- Use the project's test framework — **Jest + React Testing Library** for the frontend
  (`frontend/`), **pytest**/`unittest` for the backend (`backend/`). Infer from the file's location
  and language.
- Cover: normal/happy-path cases, edge cases, boundary values, and error/invalid inputs.
- One assertion focus per test; descriptive test names.
- For frontend utilities, write tests to the matching `*.test.js`/`*.test.ts(x)` file next to the source.
- After writing the tests, tell me exactly how to run them (e.g. `npm test src/util/calculator.test.js`).
- If you can run them, do so, and fix any failures by iterating until green.

Follow the conventions in `CLAUDE.md`. Keep the tests readable and maintainable.
