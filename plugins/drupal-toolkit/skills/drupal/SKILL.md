---
name: Drupal development
description: Access-safe and cache-correct Drupal module guidance
trigger: framework:drupal
---
Determine Drupal core/PHP versions and custom module location before drafting. Use dependency injection and existing service definitions, Drupal render APIs, translated UI strings and explicit route/entity permissions. Derive cache metadata from dependencies: user.permissions for permission variation, appropriate entity/list tags, and bounded max-age only when justified. Define configuration schema for every custom config key and test config round trips. Use Kernel tests for services/storage and Functional tests for route access; isolate test databases and never target production. Distinguish Drupal 7 migration from 10-to-11 upgrade. Draft only within user scope, request permission before edits or execution, and never silently install tools or fetch data.
