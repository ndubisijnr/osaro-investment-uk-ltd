
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Osaro Investment. I am your Global Property Advisor. How can I assist with your international property portfolio today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: `
            You are "Osaro", an elite AI Global Property Advisor for Osaro Investment UK LTD. 
            Persona: Professional, sophisticated, knowledgeable, and reliable. 
            Expertise: Global real estate markets, North American residential/commercial (US & Canada), London prime residential, tax structuring for international investors, and portfolio management.
            Goal: Help high-net-worth international investors understand global property opportunities.
            Rules: 
            - Always maintain a luxury brand voice.
            - Provide high-level insights on global trends and legalities.
            - If asked about specific listings, refer them to the Properties page.
            - Keep responses concise but helpful.
            - Use British English spelling (e.g., colour, centre) as our HQ is in London.
          `
        }
      });

      const aiText = response.text || "I apologize, I am experiencing a brief connection issue. Please try again or contact our human experts.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm sorry, I'm having trouble connecting to the network. Please feel free to call our London office directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-surface-dark shadow-2xl border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-brand-green p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-sm leading-none">OSARO</span>
                <span className="text-primary text-[7px] font-bold tracking-widest leading-tight">INVESTMENT</span>
                <span className="text-white/40 text-[5px] font-bold tracking-widest uppercase">UK LTD. RC NO: 08453211</span>
              </div>
              <div className="border-l border-white/20 pl-3">
                <h3 className="text-white font-display font-bold text-xs tracking-widest uppercase">Advisor</h3>
                <p className="text-[8px] text-gray-400 uppercase tracking-widest">Global Concierge</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <span className="material-icons-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary text-white font-medium' 
                    : 'bg-background-light dark:bg-brand-green/50 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background-light dark:bg-brand-green/50 p-4 border border-gray-100 dark:border-white/5 flex gap-2">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-brand-green/30">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Global property tax, yields..."
                className="w-full bg-white dark:bg-surface-dark border-0 border-b-2 border-transparent focus:border-primary py-3 pl-4 pr-12 text-sm text-gray-900 dark:text-white transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary-dark transition-colors disabled:opacity-30"
              >
                <span className="material-icons-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-green dark:bg-primary shadow-2xl flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 group relative"
      >
        <div className="absolute inset-0 bg-primary opacity-20 group-hover:scale-125 transition-transform rounded-full -z-10 animate-ping"></div>
        <span className="material-icons-outlined text-3xl">
          {isOpen ? 'chat_bubble_outline' : 'smart_toy'}
        </span>
      </button>
    </div>
  );
};

export default AIAssistant;
