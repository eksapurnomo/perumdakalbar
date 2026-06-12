"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-6 z-50 md:bottom-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-40 right-6 z-50 md:bottom-24 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-[#25D366] p-4 text-white flex gap-3 items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#25D366] font-bold">
              CS
            </div>
            <div>
              <h3 className="font-bold">Customer Support</h3>
              <p className="text-xs text-white/80">Biasanya membalas dalam 5 menit</p>
            </div>
          </div>
          <div className="p-4 h-64 bg-slate-50 overflow-y-auto">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate-700 w-fit max-w-[80%]">
              Halo! Ada yang bisa kami bantu seputar layanan Aneka Usaha?
            </div>
          </div>
          <div className="p-3 border-t border-slate-200 bg-white flex gap-2">
            <input 
              type="text" 
              placeholder="Ketik pesan..." 
              className="flex-1 px-3 py-2 bg-slate-100 rounded-full text-sm outline-none focus:ring-1 focus:ring-[#25D366]"
            />
            <button className="bg-[#25D366] text-white p-2 rounded-full">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
