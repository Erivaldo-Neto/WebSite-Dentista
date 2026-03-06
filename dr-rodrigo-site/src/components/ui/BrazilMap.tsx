import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { m } from 'framer-motion'

const GEO_URL = '/maps/brazil-states.json'

// Estados que têm consultório
const ACTIVE_STATES = ['AM', 'PE', 'SP']

// Coordenadas dos marcadores (uma por cidade)
const MARKERS = [
    { name: 'Manaus', coordinates: [-60.02, -3.1] as [number, number], stateCode: 'AM' },
    { name: 'Recife', coordinates: [-35.0, -8.1] as [number, number], stateCode: 'PE' },
    { name: 'São Paulo', coordinates: [-46.63, -23.55] as [number, number], stateCode: 'SP' },
]

interface BrazilMapProps {
    hoveredState: string | null  // stateCode vindo do card em hover
}

export function BrazilMap({ hoveredState }: BrazilMapProps) {
    return (
        <div className="relative w-full h-full">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 900,        // aumentado de 750
                    center: [-52, -15] // ajustado de [-52, -14]
                }}
                style={{ width: '100%', height: '100%' }}
            >
                <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const stateCode = geo.properties.sigla  // campo do GeoJSON
                            const isActive = ACTIVE_STATES.includes(stateCode)
                            const isHovered = hoveredState === stateCode

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: isActive ? '#C9A84C' : '#1A3F5C',
                                            stroke: '#0A2A43',
                                            strokeWidth: 0.8,
                                            outline: 'none',
                                            filter: isActive
                                                ? isHovered
                                                    ? 'drop-shadow(0 0 16px rgba(212,175,55,0.95)) brightness(1.15)'
                                                    : 'drop-shadow(0 0 8px rgba(201,168,76,0.55))'
                                                : 'none',
                                            transition: 'all 0.4s ease',
                                            opacity: hoveredState && !isHovered && isActive ? 0.7 : 1,
                                        },
                                        hover: {
                                            fill: isActive ? '#D4AF37' : '#1A3F5C',
                                            stroke: '#0A2A43',
                                            strokeWidth: 0.8,
                                            outline: 'none',
                                            filter: isActive
                                                ? 'drop-shadow(0 0 16px rgba(212,175,55,0.9))'
                                                : 'none',
                                        },
                                        pressed: {
                                            fill: '#C9A84C',
                                            outline: 'none',
                                        }
                                    }}
                                />
                            )
                        })
                    }
                </Geographies>

                {/* Marcadores dourados nas cidades */}
                {MARKERS.map(({ name, coordinates, stateCode }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <m.circle
                            r={5}
                            fill="#C9A84C"
                            stroke="#FFFFFF"
                            strokeWidth={1.5}
                            animate={{
                                r: hoveredState === stateCode ? [5, 9, 5] : 5,
                                opacity: hoveredState && hoveredState !== stateCode ? 0.4 : 1,
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: hoveredState === stateCode ? Infinity : 0,
                                ease: 'easeInOut'
                            }}
                        />
                        {/* Anel de pulso externo */}
                        {hoveredState === stateCode && (
                            <m.circle
                                r={5}
                                fill="none"
                                stroke="#C9A84C"
                                strokeWidth={1}
                                initial={{ r: 5, opacity: 0.8 }}
                                animate={{ r: 18, opacity: 0 }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                            />
                        )}
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    )
}
