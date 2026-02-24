import { m } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export const Testimonials = () => {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-bright text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-shadow-sm">
            Depoimentos
          </span>

          <h2 className="text-3xl md:text-5xl font-heading font-normal text-white mb-6 leading-tight text-shadow-img">
            Histórias de <span className="italic text-gold-bright">transformação</span>
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto font-normal text-shadow-sm">
            A satisfação de cada paciente é nossa maior conquista e inspiração diária.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
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

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="text-5xl font-heading font-medium text-white mb-2 text-shadow-img">4.9</div>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white/80 text-sm font-semibold uppercase tracking-[0.18em]">
            Baseado em 287 avaliações reais
          </p>
        </m.div>
      </div>
    </section>
  );
};
