import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import logoImg from '../../assets/images/logo-rodrigo.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o background azul sólido quando sai da Hero Section
      // Usamos a altura da janela (100vh) menos um pequeno offset para a transição
      setIsScrolled(window.scrollY > window.innerHeight - 100);
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
    <m.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${isScrolled
        ? 'bg-[#0A2A43]/95 backdrop-blur-[20px] border-white/10 py-3 shadow-xl'
        : 'bg-transparent border-transparent py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div
            className="relative cursor-pointer group z-50 h-10 md:h-12 flex items-center min-w-[200px] md:min-w-[380px]"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={logoImg}
              alt="Dr. Rodrigo Silva Logo"
              className="absolute left-0 h-[130px] md:h-[250px] max-w-none w-auto transition-all duration-300 group-hover:scale-[1.03] pointer-events-none"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))'
              }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-gold-bright text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-bright transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions - Removido o botão conforme solicitado */}
          <div className="hidden lg:block w-[180px]"></div>

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
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <m.div
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
                    <m.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.1) }}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-2xl font-heading text-white hover:text-gold transition-colors"
                    >
                      {item.label}
                    </m.button>
                  ))}
                </nav>

                <div className="w-full h-px bg-white/10 my-4" />


              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  );
};
