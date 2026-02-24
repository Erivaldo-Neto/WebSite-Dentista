import { m } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { locations } from '../../data/locations';

export const Locations = () => {
  return (
    <section id="locations" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-blue opacity-[0.03]"></div>
      </div>

      <div className="container-custom relative z-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Onde Estamos
          </span>

          <h2 className="text-3xl md:text-5xl font-heading font-normal text-[#0A2A43] mb-6 leading-tight">
            Localizações <span className="italic text-gold">estratégicas</span>
          </h2>

          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto font-normal">
            Consultórios de fácil acesso, projetados para o seu máximo conforto.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <m.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="relative p-8 rounded-xl transition-all duration-300 bg-white border border-[#0A2A43]/5 hover:shadow-xl hover:scale-[1.02] hover:border-gold/30 h-full flex flex-col group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#0A2A43] text-gold shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-sans font-semibold text-[#0A2A43] mb-1">
                      {location.city}
                    </h3>
                    <p className="text-sm text-gold uppercase tracking-[0.14em] font-semibold">
                      {location.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-[#2C3E50] mb-6 font-normal leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 mt-auto">

                  <div className="flex items-center gap-3 text-[#5A7080]">
                    <Clock size={16} className="text-gold" />
                    <span className="text-xs font-normal">Seg-Sex: 8h às 18h</span>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};
