import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useConfig } from '@/hooks/useConfig';

const DownloadCTASection = () => {
  const [showModal, setShowModal] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');
  const [hasAccess, setHasAccess] = useState(false);

  const { validateInviteCode, getDownloadLink, getPassword } = useConfig();

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

  const scrollToDownloadButtons = () => {
    // Scroll to the actual download buttons section
    const downloadSection = document.querySelector('#download .max-w-4xl');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="download" className="py-20 bg-gradient-to-r from-blue-900/30 via-black to-purple-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-inter font-semibold text-white mb-6">
            Ready to Create with Veo 3?
          </h2>
          
          <p className="text-xl text-white/70 font-inter font-light mb-12">
            No payment required. Just pure AI creativity.
          </p>
          
          <div className="flex flex-col gap-6 justify-center items-center">
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
                onClick={scrollToDownloadButtons}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-inter font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 animate-glow"
              >
                <span className="group-hover:scale-105 transition-transform inline-block">
                  Download
                </span>
              </button>
            )}
          </div>
        </div>
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

export default DownloadCTASection;
