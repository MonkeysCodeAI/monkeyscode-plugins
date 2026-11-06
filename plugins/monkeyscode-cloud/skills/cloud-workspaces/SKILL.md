---
name: Cloud Workspaces
description: MonkeysCode cloud workspace API, PTY and billing rules. Use when writing code that calls /v1/workspaces, exec, files or the code.* terminal socket.
trigger: manual
---
# MonkeysCode cloud workspaces

## Products
| | Cloud workspace | Cloud job | Reported session |
|---|---|---|---|
| What | Persistent machine you drive | One-shot hosted agent run → branch/PR | Agent loop on the user's own machine |
| Host | `code.*` (terminal) + `api.*` (REST) | `agents.*` | `api.*` |
| Cost | Per minute while running | Per run | — |

## REST (`api.monkeyscode.com`, `Authorization: Bearer`)
List/create `/v1/workspaces`; detail `/v1/workspaces/{id}` (status, `credits_per_min`, `total_minutes`, auto-stop deadline); `/start` (idempotent, cold start takes tens of seconds); `/stop` (**stops billing**); `DELETE` destroys the disk; `/exec`; `/files` GET returns `sha256`, PUT takes `expectedSha256`; `/search`.

## Rules that prevent real bugs
- **exec has no TTY.** `vim`, `top` and interactive rebases hang. A non-zero `exit_code` is a successful API call — check it.
- **Writes are optimistic.** Always round-trip `expectedSha256`; a 409 means someone (often an agent) changed the file. Show the conflict.
- **No directory listing endpoint.** Use `ls -Ap` via exec.
- **Terminal host is `code.*`, never `pty.*`.** `wss://code.monkeyscode.com/v1/workspaces/{id}/pty?cols=&rows=`.
- **PTY auth** is the `monkeyscode.bearer.<token>` WebSocket subprotocol. Query-string tokens are refused by design.
- **PTY frames:** JSON `data`, `resize`, `ping`, `exit`, `error`. Write `data` to the terminal verbatim (raw bytes per code unit; do not re-decode UTF-8). Answer `ping` or the load balancer drops idle sockets. Send `resize` when the element changes size.
- Offer a terminal only for `running` workspaces.
- **Workspace tokens are typed** (`mc_typ: workspace`) and only usable for the in-pod git credential endpoint. Never treat them as user tokens.
- **Always surface cost** before creation and the auto-stop countdown while running; stop workspaces when done.
