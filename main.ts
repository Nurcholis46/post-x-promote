// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: one post of your own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, with a photo of its own attached and make.fun (or the
// @makefunai tag) plus the entrant's play code in its text. This program
// does the only job the repository has: it copies POST.json, which names
// the post, from the repository root to /output/POST.json, where the gate
// reads it. Nothing this program writes about the post is scored.
//
// POST.json ships with a placeholder address; replace it with the real
// post's address before submitting, or the gate refuses the entry.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const parsed = JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown };
if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
  console.error('POST.json has no usable url field');
  process.exit(1);
}
if (parsed.url.includes('<handle>') || parsed.url.includes('<id>')) {
  console.warn('POST.json still holds the placeholder address; replace it with the real post URL before submitting.');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json copied for ${parsed.url}`);
