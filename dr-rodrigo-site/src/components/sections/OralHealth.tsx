import { m } from 'framer-motion';
import { Heart, Sun, Shield } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const benefits = [
  {
    icon: Heart,
    title: 'Saúde que vai além da boca',
    color: '#C9A84C',
    description: 'Problemas bucais não tratados estão diretamente ligados a doenças cardíacas, diabetes e inflamações sistêmicas. Cuidar da sua boca é proteger seu corpo inteiro.',
    highlight: 'Sua saúde começa aqui'
  },
  {
    icon: Sun,
    title: 'Confiança que transforma',
    color: '#C9A84C',
    description: 'Um sorriso saudável muda a forma como você se apresenta, como você se sente e como as pessoas te percebem. A autoestima que um belo sorriso entrega não tem preço.',
    highlight: 'Sorria sem esconder'
  },
  {
    icon: Shield,
    title: 'Prevenir é muito mais simples',
    color: '#C9A84C',
    description: 'Tratar cedo é sempre mais rápido, mais confortável e menos custoso. Uma consulta de prevenção hoje pode evitar tratamentos complexos amanhã.',
    highlight: 'Cuide antes de precisar'
  }
];

export const OralHealth = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="oral-health-section py-24 lg:py-32">
      <div className="container-custom">
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="block font-sans font-medium text-[11px] uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Uma mensagem minha para você
          </span>

          <h2 className="font-display font-semibold text-[#0A2A43] leading-tight" style={{
            fontSize: 'clamp(26px, 4vw, 46px)',
            marginBottom: '24px'
          }}>
            Cuidar da sua saúde bucal <br className="hidden md:block" />
            <span className="block mt-2">
              é <em className="text-[#C9A84C] not-italic italic">cuidar de você</em>
            </span>
          </h2>

          <div style={{
            width: '60px', height: '2px',
            background: 'linear-gradient(90deg, #C9A84C, #D4AF37)',
            margin: '0 auto 28px',
            borderRadius: '1px'
          }} />

          <div className="space-y-4">
            <p className="font-sans font-light text-[#0A2A43]" style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.9
            }}>
              Sei que cuidar da boca muitas vezes é a última coisa que entra na lista de prioridades.
              A rotina é corrida, o medo existe, e parece que enquanto não dói, não precisa de atenção.
            </p>
            <p className="font-sans font-normal text-[#0A2A43]" style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.9
            }}>
              Mas o que aprendi ao longo da minha trajetória é que <strong className="text-[#C9A84C] font-semibold"> a boca é o espelho da sua saúde inteira. </strong>
              Ela afeta seu coração, sua autoestima, sua qualidade de sono, sua confiança no trabalho
              e a forma como você se relaciona com o mundo.
            </p>
            <p className="font-sans font-light text-[#0A2A43]" style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.9
            }}>
              Não estou aqui apenas para tratar dentes. Estou aqui para te ajudar a <strong className="text-[#C9A84C] font-semibold"> viver melhor — com mais saúde, mais confiança e mais leveza. </strong>
              E isso começa com um único passo: uma consulta.
            </p>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, i) => (
            <m.div
              key={i}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glow-effect rounded-[20px] overflow-visible"
              style={{ 
                '--glow-thickness': '4px', 
                '--glow-inset': '-3px' 
              } as React.CSSProperties}
            >
              <div className="glow-effect-inner bg-[#FFFFFF] border-t-4 border-[#C9A84C] p-8 flex flex-col h-full">
                <div className="benefit-icon-wrapper icon-scale">
                  <benefit.icon size={28} />
                </div>
                <h3 className="font-sans font-semibold text-[#0A2A43] text-xl mb-4">
                  {benefit.title}
                </h3>
                <p className="font-sans font-light text-[#0A2A43]/80 text-base leading-relaxed mb-6 flex-grow">
                  {benefit.description}
                </p>
                <div className="journey-highlight mt-auto">
                  {benefit.highlight}
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* CTA */}
        <m.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans font-light text-[#0A2A43] text-lg mb-7">
            Pronto para dar o primeiro passo?
          </p>
          <button 
            className="btn-primary" 
            onClick={() => window.open('https://wa.me/5592991000000', '_blank')}
          >
            <div className="wrapper">
              <span>Agendar Minha Avaliação Gratuita</span>
              {/* Círculos de brilho do sistema de botões original */}
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`circle circle-${i + 1}`}></div>
              ))}
            </div>
          </button>
        </m.div>
      </div>
    </section>
  );
};
