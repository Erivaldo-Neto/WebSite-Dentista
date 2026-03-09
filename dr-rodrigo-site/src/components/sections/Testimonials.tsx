import { m } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden bg-[#0A2A43]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot Grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        {/* Linha Dourada Superior */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>

        {/* Noise */}
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container-custom relative z-10">
        <m.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-bright text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-shadow-sm">
            Quem já transformou o sorriso
          </span>

          <h2 className="text-3xl md:text-5xl font-heading font-normal text-white mb-6 leading-tight text-shadow-img">
            O que dizem sobre <span className="italic text-gold-bright">mim</span>
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto font-normal text-shadow-sm">
            A satisfação de cada paciente é minha maior conquista e inspiração diária.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.15 }}
            >
              <div className="h-full p-8 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm hover:border-gold/20 transition-all duration-500 group flex flex-col">
                <div className="mb-6">
                  <Quote className="text-gold opacity-50" size={32} strokeWidth={1.5} />
                </div>

                <blockquote className="flex-grow mb-8">
                  <p className="text-white/90 leading-relaxed font-normal text-lg">
                    "{testimonial.text}"
                  </p>
                </blockquote>

                <div className="border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-[#B8963E] flex items-center justify-center text-[#0A2A43] font-bold font-sans text-xs">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-white text-lg">
                        {testimonial.name}
                      </div>
                      {testimonial.treatment && (
                        <div className="text-xs text-gold-bright uppercase tracking-[0.1em] font-semibold mt-1">
                          {testimonial.treatment}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex gap-2 justify-center items-center my-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200,
                  damping: 12
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Star
                  size={36}
                  fill="#C9A84C"
                  stroke="#C9A84C"
                  strokeWidth={1}
                />
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
