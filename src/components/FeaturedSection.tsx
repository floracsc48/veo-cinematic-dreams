
import React from 'react';

const FeaturedSection = () => {
  const publications = [
    'The Verge',
    'Wired', 
    'TechCrunch',
    'MIT Tech Review',
    'Bloomberg'
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-inter font-light text-white/60 mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="text-white/40 hover:text-white/70 transition-colors font-inter font-light text-lg cursor-pointer"
              >
                {pub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
