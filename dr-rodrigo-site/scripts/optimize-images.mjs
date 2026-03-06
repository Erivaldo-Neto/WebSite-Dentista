import sharp from 'sharp'
import { readdir, stat, mkdir } from 'fs/promises'
import { join, extname, basename } from 'path'

const ASSETS_DIR = './src/assets/images'
const OUTPUT_DIR = './public/images'

// Configurações de Qualidade Premium para preservar fidelidade
const QUALITY = {
    hero: 90,         
    background: 85,
    portrait: 92,     
    service: 88,
    clinic: 85,
    logo: 96,
    default: 88
}

const SIZES = {
    sm: 768,
    md: 1280,
    lg: 1920
}

const CONVERTIBLE = ['.jpg', '.jpeg', '.png', '.jfif', '.webp']

async function ensureDir(dir) {
    try {
        await mkdir(dir, { recursive: true })
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
}

// Lógica de coleta de arquivos com prioridade para formatos de alta qualidade (.png, .jpg)
async function getFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    const filesMap = new Map()

    for (const entry of entries) {
        const fullPath = join(dir, entry.name)
        if (entry.isDirectory()) {
            const subDirFiles = await getFiles(fullPath)
            // Integrar os arquivos da subpasta (lógica simplificada para o map)
            subDirFiles.forEach(f => {
                const ext = extname(f).toLowerCase()
                const stem = basename(f, ext)
                filesMap.set(stem, f)
            })
        } else {
            const ext = extname(entry.name).toLowerCase()
            if (CONVERTIBLE.includes(ext) && !entry.name.match(/-(sm|md|lg)\.webp$/)) {
                const stem = basename(entry.name, ext)
                const currentPath = filesMap.get(stem)
                
                // Prioridade: Se já existe um .webp e encontramos um .png/.jpg, substituímos como fonte
                // Se não existe nada, adicionamos
                if (!currentPath || (ext !== '.webp' && extname(currentPath).toLowerCase() === '.webp')) {
                    filesMap.set(stem, fullPath)
                }
            }
        }
    }
    return Array.from(filesMap.values())
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
    await ensureDir(OUTPUT_DIR)
    const files = await getFiles(ASSETS_DIR)

    console.log(`\n🔍 Encontradas ${files.length} imagens fonte exclusivas.\n`)

    for (const filePath of files) {
        const ext = extname(filePath).toLowerCase()
        const nameWithoutExt = basename(filePath, ext)
        const quality = getQuality(basename(filePath))

        try {
            console.log(`\n⚡ Otimizando ${basename(filePath)} -> public/images/ (Qualidade: ${quality})`)

            // 1. Gerar versões responsivas (sm, md, lg)
            for (const [key, width] of Object.entries(SIZES)) {
                const outputPath = join(OUTPUT_DIR, `${nameWithoutExt}-${key}.webp`)
                await sharp(filePath)
                    .resize({ width: width, withoutEnlargement: true })
                    .webp({ quality, effort: 6 })
                    .toFile(outputPath)
                console.log(`  🔹 Gerado: ${basename(outputPath)}`)
            }

            // 2. Gerar a versão base .webp
            const standardOutput = join(OUTPUT_DIR, `${nameWithoutExt}.webp`)
            await sharp(filePath)
                .webp({ quality, effort: 6 })
                .toFile(standardOutput)
            
            console.log(`  ✅ Concluído: ${basename(standardOutput)}`)

        } catch (err) {
            console.error(`  ❌ Erro ao processar ${filePath}:`, err.message)
        }
    }

    console.log(`\n🎉 Processamento concluído com alta qualidade. Verifique o site.\n`)
}

optimizeImages()
