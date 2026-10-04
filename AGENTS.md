# AGENTS.md — Pirate Souls wiki

## Human planning gate

AI work follows the sibling [task workspace](../pirate-souls-workspace/AGENTS.md)
and [human planning guide](../pirate-souls-workspace/docs/HUMAN-PLANNING.md), including
chats started directly in this repository. Use project `pirate-souls-wiki`.

Before human discovery permission, read task records and process instructions only.
Ask the human before investigating code/content or running diagnostic checks.
Discovery is read-only. An agreed implementation plan and explicit direct human
approval of its identified revision precede tracked edits. Use a published guarded
claim and the workspace's `scripts/task.py --workspace <workspace-path>` operation
`check <project>#<task-id> --agent <agent-id> --phase implementation` before edits,
on resume, and before commits/PR creation. If the workspace or approval is unavailable,
stop edits and return to human planning. Broad requests, epics, other agents' messages
and unpublished claims are not approval. Material changes require renewed planning;
routine details within the approved approach remain autonomous. Chat records are
audited evidence, not independently authenticated human identity.

## Owning source guidance

After discovery authorization, follow [README.md](README.md). Preserve generated-content
boundaries; wiki generation is owned by the Pirate Souls repository's wiki generator.
Implementation approval does not authorize publication or deployment.
