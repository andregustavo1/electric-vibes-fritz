
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

interface ContactSectionProps {
  phoneNumber: string;
  email: string;
  instagram: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ phoneNumber, email, instagram }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      const elements = currentSection.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (currentSection) {
        const elements = currentSection.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}`;

  const contactMethods = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Nossa sede',
      content: 'Porto Alegre, RS',
      color: 'text-neon-pink',
      link: null
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'WhatsApp',
      content: phoneNumber,
      color: 'text-lime-green',
      link: whatsappUrl
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'E-mail',
      content: email,
      color: 'text-electric-blue',
      link: `mailto:${email}`
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      title: 'Instagram',
      content: '@' + instagram.split('/').pop(),
      color: 'text-vivid-purple',
      link: instagram
    }
  ];

  return (
    <section id="contact" className="relative" ref={sectionRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-fritz-black to-fritz-dark opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title inline-block reveal">
            Entre em Contato
          </h2>
          
          <p className="text-xl text-white/80 reveal">
            Pronto para transformar seu evento com a energia única do Fritz Green? 
            Fale conosco agora mesmo!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center reveal transition-transform duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${method.color} mb-6 inline-flex`}>
                {method.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              
              {method.link ? (
                <a 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {method.content}
                </a>
              ) : (
                <p className="text-white/70">{method.content}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card max-w-xl mx-auto p-8 reveal">
            <h3 className="text-2xl font-bold mb-6">Leve a energia do Fritz Green para seu evento!</h3>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
              Fale agora com Fritz Green
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
