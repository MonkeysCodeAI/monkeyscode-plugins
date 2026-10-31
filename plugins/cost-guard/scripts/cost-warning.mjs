// Advisory only: no stdout decisions, billing authority or Stop blocking.
const MAX_BYTES = 64 * 1024;
let chunks = [];
let bytes = 0;
let finished = false;
const finish = () => {
  if (finished) return;
  finished = true;
  clearTimeout(timer);
  process.stdin.pause();
  try {
    const input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const value = input && typeof input === 'object' && !Array.isArray(input)
      ? (input.costUsd ?? input.metadata?.costUsd) : undefined;
    if (typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 1000000) {
      process.stderr.write(`Cost advisory: reported costUsd=${value.toFixed(4)}; not verified billing or a budget limit.\n`);
    }
  } catch { /* Missing, malformed or oversized metadata is unknown. */ }
  chunks = [];
  process.exit(0);
};
const timer = setTimeout(finish, 1000);
process.stdin.on('data', chunk => {
  const data = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
  bytes += data.length;
  if (bytes > MAX_BYTES) { chunks = []; finish(); return; }
  chunks.push(data);
});
process.stdin.on('end', finish);
process.stdin.on('error', () => { chunks = []; finish(); });
process.on('uncaughtException', () => process.exit(0));
process.stdin.resume();
