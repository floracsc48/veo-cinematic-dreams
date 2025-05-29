
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useConfig } from '@/hooks/useConfig';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');

  const { validateInviteCode } = useConfig();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync with global access state
  useEffect(() => {
    const checkAccessState = () => {
      const accessState = localStorage.getItem('veo3_access');
      setHasAccess(accessState === 'true');
    };
    
    checkAccessState();
    window.addEventListener('storage', checkAccessState);
    
    return () => window.removeEventListener('storage', checkAccessState);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleGetAccess = () => {
    setShowModal(true);
    setError('');
    setInviteCode('');
  };

  const handleSubmitCode = () => {
    if (!inviteCode.trim()) {
      setError('Please enter an invite code.');
      return;
    }

    const codeConfig = validateInviteCode(inviteCode);
    if (codeConfig !== null) {
      setHasAccess(true);
      localStorage.setItem('veo3_access', 'true');
      localStorage.setItem('veo3_invite_code', inviteCode);
      setShowModal(false);
      setError('');
      // Trigger storage event for other components
      window.dispatchEvent(new Event('storage'));
    } else {
      setError('Invalid access code. Please try again.');
    }
  };

  const handleDownloadClick = () => {
    scrollToSection('download');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-inter font-semibold text-xl">
              Google Veo 3
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light"
              >
                Hero
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light"
              >
                FAQ
              </button>
              {!hasAccess ? (
                <button 
                  onClick={handleGetAccess}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-2xl hover:bg-white/20 transition-all duration-300 font-inter font-light"
                >
                  Get Early Access
                </button>
              ) : (
                <button 
                  onClick={handleDownloadClick}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-2xl hover:bg-white/20 transition-all duration-300 font-inter font-light"
                >
                  Download
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-lg animate-slide-in-right">
            <div className="flex flex-col p-6 pt-20 space-y-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2"
              >
                Hero
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/70 hover:text-white transition-colors font-inter font-light text-left py-2"
              >
                FAQ
              </button>
              {!hasAccess ? (
                <button 
                  onClick={handleGetAccess}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition-all duration-300 font-inter font-light mt-4"
                >
                  Get Early Access
                </button>
              ) : (
                <button 
                  onClick={handleDownloadClick}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition-all duration-300 font-inter font-light mt-4"
                >
                  Download
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Invite Code Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-inter font-semibold text-white">Enter Invite Code</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter your invite code..."
                className="w-full bg-white/5 border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 font-inter font-light focus:border-blue-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmitCode()}
              />
              
              {error && (
                <p className="text-red-400 text-sm font-inter font-light">{error}</p>
              )}
              
              <button
                onClick={handleSubmitCode}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-inter font-medium transition-colors"
              >
                Verify Code
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
