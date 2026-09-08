Keep package/module code, names, responsibilities clear to newcomers; modules focused; boundaries/dependencies explicit.\
Unless another paradigm is more appropriate, default OO/modular: SRP, high cohesion, low coupling.\
Use TDD for behavior changes with meaningful tests; cover expected/failure/boundary/edge cases, not artificial tests.
Run focused/full tests; fix change-caused failures; report unrelated/pre-existing ones.\
Atomic commits: coherent, independently reviewable.

Before: `git fetch origin`; ask user for `dev` (preferred), `main`, or other base; work only in new Git worktree.\
`git worktree add -b <new-branch> "$HOME/.local/share/opencode/worktree/<project-id>/<hash>" <base-branch>`; `<project-id>` current project dir; `<hash>` random 6-digit hex.

English PR titles; Korean self-contained PR bodies.
