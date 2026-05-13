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

    // Loop de animação — sincronizado com o frame rate da tela
    let rafId: number;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Sincronizar com outros componentes (dispara evento scroll nativo)
    lenis.on('scroll', () => {
      // Isso ajuda o Framer Motion e outros observers a detectarem o scroll
      window.dispatchEvent(new Event('scroll'));
    });

    // Suavizar setas do teclado e teclas de navegação comuns
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar se o usuário estiver digitando em um input
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;

      const step = 140; // Passo um pouco maior para Desktop
      const keys: Record<string, number> = {
        'ArrowUp': -step,
        'ArrowDown': step,
        'PageUp': -window.innerHeight * 0.9,
        'PageDown': window.innerHeight * 0.9,
        'Home': -lenis.scroll,
        'End': document.body.scrollHeight,
        ' ': window.innerHeight * 0.8
      };

      if (keys[e.key] !== undefined) {
        e.preventDefault();
        
        if (e.key === 'Home' || e.key === 'End') {
           lenis.scrollTo(e.key === 'Home' ? 0 : document.body.scrollHeight, { 
             duration: 2,
             easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
           });
        } else {
           lenis.scrollTo(lenis.scroll + keys[e.key], { 
             lock: true,
             duration: 1.2
           });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Forçar atualização do Lenis no mount para evitar pulos
    lenis.scrollTo(window.scrollY, { immediate: true });

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
