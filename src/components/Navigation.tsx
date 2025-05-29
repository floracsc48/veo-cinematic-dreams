import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-inter font-semibold text-xl">
              Google Veo 3
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="transition-colors font-inter font-light text-base text-slate-50">Get Early Access</button>
              <button onClick={() => scrollToSection('demo')} className="text-white/70 hover:text-white transition-colors font-inter font-light">
                Demo
              </button>
              <button onClick={() => scrollToSection('features')} className="text-white/70 hover:text-white transition-colors font-inter font-light">
                Features
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-white/70 hover:text-white transition-colors font-inter font-light">
                FAQ
              </button>
              
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-lg animate-slide-in-right">
            <div className="flex flex-col p-6 pt-20 space-y-6">
              <button onClick={() => scrollToSection('hero')} className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2">
                Hero
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2">
                Demo
              </button>
              <button onClick={() => scrollToSection('features')} className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2">
                Features
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2">
                FAQ
              </button>
              <button onClick={() => scrollToSection('download')} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition-all duration-300 font-inter font-light mt-4">
                Download
              </button>
            </div>
          </div>
        </div>}
    </>;
};
export default Navigation;