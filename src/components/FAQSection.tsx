
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How is Veo 3 different from Imagen Video?",
      answer: "Veo 3 represents our latest advancement in video generation technology, offering higher quality output, better motion understanding, and more sophisticated scene composition compared to previous models."
    },
    {
      question: "Is Veo 3 free to use?",
      answer: "Yes, Veo 3 is completely free to use during the early access period. We believe in democratizing access to advanced AI video generation technology."
    },
    {
      question: "What are the output formats?",
      answer: "Veo 3 supports multiple output formats including MP4, WebM, and MOV in various resolutions up to 4K. You can also export individual frames as high-resolution images."
    },
    {
      question: "Can I use generated videos commercially?",
      answer: "Yes, videos generated with Veo 3 can be used for commercial purposes. You retain full rights to the content you create, subject to our terms of service."
    },
    {
      question: "How long can generated videos be?",
      answer: "Currently, Veo 3 can generate videos up to 60 seconds in length. We're continuously working to extend this capability while maintaining quality."
    },
    {
      question: "What kind of prompts work best?",
      answer: "The most effective prompts are descriptive and specific about the visual elements, camera movements, lighting, and mood you want to achieve. Think like a film director describing a scene."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-inter font-semibold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 font-inter font-light">
            Everything you need to know about Veo 3
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-white font-inter font-medium text-left hover:text-blue-400 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 font-inter font-light leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
