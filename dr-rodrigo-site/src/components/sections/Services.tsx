import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, m } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { services } from '../../data/services'
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider'

const CARD_WIDTH = 300
const CARD_GAP = 24
const STEP = CARD_WIDTH + CARD_GAP
const TOTAL_WIDTH = services.length * STEP
const DURATION_PER_CYCLE_MS = 24000

function highlightHeadline(text: string) {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <span key={i} style={{ color: '#C9A84C', fontStyle: 'italic' }}>
                    {part.slice(2, -2)}
                </span>
            )
        }
        return part
    })
}

// ── PORTAL: Card expandido ─────────────────────────────────────
interface ExpandedCardProps {
    service: typeof services[0]
    isMobile: boolean
    onClose: () => void
}

function ExpandedCard({ service, isMobile, onClose }: ExpandedCardProps) {
    // Bloquear scroll do body enquanto aberto
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    const leftPanel = (
        <div style={{
            width: isMobile ? '100%' : '45%',
            flexShrink: 0,
            background: '#050F1A',
            overflow: 'hidden',
            position: 'relative',
            alignSelf: 'stretch',
            minHeight: isMobile ? '220px' : '360px',
        }}>
            {service.hasBeforeAfter && service.beforeImage && service.afterImage ? (
                <div style={{ position: 'absolute', inset: 0 }}>
                    <BeforeAfterSlider
                        beforeSrc={service.beforeImage}
                        afterSrc={service.afterImage}
                        beforeAlt="Antes do tratamento ortodôntico"
                        afterAlt="Depois do tratamento ortodôntico"
                        fillHeight
                    />
                </div>
            ) : (
                <img
                    src={service.image}
                    alt={service.title}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            )}
        </div>
    )

    const rightPanel = (
        <div style={{
            flex: 1,
            padding: isMobile ? '24px' : '40px 36px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0',
        }}>
            {/* Fechar */}
            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', flexShrink: 0,
                }}
            >
                <X size={16} color="#C9A84C" />
            </button>

            <span style={{
                fontFamily: 'Montserrat, sans-serif', fontWeight: 500,
                fontSize: '10px', letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#C9A84C',
                display: 'block', marginBottom: '10px'
            }}>
                {service.title}
            </span>

            <h3 style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                fontSize: isMobile ? '24px' : 'clamp(22px, 2.5vw, 32px)',
                color: '#FFFFFF', marginBottom: '14px', lineHeight: 1.2
            }}>
                {highlightHeadline(service.headline)}
            </h3>

            <p style={{
                fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
                fontSize: '13px', color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.75, marginBottom: '20px'
            }}>
                {service.description}
            </p>

            <p style={{
                fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
                fontSize: '10px', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
                marginBottom: '12px'
            }}>
                Benefícios Exclusivos
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '1px', fontSize: '13px' }}>✦</span>
                        <span style={{
                            fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
                            fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55
                        }}>
                            {b}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                style={{
                    alignSelf: 'flex-start',
                    width: isMobile ? '100%' : 'auto',
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
                    fontSize: '11px', letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(135deg, #C9A84C, #B8963E)',
                    color: '#0A2A43', border: 'none',
                    borderRadius: '8px', padding: '14px 32px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
                }}
            >
                Agendar Avaliação →
            </button>
        </div>
    )

    return createPortal(
        <>
            {/* Overlay clicável */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed', inset: 0,
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(6px)',
                    zIndex: 9998,
                }}
            />

            {/* Wrapper flex para centralizar sem transform conflitante */}
            <div
                style={{
                    position: 'fixed', inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    padding: isMobile ? '16px' : '32px',
                    pointerEvents: 'none',
                }}
            >
                <m.div
                    initial={{ opacity: 0, scale: 0.88, y: 32 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 16 }}
                    transition={{ duration: 0.45, ease: [0.43, 0.13, 0.23, 0.96] }}
                    onClick={e => e.stopPropagation()}
                    style={{
                        width: '100%',
                        maxWidth: isMobile ? '480px' : '900px',
                        maxHeight: '85vh',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, #0A2A43 0%, #0d3252 100%)',
                        border: '1px solid rgba(201,168,76,0.35)',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'stretch',  // garante que ambos os painéis tenha a mesma altura
                        cursor: 'default',
                        pointerEvents: 'all',
                        position: 'relative',
                    }}
                >
                    {leftPanel}
                    {rightPanel}
                </m.div>
            </div>
        </>,
        document.body
    )
}

// ── SERVICE CARD (thumbnail do carrossel) ──────────────────────
interface ServiceCardProps {
    service: typeof services[0]
    onExpand: () => void
}

function ServiceCard({ service, onExpand }: ServiceCardProps) {
    return (
        <m.div
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onExpand}
            style={{
                width: `${CARD_WIDTH}px`,
                flexShrink: 0,
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                cursor: 'pointer',
            }}
        >
            {/* Thumbnail */}
            <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                {service.hasBeforeAfter && service.afterImage ? (
                    <>
                        <img
                            src={service.afterImage}
                            alt={service.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <div style={{
                            position: 'absolute', bottom: '8px', left: '8px',
                            background: 'rgba(10,42,67,0.85)',
                            border: '1px solid rgba(201,168,76,0.45)',
                            borderRadius: '4px', padding: '3px 8px',
                            fontSize: '10px', fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 500, color: '#C9A84C', letterSpacing: '0.1em'
                        }}>
                            ANTES & DEPOIS
                        </div>
                    </>
                ) : (
                    <img
                        src={service.image}
                        alt={service.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                )}
            </div>

            {/* Texto */}
            <div style={{ padding: '20px' }}>
                <h3 style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
                    fontSize: '14px', color: '#FFFFFF', marginBottom: '8px'
                }}>
                    {service.title}
                </h3>
                <p style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
                    fontSize: '12px', color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                    marginBottom: '14px'
                }}>
                    {service.description}
                </p>
                <span style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 500,
                    fontSize: '11px', color: '#C9A84C', letterSpacing: '0.1em'
                }}>
                    Ver detalhes →
                </span>
            </div>
        </m.div>
    )
}

// ── COMPONENTE PRINCIPAL ───────────────────────────────────────
export function Services() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [mobileIndex, setMobileIndex] = useState(0)

    const xRef = useRef(0)
    const rafRef = useRef<number | null>(null)
    const lastTsRef = useRef<number | null>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const isPausedRef = useRef(false)

    const PX_PER_MS = TOTAL_WIDTH / DURATION_PER_CYCLE_MS

    const tick = useCallback((ts: number) => {
        if (!isPausedRef.current && lastTsRef.current !== null) {
            const delta = ts - lastTsRef.current
            xRef.current -= delta * PX_PER_MS
            if (xRef.current <= -TOTAL_WIDTH) xRef.current += TOTAL_WIDTH
            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(${xRef.current}px)`
            }
        }
        lastTsRef.current = ts
        rafRef.current = requestAnimationFrame(tick)
    }, [PX_PER_MS])

    useEffect(() => {
        rafRef.current = requestAnimationFrame(tick)
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
    }, [tick])

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const handleExpand = (rawIndex: number) => {
        isPausedRef.current = true
        setExpandedIndex(rawIndex % services.length)
    }

    const handleCollapse = () => {
        setExpandedIndex(null)
        isPausedRef.current = false
    }

    const expandedService = expandedIndex !== null ? services[expandedIndex] : null

    return (
        <section
            id="services"
            style={{
                background: `
          radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%),
          linear-gradient(180deg, #0A2A43 0%, #0d3252 50%, #0A2A43 100%)
        `,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Textura de pontos dourados */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.08) 1px, transparent 0)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none',
            }} />

            {/* ── TÍTULO ──────────────────────────────────────────── */}
            <div style={{ textAlign: 'center', padding: '80px 24px 64px', position: 'relative', zIndex: 1 }}>
                <span style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 500,
                    fontSize: '11px', letterSpacing: '0.3em',
                    textTransform: 'uppercase', color: '#C9A84C',
                    display: 'block', marginBottom: '12px'
                }}>
                    Especialidades
                </span>
                <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                    fontSize: 'clamp(32px, 4vw, 52px)', color: '#FFFFFF',
                    marginBottom: '16px', lineHeight: 1.1
                }}>
                    Meus <em style={{ color: '#C9A84C', fontStyle: 'italic', fontWeight: 500 }}>Serviços</em>
                </h2>
                <p style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
                    fontSize: '15px', color: 'rgba(255,255,255,0.7)',
                    maxWidth: '420px', margin: '0 auto', lineHeight: 1.7
                }}>
                    Clique em qualquer serviço para conhecer todos os detalhes do tratamento.
                </p>
            </div>

            {/* ── CARROSSEL DESKTOP ───────────────────────────────── */}
            {!isMobile ? (
                <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden' }}>
                    {/* Fades laterais */}
                    <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0, width: '200px',
                        background: 'linear-gradient(to right, #0A2A43 0%, transparent 100%)',
                        zIndex: 30, pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute', right: 0, top: 0, bottom: 0, width: '200px',
                        background: 'linear-gradient(to left, #0A2A43 0%, transparent 100%)',
                        zIndex: 30, pointerEvents: 'none'
                    }} />

                    {/* Faixa de cards */}
                    <div
                        ref={trackRef}
                        style={{
                            display: 'flex',
                            gap: `${CARD_GAP}px`,
                            alignItems: 'center',
                            height: '100%',
                            width: 'max-content',
                            paddingLeft: '220px',
                            willChange: 'transform',
                        }}
                    >
                        {[...services, ...services, ...services].map((svc, i) => (
                            <ServiceCard key={i} service={svc} onExpand={() => handleExpand(i)} />
                        ))}
                    </div>
                </div>
            ) : (
                /* ── CARROSSEL MOBILE ─────────────────────────────── */
                <div style={{ padding: '0 48px', position: 'relative', zIndex: 1, marginBottom: '8px' }}>
                    <div style={{ position: 'relative' }}>
                        <ServiceCard service={services[mobileIndex]} onExpand={() => handleExpand(mobileIndex)} />
                        <button
                            onClick={() => setMobileIndex(i => (i - 1 + services.length) % services.length)}
                            style={{
                                position: 'absolute', top: '50%', left: '-36px',
                                transform: 'translateY(-50%)',
                                width: '36px', height: '36px', borderRadius: '50%',
                                background: 'rgba(10,42,67,0.9)', border: '1px solid rgba(201,168,76,0.4)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <ChevronLeft size={18} color="#C9A84C" />
                        </button>
                        <button
                            onClick={() => setMobileIndex(i => (i + 1) % services.length)}
                            style={{
                                position: 'absolute', top: '50%', right: '-36px',
                                transform: 'translateY(-50%)',
                                width: '36px', height: '36px', borderRadius: '50%',
                                background: 'rgba(10,42,67,0.9)', border: '1px solid rgba(201,168,76,0.4)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <ChevronRight size={18} color="#C9A84C" />
                        </button>
                    </div>
                </div>
            )}

            {/* ── INDICADORES ─────────────────────────────────────── */}
            <div style={{
                display: 'flex', justifyContent: 'center', gap: '8px',
                marginTop: '32px', position: 'relative', zIndex: 1
            }}>
                {services.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleExpand(i)}
                        style={{
                            width: expandedIndex === i ? '24px' : '8px',
                            height: '8px', borderRadius: '4px',
                            background: expandedIndex === i ? '#C9A84C' : 'rgba(201,168,76,0.3)',
                            transition: 'all 0.3s ease',
                            border: 'none', cursor: 'pointer',
                        }}
                    />
                ))}
            </div>

            {/* ── AVALIAÇÃO GRATUITA ──────────────────────────────── */}
            <m.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                    maxWidth: '640px',
                    margin: '48px auto 80px',
                    padding: isMobile ? '28px 24px' : '36px 40px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    textAlign: 'center',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
                    position: 'relative', zIndex: 1,
                    marginLeft: isMobile ? '24px' : 'auto',
                    marginRight: isMobile ? '24px' : 'auto',
                }}
            >
                <span style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 500,
                    fontSize: '10px', letterSpacing: '0.25em',
                    textTransform: 'uppercase', color: '#C9A84C',
                    display: 'block', marginBottom: '12px'
                }}>
                    Primeiro Passo
                </span>
                <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                    fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#FFFFFF',
                    marginBottom: '16px', lineHeight: 1.3
                }}>
                    Não sabe por onde começar?
                </h3>
                <p style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
                    fontSize: '14px', color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.75, marginBottom: '28px',
                    maxWidth: '440px', margin: '0 auto 28px',
                }}>
                    Agende sua{' '}
                    <strong style={{ color: '#C9A84C', fontWeight: 600 }}>avaliação gratuita</strong>
                    {' '}e descubra qual tratamento é ideal para o seu caso. Sem compromisso, sem pressa.
                </p>
                <button style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
                    fontSize: '11px', letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(135deg, #C9A84C, #B8963E)',
                    color: '#0A2A43', border: 'none',
                    borderRadius: '8px',
                    padding: isMobile ? '14px 24px' : '16px 36px',
                    width: isMobile ? '100%' : 'auto',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
                }}>
                    Agendar Avaliação Gratuita
                </button>
            </m.div>

            {/* ── CARD EXPANDIDO VIA PORTAL ───────────────────────── */}
            <AnimatePresence>
                {expandedService && (
                    <ExpandedCard
                        key={expandedService.id}
                        service={expandedService}
                        isMobile={isMobile}
                        onClose={handleCollapse}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
