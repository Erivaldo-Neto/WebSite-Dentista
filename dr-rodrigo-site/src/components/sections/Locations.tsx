import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { BrazilMap } from '../ui/BrazilMap'
import { locations } from '../../data/locations'

export const Locations = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeId, setActiveId] = useState<string | null>(null)

  const currentId = hoveredId || activeId
  const currentLocation = locations.find(l => l.id === currentId)
  const hoveredState = currentLocation?.stateCode || null

  return (
    <section id="locations" className="bg-[#F8F9FA] py-20">

      {/* Título */}
      <div className="text-center mb-16 px-6">
        <span className="block font-sans text-[11px] uppercase tracking-[0.3em] text-gold-bright mb-4">
          Onde Estamos
        </span>
        <h2 className="text-[#0A2A43] font-heading font-normal leading-tight text-[32px] md:text-[52px] mb-4">
          Localizações <em className="text-gold-bright not-italic italic">estratégicas</em>
        </h2>
        <p className="text-lg text-[#0A2A43]/80 max-w-2xl mx-auto font-normal">
          Consultórios de fácil acesso, projetados para o seu máximo conforto.
        </p>
      </div>

      {/* Layout: mapa esquerda + cards direita */}
      <div className="container-custom flex flex-col lg:flex-row gap-12 items-center">

        {/* MAPA — lado esquerdo */}
        <m.div
          className="w-full lg:w-1/2 h-[360px] lg:h-[620px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Container do mapa transparente */}
          <div
            className="w-full h-full relative"
            style={{
              background: 'transparent'
            }}
          >
            <BrazilMap hoveredState={hoveredState} />

            {/* Label flutuante com o estado ativo */}
            <AnimatePresence>
              {currentLocation && (
                <m.div
                  key={currentLocation.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-6 left-6 right-6"
                  style={{
                    background: 'rgba(10,42,67,0.9)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '8px',
                    padding: '12px 16px'
                  }}
                >
                  <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {currentLocation.city} — {currentLocation.neighborhood}
                  </p>
                  <p style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 300, marginTop: '4px' }}>
                    {currentLocation.address}
                  </p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </m.div>

        {/* CARDS — lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {locations.map((location, i) => {
            const isActive = currentId === location.id
            return (
              <m.div
                key={location.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                onMouseEnter={() => setHoveredId(location.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveId(isActive ? null : location.id)}
                className="cursor-pointer rounded-xl p-6 transition-all duration-400"
                style={{
                  background: isActive ? '#0A2A43' : '#FFFFFF',
                  border: isActive
                    ? '1px solid rgba(201,168,76,0.5)'
                    : '1px solid rgba(10,42,67,0.1)',
                  boxShadow: isActive
                    ? '0 8px 32px rgba(10,42,67,0.2), 0 0 0 1px rgba(201,168,76,0.2)'
                    : '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: isActive ? 'rgba(201,168,76,0.15)' : 'rgba(10,42,67,0.06)' }}
                  >
                    <MapPin size={18} color="#C9A84C" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        fontSize: '18px',
                        color: isActive ? '#FFFFFF' : '#0A2A43'
                      }}>
                        {location.city}
                      </h3>
                      <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-bright">
                        {location.neighborhood}
                      </span>
                    </div>
                    <p style={{
                      fontFamily: 'Montserrat',
                      fontWeight: 300,
                      fontSize: '14px',
                      color: isActive ? 'rgba(255,255,255,0.8)' : '#0A2A43',
                      marginTop: '6px'
                    }}>
                      {location.address}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Clock size={13} color="#C9A84C" />
                      <span style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 300,
                        fontSize: '13px',
                        color: isActive ? 'rgba(255,255,255,0.7)' : '#0A2A43'
                      }}>
                        {location.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </m.div>
            )
          })}
        </div>

      </div>
    </section>

  )
}
