import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import { locations } from '../../data/locations';

export const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <section id="locations" className="relative py-24 lg:py-32 overflow-hidden bg-surface-offwhite">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-blue opacity-[0.03]"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Onde Estamos
          </span>

          <h2 className="text-3xl md:text-5xl font-heading font-light text-primary mb-6 leading-tight">
            Localizações <span className="italic text-gold">estratégicas</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light">
            Consultórios de fácil acesso, projetados para o seu máximo conforto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-4 rounded-xl border border-primary/5 bg-white/50 backdrop-blur-sm shadow-inner">
              <svg
                className="w-full h-[500px]"
                viewBox="0 0 400 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0A2A43" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.05" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect width="400" height="500" fill="url(#mapGradient)" rx="20" />

                <g opacity="0.1">
                  <path d="M50,100 Q200,50 350,100" stroke="#0A2A43" strokeWidth="1" fill="none" />
                  <path d="M50,200 Q200,150 350,200" stroke="#0A2A43" strokeWidth="1" fill="none" />
                  <path d="M50,300 Q200,250 350,300" stroke="#0A2A43" strokeWidth="1" fill="none" />
                  <path d="M50,400 Q200,350 350,400" stroke="#0A2A43" strokeWidth="1" fill="none" />
                </g>

                {locations.map((location, index) => {
                  const x = (location.coordinates.x / 100) * 400;
                  const y = (location.coordinates.y / 100) * 500;
                  const isSelected = selectedLocation === location.id;

                  return (
                    <g key={location.id}>
                      {index > 0 && (
                        <line
                          x1={(locations[index - 1].coordinates.x / 100) * 400}
                          y1={(locations[index - 1].coordinates.y / 100) * 500}
                          x2={x}
                          y2={y}
                          stroke="#C9A84C"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          opacity="0.4"
                        />
                      )}

                      <motion.circle
                        cx={x}
                        cy={y}
                        r={isSelected ? "20" : "15"}
                        fill={isSelected ? "#C9A84C" : "#0A2A43"}
                        filter="url(#glow)"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: isSelected ? 1.2 : 1,
                          opacity: isSelected ? 1 : 0.8,
                          fill: isSelected ? "#C9A84C" : "#0A2A43"
                        }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedLocation(
                          selectedLocation === location.id ? null : location.id
                        )}
                        onMouseEnter={() => setSelectedLocation(location.id)}
                      />

                      <motion.circle
                        cx={x}
                        cy={y}
                        r={isSelected ? "25" : "20"}
                        fill="none"
                        stroke={isSelected ? "#C9A84C" : "#0A2A43"}
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: isSelected ? 1.3 : 1,
                          stroke: isSelected ? "#C9A84C" : "#0A2A43"
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {isSelected && (
                        <motion.text
                          x={x}
                          y={y - 35}
                          textAnchor="middle"
                          fill="#0A2A43"
                          fontSize="14"
                          fontWeight="bold"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {location.city}
                        </motion.text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg border border-primary/5">
              <p className="text-xs text-primary/60 text-center font-medium tracking-wide">
                Selecione uma unidade no mapa para ver detalhes
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className={`relative p-8 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group ${selectedLocation === location.id
                      ? 'bg-white shadow-xl scale-[1.02] border border-gold/30'
                      : 'bg-white/50 border border-transparent hover:bg-white hover:shadow-lg'
                    }`}
                  onMouseEnter={() => setSelectedLocation(location.id)}
                  onMouseLeave={() => setSelectedLocation(null)}
                >
                  {selectedLocation === location.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold"></div>
                  )}

                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${selectedLocation === location.id ? 'bg-primary text-white' : 'bg-primary/5 text-primary'
                      }`}>
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                        {location.city}
                      </h3>
                      <p className="text-sm text-gold uppercase tracking-widest font-medium mb-4">
                        {location.neighborhood}
                      </p>

                      <p className="text-text-secondary mb-4 font-light leading-relaxed">
                        {location.address}
                      </p>

                      <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
                        <a
                          href={`tel:${location.phone}`}
                          className="flex items-center gap-3 text-primary hover:text-gold transition-colors group/link"
                        >
                          <Phone size={16} className="text-gold" />
                          <span className="text-sm font-medium group-hover/link:underline decoration-gold underline-offset-4">{location.phone}</span>
                        </a>
                        <div className="flex items-center gap-3 text-text-secondary/80">
                          <Clock size={16} className="text-gold/70" />
                          <span className="text-xs">Seg-Sex: 8h às 18h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
