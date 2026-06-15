"use client";

import React from "react";
import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/marketplace/promo/gratis-ongkir" className="rounded-2xl overflow-hidden h-24 md:h-[140px] shadow-sm hover:shadow-md transition-shadow relative block bg-slate-200">
          <img 
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=600&h=140&auto=format&fit=crop" 
            alt="Promo Gratis Ongkir" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-6">
            <h3 className="text-white font-bold text-xl md:text-2xl w-1/2">Promo Gratis Ongkir Se-Kalimantan</h3>
          </div>
        </Link>
        
        <Link href="/marketplace/promo/umkm" className="rounded-2xl overflow-hidden h-24 md:h-[140px] shadow-sm hover:shadow-md transition-shadow relative block bg-slate-200">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&h=140&auto=format&fit=crop" 
            alt="Promo UMKM Kalbar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-6">
            <h3 className="text-white font-bold text-xl md:text-2xl w-1/2">Cashback 50% Produk UMKM Lokal</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
