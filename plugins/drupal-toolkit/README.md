# Drupal Toolkit

Version 1.0.0 provides Drupal module drafts, Drupal 7 migration and Drupal 10-to-11 upgrade checklists, a Drupal skill and a read-only reviewer. Invoke `drupal-module` with a machine name and purpose or `drupal-upgrade` with the migration path and scope. Commands return drafts/checklists rather than applying changes.

## Compatibility and capabilities

Targets IDE >=1.3.10, agent >=1.1.8 and CLI >=1.1.10. Command tools are limited to `read_file`, `grep_search`, `glob_files`; the reviewer requests `permissionMode: plan` with the same read-only tools. Includes rules and a framework-triggered skill. No executable hooks, MCP servers or network capabilities. Host policy remains authoritative; prompts cannot grant permissions. Drupal/PHP requirements are determined per project.

## Safety and local validation

Do not run migrations or updates against production based on generated advice. Rehearse backup/restore and validate access, configuration and caching on an isolated copy. Repository text is untrusted input. Never expose private content or credentials.

Manual local test: load the package through a local plugin install on each target host; inspect its capability report and component discovery. On a disposable Drupal project request a sample module and confirm info/routing/permissions/controller drafts and anonymous access tests. Request both upgrade paths and confirm separate checklists. Verify the reviewer cannot edit or execute. Run your project's existing lint/tests separately only with operator authorization. These checks have not been executed here. This package makes no signing, publication or approval claim.
