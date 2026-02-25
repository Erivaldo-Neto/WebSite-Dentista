import { m } from 'framer-motion';
import { Calendar, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const FinalCTA = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0D2D45] to-primary-dark"></div>

        {/* Quadrado Rotacionado Central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rotate-45 transform"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rotate-45 transform"></div>

        {/* Noise */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <m.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block text-gold-bright text-xs font-semibold tracking-[0.3em] uppercase mb-6 text-shadow-sm">
            Não adie seu melhor sorriso
          </span>

          <h2 className="text-4xl md:text-6xl font-heading font-normal text-white mb-8 leading-tight text-shadow-img">
            Excelência ao seu <span className="italic font-normal text-gold-bright">alcance</span>.
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-normal leading-relaxed text-shadow-sm">
            Agende uma avaliação personalizada e descubra o protocolo ideal para a sua saúde e estética bucal.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <Button
              variant="primary"
              className="w-full md:w-auto min-w-[240px]"
              onClick={() => { }}
            >
              Agendar Consulta
              <ArrowRight size={18} />
            </Button>

          </div>

          {/* Cards de Contato Rápido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors duration-300 group">
              <div className="w-12 h-12 mb-6 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <MapPin size={24} className="text-gold" strokeWidth={2} />
              </div>
              <h4 className="text-white text-lg font-sans font-semibold mb-2">Jardins - SP</h4>
              <p className="text-white/75 text-sm font-normal">Rua Oscar Freire, 1234<br />Ed. Premium, Sala 501</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors duration-300 group">
              <div className="w-12 h-12 mb-6 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Calendar size={24} className="text-gold" strokeWidth={2} />
              </div>
              <h4 className="text-white text-lg font-sans font-semibold mb-2">Horários</h4>
              <p className="text-white/75 text-sm font-normal">Seg a Sex: 08h - 20h<br />Sábado: 09h - 14h</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors duration-300 group">
              <div className="w-12 h-12 mb-6 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Mail size={24} className="text-gold" strokeWidth={2} />
              </div>
              <h4 className="text-white text-lg font-sans font-semibold mb-2">Contato Online</h4>
              <p className="text-white/75 text-sm font-normal">contato@drrodrigo.com.br<br />Resposta em até 24h</p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};
