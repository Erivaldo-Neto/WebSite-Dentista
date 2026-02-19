import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-primary px-0">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Camada 1: Grid Arquitetônico */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>

        {/* Camada 2: Círculo Blur */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-primary-light opacity-30 blur-[100px]"></div>

        {/* Camada 3: Linhas Diagonais Douradas */}
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="30%" y2="0" stroke="#C9A84C" strokeWidth="1" />
          <line x1="5%" y1="100%" x2="35%" y2="0" stroke="#C9A84C" strokeWidth="1" />
          <line x1="10%" y1="100%" x2="40%" y2="0" stroke="#C9A84C" strokeWidth="1" />
        </svg>

        {/* Camada 4: Noise */}
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-0">

          {/* Coluna Esquerda: Conteúdo */}
          <motion.div
            className="flex flex-col justify-center h-full pt-20 lg:pt-0 pr-0 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-6">
              <motion.span
                className="block text-gold text-xs sm:text-sm tracking-widest uppercase mb-4 pl-1 border-l-2 border-gold"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.5 }}
              >
                CRO-SP 12345
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-white leading-[1.1] mb-6">
                Odontologia de <br />
                <span className="italic font-normal text-gold">Excelência</span> & Arte.
              </h1>

              <p className="text-text-secondary text-lg font-light max-w-lg mb-10 leading-relaxed font-sans">
                Experiência premium em reabilitação oral e estética do sorriso.
                Tecnologia, conforto e resultados naturais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button
                  variant="gold-outline"
                  size="md"
                  onClick={() => scrollToSection('contact')}
                  className="group"
                >
                  <span className="flex items-center gap-2">
                    Agendar Consulta
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => scrollToSection('services')}
                >
                  Conheça os Tratamentos
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 sm:gap-12 border-t border-white/10 pt-8">
                <div>
                  <span className="block text-3xl font-heading text-white">12+</span>
                  <span className="text-xs uppercase tracking-wider text-text-secondary">Anos de Experiência</span>
                </div>
                <div className="w-px h-10 bg-gold/30"></div>
                <div>
                  <span className="block text-3xl font-heading text-white">5k+</span>
                  <span className="text-xs uppercase tracking-wider text-text-secondary">Pacientes</span>
                </div>
                <div className="w-px h-10 bg-gold/30 hidden sm:block"></div>
                <div className="hidden sm:block">
                  <span className="block text-3xl font-heading text-white">98%</span>
                  <span className="text-xs uppercase tracking-wider text-text-secondary">Satisfação</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Imagem Placeholder (Pois a geração falhou) */}
          <motion.div
            className="hidden lg:block h-screen relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Máscara e Imagem */}
            <div className="absolute inset-y-0 right-0 w-full h-full bg-gradient-to-b from-primary-light to-primary overflow-hidden">
              {/* Placeholder Visual Elegante */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
                <span className="font-heading text-9xl text-white/10 rotate-90 whitespace-nowrap">DR. RODRIGO</span>
              </div>

              {/* Placeholder para Foto Real */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary opacity-90 z-10"></div>

              {/* Linha Dourada Lateral */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-gold to-transparent z-20"></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};
