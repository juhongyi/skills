Keep package/module code, names, responsibilities self-explanatory; modules focused; boundaries/dependencies explicit.\
Use established principles and paradigms: object-oriented/modular design, SRP, high cohesion, low coupling.\
Use TDD for behavior changes with meaningful tests; cover expected/failure/boundary/edge cases, not artificial tests.\
Run focused/full tests; fix change-caused failures; report unrelated/pre-existing ones.\
Atomic commits: coherent, independently reviewable.

Before: `git fetch origin`; ask user to choose a base branch; work only in new Git worktree.\
`git worktree add -b <new-branch> "$HOME/.local/share/opencode/worktree/<project-id>/<hash>" <base-branch>`; `<project-id>` current project dir; `<hash>` random 6-digit hex.

English PR titles; concise, clear Korean PR bodies that respect reviewers' time by providing sufficient context.
