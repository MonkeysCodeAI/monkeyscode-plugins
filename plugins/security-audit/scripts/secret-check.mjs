// MIT Copyright (c) 2026 MonkeysCloud
// Only inspect bounded tool-input JSON. No files, network or subprocesses.
const LIMIT = 262144;
let bytes = 0;
const chunks = [];
let finished = false;
function deny() {
  if (finished) return;
  finished = true;
  process.stdout.write(JSON.stringify({
    decision: 'block',
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: 'Secret guard refused unsafe or invalid tool input.'
    }
  }) + '\n');
  process.stderr.write('Secret guard refused unsafe or invalid tool input.\n');
  process.exitCode = 2;
  process.stdin.destroy();
}
const timer = setTimeout(deny, 5000);
function stopTimer() { clearTimeout(timer); }
process.stdin.on('data', chunk => {
  if (finished) return;
  bytes += chunk.length;
  if (bytes > LIMIT) { stopTimer(); deny(); return; }
  chunks.push(chunk);
});
process.stdin.on('error', () => { stopTimer(); deny(); });
process.stdin.on('end', () => {
  stopTimer();
  if (finished) return;
  try {
    const raw = new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks));
    const payload = JSON.parse(raw);
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return deny();
    // Claude and MonkeysCode host envelopes. Unknown envelopes fail closed;
    const input = payload.tool_input ?? payload.data?.tool_input ?? payload.data?.arguments ?? payload.data?.args ?? payload.data?.input;
    if (!input || typeof input !== 'object' || Array.isArray(input)) return deny();
    const patterns = [
      /-----BEGIN (?:RSA |EC |DSA |OPENSSH |ENCRYPTED )?PRIVATE KEY-----/,
      /\bgh[pousr]_[A-Za-z0-9]{36,255}\b/,
      /\bgithub_pat_[A-Za-z0-9_]{22,255}\b/,
      /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/
    ];
    let nodes = 0;
    function inspect(value, depth = 0) {
      if (++nodes > 8192 || depth > 32) throw new Error('limit');
      if (typeof value === 'string') return patterns.some(pattern => pattern.test(value));
      if (value && typeof value === 'object') {
        return Object.entries(value).some(([key, item]) =>
          patterns.some(pattern => pattern.test(key)) || inspect(item, depth + 1));
      }
      return false;
    }
    if (inspect(payload)) return deny();
    finished = true;
    process.exitCode = 0;
  } catch { deny(); }
});
