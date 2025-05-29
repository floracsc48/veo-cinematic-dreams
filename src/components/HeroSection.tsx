
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useConfig } from '@/hooks/useConfig';

const HeroSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [validatedCode, setValidatedCode] = useState<string | null>(null);

  const { validateInviteCode, getDownloadLink, getPassword } = useConfig();

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
      setValidatedCode(inviteCode);
      setShowModal(false);
      setError('');
    } else {
      setError('Invalid access code. Please try again.');
    }
  };

  const handleCopyPassword = async () => {
    try {
      const password = getPassword(validatedCode || undefined);
      if (password) {
        await navigator.clipboard.writeText(password);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  const handleDownload = () => {
    const downloadLink = getDownloadLink(validatedCode || undefined);
    if (downloadLink) {
      window.open(downloadLink, '_blank');
    }
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
          {!hasAccess ? (
            <button 
              onClick={handleGetAccess}
              className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-inter font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 animate-glow"
            >
              <span className="group-hover:scale-105 transition-transform inline-block">
                Get Early Access
              </span>
            </button>
          ) : (
            <button 
              onClick={handleDownload}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-inter font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 animate-glow"
            >
              <span className="group-hover:scale-105 transition-transform inline-block">
                Download Veo 3 App
              </span>
            </button>
          )}
        </div>

        {hasAccess && (
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
        )}
      </div>

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
    </section>
  );
};

export default HeroSection;
