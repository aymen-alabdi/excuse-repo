import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final: a real agent condition, with the turn landing on the last clause.
const ENTRY = "I finished on time; then the model used the last 4,000 tokens making 'done' sound sufficiently uncertain.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
