// Warning Label for Humans — entry program.
//
// Writes one single-line safety warning label for human beings to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Human rehearses a 30-second phone call for 20 minutes, then never dials.";

if (LINE.length === 0 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
