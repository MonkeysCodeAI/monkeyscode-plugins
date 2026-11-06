# Internationalization

Find hard-coded strings, missing translations, ICU plural issues, locale formatting and RTL layout problems.

`/i18n-audit` finds internationalization gaps. The **Internationalization** skill covers ICU MessageFormat, locale-aware formatting, RTL and translation workflows. No translation service is called; translations are drafted for human review.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
