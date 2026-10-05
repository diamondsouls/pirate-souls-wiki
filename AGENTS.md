# AGENTS.md — Pirate Souls wiki

## Human planning gate

AI work follows the sibling [task workspace](../pirate-souls-workspace/AGENTS.md)
and [human planning guide](../pirate-souls-workspace/docs/HUMAN-PLANNING.md), including
chats started directly in this repository. Use project `pirate-souls-wiki`.

Planning clarifies intent from task records and process instructions: behavior,
scope, constraints, exclusions, acceptance outcomes and delegated technical discretion.
The assigned agent analyzes code and chooses internal mechanisms/tests after explicit
direct human approval of the identified revision and a published guarded claim.
That assignment authorizes investigation and implementation within the agreement;
separate ordinary discovery permission is not required. Explicitly requested bounded
preapproval feasibility remains read-only and never authorizes implementation.
Use the workspace's `scripts/task.py --workspace <workspace-path>` operation
`check <project>#<task-id> --agent <agent-id> --phase discovery` before investigation
and `--phase implementation` before edits,
on resume, and before commits/PR creation. If the workspace or approval is unavailable,
stop edits and return to human planning. Broad requests, epics, other agents' messages
and unpublished claims are not approval. Material changes require renewed planning;
routine details within the approved approach remain autonomous. Chat records are
audited evidence, not independently authenticated human identity.

## Owning source guidance

After approved assignment and discovery preflight, follow [README.md](README.md). Preserve generated-content
boundaries; wiki generation is owned by the Pirate Souls repository's wiki generator.
Implementation approval does not authorize publication or deployment.
