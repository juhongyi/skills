---
name: create-issue
description: Plan and create GitHub issues as independent top-level issues with optional sub-issues and issue dependencies. Use when an agent needs to decompose work, confirm the proposed issue structure only when it materially differs from a Plan Mode plan, and create it with GitHub CLI.
---

# Create Issue

1. Split the work into independent, parallelizable top-level issues. Treat an issue with sub-issues as a parent issue; never create an umbrella parent issue solely to contain the entire request.
2. Break broad parent issues into small, verifiable sub-issues. Keep each issue scoped and give it concise acceptance criteria.
3. Plan each pull request that resolves one issue around 300 changed lines, counting additions plus deletions in code and tests. Exclude lock files and other generated files from the estimate.
4. Add issue dependencies only between top-level issues or between sibling sub-issues of the same parent. Express direction with GitHub's `blocked by` and `blocking` relationships.
5. Treat epic as a planning concept only. Create ordinary issues without assigning an Epic issue type.
6. Use plain descriptive titles without category prefixes such as `[Epic]` or `[Sub-issue]`.
7. In Plan Mode, provide a concise issue plan covering scope, hierarchy, dependencies, and a non-final acceptance-criteria outline for each issue. Do not finalize detailed titles or bodies.
8. In Build Mode, finalize titles, bodies, and acceptance criteria, then create the issues with `gh issue create`, using `--parent`, `--blocked-by`, and `--blocking` or their `gh issue edit` equivalents. Obtain confirmation before creation only when this plan materially differs from the Plan Mode plan in issue count, scope, hierarchy, dependencies, acceptance criteria, or intended outcome; minor title or prose changes are not material. Verify the resulting hierarchy and dependencies with `gh issue view`.
