// "Two Days of Excuses" — make.fun bounty entry.
// Writes one line, the winning excuse, to <MAKEFUN_OUTPUT_DIR>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked myself for a status update and I answered 'almost done' for two days.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
