import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-line office joke for make.fun — "The Funniest Office Joke, Judged Head to Head".
// The joke: the office printer only jams when the deadline is real, and the
// twist is that the printer has a better sense of urgency than the manager.
const LINE =
  "The office printer only jams when the deadline is real — at this point it has a better sense of urgency than our manager.";

// Gate: the entry must be a single line of 1-200 characters, no setup
// beyond the joke itself — the punchline ("than our manager") comes last.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

const here = dirname(fileURLToPath(import.meta.url));
void here;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
