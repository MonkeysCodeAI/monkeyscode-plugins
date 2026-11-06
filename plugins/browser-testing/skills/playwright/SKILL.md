---
name: Playwright Testing
description: Resilient Playwright tests with locators, fixtures, mocking, visual and a11y checks. Use when writing or fixing end-to-end browser tests.
trigger: manual
---
# Playwright testing

- **Locators:** prefer role, label and text; chain and filter (`.filter({ hasText })`) instead of CSS or XPath. Add `data-testid` only where semantics are absent.
- **Waiting:** rely on auto-waiting and web-first assertions; never `waitForTimeout`. Use `expect.poll` for eventual consistency.
- **Isolation:** each test gets a fresh context. Authenticate once in a setup project and reuse `storageState`. Use unique data per test to allow parallelism.
- **Fixtures:** extend `test` with typed fixtures for page objects, API clients and seeded data; clean up in teardown.
- **Network:** `page.route` to stub third parties and error cases; `page.waitForResponse` to sync on real calls; HAR replay for complex backends.
- **Visual:** `toHaveScreenshot` with masked dynamic regions, fixed viewport, disabled animations and fonts loaded; update baselines intentionally and review diffs.
- **Accessibility:** `@axe-core/playwright` scans complement, not replace, manual checks.
- **Performance signals:** read web-vitals via `page.evaluate` only as a smoke signal; lab data is not field data.
- **CI:** `retries` small, `trace: 'on-first-retry'`, sharding with `--shard`, artifacts uploaded on failure. Treat retries-then-pass as flaky and fix them.
- **Debugging:** `--ui`, `--debug`, trace viewer and `codegen` for locator discovery.
