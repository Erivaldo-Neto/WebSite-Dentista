/**
 * Remove o fundo branco da foto do Rodrigo usando Sharp
 * Substitui pixels "brancos/claros" por transparência alpha
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const INPUT = './src/assets/images/rodrigo-HeroSection.png';
const OUTPUT = './src/assets/images/rodrigo-hero-nobg.webp';

console.log('📷 Carregando imagem...');

const { data, info } = await sharp(INPUT)
    .ensureAlpha()   // garante canal alpha
    .raw()
    .toBuffer({ resolveWithObject: true });

const pixels = new Uint8Array(data.buffer);
const { width, height } = info;
let removedCount = 0;

console.log(`🔬 Processando ${width}x${height} pixels...`);

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const brightness = (r + g + b) / 3;
        const maxChannel = Math.max(r, g, b);
        const minChannel = Math.min(r, g, b);
        const saturation = maxChannel - minChannel;  // 0 = cinza/branco puro

        // Remoção total: pixel MUITO branco (fundo nítido)
        if (brightness > 245 && saturation < 8) {
            pixels[i + 3] = 0;
            removedCount++;
        }
        // Remoção suave: borda semi-branca (anti-aliasing)
        else if (brightness > 232 && saturation < 18) {
            const alpha = Math.round(255 * ((saturation / 18) * 0.85));
            pixels[i + 3] = alpha;
            removedCount++;
        }
    }
}

console.log(`✅ ${removedCount.toLocaleString()} pixels processados`);
console.log('💾 Salvando WebP com transparência...');

await sharp(Buffer.from(pixels.buffer), {
    raw: { width, height, channels: 4 }
})
    .webp({ quality: 88, lossless: false })
    .toFile(OUTPUT);

// Verifica tamanho final
const { size } = await import('fs').then(m => m.promises.stat(OUTPUT));
console.log(`🎉 Salvo: ${OUTPUT} (${Math.round(size / 1024)}KB)`);
