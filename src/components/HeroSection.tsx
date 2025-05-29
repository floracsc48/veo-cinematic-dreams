
import React, { useState } from 'react';

const HeroSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText('Soft2025');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  const handleDownload = () => {
    window.open('https://pixeldrain.com/api/file/qYNYLRhk?download', '_blank');
  };

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
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-inter font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 animate-glow">
            <span className="group-hover:scale-105 transition-transform inline-block">
              Get Early Access
            </span>
          </button>
          
          <button 
            onClick={handleDownload}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-inter font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 animate-glow"
          >
            <span className="group-hover:scale-105 transition-transform inline-block">
              Download Veo 3 App
            </span>
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleCopyPassword}
            className="relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white px-6 py-3 rounded-xl font-inter font-light text-sm transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
          >
            {copySuccess ? 'Copied!' : 'Copy Archive Password'}
            {copySuccess && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                Copied!
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
