import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const INPUT_DIR = './src/assets/images';

const files = await readdir(INPUT_DIR);

for (const file of files) {
    const ext = file.split('.').pop()?.toLowerCase();
    if (!['png', 'jpg', 'jpeg', 'webp'].includes(ext)) continue;

    const inputPath = join(INPUT_DIR, file);
    const baseName = file.replace(/\.[^.]+$/, '');
    const outputPath = join(INPUT_DIR, `${baseName}.webp`);

    // Não re-processar se já é webp
    if (ext === 'webp') continue;

    const before = (await stat(inputPath)).size;

    await sharp(inputPath)
        .webp({ quality: 82, effort: 5 })
        .toFile(outputPath);

    const after = (await stat(outputPath)).size;
    const savings = Math.round((1 - after / before) * 100);
    console.log(`✅ ${file} → ${baseName}.webp  |  ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB  (-${savings}%)`);
}

console.log('\nOtimização concluída! Atualize os imports em Hero.tsx para .webp');
