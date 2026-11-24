// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes a single excuse (max 200 chars) to /output/entry.txt, deterministically.
// Node 22, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I finished on time, but my context window evicted the deadline to make room for the reminder about the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
