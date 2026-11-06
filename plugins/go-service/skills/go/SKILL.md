---
name: Go Services
description: Production Go services covering HTTP, context, errors, concurrency and testing. Use when writing or reviewing Go code, go.mod or HTTP handlers.
trigger: manual
---
# Go services

- **Layout:** `cmd/<app>` mains, `internal/` for private packages; package by domain, not by layer. Keep `main` thin.
- **HTTP:** standard `net/http` with method and wildcard patterns (`mux.HandleFunc("GET /items/{id}", h)`, `r.PathValue("id")`). Set `ReadHeaderTimeout`, `ReadTimeout`, `WriteTimeout`, `IdleTimeout`; `http.MaxBytesReader`; graceful shutdown on signals.
- **Context:** first parameter, never stored in structs; respect cancellation in loops and I/O.
- **Errors:** return, wrap with context (`fmt.Errorf("load user: %w", err)`), sentinel or typed errors for callers; no panics for control flow.
- **Concurrency:** every goroutine has an owner and an exit path; `errgroup` for fan-out; bounded worker pools; run tests with `-race`.
- **Logging/telemetry:** `log/slog` structured logging; OpenTelemetry traces and metrics; health and readiness endpoints.
- **Testing:** table-driven tests, `httptest`, `t.Cleanup`, fuzzing with `testing.F`, benchmarks with `b.Loop` where available.
- **Tooling:** `go vet`, `staticcheck`, `govulncheck`, `golangci-lint` if configured.
