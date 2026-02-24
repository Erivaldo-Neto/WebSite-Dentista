import { m } from 'framer-motion';
import { Award, Heart, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Formação internacional e atualização constante nas mais avançadas técnicas da odontologia mundial.'
    },
    {
      icon: Heart,
      title: 'Cuidado Genuíno',
      description: 'Atendimento que prioriza seu conforto e bem-estar, com protocolos exclusivos para controle de ansiedade.'
    },
    {
      icon: Sparkles,
      title: 'Resultados Naturais',
      description: 'Filosofia biomimética que busca a integração perfeita entre estética e funcionalidade.'
    },
    {
      icon: Shield,
      title: 'Tecnologia de Ponta',
      description: 'Consultório 100% digital, scanners intraorais e planejamento 3D para máxima previsibilidade.'
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold-bright text-xs font-semibold tracking-[0.3em] uppercase mb-6 text-shadow-sm">
              Diferenciais Exclusivos
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white mb-8 leading-tight text-shadow-img">
              Por que nos <span className="italic text-gold-bright">escolher</span>?
            </h2>

            <p className="text-white/90 text-lg font-normal leading-relaxed mb-12 text-shadow-sm">
              Não entregamos apenas tratamentos odontológicos. Entregamos uma experiência de cuidado integral, onde cada detalhe é pensado para sua satisfação plena.
            </p>

            <div className="hidden lg:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-heading font-medium text-gold-bright">12+</div>
                <div className="text-sm text-white/80 uppercase tracking-[0.14em] font-semibold leading-tight">
                  Anos de<br />Experiência
                </div>
              </div>
              <div className="w-full h-[1px] bg-white/10 my-4"></div>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-heading font-medium text-gold-bright">5k+</div>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-sm bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight size={20} className="text-gold -rotate-45" />
                </div>

                <div className="w-12 h-12 mb-6 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <reason.icon size={24} className="text-gold" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-sans font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-white/80 font-normal text-sm leading-relaxed">
                  {reason.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
