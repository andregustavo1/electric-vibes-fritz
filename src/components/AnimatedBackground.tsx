
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-neon-pink/20 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-electric-blue/20 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-lime-green/20 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-vivid-purple/20 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
