import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ServiceSection } from './components/sections/ServiceSection';
import { Testimonials } from './components/sections/Testimonials';
import { Office } from './components/sections/Office';
import { Locations } from './components/sections/Locations';
import { WhyChoose } from './components/sections/WhyChoose';
import { FinalCTA } from './components/sections/FinalCTA';
import { services } from './data/services';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
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
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
