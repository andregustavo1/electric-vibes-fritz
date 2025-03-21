
import React, { useEffect, useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
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

  return (
    <section id="why-choose-us" className="relative" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title inline-block reveal">
            A energia de um DJ que conhece seu público
          </h2>
          
          <p className="text-xl text-white/80 reveal">
            Fritz Green cria sets exclusivos que tornam cada evento único, com um cuidado especial 
            no que toca e na forma de envolver o público.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass-card p-8 reveal">
            <div className="inline-block rounded-xl bg-neon-pink/10 p-3 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-pink to-vivid-purple flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Experiência de DJ personalizada</h3>
            <p className="text-white/70 mb-6">
              Cada evento recebe um planejamento exclusivo, com músicas selecionadas especificamente para 
              o perfil do seu público e a atmosfera desejada. A performance é adaptada para 
              garantir que a energia do evento esteja sempre no ponto certo.
            </p>
          </div>
          
          <div className="glass-card p-8 reveal" style={{ transitionDelay: '100ms' }}>
            <div className="inline-block rounded-xl bg-electric-blue/10 p-3 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-electric-blue to-lime-green flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Aperfeiçoamento constante</h3>
            <p className="text-white/70 mb-6">
              Sempre atento às últimas tendências e lançamentos da música eletrônica, 
              Fritz Green investe continuamente no aprimoramento de técnicas e na ampliação do 
              repertório musical, garantindo uma experiência sempre atualizada e inovadora.
            </p>
          </div>
          
          <div className="glass-card p-8 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="inline-block rounded-xl bg-lime-green/10 p-3 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-lime-green to-neon-pink flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Performance de alto nível</h3>
            <p className="text-white/70 mb-6">
              Equipamentos de última geração, técnicas avançadas de mixagem e uma energia contagiante 
              são marcas registradas de Fritz Green. A performance vai além do som, 
              criando uma experiência sensorial completa.
            </p>
          </div>
          
          <div className="glass-card p-8 reveal" style={{ transitionDelay: '300ms' }}>
            <div className="inline-block rounded-xl bg-vivid-purple/10 p-3 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-vivid-purple to-electric-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Presença consolidada</h3>
            <p className="text-white/70 mb-6">
              Com uma trajetória em eventos de grande porte, festivais e festas temáticas, 
              Fritz Green traz para seu evento a expertise adquirida em diversos cenários, 
              garantindo profissionalismo e qualidade sonora impecáveis.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12 reveal">
          <a href="#contact" className="btn-primary">
            Agende um show
            <Calendar className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
