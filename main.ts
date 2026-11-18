// news-image-20261118 entry (Node 22, standard library only).
// The poster for 18 November 2026 lives next to this file as entry.png;
// running this program places an exact copy of it at /output/entry.png.
// It reads nothing from the network and writes the same bytes every run.
// Deterministic by construction: a byte-for-byte copy of a fixed file,
// so two runs always produce identical output.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const poster = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(poster, join(outDir, 'entry.png'));
