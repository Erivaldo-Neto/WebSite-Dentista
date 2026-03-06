import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import './styles/globals.css';

// Lazy loading das seções abaixo do fold
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Office = lazy(() => import('./components/sections/Office').then(m => ({ default: m.Office })));
const Locations = lazy(() => import('./components/sections/Locations').then(m => ({ default: m.Locations })));
const WhyChoose = lazy(() => import('./components/sections/WhyChoose').then(m => ({ default: m.WhyChoose })));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA').then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.Footer })));

const SectionLoader = () => (
  <div className="w-full bg-[#0A2A43]" style={{ minHeight: '100px' }} />
);

function App() {
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

            <Testimonials />
            <Office />
            <Locations />
            <WhyChoose />
            <FinalCTA />
            <Footer />
          </Suspense>
        </main>
      </div>
    </LazyMotion>
  );
}

export default App;
