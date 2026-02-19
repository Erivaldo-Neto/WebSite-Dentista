import { motion } from 'framer-motion';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Formação internacional e atualização constante'
    },
    {
      icon: Heart,
      title: 'Cuidado Genuíno',
      description: 'Cada paciente é único e especial'
    },
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Escuta ativa e tratamento personalizado'
    },
    {
      icon: Sparkles,
      title: 'Resultados Naturais',
      description: 'Estética que respeita sua individualidade'
    }
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-surface-offwhite">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Borda lateral dourada */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-60"></div>

        {/* Forma orgânica abstrata */}
        <svg className="absolute top-0 right-0 w-[40vw] h-[40vw] text-primary opacity-[0.03]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.4C59,41.3,47.1,48.2,35.5,53.2C23.9,58.2,12.6,61.3,0.5,60.4C-11.6,59.5,-24.1,54.6,-34.9,46.9C-45.7,39.2,-54.8,28.7,-61.7,16.7C-68.6,4.7,-73.3,-8.9,-70.3,-21.5C-67.3,-34.1,-56.6,-45.8,-44.6,-53.6C-32.6,-61.4,-19.3,-65.4,-5.4,-56.1L8.5,-46.7Z" transform="translate(100 100)" />
        </svg>

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Coluna Esquerda: Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mr-auto">
              {/* Moldura Decorativa */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 rounded-sm"></div>

              {/* Imagem Placeholder Elegante */}
              <div className="relative h-full w-full overflow-hidden rounded-sm bg-surface-white shadow-2xl group">
                {/* Fundo Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary opacity-90"></div>

                {/* Silhouette / Texto Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 mb-6 rounded-full border border-gold/30 flex items-center justify-center">
                    <span className="font-heading text-4xl text-gold">RS</span>
                  </div>
                  <span className="text-white/20 font-heading text-xl uppercase tracking-widest">Portrait</span>
                </div>

                {/* Efeito Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Sobre o Doutor</h4>

            <h2 className="text-4xl md:text-5xl font-heading font-normal text-primary mb-8 leading-tight">
              A união perfecta entre técnica e <span className="italic text-gold">humanidade</span>.
            </h2>

            <div className="space-y-6 text-text-secondary leading-relaxed font-sans font-light text-lg">
              <p>
                Com mais de uma década de experiência clínica, o Dr. Rodrigo Silva consolidou uma filosofia de trabalho onde cada tratamento é uma obra de arte única.
              </p>

              <p>
                Especialista em reabilitação oral e estética, sua abordagem integra as tecnologias mais avançadas da odontologia digital com um olhar artesanal e detalhista.
              </p>

              <blockquote className="pl-6 border-l-2 border-gold py-2 my-8 text-primary font-heading text-2xl italic">
                "Não tratamos apenas dentes. Restauramos a confiança para sorrir sem reservas."
              </blockquote>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <value.icon className="text-gold" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-primary mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-text-secondary font-light">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
