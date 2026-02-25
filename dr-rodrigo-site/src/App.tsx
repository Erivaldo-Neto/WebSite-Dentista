import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { services } from './data/services';
import './styles/globals.css';

// Lazy loading das seções abaixo do fold
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Office = lazy(() => import('./components/sections/Office').then(m => ({ default: m.Office })));
const Locations = lazy(() => import('./components/sections/Locations').then(m => ({ default: m.Locations })));
const WhyChoose = lazy(() => import('./components/sections/WhyChoose').then(m => ({ default: m.WhyChoose })));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA').then(m => ({ default: m.FinalCTA })));
const ServiceSection = lazy(() => import('./components/sections/ServiceSection').then(m => ({ default: m.ServiceSection })));
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

            <section id="services">
              {services.map((service, index) => (
                <ServiceSection
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </section>

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
