import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "WARNING: Holding a door for a distant stranger may cause " +
  "reciprocal speed-walking.";

if (line.length > 160) {
  throw new Error("line exceeds 160 characters");
}
if (line.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
