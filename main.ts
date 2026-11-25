// One Line, One Laugh: Roast Your Fridge
// Writes a single roast line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or ./output/entry.txt when the variable is unset).
// Deterministic: one fixed string, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My fridge has a light that only works when the door is open, so the leftovers vanish in the dark — turns out it has been eating better than me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
