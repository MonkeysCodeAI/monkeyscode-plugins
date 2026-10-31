# MonkeysLegion

Manually use the framework skill or select `starters/php-api.md`. The recipe targets PHP 8.4 and PostgreSQL 16+. Verified upstream is **MonkeysCloud/MonkeysLegion-Skeleton**, skeleton tag **2.1.6**, commit **daac8b5d557b4eaf9c62ff6200276b058c7717ad**. Existing repository evidence is recorded in `docs/marketplace/04-phase-3-marketplace-backend.md`. Preserve MonkeysCloud attribution; do not transfer or rename upstream under the catalog publisher.

The skeleton is not copied into this package. Original guidance is MIT; upstream skeleton MIT copyright is MonkeysCloud (2025), and its LICENSE must remain with any downloaded/copied code. Inspect Composer dependency licenses separately. Skeleton version differs from framework/database versions; the reviewed marketplace lock resolved framework 2.1.4 and database 2.2.0, not a claim that every fresh install resolves identically.

## Safety and validation
Installation runs nothing. The starter is inert Markdown. Downloading GitHub source, Composer installation, key generation, containers and migrations require separate explicit approval. PHP, Composer, Git and an isolated database are manual prerequisites. Secrets and database URLs belong in ignored configuration/secret storage; never echo them. Disable Composer scripts for initial dependency review and preserve TLS verification.

Follow the starter's provenance, dependency, isolated database and HTTP checks. Existing PHP 8.5/PG18 evidence is not target PHP8.4/PG16 acceptance. No cloud deployment or app acceptance is asserted. Metadata targets IDE 1.3.10 and Agent/CLI 1.0.0; IDE can consume skills, but starter UI availability is host-dependent. Scanning, signing and moderation remain mandatory release gates.
