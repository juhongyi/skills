---
name: loop
description: Orchestrate subagents to implement a requested code change, refactor and verify it, independently review and fix it until no actionable findings remain, then open a ready-for-review pull request. Use when an agent should own a coding task through reviewed PR creation.
---

# Loop

1. Keep the main conversation orchestrator-only: it defines subagent boundaries, coordinates, integrates, validates, commits, pushes, and opens PRs; it does not implement, refactor, review, or fix.
2. Create subagents without inherited main-conversation messages. Load applicable project `AGENTS.md` instructions into each initial context using the main agent's instruction-loading mechanism, independent of conversation history.
3. At the start, create and read root `LOOP_SKILL_MEMORY.md`; if it exists, ask the user before proceeding. Keep only information implementation and fix subagents need, update only when such information exists, and require them to read it first. Keep it untracked and exclude it from every review diff, staging, commit, and PR. Never delete, remove, prune, or otherwise clean the task worktree or memory file without explicit user authorization; PR creation, closure, merge, and completion do not authorize cleanup. Review-only subagents must not access it.
4. Delegate scoped implementation and refactoring to an initial subagent: implement only the request, then refactor only changed code without changing behavior.
5. Run the full available test suite.
6. After it passes, create a fresh review-only subagent to independently inspect the request, repository instructions, and current task content from scratch: all task changes, including untracked files, except `LOOP_SKILL_MEMORY.md`. It must not edit or access the memory file or prior review conclusions. Every review must be rigorous and report only well-supported, concrete, actionable realistic current or future problems, never speculative, contrived, or feedback-for-feedback's-sake comments; never call a review or verification final or last.
7. On findings, use a separate fix subagent to address only them and behavior-preservingly refactor only code it changed. After every fix, rerun the full suite and obtain a fresh review of the revised work. Repeat without limit until a fresh reviewer responds exactly `NO ACTIONABLE FINDINGS` for unchanged current task content. Any later content change invalidates clearance and returns to suite testing and fresh review.
8. Only after that clearance, commit focused changes, push, and open a ready-for-review PR.
9. Ask the user about ambiguity, relevant conflicting instructions or results, unexpected changes, missing permission, or errors.
