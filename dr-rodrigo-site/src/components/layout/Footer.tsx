import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

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
    'São Paulo - Jardins',
    'Campinas - Cambuí',
    'Santos - Gonzaga'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Dr. Rodrigo Silva
            </h3>
            <p className="text-white/80 text-sm mb-6">
              Odontologia de precisão com estética refinada e cuidado humano.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2">
              {specialties.map((specialty) => (
                <li key={specialty} className="text-white/80 text-sm hover:text-gold transition-colors cursor-pointer">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Cidades Atendidas
            </h4>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city} className="flex items-start space-x-2 text-white/80 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/80 text-sm">
                <Phone size={16} />
                <a href="tel:+5511987654321" className="hover:text-gold transition-colors">
                  +55 11 98765-4321
                </a>
              </li>
              <li className="flex items-center space-x-2 text-white/80 text-sm">
                <Mail size={16} />
                <a href="mailto:contato@drrodrigosilva.com.br" className="hover:text-gold transition-colors">
                  contato@drrodrigosilva.com.br
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white/60 text-xs">
                CRO-SP 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Dr. Rodrigo Silva. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
