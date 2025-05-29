import React from 'react';
const DownloadCTASection = () => {
  return <section id="download" className="py-20 bg-gradient-to-r from-blue-900/30 via-black to-purple-900/30 relative overflow-hidden">
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
          
          
        </div>
      </div>
    </section>;
};
export default DownloadCTASection;