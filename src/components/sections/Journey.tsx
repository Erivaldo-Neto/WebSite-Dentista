import { m } from 'framer-motion';
import { Phone, ClipboardList, Microscope, Stethoscope, Smile } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Primeiro Contato',
    description: 'Você entra em contato pelo WhatsApp ou formulário. Respondemos com agilidade e carinho — sem burocracia, sem espera.',
    highlight: 'Agendamento simples e rápido'
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Avaliação Gratuita',
    description: 'Na primeira consulta, ouço tudo o que você sente, o que te incomoda e o que você deseja. Nenhum detalhe é pequeno demais.',
    highlight: '100% gratuita e sem compromisso'
  },
  {
    number: '03',
    icon: Microscope,
    title: 'Diagnóstico Preciso',
    description: 'Com tecnologia digital e um olhar clínico criterioso, mapeio sua saúde bucal por completo e identifico o melhor caminho para o seu caso.',
    highlight: 'Planejamento 3D individualizado'
  },
  {
    number: '04',
    icon: Stethoscope,
    title: 'Tratamento Personalizado',
    description: 'Cada procedimento é realizado com técnica refinada, materiais premium e toda a atenção que você merece. Seu conforto é prioridade.',
    highlight: 'Você acompanha cada etapa'
  },
  {
    number: '05',
    icon: Smile,
    title: 'Resultado e Acompanhamento',
    description: 'Seu sorriso transformado é apenas o começo. Continuo ao seu lado com acompanhamento próximo para garantir que o resultado dure.',
    highlight: 'Cuidado que não termina na cadeira'
  }
];

export const Journey = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="journey-section py-24 lg:py-32">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-16 px-6">
          <span className="block font-sans font-medium text-[11px] uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Do primeiro contato ao resultado
          </span>
          <h2 className="font-display font-semibold text-[#0A2A43] leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '16px' }}>
            Minha <em className="text-[#C9A84C] not-italic italic">Jornada</em> de Atendimento
          </h2>
          <p className="font-sans font-light text-[#0A2A43] max-w-[520px] mx-auto leading-relaxed" style={{ fontSize: '16px' }}>
            Cada detalhe foi pensado para que você se sinta seguro e bem cuidado
            desde o primeiro momento até o resultado final.
          </p>
        </div>

        {/* Etapas */}
        <div className="relative">
          {/* Linha conectora Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[1px] bg-[#C9A84C]/30 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <m.div
                key={step.number}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center lg:items-start glow-effect rounded-2xl p-4 overflow-visible"
                style={{ 
                  '--glow-thickness': '3px', 
                  '--glow-inset': '-2px' 
                } as React.CSSProperties}
              >
                <div className="glow-effect-inner bg-[#FFFFFF] p-4 flex flex-col items-center lg:items-start">
                  {/* Número e Ícone */}
                  <div className="flex flex-col items-center lg:items-start mb-6 w-full">
                    <div className="w-14 h-14 rounded-full bg-[#0A2A43] flex items-center justify-center text-[#C9A84C] font-bold text-xl mb-4 border border-[#C9A84C]/50 shadow-lg icon-scale">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] mb-4 icon-scale">
                      <step.icon size={24} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="text-center lg:text-left flex flex-col w-full h-full">
                    <h3 className="font-sans font-semibold text-[#0A2A43] text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans font-light text-[#0A2A43]/80 text-sm leading-relaxed mb-4 flex-grow">
                      {step.description}
                    </p>
                    <div className="journey-highlight text-left">
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
