import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const EASE = [0.25, 0.1, 0.25, 1] as const;

// Caminhos absolutos para a pasta /public/images
const rodrigoImg = '/images/rodrigo-HeroSection.webp';
const heroBg = '/images/background-herosection.webp';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#0A2A43]"
      style={{ height: '100dvh', minHeight: '600px' }}
    >

      {/* ─── FUNDO: consultório ─────────────────────────────────── */}
      <m.img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 30%' }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      {/* ─── GRADIENTE BASE — escurece tuda a seção ─────────────── */}
      {/* Desktop: forte à esquerda, dissolve suavemente ao centro */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background: [
            'linear-gradient(to right, #0A2A43 22%, rgba(10,42,67,0.92) 38%, rgba(10,42,67,0.55) 55%, rgba(10,42,67,0.15) 72%, transparent 88%)',
            'linear-gradient(to bottom, rgba(10,42,67,0.5) 0%, transparent 15%)',
          ].join(', '),
        }}
      />
      {/* Mobile: escurece fortemente a parte inferior para dar leitura ao texto */}
      <div
        className="absolute inset-0 z-20 pointer-events-none md:hidden"
        style={{
          background:
            'linear-gradient(to top, #0A2A43 45%, rgba(10,42,67,0.9) 60%, rgba(10,42,67,0.4) 80%, transparent 100%)',
        }}
      />

      {/* ─── ZONA DE FUSÃO SUAVE (desktop) ─────────────────────────
          Overlay adicional que elimina a "costura" onde o gradiente
          base termina e a imagem do Rodrigo começa.
          Ocupa a faixa de transição (~30%→60% da largura).
      ──────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-y-0 z-20 pointer-events-none hidden md:block"
        style={{
          left: '28%',
          width: '38%',
          background:
            'linear-gradient(to right, rgba(10,42,67,0.88) 0%, rgba(10,42,67,0.4) 40%, rgba(10,42,67,0.08) 75%, transparent 100%)',
        }}
      />

      {/* ─── DR. RODRIGO — MOBILE ────────────────────────────────────
          Posicionado mais ao topo e com altura reduzida para não bater no texto
      ──────────────────────────────────────────────────────────── */}
      <img
        src={rodrigoImg}
        alt="Dr. Rodrigo Silva"
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="absolute z-10 md:hidden"
        style={{
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '48%',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'top center',
          filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))'
        }}
      />

      {/* ─── DR. RODRIGO — DESKTOP ───────────────────────────────────
          Container ocupa a METADE DIREITA da tela (left:50% → right:0).
          Flex centraliza o Rodrigo dentro dessa metade.
          Assim ele fica no meio da área direita, não colado no canto.
      ──────────────────────────────────────────────────────────── */}
      <m.div
        className="absolute z-30 hidden md:flex items-end justify-center"
        style={{ left: '48%', right: 0, top: 0, bottom: 0 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
      >
        <img
          src={rodrigoImg}
          alt="Dr. Rodrigo Silva"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          style={{
            height: '94vh',       /* ligeiramente maior */
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom center',
          }}
        />
      </m.div>


      {/* ─── CONTEÚDO DE TEXTO ──────────────────────────────────── */}
      <div
        className="relative z-40 h-full flex items-end md:items-center pb-10 md:pb-0"
        style={{
          paddingLeft: 'clamp(20px, 5vw, 96px)',
          paddingRight: 'clamp(20px, 5vw, 48px)',
        }}
      >
        <div className="flex flex-col w-full max-w-xl">

          {/* Título */}
          <m.h1
            className="text-white text-shadow-img"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: 1.1,
              maxWidth: '520px',
              marginBottom: '16px',
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            Odontologia de <br />
            <span style={{ fontStyle: 'italic', color: '#E9C45C', fontWeight: 500 }}>Excelência</span>{' '}
            &amp; Arte.
          </m.h1>

          {/* Linha dourada */}
          <m.div
            style={{ width: '48px', height: '1px', background: '#E9C45C', opacity: 0.6, marginBottom: '16px' }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.6, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          />

          {/* Subtítulo */}
          <m.p
            className="text-shadow-img text-white/90"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.3vw, 15px)',
              lineHeight: 1.7,
              maxWidth: '390px',
              marginBottom: '28px',
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            Experiência premium em reabilitação oral e estética do sorriso.
            Tecnologia de ponta, conforto absoluto e resultados naturais.
          </m.p>

          {/* Estatísticas */}
          <m.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            {[
              { num: '12+', label: 'Anos de Experiência' },
              { num: '5k+', label: 'Pacientes' },
              { num: '98%', label: 'Satisfação' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && (
                  <div style={{ width: '1px', height: '30px', background: 'rgba(201,168,76,0.35)', flexShrink: 0 }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: i === 0 ? '0 18px 0 0' : '0 18px' }}>
                  <span className="text-white text-shadow-img" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.4vw, 34px)', fontWeight: 500, lineHeight: 1 }}>
                    {stat.num}
                  </span>
                  <span className="text-shadow-img text-white/80" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </m.div>

          {/* Botões */}
          <m.div
            className="flex flex-col sm:flex-row flex-wrap gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          >
            <Button
              variant="primary"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Agendar Consulta <ArrowRight size={14} />
            </Button>

            <Button
              variant="secondary"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto"
            >
              Conhecer Tratamentos
            </Button>
          </m.div>

        </div>
      </div>
    </section>
  );
};
