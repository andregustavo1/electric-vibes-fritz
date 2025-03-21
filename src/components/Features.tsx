
import React, { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
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

  const benefits = [
    {
      title: 'Mix exclusivo de e-music personalizado para o evento',
      description: 'Criamos playlists específicas para cada ocasião, considerando o perfil do público e o tema do evento.'
    },
    {
      title: 'Equipamentos de alta tecnologia e iluminação impactante',
      description: 'Utilizamos equipamentos de última geração e oferecemos efeitos visuais que complementam a experiência musical.'
    },
    {
      title: 'Performance energética e envolvente para o público',
      description: 'Nossa atuação vai além do som, criando uma conexão genuína com os participantes e elevando a energia do ambiente.'
    },
    {
      title: 'Presença comprovada em festivais e grandes eventos',
      description: 'Experiência consolidada em eventos de diferentes portes, garantindo profissionalismo e qualidade.'
    }
  ];

  return (
    <section id="features" className="bg-fritz-dark relative" ref={sectionRef}>
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-blue/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glass-card inline-block px-4 py-2 rounded-full mb-4 reveal">
            <span className="text-sm font-medium text-electric-blue">Diferenciais</span>
          </div>
          
          <h2 className="section-title inline-block reveal">
            O que nos torna especiais
          </h2>
          
          <p className="text-xl text-white/80 reveal">
            Cada apresentação é cuidadosamente planejada para garantir uma experiência única.
          </p>
        </div>
        
        <div className="grid gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-0 overflow-hidden reveal flex flex-col md:flex-row"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="md:w-16 w-full h-16 md:h-auto bg-gradient-to-r from-neon-pink to-electric-blue flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
              
              <div className="p-6 md:p-8 flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <a href="#contact" className="btn-secondary">
            Entre em contato
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
