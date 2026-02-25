import sharp from 'sharp'
import { readdir, unlink, stat, rename } from 'fs/promises'
import { join, extname, basename } from 'path'

const ASSETS_DIR = './src/assets'
const QUALITY = {
    hero: 75,
    background: 70,
    portrait: 80,
    service: 70,
    clinic: 70,
    logo: 95,
    default: 75
}

const SIZES = {
    mobile: 768,
    tablet: 1280,
    desktop: 1920
}

const CONVERTIBLE = ['.jpg', '.jpeg', '.png', '.jfif', '.webp']

async function getFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    const files = []
    for (const entry of entries) {
        const fullPath = join(dir, entry.name)
        if (entry.isDirectory()) {
            files.push(...await getFiles(fullPath))
        } else if (CONVERTIBLE.includes(extname(entry.name).toLowerCase())) {
            // Pular versões já processadas
            if (!entry.name.match(/-(sm|md|lg)\.webp$/)) {
                files.push(fullPath)
            }
        }
    }
    return files
}

function getQuality(filename) {
    const name = filename.toLowerCase()
    if (name.includes('logo')) return QUALITY.logo
    if (name.includes('hero') || name.includes('fundo')) return QUALITY.hero
    if (name.includes('rodrigo')) return QUALITY.portrait
    if (name.includes('recepcao') || name.includes('espera') ||
        name.includes('esterilizacao') || name.includes('atendimento')) return QUALITY.clinic
    if (name.includes('ortodontia') || name.includes('preventiva') ||
        name.includes('estetica') || name.includes('endodontia') ||
        name.includes('harmonizacao') || name.includes('implanto')) return QUALITY.service
    return QUALITY.default
}

async function optimizeImages() {
    const files = await getFiles(ASSETS_DIR)
    let totalSavedBytes = 0

    console.log(`\n🔍 Encontradas ${files.length} imagens para processar...\n`)

    for (const filePath of files) {
        const ext = extname(filePath).toLowerCase()
        const nameWithoutExt = filePath.slice(0, -ext.length)
        const quality = getQuality(basename(filePath))

        try {
            const originalStat = await stat(filePath)
            const originalSize = originalStat.size

            console.log(`\n⚡ Processando ${basename(filePath)}...`)

            // Gerar as 3 versões
            const variants = [
                { name: 'sm', width: SIZES.mobile },
                { name: 'md', width: SIZES.tablet },
                { name: 'lg', width: SIZES.desktop }
            ]

            for (const variant of variants) {
                const outputPath = `${nameWithoutExt}-${variant.name}.webp`
                const buffer = await sharp(filePath)
                    .resize({ width: variant.width, withoutEnlargement: true })
                    .webp({ quality, effort: 6 })
                    .toBuffer()
                await sharp(buffer).toFile(outputPath)
            }

            // Gerar a versão padrão .webp
            const standardOutput = nameWithoutExt + '.webp'
            const bufferStd = await sharp(filePath)
                .webp({ quality, effort: 6 })
                .toBuffer()

            // Se for webp original, sobrepor. Se não, criar novo e deletar original.
            if (ext === '.webp') {
                await sharp(bufferStd).toFile(standardOutput + '.tmp')
                await unlink(standardOutput)
                await rename(standardOutput + '.tmp', standardOutput)
            } else {
                await sharp(bufferStd).toFile(standardOutput)
                try {
                    await unlink(filePath)
                } catch (e) {
                    console.warn(`  ⚠️ Não foi possível deletar ${basename(filePath)}`)
                }
            }

            const newStat = await stat(standardOutput)
            const saved = originalSize - newStat.size
            totalSavedBytes += saved
            console.log(`  ✅ Economizou: ${(saved / 1024).toFixed(0)}KB`)

        } catch (err) {
            console.error(`  ❌ Erro ao processar ${filePath}:`, err.message)
        }
    }

    console.log(`\n🎉 Total economizado: ${(totalSavedBytes / 1024 / 1024).toFixed(2)}MB\n`)
}

optimizeImages()
