import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';

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

  const prefetchSection = (id: string) => {
    switch (id) {
      case 'about':
        import('../sections/About');
        break;
      case 'services':
        import('../sections/ServiceSection');
        break;
      case 'office':
        import('../sections/Office');
        break;
      case 'locations':
        import('../sections/Locations');
        break;
      default:
        break;
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
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 border-b ${isScrolled
        ? 'bg-[#0A2A43] border-white/10 py-3 shadow-xl'
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
            className="relative cursor-pointer group z-50 h-11 md:h-12 flex items-center min-w-[160px] sm:min-w-[180px] md:min-w-[380px] overflow-visible"
            onClick={() => scrollToSection('hero')}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection('hero')}
            aria-label="Ir para o início"
          >
            <ResponsiveImage
              baseName="images/logo-rodrigo"
              alt="Dr. Rodrigo Silva Logo"
              className="absolute left-[-12px] sm:left-[-10px] md:left-0 top-1/2 -translate-y-1/2 h-[165px] sm:h-[180px] md:h-[280px] max-w-none w-auto transition-all duration-300 group-hover:scale-[1.03] pointer-events-none"
              eager
              width={280}
              height={120}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                onMouseEnter={() => prefetchSection(item.id)}
                className="text-white hover:text-gold-bright text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-bright transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions - Removido o botão conforme solicitado */}
          <div className="hidden lg:block w-[180px]"></div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:text-gold transition-colors focus:outline-none relative z-[10000]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X strokeWidth={1.5} size={32} className="text-white" />
            ) : (
              <Menu strokeWidth={1.5} size={32} className="text-white" />
            )}
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
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[65] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <m.div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[9998] lg:hidden border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
              style={{
                background: 'rgba(8, 22, 36, 0.98)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Espaçador para compensar a altura do header fixo no mobile */}
              <div className="h-24 md:h-28" />

              <div className="flex flex-col px-8 gap-8">
                <nav className="flex flex-col gap-6">
                  {menuItems.map((item, i) => (
                    <m.a
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.1) }}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="text-left text-2xl font-heading text-white hover:text-gold transition-colors"
                    >
                      {item.label}
                    </m.a>
                  ))}
                </nav>

                <div className="w-full h-px bg-white/10 my-4" />

                <Button
                  variant="primary"
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  Agendar Consulta <ArrowRight size={14} />
                </Button>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  );
};
