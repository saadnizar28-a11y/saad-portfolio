"use client";

import { useState, useRef, useEffect } from "react";
import FadeIn from "./FadeIn";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm Saad's AI. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Show popup bubble once after 3 seconds if never opened
    const timer = setTimeout(() => {
      const hasShown = localStorage.getItem('chatBubbleShown');
      if (!isOpen && !hasShown) {
        setShowBubble(true);
        localStorage.setItem('chatBubbleShown', 'true');
        
        // Auto hide the bubble after 8 seconds
        setTimeout(() => setShowBubble(false), 8000);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowBubble(false);
  };

  const submitMessage = (textMsg: string) => {
    const userMsg = textMsg.trim();
    if (!userMsg) return;

    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      let botReply = "I'm still learning the exact details, but I'll make sure Saad gets your message! You can also explore the navigation menu above to see more.";
      
      const lower = userMsg.toLowerCase();
      
      if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
        botReply = "Hello! I'm Saad's AI Assistant. How can I help you today?";
      } else if (lower.includes("service") || lower.includes("what do you do") || lower.includes("provide")) {
        botReply = "We specialize in AI Automation, Custom Web Development, UI/UX Design, and Lead Generation. Which one are you looking for? Leave your contact info and we will contact u as soon as posible.";
      } else if (lower.includes("appointment") || lower.includes("book") || lower.includes("meet")) {
        botReply = "You can book a strategy session with Saad directly through the Contact page, or just leave your best email here and we will reach out to schedule one.";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
        botReply = "You can head over to our Contact page to send a direct message, or just drop your details right here and we will contact u as soon as posible.";
      } else if (lower.includes("ai solutions") || lower.includes("automation")) {
        botReply = "Saad engineers custom AI setups using Claude Pro, Gemini Advanced, and ChatGPT to automate workflows and scale revenue operations. Want to see a use case?";
      } else if (lower.includes("who is saad") || lower.includes("about saad")) {
        botReply = "Saad is a digital strategist and founder who architects systems that drive attention and systematically convert it. He combines cinematic aesthetics with deep conversion psychology.";
      }

      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    }, 1000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    submitMessage(input);
  };

  return (
    <>
      {/* Floating Toggle Button & Notification Bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        
        {/* One-time Pop-up Bubble */}
        <div className={`transition-all duration-500 origin-bottom-right ${showBubble ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="bg-white text-black px-4 py-3 rounded-2xl rounded-br-none shadow-[0_10px_30px_rgba(0,210,255,0.3)] border border-[var(--accent-cyan)]/30 font-medium text-sm flex items-center gap-2 cursor-pointer" onClick={toggleChat}>
             <span className="w-2 h-2 rounded-full bg-[var(--accent-pink)] animate-pulse" />
             Hey! How can I help you?
          </div>
        </div>

        <button 
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_30px_rgba(0,210,255,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300 relative group"
        >
          {/* Pulsing glow indicator (no hard borders) */}
          {!isOpen && <div className="absolute inset-0 rounded-full bg-[var(--accent-cyan)] opacity-50 blur-sm animate-ping [animation-duration:2.5s]" />}
          
          {isOpen ? (
            <span className="text-black text-2xl font-bold block transform rotate-45">+</span>
          ) : (
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M2 12c0-4.411 4.477-8 10-8s10 3.589 10 8-4.477 8-10 8c-1.503 0-2.923-.292-4.185-.826L3 20l1.378-4.707C2.868 14.331 2 13.218 2 12z"/></svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-80 sm:w-96 glass-card rounded-3xl border-[rgba(0,210,255,0.3)] shadow-[0_10px_50px_rgba(0,0,0,0.8)] z-50 overflow-hidden flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-75 opacity-0 pointer-events-none'}`}
      >
        {/* Cinematic Header with glow and particles */}
        <div className="bg-gradient-to-r from-[rgba(20,20,25,0.9)] to-[var(--accent-cyan)]/20 p-5 border-b border-[rgba(255,255,255,0.05)] relative overflow-hidden group shrink-0">
          {/* Particles */}
          <div className="absolute inset-0 opacity-50">
             <div className="absolute top-2 left-10 w-1 h-1 bg-white rounded-full animate-ping [animation-duration:2s]" />
             <div className="absolute top-8 right-20 w-1.5 h-1.5 bg-[var(--accent-cyan)] rounded-full animate-pulse shadow-[0_0_5px_var(--accent-cyan)]" />
             <div className="absolute bottom-2 right-10 w-1 h-1 bg-[var(--accent-pink)] rounded-full animate-ping [animation-duration:3s]" />
          </div>
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--accent-cyan)]/20 blur-2xl rounded-full" />
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-cyan)] animate-pulse shadow-[0_0_10px_var(--accent-cyan)]" />
            <h3 className="font-bold text-white tracking-widest text-sm uppercase">Saad Assistant</h3>
          </div>
        </div>

        {/* Message Area */}
        <div className="h-80 p-5 overflow-y-auto flex flex-col gap-4 scrollbar-thin">
          {messages.map((msg, i) => (
            <FadeIn key={i}>
              <div className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.isBot 
                    ? 'bg-white/5 border border-white/10 text-white/90 rounded-tl-sm' 
                    : 'bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-cyan)] text-white rounded-tr-sm shadow-[0_5px_15px_rgba(0,210,255,0.2)]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </FadeIn>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area + Quick Pills */}
        <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-black/60 shrink-0">
          
          {/* Quick Action Pills */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-1 scrollbar-none whitespace-nowrap mask-gradient">
            {['Services', 'Appointment', 'AI Solutions', 'Contact'].map(pill => (
              <button 
                key={pill} 
                onClick={() => submitMessage(pill)}
                className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/5 hover:bg-[var(--accent-cyan)]/20 transition-colors shrink-0"
              >
                {pill}
              </button>
            ))}
          </div>

          <form onSubmit={handleSend} className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--accent-cyan)] flex items-center justify-center text-black hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
