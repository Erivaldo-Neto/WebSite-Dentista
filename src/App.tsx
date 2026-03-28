import { lazy, Suspense, useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { getLenis, destroyLenis } from './lib/lenis';
import './styles/globals.css';

// Lazy loading das seções abaixo do fold
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Office = lazy(() => import('./components/sections/Office').then(m => ({ default: m.Office })));
const Locations = lazy(() => import('./components/sections/Locations').then(m => ({ default: m.Locations })));
const WhyChoose = lazy(() => import('./components/sections/WhyChoose').then(m => ({ default: m.WhyChoose })));
const Journey = lazy(() => import('./components/sections/Journey').then(m => ({ default: m.Journey })));
const OralHealth = lazy(() => import('./components/sections/OralHealth').then(m => ({ default: m.OralHealth })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA').then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.Footer })));

const SectionLoader = () => (
  <div className="w-full bg-[#0A2A43]" style={{ minHeight: '100px' }} />
);

function App() {
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    // Sincronizar com Framer Motion (dispara evento scroll nativo)
    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'));
    });

    // Loop de animação — sincronizado com o frame rate da tela
    let rafId: number;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Suavizar setas do teclado e teclas de navegação comuns
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar se o usuário estiver digitando em um input
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;

      const step = 120; // Tamanho do passo para setas
      const keys: Record<string, number> = {
        'ArrowUp': -step,
        'ArrowDown': step,
        'PageUp': -window.innerHeight * 0.8,
        'PageDown': window.innerHeight * 0.8,
        'Home': -lenis.scroll,
        'End': document.body.scrollHeight,
        ' ': window.innerHeight * 0.8 // Espaço para rolar para baixo
      };

      if (keys[e.key] !== undefined) {
        e.preventDefault();
        
        // Se for Home ou End, usamos um scroll absoluto
        if (e.key === 'Home' || e.key === 'End') {
           lenis.scrollTo(keys[e.key], { duration: 1.5 });
        } else {
           // Scroll relativo para as outras teclas
           lenis.scrollTo(lenis.scroll + keys[e.key], { lock: true });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(rafId);
      destroyLenis();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen">
        <Header />

        <main>
          <Hero />

          <Suspense fallback={<SectionLoader />}>
            <About />

            {/* Nova seção unificada de serviços com carrossel */}
            <Services />

            <Journey />

            <WhyChoose />

            <OralHealth />

            <FAQ />

            <Testimonials />
            <Office />
            <Locations />
            <FinalCTA />
            <Footer />
          </Suspense>
        </main>
      </div>
    </LazyMotion>
  );
}

export default App;
