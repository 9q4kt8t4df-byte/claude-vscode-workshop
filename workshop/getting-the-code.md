# Getting the Code (First-Timer Friendly)

New to GitHub, the terminal, or VS Code? This section walks you through getting the project onto a **Mac** and opening it. (The rest of the workshop's commands work the same on macOS and Linux; Windows equivalents are noted where they differ.)

## Step 1 — Download the repo

There are two ways. Cloning (Option B) is recommended for the workshop because you can pull updates later, but the ZIP is the simplest if you just want the files.

**Option A — Download as a ZIP (no tools needed)**
1. Open the repo page in your browser: `https://github.com/9q4kt8t4df-byte/claude-vscode-workshop`
2. Click the green **`< > Code`** button (top right).
3. Click **Download ZIP**.
4. Find the `.zip` in your **Downloads** folder and double-click it to unzip. You'll get a `claude-vscode-workshop` folder — drag it somewhere memorable like **Documents**.

**Option B — Clone with Git (recommended)**

Cloning downloads the code *and* keeps it linked to GitHub. It uses the **Terminal** app (macOS's command-line tool).

1. **Open Terminal:** press `Cmd + Space`, type **Terminal**, press Return.
2. **Check that Git is installed:**
   ```bash
   git --version
   ```
   If you see a version number, you're set. If not, macOS will offer to install the "command line developer tools" — click **Install**, wait, then try again.
3. **Go to where you want the folder to live** (`cd` = "change directory"; `~` = your home folder):
   ```bash
   cd ~/Documents
   ```
4. **Clone the repo:**
   ```bash
   git clone https://github.com/9q4kt8t4df-byte/claude-vscode-workshop.git
   ```
5. **Move into the folder** and list its contents:
   ```bash
   cd claude-vscode-workshop
   ls
   ```
   You should see `README.md`, `backend`, `frontend`, and more.

> **Note:** the repo must be **public** (or you must be signed in with access) for cloning to work without extra setup.

## Step 2 — Open the folder in VS Code

VS Code works best when you open the **whole project folder** (it calls this a workspace), so it can see every file at once.

**From the menu (easiest):**
1. Open **VS Code**.
2. **File → Open Folder…**
3. Select `Documents → claude-vscode-workshop`, click **Open**.
4. If asked *"Do you trust the authors of the files in this folder?"*, click **Yes, I trust the authors** (it's your own code).

You'll now see the file tree on the left. Two handy shortcuts once you're comfortable:
- **Drag-and-drop** the folder from Finder onto the VS Code icon or window.
- **From Terminal:** run the *"Shell Command: Install 'code' command in PATH"* action once (press `Cmd+Shift+P` in VS Code and search for it), then you can type `code .` inside the folder to open it instantly.

## Step 3 — Start working with Claude Code

Because this is a **Claude Code** workshop, once the folder is open you have two ways to work:

1. **Claude Code extension** — install the *Claude Code* extension from VS Code's Extensions panel (the square icon in the left toolbar) for an in-editor chat and diff view. *(See Task 0.1.)*
2. **Integrated terminal** — open VS Code's built-in terminal with **Terminal → New Terminal** (or `` Ctrl+` ``), then run:
   ```bash
   claude
   ```
   This launches Claude Code inside the project and it automatically picks up the `CLAUDE.md` and `.claude/` configuration that ships with the repo.

> **VS Code isn't required.** Claude Code runs the same way in the plain macOS Terminal — just `cd` into the folder and run `claude`. VS Code simply adds a visual editor around it.

**Putting it together:** clone the folder → open it in VS Code → open the integrated terminal → set up and run the backend and frontend (**Task 0** below) → run `claude` and start **Task 1**.

[Workshop README](../README.md) | [Next: Task 0](task-0-install-and-model.md)
