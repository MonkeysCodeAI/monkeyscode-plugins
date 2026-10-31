---
name: Security audit
description: Scoped threat-boundary review with redacted evidence
trigger: manual
---
Establish assets, actors, entry points and trust boundaries first. Follow input through validation, authorization and sensitive sinks. Use OWASP checks for access control, crypto, injection, design, configuration, dependencies, authentication, integrity, logging and SSRF. Verify reachability before assigning severity; local dependency metadata does not establish current advisory status. Keep review read-only and scoped: no live probes, network, execution or credential tests. Never output secret values; identify only redacted location and remediation, including rotation where appropriate. Report confirmed issues separately from hypotheses, and explicitly state blind spots. The bounded tool-input secret guard covers selected recognizable formats only and does not inspect files or secure every host/tool path.
