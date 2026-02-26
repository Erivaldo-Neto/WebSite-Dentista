import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const EASE = [0.25, 0.1, 0.25, 1] as const;

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

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
      <m.div
        className="absolute inset-0 w-full h-full z-0 hero-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <ResponsiveImage
          baseName="images/background-herosection"
          alt="Consultório Odontológico"
          className="w-full h-full object-cover object-[50%_35%] opacity-70"
          eager
        />
      </m.div>

      {/* ─── GRADIENTE BASE — escurece tuda a seção ─────────────── */}
      {/* (Restante do código de gradiente omitido para brevidade no replacement) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background: [
            'linear-gradient(to right, #0A2A43 22%, rgba(10,42,67,0.92) 38%, rgba(10,42,67,0.55) 55%, rgba(10,42,67,0.15) 72%, transparent 88%)',
            'linear-gradient(to bottom, rgba(10,42,67,0.5) 0%, transparent 15%)',
          ].join(', '),
        }}
      />
      <div
        className="absolute inset-0 z-20 pointer-events-none md:hidden"
        style={{
          background:
            'linear-gradient(to top, #0A2A43 45%, rgba(10,42,67,0.9) 60%, rgba(10,42,67,0.4) 80%, transparent 100%)',
        }}
      />

      <div
        className="absolute inset-y-0 z-20 pointer-events-none hidden md:block"
        style={{
          left: '28%',
          width: '38%',
          background:
            'linear-gradient(to right, rgba(10,42,67,0.88) 0%, rgba(10,42,67,0.4) 40%, rgba(10,42,67,0.08) 75%, transparent 100%)',
        }}
      />

      {/* ─── DR. RODRIGO — MOBILE ──────────────────────────────────── */}
      <div
        className="absolute z-10 md:hidden rodrigo-image"
        style={{
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%) scale(1.6)',
          height: '65%',
          filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))',
          transformOrigin: 'top center'
        }}
      >
        <ResponsiveImage
          baseName="images/rodrigo-HeroSection"
          alt="Dr. Rodrigo Silva"
          className="h-full w-auto object-contain object-top"
          eager
        />
      </div>

      {/* ─── DR. RODRIGO — DESKTOP ─────────────────────────────────── */}
      <m.div
        className="absolute z-30 hidden md:flex items-end justify-center rodrigo-image"
        style={{ left: '48%', right: 0, top: 0, bottom: 0 }}
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.5, ease: EASE }}
      >
        <div style={{ height: '94vh' }}>
          <ResponsiveImage
            baseName="images/rodrigo-HeroSection"
            alt="Dr. Rodrigo Silva"
            className="h-full w-auto object-contain object-bottom"
            eager
          />
        </div>
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
              fontSize: 'clamp(42px, 5.5vw, 64px)',
              lineHeight: 1.1,
              maxWidth: '520px',
              marginBottom: '16px',
            }}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.3, ease: EASE }}
          >
            Odontologia de <br />
            <span style={{ fontStyle: 'italic', color: '#E9C45C', fontWeight: 500 }}>Excelência</span>{' '}
            &amp; Arte.
          </m.h1>

          {/* Linha dourada */}
          <m.div
            style={{ width: '48px', height: '1px', background: '#E9C45C', opacity: 0.6, marginBottom: '16px' }}
            initial={shouldReduceMotion ? { opacity: 0.6, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.6, scaleX: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5, ease: EASE }}
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
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.55, ease: EASE }}
          >
            Experiência premium em reabilitação oral e estética do sorriso.
            Tecnologia de ponta, conforto absoluto e resultados naturais.
          </m.p>

          {/* Estatísticas */}
          <m.div
            className="flex items-center mb-8"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.7, ease: EASE }}
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
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.85, ease: EASE }}
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
