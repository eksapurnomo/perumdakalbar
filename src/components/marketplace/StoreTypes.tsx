"use client";

import React from "react";
import Link from "next/link";
import { Store, Building, Gem, Leaf, Factory, Lightbulb, Ship, Pickaxe, UserCheck, Palette } from "lucide-react";

const storeTypes = [
  { id: "umkm", name: "UMKM", icon: Store, color: "text-blue-600", bg: "bg-blue-100" },
  { id: "bumd", name: "BUMD", icon: Building, color: "text-indigo-600", bg: "bg-indigo-100" },
  { id: "lokal", name: "Produk Lokal Kalbar", icon: Gem, color: "text-yellow-600", bg: "bg-yellow-100" },
  { id: "pertanian", name: "Pertanian", icon: Leaf, color: "text-green-600", bg: "bg-green-100" },
  { id: "properti", name: "Properti", icon: Factory, color: "text-slate-600", bg: "bg-slate-100" },
  { id: "energi", name: "Energi Terbarukan", icon: Lightbulb, color: "text-emerald-600", bg: "bg-emerald-100" },
  { id: "perikanan", name: "Perikanan", icon: Ship, color: "text-cyan-600", bg: "bg-cyan-100" },
  { id: "pertambangan", name: "Pertambangan", icon: Pickaxe, color: "text-stone-600", bg: "bg-stone-100" },
  { id: "jasa", name: "Jasa Profesional", icon: UserCheck, color: "text-violet-600", bg: "bg-violet-100" },
  { id: "kreatif", name: "Creative Economy", icon: Palette, color: "text-pink-600", bg: "bg-pink-100" },
];

export default function StoreTypes() {
  return (
    <section className="my-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Pusat Bisnis & Layanan</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {storeTypes.map((type) => (
          <Link 
            href={`/marketplace/store-type/${type.id}`} 
            key={type.id}
            className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-[#005BAC] transition-all group"
          >
            <div className={`w-14 h-14 ${type.bg} ${type.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <type.icon size={28} />
            </div>
            <span className="text-sm font-semibold text-slate-700 text-center leading-tight">
              {type.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
