
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-particles"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Cinematic Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-purple-900/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-inter font-semibold text-white mb-6 tracking-tight leading-tight">
          The Future of Video<br />Starts Here
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 font-inter font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Create photorealistic, cinematic videos from simple text prompts using Google Veo 3 — for free.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-inter font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 animate-glow">
            <span className="group-hover:scale-105 transition-transform inline-block">
              Get Early Access
            </span>
          </button>
          
          <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-2xl font-inter font-light text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
