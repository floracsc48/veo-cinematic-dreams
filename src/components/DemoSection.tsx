
import React, { useState } from 'react';
import { ChevronDown, Settings, Send } from 'lucide-react';

const DemoSection = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Text to Video');
  const [chatLog, setChatLog] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setChatLog(prev => [...prev, `Message sent to model...`, `Generation started...`]);
    
    setTimeout(() => {
      setChatLog(prev => [...prev, `Video generated successfully! Duration: 17s\nTo see the result you need to download the app.`]);
      setIsGenerating(false);
      setPrompt('');
    }, 5000);
  };

  return (
    <section id="demo" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-inter font-semibold text-white mb-6">
            Veo 3 Interface Preview
          </h2>
          <p className="text-xl text-white/70 font-inter font-light">
            Experience the power of AI video generation
          </p>
        </div>

        {/* Demo Interface */}
        <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 animate-fade-in">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="text-white/60 font-inter font-light text-sm">
              Flow &gt; May 29 - 1205 &gt; Scenebuilder
            </div>
          </div>

          {/* Chat Area */}
          <div className="min-h-[300px] mb-6">
            {chatLog.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-white/40 font-inter font-light text-lg">
                  Type in the prompt box to start
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {chatLog.map((message, index) => (
                  <div key={index} className="text-white/80 font-inter font-light p-3 bg-white/5 rounded-lg">
                    {message.split('\n').map((line, lineIndex) => (
                      <div key={lineIndex}>
                        {line}
                        {lineIndex < message.split('\n').length - 1 && <br />}
                      </div>
                    ))}
                    {isGenerating && index === chatLog.length - 1 && (
                      <div className="flex items-center space-x-1 mt-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
            {/* Model Selection */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <select 
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 font-inter font-light appearance-none pr-8"
                >
                  <option value="Text to Video">Text to Video</option>
                  <option value="Frames to Video">Frames to Video</option>
                  <option value="Ingredients to Video">Ingredients to Video</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60" size={16} />
              </div>
              
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Settings size={16} className="text-white/70" />
              </button>
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4 space-y-4">
                <div>
                  <label className="text-white/70 font-inter font-light text-sm block mb-2">
                    Outputs per prompt: 1-4
                  </label>
                  <input type="range" min="1" max="4" className="w-full" />
                </div>
                
                <div>
                  <label className="text-white/70 font-inter font-light text-sm block mb-2">
                    Quality
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded">
                      <span className="text-white font-inter font-light text-sm">Fast (Veo 2)</span>
                      <button className="text-blue-400 text-xs">Upgrade</button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded">
                      <span className="text-white font-inter font-light text-sm">Quality (Veo 2)</span>
                      <button className="text-blue-400 text-xs">Upgrade</button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-600/20 border border-blue-500/30 rounded">
                      <span className="text-white font-inter font-light text-sm">Highest Quality (Experimental Audio) (Veo 3)</span>
                      <span className="text-green-400 text-xs">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Prompt Input */}
            <div className="flex gap-3">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the video you want to create..."
                className="flex-1 bg-transparent border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 font-inter font-light focus:border-blue-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white p-3 rounded-lg transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
