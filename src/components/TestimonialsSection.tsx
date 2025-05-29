
import React from 'react';

const TestimonialsSection = () => {
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

        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 min-w-[350px] hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
