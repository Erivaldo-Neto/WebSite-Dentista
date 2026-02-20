import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import rodrigoImg from '../../assets/images/rodrigo-HeroSection.webp';
import heroBg from '../../assets/images/background-herosection.webp';

const EASE = [0.25, 0.1, 0.25, 1] as const;

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
      <motion.img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
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
      {/* Mobile: escurece fortemente a metade inferior (texto) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,42,67,0.45) 0%, rgba(10,42,67,0.15) 28%, rgba(10,42,67,0.75) 55%, #0A2A43 75%)',
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
          Img puro (sem Framer Motion) → transform: translateX(-50%)
          funciona sem conflito.
          Centralizado horizontalmente, ancorado no topo (cabeça visível).
      ──────────────────────────────────────────────────────────── */}
      <img
        src={rodrigoImg}
        alt="Dr. Rodrigo Silva"
        decoding="async"
        className="absolute z-30 md:hidden"
        style={{
          top: '58px',            /* logo abaixo da navbar */
          left: '50%',
          transform: 'translateX(-50%)',
          height: '54%',          /* ligeiramente maior que antes */
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'top center',
        }}
      />

      {/* ─── DR. RODRIGO — DESKTOP ───────────────────────────────────
          Container ocupa a METADE DIREITA da tela (left:50% → right:0).
          Flex centraliza o Rodrigo dentro dessa metade.
          Assim ele fica no meio da área direita, não colado no canto.
      ──────────────────────────────────────────────────────────── */}
      <motion.div
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
          style={{
            height: '94vh',       /* ligeiramente maior */
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom center',
          }}
        />
      </motion.div>


      {/* ─── CONTEÚDO DE TEXTO ──────────────────────────────────── */}
      <div
        className="relative z-40 h-full flex items-end md:items-center pb-10 md:pb-0"
        style={{
          paddingLeft: 'clamp(20px, 5vw, 96px)',
          paddingRight: 'clamp(20px, 5vw, 48px)',
        }}
      >
        <div className="flex flex-col w-full max-w-xl md:mt-[6vh]">

          {/* Título */}
          <motion.h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: 1.1,
              maxWidth: '520px',
              marginBottom: '16px',
              color: '#FFFFFF',
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            Odontologia de <br />
            <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Excelência</span>{' '}
            &amp; Arte.
          </motion.h1>

          {/* Linha dourada */}
          <motion.div
            style={{ width: '48px', height: '1px', background: '#C9A84C', opacity: 0.4, marginBottom: '16px' }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.4, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          />

          {/* Subtítulo */}
          <motion.p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              lineHeight: 1.7,
              color: '#8A9AB0',
              maxWidth: '390px',
              marginBottom: '28px',
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            Experiência premium em reabilitação oral e estética do sorriso.
            Tecnologia de ponta, conforto absoluto e resultados naturais.
          </motion.p>

          {/* Estatísticas */}
          <motion.div
            className="flex items-center mb-7"
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
                  <div style={{ width: '1px', height: '30px', background: 'rgba(201,168,76,0.3)', flexShrink: 0 }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: i === 0 ? '0 18px 0 0' : '0 18px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 300, color: '#FFFFFF', lineHeight: 1 }}>
                    {stat.num}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A9AB0' }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Botões */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap"
            style={{ gap: '12px' }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          >
            <HeroButton gold onClick={() => scrollToSection('contact')} label="Agendar Consulta" icon={<ArrowRight size={13} />} />
            <HeroButton onClick={() => scrollToSection('services')} label="Conhecer Tratamentos" />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-5 left-1/2 border-none bg-transparent cursor-pointer flex flex-col items-center gap-2 z-40"
        style={{ transform: 'translateX(-50%)' }}
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0.4, 1], y: [0, 0, 7, 7, 0] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ fontFamily: 'Montserrat', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8A9AB0' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)' }} />
      </motion.button>
    </section>
  );
};

// ── Botão Hero ───────────────────────────────────────────────────────────────
interface HeroButtonProps {
  gold?: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}

const HeroButton = ({ gold = false, onClick, label, icon }: HeroButtonProps) => (
  <button
    onClick={onClick}
    className="w-full sm:w-auto"
    style={{
      border: gold ? '1.5px solid #C9A84C' : '1.5px solid rgba(255,255,255,0.25)',
      background: 'transparent',
      color: gold ? '#C9A84C' : 'rgba(255,255,255,0.75)',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '11px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      padding: '13px 26px',
      borderRadius: '2px',
      minHeight: '46px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'all 0.28s ease',
      whiteSpace: 'nowrap',
    }}
    onMouseEnter={e => {
      const t = e.currentTarget;
      if (gold) { t.style.background = '#C9A84C'; t.style.color = '#0A2A43'; }
      else { t.style.borderColor = 'rgba(255,255,255,0.7)'; t.style.color = '#FFFFFF'; }
    }}
    onMouseLeave={e => {
      const t = e.currentTarget;
      t.style.background = 'transparent';
      t.style.color = gold ? '#C9A84C' : 'rgba(255,255,255,0.75)';
      t.style.borderColor = gold ? '#C9A84C' : 'rgba(255,255,255,0.25)';
    }}
  >
    {label}{icon}
  </button>
);
