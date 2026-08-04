---
name: setup
description: Initialize a Python project with uv and standard development tooling, interview the user to create project documentation, and open a pull request for the completed setup. Use when an agent needs to bootstrap or set up a Python project with this standard configuration.
---

# Setup

1. Treat the user-specified target directory as the project root. Use the current directory when no target is specified.
2. Run `uv python install 3.13` to install the latest Python 3.13 version supported by uv.
3. Run `uv init --python 3.13 <project-root>`.
4. Run `uv --directory <project-root> add --dev --prerelease disallow pytest ruff` to add the latest stable pytest and Ruff as development dependencies.
5. Ask the user whether any additional libraries are needed at their latest stable versions. Add requested libraries with uv, using `--prerelease disallow`.
6. Open [agents-md/dev.md](https://github.com/juhongyi/skills/blob/main/agents-md/dev.md), read its contents, and copy them to `<project-root>/AGENTS.md`.
7. Interview the user before writing project documentation. Ask focused questions about the product goals, users, scope, requirements, constraints, architecture, key decisions, and detailed technical design. Resolve unclear or missing details with follow-up questions instead of making assumptions.
8. Create the following files under `<project-root>/docs/` from the interview answers and initialized project. Keep each file at or below 300 lines:
   - `PRD.md`: product goals, users, scope, requirements, and success criteria.
   - `ARCHITECTURE.md`: system context, components, data flow, integrations, and operational constraints.
   - `ADR.md`: key architectural decisions, alternatives, rationale, and consequences.
   - `DESIGN.md`: implementation flows, module responsibilities, interfaces, data models, and error handling.
9. Verify the initialized project, run the relevant checks, and confirm with `wc -l` that every generated document is at or below 300 lines.
10. After the setup and documentation are complete, review the changes, commit only the setup files on a new branch, push the branch, and create a ready-for-review pull request with `gh pr create`. Include the change summary and verification results in the pull request body.
