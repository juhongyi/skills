---
name: create-issue
description: Plan and create GitHub issues as independent top-level issues with optional sub-issues and issue dependencies. Use when an agent needs to decompose work, confirm the proposed issue structure, and create it with GitHub CLI.
---

# Create Issue

1. Split work into independently scoped top-level issues; parallelize only where dependencies permit. An issue with sub-issues is a parent, never an umbrella solely for the request.
2. Break broad parents into small, verifiable sub-issues with concise acceptance criteria.
3. Plan each issue's resolving PR for about 300 changed code-and-test lines, additions plus deletions; exclude lock and generated files.
4. Add dependencies only between top-level issues or sibling sub-issues of one parent, using GitHub's `blocked by` and `blocking` relationships.
5. Treat Epic only as a planning concept; create ordinary issues without an Epic type.
6. Use plain descriptive titles without prefixes such as `[Epic]` or `[Sub-issue]`.
7. Before creation, present complete titles, bodies, hierarchy, and dependencies. In Plan Mode, use the plan approval flow; otherwise obtain explicit confirmation.
8. After approval, create issues with `gh issue create`, using `--parent`, `--blocked-by`, and `--blocking` or equivalent `gh issue edit` options. Verify hierarchy and dependencies with `gh issue view`.
