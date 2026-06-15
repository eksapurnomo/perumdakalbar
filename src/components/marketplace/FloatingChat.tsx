"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-6 z-[60] md:bottom-8 flex flex-col items-end gap-3">
        {isOpen && (
          <div className="flex flex-col gap-3 mb-2 items-end animate-in slide-in-from-bottom-5">
            <button className="flex items-center gap-3 group">
              <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm text-sm font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
            </button>
            <button className="flex items-center gap-3 group">
              <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm text-sm font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">Customer Service</span>
              <div className="w-12 h-12 bg-[#005BAC] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Send size={20} />
              </div>
            </button>
            <button className="flex items-center gap-3 group">
              <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm text-sm font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">Bantuan / FAQ</span>
              <div className="w-12 h-12 bg-[#F9B000] text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
            </button>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-[#005BAC] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center ${isOpen ? 'rotate-90 bg-slate-700' : ''}`}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </>
  );
}
