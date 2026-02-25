import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export const Office = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      baseName: 'images/recepcao',
      label: 'Recepção',
      description: 'Ambiente acolhedor que transmite confiança desde o primeiro momento.'
    },
    {
      baseName: 'images/sala-de-espera',
      label: 'Sala de Espera',
      description: 'Conforto e serenidade enquanto você aguarda o seu atendimento.'
    },
    {
      baseName: 'images/sala-de-esterilizacao',
      label: 'Esterilização',
      description: 'Protocolos rigorosos de biossegurança para a sua total tranquilidade.'
    },
    {
      baseName: 'images/sala-de-atendimento',
      label: 'Sala de Atendimento',
      description: 'Tecnologia de ponta em um ambiente pensado para o seu conforto.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="office" className="bg-[#0A2A43] overflow-hidden">
      {/* ─── TÍTULO DA SEÇÃO (topo) ─────────────────────────────────── */}
      <div className="text-center pt-10 pb-8 md:pt-[64px] md:pb-[48px] px-6">
        <span className="block font-sans text-[11px] uppercase tracking-[0.3em] text-gold-bright mb-4">
          Nossa Estrutura
        </span>
        <h2 className="text-white font-heading font-normal leading-tight text-[32px] md:text-[52px]">
          O Consultório
        </h2>
        <div
          className="h-[1px] w-[48px] bg-gold-bright opacity-50 mx-auto mt-4"
        />
      </div>

      {/* ─── CARROSSEL — CONTAINER PRINCIPAL ────────────────────────── */}
      <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">

        {/* Camada 1 — As imagens empilhadas com cross-fade */}
        {images.map((img, i) => (
          <m.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === i ? 1 : 0 }}
            transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <ResponsiveImage
              baseName={img.baseName}
              alt={img.label}
              className="w-full h-full object-cover object-center"
            />
          </m.div>
        ))}

        {/* Camada 2 — Overlay gradiente cinematográfico */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `
              linear-gradient(to top,
                rgba(0,0,0,0.75) 0%,
                rgba(0,0,0,0.35) 35%,
                transparent 65%
              ),
              linear-gradient(to bottom,
                rgba(10,42,67,0.5) 0%,
                transparent 30%
              ),
              linear-gradient(to right,
                rgba(0,0,0,0.25) 0%,
                transparent 25%,
                transparent 75%,
                rgba(0,0,0,0.25) 100%
              )
            `
          }}
        />

        {/* Camada 3 — Texto que muda conforme a imagem */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {images.map((img, i) => (
            <m.div
              key={i}
              className="absolute bottom-6 left-6 md:bottom-16 md:left-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeIndex === i ? 1 : 0,
                y: activeIndex === i ? 0 : 20
              }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              {/* Label do ambiente */}
              <span className="block font-sans text-[11px] uppercase tracking-[0.3em] text-gold-bright mb-2.5">
                {img.label}
              </span>

              {/* Descrição curta */}
              <p className="font-heading font-light text-white text-[22px] md:text-[36px] max-w-[85%] md:max-w-[500px] leading-[1.3] text-shadow-sm">
                {img.description}
              </p>
            </m.div>
          ))}
        </div>

        {/* Camada 4 — Indicadores de progresso (linhas douradas) */}
        <div className="absolute bottom-8 right-6 md:right-16 flex gap-3 items-center z-30">
          {images.map((_, i) => (
            <m.div
              key={i}
              onClick={(e) => {
                // Previne borbulhamento para não interferir em outros eventos se houver
                e.stopPropagation();
                setActiveIndex(i);
              }}
              className="cursor-pointer h-[1px] bg-gold-bright pointer-events-auto"
              animate={{
                width: activeIndex === i ? '48px' : '16px',
                opacity: activeIndex === i ? 1 : 0.35
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
