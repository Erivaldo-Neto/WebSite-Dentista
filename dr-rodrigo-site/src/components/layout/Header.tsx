import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Consultório', id: 'office' },
    { label: 'Localizações', id: 'locations' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
          ? 'bg-primary/90 backdrop-blur-md border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div
            className="flex flex-col cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className="text-2xl md:text-3xl font-heading text-white tracking-wide group-hover:text-gold transition-colors duration-300">
              Dr. Rodrigo Silva
            </h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold mt-1">
              CRO-SP 12345
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white text-sm uppercase tracking-widest transition-all duration-300 hover-underline-gold py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+5511987654321"
              className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-300"
            >
              <Phone strokeWidth={1} size={18} />
              <span className="text-sm tracking-wide font-light">11 98765-4321</span>
            </a>
            <Button
              variant="gold-outline"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Agendar
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X strokeWidth={1} size={32} /> : <Menu strokeWidth={1} size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-primary z-50 lg:hidden border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-8 flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X strokeWidth={1} size={32} />
                </button>
              </div>

              <div className="flex flex-col px-8 gap-8">
                <nav className="flex flex-col gap-6">
                  {menuItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.1) }}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-2xl font-heading text-white hover:text-gold transition-colors"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                <div className="w-full h-px bg-white/10 my-4" />

                <div className="flex flex-col gap-6">
                  <a
                    href="tel:+5511987654321"
                    className="flex items-center gap-4 text-white/80 text-lg font-light"
                  >
                    <Phone strokeWidth={1} />
                    <span>11 98765-4321</span>
                  </a>
                  <Button
                    variant="gold"
                    className="w-full justify-center"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Calendar size={18} className="mr-2" /> Agendar Consulta
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
