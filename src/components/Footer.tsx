
import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  phoneNumber: string;
  email: string;
  instagram: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber, email, instagram }) => {
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fritz-dark border-t border-white/10 pt-12 pb-6 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#home" className="text-2xl font-heading font-bold text-white mb-6 md:mb-0 relative">
            <span className="animated-gradient-text">Fritz Green</span>
          </a>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://maps.app.goo.gl/xxxxxxxxxxxxxxxx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors group flex items-center"
              aria-label="Nossa localização"
            >
              <MapPin className="h-5 w-5 group-hover:text-neon-pink transition-colors" />
            </a>
            
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors group flex items-center"
              aria-label="Nosso WhatsApp"
            >
              <Phone className="h-5 w-5 group-hover:text-lime-green transition-colors" />
            </a>
            
            <a 
              href={`mailto:${email}`}
              className="text-white/70 hover:text-white transition-colors group flex items-center"
              aria-label="Nosso e-mail"
            >
              <Mail className="h-5 w-5 group-hover:text-electric-blue transition-colors" />
            </a>
            
            <a 
              href={instagram}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors group flex items-center"
              aria-label="Nosso Instagram"
            >
              <Instagram className="h-5 w-5 group-hover:text-vivid-purple transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Fritz Green. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
