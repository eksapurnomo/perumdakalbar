"use client";

import React from "react";
import Link from "next/link";
import { dummyStores } from "@/data/marketplace-dummy";
import { Star, Store, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedStores() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#005BAC]/10 flex items-center justify-center">
              <Store className="text-[#005BAC]" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Toko Pilihan</h2>
          </div>
          <Link href="/marketplace/stores" className="text-[#005BAC] font-medium hover:underline flex items-center">
            Lihat Semua <ChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {dummyStores.map((store, index) => (
            <motion.div 
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm mb-3">
                <img 
                  src={store.logo || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=100&auto=format&fit=crop"} 
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-bold text-slate-800 mb-1 group-hover:text-[#005BAC] transition-colors line-clamp-1">
                {store.name}
              </h3>
              
              <div className="flex items-center justify-center gap-1 text-sm text-slate-500 mb-2">
                <MapPin size={14} />
                <span>{store.city}</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-4 text-xs">
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-[#F9B000] fill-current" />
                  <span className="font-bold text-slate-700">{store.rating}</span>
                </div>
                <span className="text-slate-300">|</span>
                <div>
                  <span className="font-bold text-slate-700">{store.followers.toLocaleString('id-ID')}</span> pengikut
                </div>
              </div>
              
              <Link 
                href={`/marketplace/store/${store.slug}`}
                className="w-full py-2 px-4 rounded-full border border-[#005BAC] text-[#005BAC] font-medium hover:bg-[#005BAC] hover:text-white transition-colors text-sm"
              >
                Kunjungi Toko
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
