
import React from 'react';
import { Edit3, Settings, Download } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Edit3,
      title: "Write a Prompt",
      description: "Describe your vision in natural language. Be as detailed or as simple as you want."
    },
    {
      icon: Settings,
      title: "Select Style & Quality",
      description: "Choose from multiple quality tiers and style options to match your creative vision."
    },
    {
      icon: Download,
      title: "Generate & Download",
      description: "Watch as AI creates your cinematic video in minutes, then download in high quality."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-inter font-semibold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/70 font-inter font-light">
            Three simple steps to cinematic perfection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                <step.icon size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-inter font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/70 font-inter font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
