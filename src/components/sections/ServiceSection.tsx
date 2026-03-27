import { m } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Service } from '../../data/services';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Imagens para o slider de Ortodontia
const antesOrtodontia = '/images/versao-antes-ortodontia.webp';
const depoisOrtodontia = '/images/versao-depois-ortodontia.webp';

// Imagem para Preventiva
const imagemPreventiva = '/images/rodrigo-Odontologia-preventivo.webp';

// Imagem para Dentística Estética
const imagemEstetica = '/images/dentistica-estetica-section.webp';

// Imagem para Endodontia
const imagemEndodontia = '/images/Endodontia-section.webp';

// Imagem para Harmonização Orofacial
const imagemHarmonizacao = '/images/harmonizacao-section.webp';

// Imagem para Implantodontia
const imagemImplantes = '/images/Implante-section.webp';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export const ServiceSection = ({ service, index }: ServiceSectionProps) => {
  const isDark = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion();
  const isOrthodontia = service.id === 'ortodontia';
  const isPreventiva = service.id === 'preventiva';
  const isEstetica = service.id === 'estetica';
  const isEndodontia = service.id === 'endodontia';
  const isHarmonizacao = service.id === 'harmonizacao';
  const isImplantes = service.id === 'implantes';

  // Helper para destacar palavras em dourado
  const highlightText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className={`${isDark ? 'text-gold-bright' : 'text-gold'} font-semibold`}>
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section
      id={service.id}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-[#0A2A43]' : 'bg-white'}`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
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
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

          {/* Coluna de Conteúdo */}
          <m.div
            className={index % 2 !== 0 ? 'lg:order-2' : ''}
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: (index % 2 === 0 ? -30 : 30) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 ${isDark ? 'text-gold-bright text-shadow-sm' : 'text-[#1A3F5C]'}`}>
              {service.title}
            </span>

            <h2 className={`text-3xl md:text-5xl font-heading font-normal mb-8 leading-[1.1] ${isDark ? 'text-white text-shadow-img' : 'text-[#0A2A43]'}`}>
              {highlightText(service.headline)}
            </h2>

            <p className={`text-lg leading-relaxed mb-8 font-normal ${isDark ? 'text-white/90 text-shadow-sm' : 'text-[#2C3E50]'}`}>
              {service.description}
            </p>

            <div className="mb-10">
              <h4 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${isDark ? 'text-white/90' : 'text-[#1A3F5C]'}`}>
                Benefícios Exclusivos
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shadow-sm ${isDark ? 'bg-white text-gold-bright' : 'bg-[#0A2A43] text-gold'}`}>
                      <Check size={10} strokeWidth={4} />
                    </span>
                    <span className={`text-sm font-normal ${isDark ? 'text-white/80' : 'text-[#5A7080]'}`}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant={isDark ? 'primary' : 'primary'}
              className="group"
            >
              Agendar Avaliação
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </m.div>

          {/* Coluna de Imagem */}
          <m.div
            className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <m.div
              className="relative rounded-sm overflow-hidden"
              animate={shouldReduceMotion ? {} : {
                boxShadow: isOrthodontia
                  ? [
                    '0 0 0 1px rgba(201,168,76,0.5), 0 0 30px 4px rgba(201,168,76,0.3), 0 0 60px 8px rgba(201,168,76,0.15)',
                    '0 0 0 3px rgba(201,168,76,0.9), 0 0 60px 12px rgba(201,168,76,0.6), 0 0 120px 16px rgba(201,168,76,0.3)',
                    '0 0 0 1px rgba(201,168,76,0.5), 0 0 30px 4px rgba(201,168,76,0.3), 0 0 60px 8px rgba(201,168,76,0.15)',
                  ]
                  : [
                    '0 0 0 1px rgba(201,168,76,0.2), 0 0 15px rgba(201,168,76,0.1)',
                    '0 0 0 2px rgba(201,168,76,0.4), 0 0 25px rgba(201,168,76,0.2)',
                    '0 0 0 1px rgba(201,168,76,0.2), 0 0 15px rgba(201,168,76,0.1)',
                  ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {isOrthodontia ? (
                <BeforeAfterSlider
                  beforeSrc={antesOrtodontia}
                  afterSrc={depoisOrtodontia}
                  beforeAlt="Antes do tratamento ortodôntico"
                  afterAlt="Depois do tratamento ortodôntico"
                />
              ) : (
                <div className={`relative w-full group ${isPreventiva ? 'aspect-auto' : 'aspect-[4/3]'}`}>
                  <ResponsiveImage
                    baseName={
                      isPreventiva ? "images/rodrigo-Odontologia-preventivo" :
                        isEstetica ? "images/dentistica-estetica-section" :
                          isEndodontia ? "images/Endodontia-section" :
                            isHarmonizacao ? "images/harmonizacao-section" :
                              isImplantes ? "images/Implante-section" :
                                service.images[0].replace('/images/', 'images/').replace('.webp', '')
                    }
                    alt={service.title}
                    className={`w-full transition-transform duration-700 group-hover:scale-105 ${isPreventiva || isEstetica || isEndodontia || isHarmonizacao || isImplantes ? 'h-auto' : 'h-full object-cover'}`}
                  />
                </div>
              )}
            </m.div>

            <div className={`absolute -z-10 top-8 -right-8 w-full h-full border-2 ${isDark ? 'border-white/40' : 'border-gold/80'}`}></div>
          </m.div>
        </div>
      </div>
    </section>
  );
};
