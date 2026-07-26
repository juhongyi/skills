---
name: fix-pr-feedback
description: Review unresolved pull request feedback, filter it against product requirements and user instructions, fix only well-supported actionable findings with /loop, then reply to and resolve every reviewed thread. Use when an agent needs to address feedback on an existing pull request.
---

# Fix PR Feedback

1. Identify the target pull request and its head branch. Ask the user when the target is ambiguous.
2. Read the applicable project instructions, explicit user instructions, product requirements, pull request description and diff, relevant code and tests, and every feedback comment in each review thread that is unresolved when this workflow begins. Record those threads and comments as the complete response checklist.
3. Evaluate each feedback item independently against the gathered evidence. Accept only concrete, well-supported, technically valid, proportionate findings that are compatible with the product requirements and user instructions. Reject speculative concerns, subjective preferences, unjustified scope expansion, already-addressed points, and suggestions that conflict with those requirements or instructions.
4. Record the accepted fix scope and an evidence-based reason for every rejected item. Never include rejected feedback in the fix scope.
5. When the accepted scope is non-empty, use `/loop` to perform only those fixes. After the loop finishes, push the resulting commits to the pull request branch.
6. Reply to every feedback comment in the response checklist after accepted fixes have been pushed, or immediately when the accepted scope is empty. For accepted feedback, cite the resulting change and verification. For rejected feedback, explain the decision with specific requirements, instructions, or technical evidence. Use substantive replies rather than generic acknowledgements.
7. Resolve every checklist thread only after all of its required replies have been posted successfully, including threads whose feedback was rejected with evidence.
8. Verify that every initially unresolved feedback comment has a recorded decision and reply, every accepted fix has been pushed and verified, and every checklist thread is resolved.
