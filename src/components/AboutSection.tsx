
import React, { useEffect, useRef } from 'react';
import { Music, Headphones, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="bg-fritz-dark relative" ref={sectionRef}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-pink/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image/Visual Side */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="glass-card p-1 rounded-2xl overflow-hidden reveal">
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-br from-fritz-black to-fritz-dark relative">
                  {/* This would be a placeholder for a proper DJ image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-neon-pink/10 flex items-center justify-center overflow-hidden animate-pulse">
                      <div className="relative w-40 h-40">
                        <div className="absolute inset-0 rounded-full border-4 border-neon-pink/30 animate-spin" style={{ animationDuration: '8s' }}></div>
                        <div className="absolute inset-2 rounded-full border-4 border-electric-blue/30 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                        <div className="absolute inset-4 rounded-full border-4 border-lime-green/30 animate-spin" style={{ animationDuration: '10s' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Headphones className="h-16 w-16 text-white/80" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Circular visual elements */}
                  <div className="absolute top-5 left-5 w-16 h-16 rounded-full bg-electric-blue/30 filter blur-md animate-float"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-neon-pink/20 filter blur-md animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-full filter blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-neon-pink/20 to-transparent rounded-full filter blur-xl"></div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="section-title reveal">
              Sobre Nós
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-white/80 reveal">
                Fritz Green é um DJ com uma trajetória sólida na cena de e-music, oferecendo sets eletrônicos envolventes 
                que fazem qualquer evento ganhar vida. A missão de Fritz é criar momentos inesquecíveis e imersivos 
                através de uma mistura de batidas energéticas e visuais cativantes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="feature-card reveal" style={{ transitionDelay: '100ms' }}>
                  <div className="mb-4 text-neon-pink">
                    <Music className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mix Exclusivo</h3>
                  <p className="text-white/70">Sets de e-music adaptados a cada evento e público.</p>
                </div>
                
                <div className="feature-card reveal" style={{ transitionDelay: '200ms' }}>
                  <div className="mb-4 text-electric-blue">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Experiência Personalizada</h3>
                  <p className="text-white/70">Sensibilidade para adequar o estilo ao público presente.</p>
                </div>
                
                <div className="feature-card reveal" style={{ transitionDelay: '300ms' }}>
                  <div className="mb-4 text-lime-green">
                    <Headphones className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Presença em Festivais</h3>
                  <p className="text-white/70">Experiência em grandes eventos de música eletrônica.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
