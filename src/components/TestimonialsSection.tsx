
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      avatar: "🎬",
      text: "Veo 3 completely transformed our workflow. The quality is indistinguishable from professional footage.",
      result: "Saved 25 hours on editing"
    },
    {
      avatar: "🚀",
      text: "We used Veo 3 to create our product launch video. The results exceeded all expectations.",
      result: "Helped create viral launch teaser"
    },
    {
      avatar: "✨",
      text: "As a content creator, Veo 3 has revolutionized how I approach video production.",
      result: "No editor needed anymore"
    },
    {
      avatar: "🎨",
      text: "The cinematic quality and ease of use makes Veo 3 a game-changer for creative professionals.",
      result: "10x faster video creation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-inter font-semibold text-white mb-6">
            What Creators Are Saying
          </h2>
          <p className="text-xl text-white/70 font-inter font-light">
            Real results from real creators
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex gap-6 justify-center items-center min-h-[200px]">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.originalIndex}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 w-[350px] hover:bg-white/10 transition-all duration-500 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateX(${index === 1 ? '0' : index === 0 ? '-10px' : '10px'})`,
                  opacity: index === 1 ? 1 : 0.7
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-inter font-light">
                    {testimonial.result}
                  </div>
                </div>
                <p className="text-white/80 font-inter font-light leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-white/20 group"
          >
            <ChevronLeft className="text-white/70 group-hover:text-white transition-colors" size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-white/20 group"
          >
            <ChevronRight className="text-white/70 group-hover:text-white transition-colors" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
