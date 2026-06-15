"use client";

import React from "react";
import Link from "next/link";
import { Grid, Smartphone, Percent, Store, Gem, List } from "lucide-react";

const shortcuts = [
  { id: "kategori", name: "Kategori", icon: Grid, color: "text-[#005BAC]", bg: "bg-blue-100" },
  { id: "topup", name: "Top Up", icon: Smartphone, color: "text-indigo-600", bg: "bg-indigo-100" },
  { id: "promo", name: "Promo Hari Ini", icon: Percent, color: "text-red-600", bg: "bg-red-100" },
  { id: "official", name: "Official Store", icon: Store, color: "text-purple-600", bg: "bg-purple-100" },
  { id: "lokal", name: "Produk Lokal", icon: Gem, color: "text-emerald-600", bg: "bg-emerald-100" },
  { id: "semua", name: "Semua Produk", icon: List, color: "text-slate-600", bg: "bg-slate-100" },
];

export default function CategoryShortcuts() {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="flex justify-between md:justify-start gap-4 md:gap-8 overflow-x-auto pb-2 scrollbar-hide">
        {shortcuts.map((item) => (
          <Link 
            key={item.id} 
            href={`/marketplace/${item.id}`}
            className="flex flex-col items-center min-w-[72px] group"
          >
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform border border-white shadow-sm`}>
              <item.icon size={24} />
            </div>
            <span className="text-[11px] md:text-xs text-center font-medium text-slate-700 leading-tight group-hover:text-[#005BAC]">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
