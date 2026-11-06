---
name: Rust Development
description: Idiomatic, safe Rust covering errors, ownership, async, unsafe and Cargo. Use when writing or reviewing Rust code or Cargo.toml.
trigger: manual
---
# Rust development

- **Errors:** `Result` everywhere fallible; `?` propagation; `thiserror` enums in libraries, `anyhow` with context in binaries. Panics only for programmer bugs.
- **Ownership:** borrow by default, clone deliberately, prefer `&str`/`&[T]` parameters and `impl Into<T>` at API edges. Avoid `Rc<RefCell<_>>` webs; restructure ownership instead.
- **Async:** Tokio runtime; `spawn_blocking` for CPU or blocking I/O; never hold a `std::sync::Mutex` guard across `.await`; use `tokio::select!` with cancellation-safe futures; structured concurrency with `JoinSet`.
- **Unsafe:** minimize, encapsulate behind safe APIs, document `// SAFETY:` invariants, test with Miri.
- **Types:** newtypes for units and IDs, enums for states, builder pattern for complex construction, `#[must_use]` where ignoring is a bug.
- **Cargo:** workspace for multi-crate repos, features additive, `cargo deny`/`cargo audit` for supply chain, MSRV documented.
- **Testing:** unit tests in modules, integration tests in `tests/`, doctests for public APIs, `proptest` for invariants, `criterion` for benchmarks.
