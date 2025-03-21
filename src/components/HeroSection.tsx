
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

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

    const currentElement = elementRef.current;
    if (currentElement) {
      const elements = currentElement.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (currentElement) {
        const elements = currentElement.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24" ref={elementRef}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-pink/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="reveal mb-6 leading-tight">
            Transformando cada evento com a energia única do 
            <span className="animated-gradient-text block mt-2">e-music</span>
          </h1>
          
          <p className="reveal text-xl text-white/80 mb-10 delay-100">
            Fritz Green é o DJ ideal para criar a atmosfera perfeita em seus eventos, 
            com um set exclusivo de e-music que faz o público se conectar de maneira única.
          </p>
          
          <a 
            href="#contact" 
            className="reveal btn-primary delay-200"
          >
            Entre em contato
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Abstract decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full overflow-hidden">
        <svg className="w-full h-auto" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 50L40 45.8C80 41.7 160 33.3 240 28.3C320 23.3 400 21.7 480 25C560 28.3 640 36.7 720 43.3C800 50 880 55 960 51.7C1040 48.3 1120 36.7 1200 31.7C1280 26.7 1360 28.3 1400 29.2L1440 30V100H1400C1360 100 1280 100 1200 100C1120 100 1040 100 960 100C880 100 800 100 720 100C640 100 560 100 480 100C400 100 320 100 240 100C160 100 80 100 40 100H0V50Z" 
            fill="url(#paint0_linear)" 
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="20.6757" x2="720" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF00FF" />
              <stop offset="1" stopColor="#FF00FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* DJ image - suggested for future addition */}
      <div className="absolute bottom-0 right-0 w-1/2 h-4/5 pointer-events-none opacity-30 md:opacity-40 hidden md:block">
        {/* This would be where we place a DJ silhouette or image */}
        <div className="absolute inset-0 bg-gradient-to-l from-fritz-black via-fritz-black/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
