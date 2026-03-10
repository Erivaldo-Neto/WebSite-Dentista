interface Props {
  baseName: string;
  alt: string;
  className?: string;
  eager?: boolean;
  width?: number | string;
  height?: number | string;
}

export function ResponsiveImage({ baseName, alt, className, eager, width, height }: Props) {
  const basePath = '';

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
        width={width}
        height={height}
        // @ts-ignore
        fetchpriority={eager ? 'high' : 'auto'}
      />
    </picture>
  );
}
