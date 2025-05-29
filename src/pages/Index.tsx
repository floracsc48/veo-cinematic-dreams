
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DemoSection from '@/components/DemoSection';
import FeaturedSection from '@/components/FeaturedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import MissionSection from '@/components/MissionSection';
import FAQSection from '@/components/FAQSection';
import DownloadCTASection from '@/components/DownloadCTASection';

const Index = () => {
  return (
    <div className="bg-black min-h-screen font-inter">
      <Navigation />
      <HeroSection />
      <DemoSection />
      <FeaturedSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MissionSection />
      <FAQSection />
      <DownloadCTASection />
    </div>
  );
};

export default Index;
