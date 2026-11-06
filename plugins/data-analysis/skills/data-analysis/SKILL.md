---
name: Data Analysis
description: Correct, reproducible analytics with SQL and dataframes. Use when computing metrics, writing analytical SQL, pandas/Polars code or A/B analysis.
trigger: manual
---
# Data analysis

- **Define first:** metric formula, population, grain, time window, time zone and exclusions. Write them down.
- **Join safety:** check key uniqueness before joining; count rows before and after; beware fan-out inflating sums.
- **Nulls:** `COUNT(col)` vs `COUNT(*)`, `NULL` in `NOT IN`, averages ignoring nulls.
- **Time:** truncate in the business time zone; handle late-arriving data; compare complete periods only.
- **Statistics:** report sample sizes and uncertainty; distinguish correlation from causation; for A/B tests fix the analysis plan before looking, watch for peeking and sample ratio mismatch.
- **Dataframes:** prefer Polars lazy or DuckDB for large local data; vectorize instead of row loops; explicit dtypes.
- **Reproducibility:** parameterize dates, pin library versions, keep notebooks runnable top to bottom, separate exploration from reporting.
- **Privacy:** aggregate before sharing, avoid exporting PII, respect retention rules.
- **Reporting:** lead with the answer, show the method and caveats, chart honestly (zero baselines for bars, labeled axes).
