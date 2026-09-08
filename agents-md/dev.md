Make package and module structures, names, responsibilities, and code clear to newcomers.\
Keep modules small and focused, with clear boundaries and dependencies.\
Apply object-oriented and modular design, following the single-responsibility principle while maintaining high cohesion and low coupling.\
Use TDD and test expected behavior, failure paths, boundary conditions, and edge cases.\
Fix every failure and ensure the full test suite passes.\
Split changes into multiple atomic commits, each containing the smallest practical change.

Before making any file changes, create a new Git worktree for the task and perform all work from that worktree.\
Run `git fetch origin` to synchronize the remote repository before creating the worktree.\
Before creating the worktree, ask the user whether to use `dev`, `main`, or another branch as the base, with `dev` as the highest-priority option.\
Create the worktree with `git worktree add -b <new-branch> "$HOME/.local/share/opencode/worktree/<project-id>/<hash>" <base-branch>`, where `<project-id>` matches the name of the current project working directory and `<hash>` is a random six-digit hexadecimal value.

Write PR titles in English, PR bodies in Korean, and include the key details reviewers need to understand the changes without inspecting the changed files.
