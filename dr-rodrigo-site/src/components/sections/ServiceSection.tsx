import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Service } from '../../data/services';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export const ServiceSection = ({ service, index }: ServiceSectionProps) => {
  const isDark = index % 2 === 0; // Alternando temas: Par=Dark (0, 2..), Ímpar=Light

  return (
    <section
      id={service.id}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-primary text-white' : 'bg-surface-offwhite text-primary'
        }`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary-light rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-blue opacity-[0.03]"></div>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[80px]"></div>
          </>
        )}
      </div>

      <div className="container-custom relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          }`}>

          {/* Coluna de Conteúdo */}
          <motion.div
            className={index % 2 !== 0 ? 'lg:order-2' : ''}
            initial={{ opacity: 0, x: isDark ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-6 ${isDark ? 'text-gold' : 'text-primary-light'
              }`}>
              {service.title}
            </span>

            <h2 className={`text-3xl md:text-5xl font-heading font-light mb-8 leading-[1.1] ${isDark ? 'text-white' : 'text-primary'
              }`}>
              {service.headline}
            </h2>

            <p className={`text-lg leading-relaxed mb-8 font-light ${isDark ? 'text-white/80' : 'text-text-secondary'
              }`}>
              {service.description}
            </p>

            <div className="mb-10">
              <h4 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${isDark ? 'text-white/90' : 'text-primary'
                }`}>
                Benefícios Exclusivos
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center border ${isDark ? 'border-gold text-gold' : 'border-primary text-primary'
                      }`}>
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <span className={`text-sm ${isDark ? 'text-white/70' : 'text-text-secondary'
                      }`}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant={isDark ? 'gold' : 'primary'}
              size="md"
              className="group"
            >
              Agendar Avaliação
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Coluna de Imagem */}
          <motion.div
            className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Aspect Ratio Container */}
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-2xl">
              {/* Fundo Placeholder baseado no tema */}
              <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-primary-light to-primary' : 'from-surface-white to-surface-offwhite'
                }`}></div>

              {/* Ícone Central Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
                <span className="text-8xl filter blur-sm">
                  {index === 0 ? '🦷' : index === 1 ? '🛡️' : index === 2 ? '✨' : '🔬'}
                </span>
              </div>

              {/* Camada de Brilho */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Badge Flutuante */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-white text-xs uppercase tracking-widest block mb-1">Tratamento Premium</span>
                <span className="text-white font-heading text-xl">{service.title}</span>
              </div>
            </div>

            {/* Elemento Decorativo Traseiro */}
            <div className={`absolute -z-10 top-8 -right-8 w-full h-full border ${isDark ? 'border-white/10' : 'border-primary/10'
              }`}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
