---
name: loop
description: Orchestrate subagents to complete a requested repository task, refine and verify the result, independently review and fix it until no actionable findings remain, then open a ready-for-review pull request. Use for any task that Codex should own through reviewed PR creation.
---

# Loop

1. Keep the main conversation orchestrator-only: do not perform implementation, refinement, review, or fix work itself. It may define subagent task boundaries, coordinate and integrate their work, validate results, commit, push, and open the PR.
2. Create every subagent with no inherited user or assistant messages from the main conversation. At creation, ensure the applicable project `AGENTS.md` instructions are present in the subagent's initial context through the same instruction-loading mechanism used for the main agent, independently of conversation history.
3. At the start, ensure `MEMORY.md` exists at the project root and read it before orchestrating. Keep it limited to information that subagents must know, update it only when such information exists, and require every subagent to read it before working.
4. Delegate the scoped implementation and refinement to an initial implementation subagent: implement only the request, then refine only the changed work without altering its intended result.
5. Run all available validation.
6. After it passes, create a fresh review-only subagent to independently inspect the request, current diff, and repository instructions. Do not let it edit files; require only concrete actionable findings.
7. If it reports findings, create a separate fix subagent to address only those concrete findings, refine only the work changed specifically to fix them without altering its intended result, and rerun all available validation. Then create a fresh review-only subagent and repeat until no actionable findings remain.
8. Commit only focused changes after the final review passes, push, and open a ready-for-review PR.
9. Ask the user about ambiguity, any relevant conflicting instructions or results, unexpected changes, missing permission, or any error.
