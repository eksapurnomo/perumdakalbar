"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { dummyCategories } from "@/data/marketplace-dummy";

export default function MegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState(dummyCategories[0]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto flex h-[400px]">
        {/* Left sidebar: Categories */}
        <div className="w-1/4 border-r border-slate-100 overflow-y-auto py-4">
          {dummyCategories.map((category) => (
            <button
              key={category.id}
              className={`w-full text-left px-6 py-3 flex justify-between items-center hover:bg-slate-50 transition-colors ${
                activeCategory.id === category.id ? "text-[#005BAC] font-medium bg-slate-50 border-l-4 border-[#005BAC]" : "text-slate-600 border-l-4 border-transparent"
              }`}
              onMouseEnter={() => setActiveCategory(category)}
            >
              {category.name}
              <ChevronRight size={16} className="text-slate-400" />
            </button>
          ))}
        </div>

        {/* Right area: Subcategories & Promos */}
        <div className="w-3/4 p-8 bg-slate-50/50 flex">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              {activeCategory.name}
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {/* Dummy subcategories */}
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">Kategori Populer</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link href={`/marketplace/category/${activeCategory.slug}`} onClick={onClose} className="hover:text-[#005BAC]">Semua {activeCategory.name}</Link></li>
                  <li><Link href="#" className="hover:text-[#005BAC]">Subkategori 1</Link></li>
                  <li><Link href="#" className="hover:text-[#005BAC]">Subkategori 2</Link></li>
                  <li><Link href="#" className="hover:text-[#005BAC]">Subkategori 3</Link></li>
                  <li><Link href="#" className="hover:text-[#005BAC]">Subkategori 4</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">Merk Pilihan</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link href="#" className="hover:text-[#005BAC]">Merk A</Link></li>
                  <li><Link href="#" className="hover:text-[#005BAC]">Merk B</Link></li>
                  <li><Link href="#" className="hover:text-[#005BAC]">Merk C</Link></li>
                  <li><Link href="#" className="hover:text-[#005BAC]">Merk D</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Promo Banner inside Mega Menu */}
          <div className="w-64 ml-8 rounded-xl overflow-hidden relative group cursor-pointer">
            <img 
              src={`https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=400&auto=format&fit=crop`} 
              alt="Promo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-xs font-bold bg-[#F9B000] text-slate-900 px-2 py-1 rounded w-fit mb-2">PROMO</span>
              <h4 className="font-bold leading-tight">Diskon Spesial {activeCategory.name}</h4>
              <p className="text-xs text-white/80 mt-1">Hingga 50%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      <div className="fixed inset-0 top-[150px] bg-black/20 -z-10" onClick={onClose} />
    </div>
  );
}
