import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export const Footer = () => {
  const specialties = [
    'Ortodontia',
    'Odontologia Preventiva',
    'Dentística Estética',
    'Endodontia',
    'Harmonização Orofacial',
    'Implantodontia'
  ];

  const cities = [
    'Manaus - Adrianópolis',
    'Recife - Boa Viagem',
    'São Paulo - Jardins'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="relative h-24 -ml-3 mb-4 overflow-visible">
              <ResponsiveImage
                baseName="images/logo-rodrigo"
                alt="Dr. Rodrigo Silva"
                className="absolute top-1/2 -translate-y-1/2 left-0 h-[180px] w-auto max-w-none pointer-events-none"
                width={200}
                height={80}
              />
            </div>
            <p className="text-white/80 text-sm mb-6 mt-2">
              Cuidando do seu sorriso com precisão e empatia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-bright transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-bright transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-bright transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-gold-bright">
              Especialidades
            </h4>
            <ul className="space-y-2">
              {specialties.map((specialty) => (
                <li key={specialty} className="text-white/80 text-sm hover:text-gold-bright transition-colors cursor-pointer">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-gold-bright">
              Cidades Atendidas
            </h4>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city} className="flex items-start space-x-2 text-white/80 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold-bright" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-gold-bright">
              Contato
            </h4>
            <ul className="space-y-3">

              <li className="flex items-center space-x-2 text-white/80 text-sm">
                <Mail size={16} className="text-gold-bright" />
                <a href="mailto:contato@drrodrigosilva.com.br" className="hover:text-gold-bright transition-colors">
                  contato@drrodrigosilva.com.br
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white/60 text-xs text-gold-bright/60">
                CRO-SP 158.423
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Dr. Rodrigo Silva. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-gold-bright text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-gold-bright text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
