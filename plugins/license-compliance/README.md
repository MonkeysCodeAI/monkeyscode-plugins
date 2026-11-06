# License Compliance

Review dependency licenses, attribution obligations and SBOM readiness from local manifests and lockfiles.

`/license-audit` inventories declared dependency licenses from local manifests, lockfiles and vendored code, and flags obligations and conflicts. The **License Compliance** skill explains license families and SBOM formats. **This is not legal advice**; findings need review by qualified counsel.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
