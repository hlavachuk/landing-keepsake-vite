import { mkdir, readdir } from 'node:fs/promises';
import sharp from 'sharp';

const originals = new URL('../src/assets/images/', import.meta.url);
const output = new URL('../public/images/', import.meta.url);
await mkdir(output, { recursive: true });

for (const file of await readdir(originals)) {
  if (!file.endsWith('.webp')) continue;
  const name = file.slice(0, -5);
  const width = name.startsWith('journal-') ? 300 : 720;

  for (const size of [width / 2, width]) {
    const image = sharp(new URL(file, originals).pathname).resize({
      width: size,
    });
    const prefix = new URL(`${name}-${size}`, output).pathname;
    await Promise.all([
      image.clone().avif({ quality: 50 }).toFile(`${prefix}.avif`),
      image.clone().webp({ quality: 78 }).toFile(`${prefix}.webp`),
      image.clone().jpeg({ quality: 82 }).toFile(`${prefix}.jpg`),
    ]);
  }
}
