---
name: License Compliance
description: License obligations, SPDX and SBOMs (not legal advice). Use when adding dependencies, choosing a license or auditing third-party license risk.
trigger: manual
---
# License compliance

Not legal advice. Escalate real decisions to counsel.

- **Permissive** (MIT, BSD, Apache-2.0, ISC): keep copyright and license text; Apache-2.0 adds NOTICE preservation and a patent grant.
- **Weak copyleft** (LGPL, MPL-2.0, EPL-2.0): modifications to the licensed files or library must be shared; linking rules differ by license.
- **Strong copyleft** (GPL-2.0/3.0): distributing a combined work triggers source availability under the same license.
- **Network copyleft** (AGPL-3.0): offering modified software over a network triggers source obligations — critical for SaaS.
- **Source-available / non-OSI** (BSL, SSPL, Commons Clause, Elastic License, "non-commercial"): usage restrictions; review before adoption.
- **No license** means all rights reserved.
- **SPDX expressions** (`MIT OR Apache-2.0`) allow a choice; `AND` requires both.
- **SBOM:** SPDX or CycloneDX, generated in CI, attached to releases; include component name, version, supplier, license and hashes.
- **Policy:** allow-list, review-list and deny-list per distribution model, enforced in CI with exceptions documented.
