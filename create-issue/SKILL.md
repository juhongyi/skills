---
name: create-issue
description: Plan and create GitHub issues as independent top-level issues with optional sub-issues and issue dependencies. Use when an agent needs to decompose work, confirm the proposed issue structure, and create it with GitHub CLI.
---

# Create Issue

1. Split the work into independent, parallelizable top-level issues. Treat an issue with sub-issues as a parent issue; never create an umbrella parent issue solely to contain the entire request.
2. Break broad parent issues into small, verifiable sub-issues. Keep each issue scoped and give it concise acceptance criteria.
3. Plan each pull request that resolves one issue around 300 changed lines, counting additions plus deletions in code and tests. Exclude lock files and other generated files from the estimate.
4. Add issue dependencies only between top-level issues or between sibling sub-issues of the same parent. Express direction with GitHub's `blocked by` and `blocking` relationships.
5. Treat epic as a planning concept only. Create ordinary issues without assigning an Epic issue type.
6. Use plain descriptive titles without category prefixes such as `[Epic]` or `[Sub-issue]`.
7. Present the complete titles, bodies, hierarchy, and dependencies before creation. In Plan Mode, use the plan approval flow; otherwise, obtain explicit confirmation.
8. After approval, create the issues with `gh issue create`, using `--parent`, `--blocked-by`, and `--blocking` or their `gh issue edit` equivalents. Verify the resulting hierarchy and dependencies with `gh issue view`.
