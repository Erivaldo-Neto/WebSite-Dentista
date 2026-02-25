interface Props {
    baseName: string  // ex: 'fundo-hero' (sem extensão)
    alt: string
    className?: string
    eager?: boolean   // true para imagens above-the-fold
}

export function ResponsiveImage({ baseName, alt, className, eager }: Props) {
    // Ajuste do caminho conforme a estrutura do projeto
    // Geralmente as imagens estão em /src/assets/images/ ou /src/assets/
    // Vou assumir que o baseName pode incluir o subdiretório se necessário

    // No Vite, arquivos na pasta 'public' são servidos na raiz
    const basePath = ''

    return (
        <picture>
            <source
                media="(max-width: 768px)"
                srcSet={`${basePath}/${baseName}-sm.webp`}
                type="image/webp"
            />
            <source
                media="(max-width: 1280px)"
                srcSet={`${basePath}/${baseName}-md.webp`}
                type="image/webp"
            />
            <source
                srcSet={`${basePath}/${baseName}-lg.webp`}
                type="image/webp"
            />
            <img
                src={`${basePath}/${baseName}.webp`}
                alt={alt}
                className={className}
                loading={eager ? 'eager' : 'lazy'}
                decoding={eager ? 'sync' : 'async'}
                // @ts-ignore - fetchpriority is relatively new
                fetchpriority={eager ? 'high' : 'auto'}
            />
        </picture>
    )
}
