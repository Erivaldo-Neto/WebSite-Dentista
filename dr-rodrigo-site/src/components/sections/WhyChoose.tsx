import { m } from 'framer-motion';
import { Award, Heart, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const WhyChoose = () => {
  const shouldReduceMotion = useReducedMotion();
  const reasons = [
    {
      icon: Award,
      title: "Formação que vai além",
      description: "Busco constantemente o que há de mais avançado na odontologia mundial. Não por status — mas porque você merece o melhor que existe."
    },
    {
      icon: Heart,
      title: "Você não é mais um paciente",
      description: "Atendo com calma, escuta e atenção genuína. Sei que muitos chegam com medo ou insegurança — e isso faz parte do meu cuidado."
    },
    {
      icon: Sparkles,
      title: "Resultado que parece natural",
      description: "Não entrego apenas um procedimento. Entrego harmonia entre estética e funcionalidade — um resultado que parece que sempre foi seu."
    },
    {
      icon: Shield,
      title: "Tecnologia a seu favor",
      description: "Consultório totalmente digital, com scanner intraoral e planejamento 3D. Para que você veja o resultado antes mesmo de começar."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A2A43] shadow-2xl z-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      </div>

      <div className="container-custom relative z-10 transition-colors">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Header Column */}
          <m.div
            className="lg:w-1/3"
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <span className="inline-block text-gold-bright text-xs font-semibold tracking-[0.3em] uppercase mb-6 text-shadow-sm">
              Meus Diferenciais
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white mb-8 leading-tight text-shadow-img">
              O que me <span className="italic text-[#C9A84C]">diferencia</span>
            </h2>

            <p className="text-[#FFFFFF] text-lg font-light leading-[1.8] mb-12 text-shadow-sm font-sans">
              Sou dentista porque acredito que cuidar de um sorriso é cuidar de uma pessoa inteira. Cada detalhe do meu consultório foi pensado para que você se sinta seguro, ouvido e bem cuidado.
            </p>

            <div className="hidden lg:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-sans font-bold text-gold-bright">12+</div>
                <div className="text-sm text-white/80 uppercase tracking-[0.14em] font-semibold leading-tight">
                  Anos de<br />Experiência
                </div>
              </div>
              <div className="w-full h-[1px] bg-white/10 my-4"></div>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-sans font-bold text-gold-bright">5k+</div>
                <div className="text-sm text-white/80 uppercase tracking-[0.14em] font-semibold leading-tight">
                  Sorrisos<br />Transformados
                </div>
              </div>
            </div>
          </m.div>

          {/* Grid Column */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <m.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="group relative glow-effect rounded-2xl overflow-visible"
                style={{ 
                  '--glow-thickness': '4.5px', 
                  '--glow-inset': '-3.5px' 
                } as React.CSSProperties}
              >
                <div className="glow-effect-inner bg-[#0A2A43] border border-white/10 p-8 h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight size={20} className="text-gold -rotate-45" />
                  </div>

                  <div className="w-12 h-12 mb-6 rounded-full bg-white flex items-center justify-center shadow-lg icon-scale">
                    <reason.icon size={24} className="text-gold" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-sans font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-white/80 font-normal text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
