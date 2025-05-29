
import React from 'react';
import { Video, Camera, Music, Palette } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Text-to-Video Generation",
      description: "Transform any text description into stunning, photorealistic video content with advanced AI understanding."
    },
    {
      icon: Camera,
      title: "Cinematic Movement", 
      description: "Professional camera movements, smooth transitions, and dynamic scenes that rival Hollywood productions."
    },
    {
      icon: Music,
      title: "Audio-Sync (Experimental)",
      description: "Synchronized audio generation that perfectly matches your video content for complete storytelling."
    },
    {
      icon: Palette,
      title: "Scene Stylization",
      description: "Apply artistic styles, lighting effects, and mood adjustments to create your perfect visual aesthetic."
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-inter font-semibold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 font-inter font-light">
            Everything you need to create professional videos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <feature.icon size={32} className="text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-inter font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/70 font-inter font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
