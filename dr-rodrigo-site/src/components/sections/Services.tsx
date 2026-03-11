import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, m } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { services } from '../../data/services'
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider'
import { Button } from '../ui/Button'
import { getLenis } from '../../lib/lenis'

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
        getLenis()?.stop()
        document.body.style.overflow = 'hidden'
        return () => {
            getLenis()?.start()
            document.body.style.overflow = ''
        }
    }, [])

    const leftPanel = (
        <div style={{
            width: isMobile ? '100%' : '45%',
            aspectRatio: isMobile ? '4/5' : 'auto',
            flexShrink: 0,
            background: '#050F1A',
            overflow: 'hidden',
            position: 'relative',
            alignSelf: 'stretch',
        }}>
            {service.hasBeforeAfter && service.beforeImage && service.afterImage ? (
                <div style={{ position: 'absolute', inset: 0 }}>
                    <BeforeAfterSlider
                        beforeSrc={service.beforeImage}
                        afterSrc={service.afterImage}
                        beforeAlt="Antes do tratamento"
                        afterAlt="Depois do tratamento"
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
                        objectPosition: service.id === 'harmonizacao' && !isMobile ? 'center bottom' : 'center top',
                        display: 'block',
                    }}
                />
            )}
        </div>
    )

    const rightPanel = (
        <div style={{
            flex: 1,
            padding: isMobile ? '24px 20px' : '40px 36px',
            WebkitOverflowScrolling: 'touch',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isMobile ? 'flex-start' : 'center',
            gap: '0',
            position: 'relative',
        }}>
            {/* Fechar - Agora fixo em relação ao viewport para estar sempre acessível */}
            <button
                onClick={onClose}
                style={{
                    position: 'fixed', top: isMobile ? '28px' : '32px', right: isMobile ? '28px' : '32px', zIndex: 1000,
                    width: isMobile ? '36px' : '40px', height: isMobile ? '36px' : '40px', borderRadius: '50%',
                    background: 'rgba(10,42,67,0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(201,168,76,0.6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', flexShrink: 0,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                }}
            >
                <X size={isMobile ? 18 : 20} color="#C9A84C" />
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

            <Button
                variant="primary"
                onClick={onClose}
                className={isMobile ? 'w-full' : 'self-start'}
            >
                Agendar Avaliação →
            </Button>
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
                        maxWidth: isMobile ? '520px' : '900px',
                        maxHeight: isMobile ? '92vh' : '85vh',
                        borderRadius: '24px',
                        background: '#0A2A43',
                        border: '1px solid rgba(201,168,76,0.35)',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'stretch',
                        cursor: 'default',
                        pointerEvents: 'all',
                        position: 'relative',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#C9A84C rgba(0,0,0,0.2)',
                    }}
                    className="custom-scrollbar"
                >
                    <style>{`
                        .custom-scrollbar::-webkit-scrollbar {
                            width: 6px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-track {
                            background: rgba(0, 0, 0, 0.2);
                            border-radius: 10px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #C9A84C;
                            border-radius: 10px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #E9C45C;
                        }
                    `}</style>
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
                            draggable="false"
                            onDragStart={(e) => e.preventDefault()}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', userSelect: 'none' }}
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
                        draggable="false"
                        onDragStart={(e) => e.preventDefault()}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', userSelect: 'none' }}
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
    const desktopTrackRef = useRef<HTMLDivElement>(null)
    const mobileTrackRef = useRef<HTMLDivElement>(null)
    const isMobileRef = useRef(false)
    const sectionRef = useRef<HTMLElement>(null)
    const isVisibleRef = useRef(true)
    const isPausedRef = useRef(false)
    const isDraggingRef = useRef(false)
    const startXRef = useRef(0)
    const totalDeltaRef = useRef(0)
    const resumeTimeoutRef = useRef<number | null>(null)

    const PX_PER_MS = TOTAL_WIDTH / DURATION_PER_CYCLE_MS

    const tick = useCallback((ts: number) => {
        if (isVisibleRef.current && !isPausedRef.current && lastTsRef.current !== null) {
            const delta = ts - lastTsRef.current
            xRef.current -= delta * PX_PER_MS
            if (xRef.current <= -TOTAL_WIDTH) xRef.current += TOTAL_WIDTH
            const trackEl = isMobileRef.current ? mobileTrackRef.current : desktopTrackRef.current
            if (trackEl) {
                trackEl.style.transform = `translateX(${xRef.current}px)`
            }
        }
        lastTsRef.current = ts
        // Apenas agenda o próximo frame se estiver visível para economizar CPU/Bateria
        rafRef.current = requestAnimationFrame(tick)
    }, [PX_PER_MS])

    useEffect(() => {
        rafRef.current = requestAnimationFrame(tick)
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
    }, [tick])

    useEffect(() => {
        const check = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)
            isMobileRef.current = mobile
        }
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    // Pause RAF when section is scrolled out of view (saves CPU/battery)
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { isVisibleRef.current = entry.isIntersecting },
            { threshold: 0 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const handleExpand = (rawIndex: number) => {
        // Ignorar se o usuário estava arrastando (mais de 5px de movimento)
        if (Math.abs(totalDeltaRef.current) > 5) return

        isPausedRef.current = true
        setExpandedIndex(rawIndex % services.length)
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current)
            resumeTimeoutRef.current = null
        }
    }

    const handleCollapse = () => {
        setExpandedIndex(null)
        // Só retoma se não estivermos arrastando
        if (!isDraggingRef.current) {
            isPausedRef.current = false
        }
    }

    // ── LÓGICA DE DRAG ──────────────────────────────────────
    const onDragStart = (clientX: number) => {
        isDraggingRef.current = true
        startXRef.current = clientX
        totalDeltaRef.current = 0
        isPausedRef.current = true
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current)
            resumeTimeoutRef.current = null
        }
    }

    const onDragMove = (clientX: number) => {
        if (!isDraggingRef.current) return
        const delta = clientX - startXRef.current
        totalDeltaRef.current += delta
        startXRef.current = clientX

        xRef.current += delta
        if (xRef.current > 0) xRef.current -= TOTAL_WIDTH
        if (xRef.current <= -TOTAL_WIDTH) xRef.current += TOTAL_WIDTH

        const trackEl = isMobileRef.current ? mobileTrackRef.current : desktopTrackRef.current
        if (trackEl) {
            trackEl.style.transform = `translateX(${xRef.current}px)`
        }
    }

    const onDragEnd = () => {
        if (!isDraggingRef.current) return
        isDraggingRef.current = false

        // Se um card estiver expandido, não retoma o scroll
        if (expandedIndex !== null) return

        // Retomar após 1 segundo
        resumeTimeoutRef.current = window.setTimeout(() => {
            if (!isDraggingRef.current && expandedIndex === null) {
                isPausedRef.current = false
            }
        }, 1000)
    }

    const expandedService = expandedIndex !== null ? services[expandedIndex] : null

    return (
        <section
            id="services"
            ref={sectionRef}
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
                <div
                    style={{
                        position: 'relative', width: '100%', height: '480px', overflow: 'hidden',
                        cursor: 'grab', userSelect: 'none', WebkitUserSelect: 'none'
                    }}
                    onMouseDown={(e) => onDragStart(e.clientX)}
                    onMouseMove={(e) => onDragMove(e.clientX)}
                    onMouseUp={onDragEnd}
                    onMouseLeave={onDragEnd}
                >
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
                        ref={desktopTrackRef}
                        style={{
                            display: 'flex',
                            gap: `${CARD_GAP}px`,
                            alignItems: 'center',
                            height: '100%',
                            width: 'max-content',
                            paddingLeft: '220px',
                            willChange: 'transform',
                            pointerEvents: 'auto'
                        }}
                    >
                        {[...services, ...services, ...services].map((svc, i) => (
                            <ServiceCard key={i} service={svc} onExpand={() => handleExpand(i)} />
                        ))}
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        position: 'relative', width: '100%', height: '420px', overflow: 'hidden',
                        userSelect: 'none', WebkitUserSelect: 'none'
                    }}
                    onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
                    onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
                    onTouchEnd={onDragEnd}
                >
                    {/* Fades laterais */}
                    <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px',
                        background: 'linear-gradient(to right, #0A2A43 0%, transparent 100%)',
                        zIndex: 30, pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute', right: 0, top: 0, bottom: 0, width: '40px',
                        background: 'linear-gradient(to left, #0A2A43 0%, transparent 100%)',
                        zIndex: 30, pointerEvents: 'none'
                    }} />
                    {/* Faixa de cards mobile */}
                    <div
                        ref={mobileTrackRef}
                        style={{
                            display: 'flex',
                            gap: `${CARD_GAP}px`,
                            alignItems: 'center',
                            height: '100%',
                            width: 'max-content',
                            paddingLeft: '24px',
                            willChange: 'transform',
                        }}
                    >
                        {[...services, ...services, ...services].map((svc, i) => (
                            <ServiceCard key={i} service={svc} onExpand={() => handleExpand(i)} />
                        ))}
                    </div>
                </div>
            )}

            {/* ── INDICADORES ─────────────────────────────────────── */}
            <div style={{
                display: 'flex', justifyContent: 'center', gap: '8px',
                marginTop: '32px', position: 'relative', zIndex: 1
            }}>
                {services.map((svc, i) => (
                    <button
                        key={i}
                        onClick={() => handleExpand(i)}
                        aria-label={`Ver detalhes do serviço: ${svc.title}`}
                        aria-pressed={expandedIndex === i}
                        title={svc.title}
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
                    Pronto para transformar o seu sorriso?
                </h3>
                <p style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
                    fontSize: '14px', color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.75, marginBottom: '28px',
                    maxWidth: '440px', margin: '0 auto 28px',
                }}>
                    Dê o primeiro passo hoje. Agende sua{' '}
                    <strong style={{ color: '#C9A84C', fontWeight: 600 }}>avaliação gratuita</strong>
                    {' '}e descubra o que posso fazer por você.
                </p>
                <Button
                    variant="primary"
                    className={isMobile ? 'w-full' : ''}
                >
                    Agendar Avaliação Gratuita
                </Button>
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
        </section >
    )
}
