"use client";

import React from "react";
import Link from "next/link";
import { dummyStores } from "@/data/marketplace-dummy";
import { Star, Store, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedStores() {
  const customStores = [
    { id: 1, name: "Aneka Usaha Store", city: "Pontianak", rating: 4.9, followers: 15200, products: 120, logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=100&auto=format&fit=crop", slug: "aneka-usaha" },
    { id: 2, name: "UMKM Center Kalbar", city: "Singkawang", rating: 4.8, followers: 8400, products: 450, logo: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=100&auto=format&fit=crop", slug: "umkm-center" },
    { id: 3, name: "Kalbar Mart", city: "Pontianak", rating: 4.7, followers: 5300, products: 85, logo: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=100&auto=format&fit=crop", slug: "kalbar-mart" },
    { id: 4, name: "Borneo Shop", city: "Ketapang", rating: 4.9, followers: 12000, products: 310, logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=100&auto=format&fit=crop", slug: "borneo-shop" },
  ];

  return (
    <section className="py-6 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">Official Store</h2>
            <span className="bg-[#005BAC] text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">TERVERIFIKASI</span>
          </div>
          <Link href="/marketplace/stores" className="text-[#005BAC] text-sm md:text-base font-medium hover:underline flex items-center">
            Lihat Semua <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {customStores.map((store) => (
            <Link 
              key={store.id}
              href={`/marketplace/store/${store.slug}`}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-100 shrink-0">
                <img 
                  src={store.logo} 
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="font-bold text-slate-800 mb-0.5 group-hover:text-[#005BAC] transition-colors truncate text-sm">
                  {store.name}
                </h3>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 mb-1.5">
                  <MapPin size={10} />
                  <span className="truncate">{store.city}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <div className="flex items-center gap-0.5">
                    <Star size={10} className="text-[#F9B000] fill-current" />
                    <span className="font-bold">{store.rating}</span>
                  </div>
                  <span>•</span>
                  <span><span className="font-bold">{store.followers >= 1000 ? (store.followers/1000).toFixed(1) + 'rb' : store.followers}</span> Pengikut</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
