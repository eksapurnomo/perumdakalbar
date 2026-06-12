"use client";

import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="w-16 h-16 bg-[#005BAC]/10 rounded-full flex items-center justify-center text-[#005BAC] mb-6 mx-auto md:mx-0">
              <Mail size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              Dapatkan Promo dan Penawaran Terbaru
            </h2>
            <p className="text-slate-600">
              Berlangganan newsletter kami untuk mendapatkan informasi promo spesial, diskon eksklusif, dan update produk terbaru.
            </p>
          </div>
          
          <div className="w-full md:w-[400px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Alamat Email Anda" 
                  className="w-full py-4 pl-6 pr-32 bg-slate-50 border border-slate-200 rounded-full outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-[#005BAC] hover:bg-[#004a8c] text-white px-6 rounded-full font-medium transition-colors flex items-center justify-center"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-sm text-emerald-600 font-medium pl-4">
                  Terima kasih telah berlangganan newsletter kami!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
