import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Office = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Placeholders elegantes para quando não há imagens reais
  const slides = [
    {
      id: 1,
      title: "Recepção",
      color: "from-[#0A2A43] to-[#051520]",
      icon: "🏛️"
    },
    {
      id: 2,
      title: "Sala de Atendimento",
      color: "from-[#0D2D45] to-[#0A2A43]",
      icon: "💺"
    },
    {
      id: 3,
      title: "Esterilização",
      color: "from-[#051520] to-[#0D2D45]",
      icon: "✨"
    },
    {
      id: 4,
      title: "Área de Espera",
      color: "from-[#0A2A43] to-[#051520]",
      icon: "🛋️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="office" className="relative bg-primary py-0">
      {/* Header Fixo sobreposto */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-20 pb-12 text-center pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="block text-gold text-xs tracking-[0.3em] uppercase mb-4"
        >
          Nossa Estrutura
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-4xl md:text-5xl font-heading font-light"
        >
          O Consultório
        </motion.h2>
      </div>

      {/* Carrossel */}
      <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            className={`absolute inset-0 bg-gradient-to-br ${slides[activeIndex].color}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Elemento Placeholder Visual */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-9xl filter blur-sm">{slides[activeIndex].icon}</span>
            </div>

            {/* Vinheta */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80 opacity-60" />

            {/* Título da Imagem Atual */}
            <div className="absolute bottom-32 left-0 right-0 text-center z-10 px-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-2xl md:text-3xl font-heading text-white/90 italic"
              >
                {slides[activeIndex].title}
              </motion.h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de Progresso */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          {slides.map((_, i) => (
            <div
              key={i}
              className="relative h-[2px] cursor-pointer transition-all duration-500 overflow-hidden bg-white/20"
              style={{ width: activeIndex === i ? '3rem' : '1rem' }}
              onClick={() => setActiveIndex(i)}
            >
              <div
                className={`absolute inset-0 bg-gold transition-all duration-500 ${activeIndex === i ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
