"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, FileText, Package, Smartphone } from "lucide-react";

export default function TopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-slate-100 text-slate-600 text-xs py-1.5 border-b border-slate-200 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Corporate Links */}
        <div className="flex items-center gap-4">
          <Link href="/tentang" className="hover:text-[#005BAC] transition-colors">Tentang Perusahaan</Link>
          <Link href="/profil" className="hover:text-[#005BAC] transition-colors">Profil Perumda Kalbar</Link>
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#005BAC] transition-colors">
              Informasi Lainnya <ChevronDown size={14} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded shadow-lg z-50 py-2">
                <Link href="/visi-misi" className="block px-4 py-1.5 hover:bg-slate-50 hover:text-[#005BAC]">Visi & Misi</Link>
                <Link href="/unit-usaha" className="block px-4 py-1.5 hover:bg-slate-50 hover:text-[#005BAC]">Unit Usaha</Link>
                <Link href="/berita" className="block px-4 py-1.5 hover:bg-slate-50 hover:text-[#005BAC]">Berita</Link>
                <Link href="/karir" className="block px-4 py-1.5 hover:bg-slate-50 hover:text-[#005BAC]">Karir</Link>
                <Link href="/investor" className="block px-4 py-1.5 hover:bg-slate-50 hover:text-[#005BAC]">Investor Relation</Link>
                <Link href="/hubungi-kami" className="block px-4 py-1.5 hover:bg-slate-50 hover:text-[#005BAC]">Hubungi Kami</Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Quick Action Links */}
        <div className="flex items-center gap-4 font-medium">
          <Link href="/bantuan" className="flex items-center gap-1 hover:text-[#005BAC] transition-colors">
            <HelpCircle size={14} /> Bantuan
          </Link>
          <Link href="/faq" className="flex items-center gap-1 hover:text-[#005BAC] transition-colors">
            <FileText size={14} /> FAQ
          </Link>
          <Link href="/tracking" className="flex items-center gap-1 hover:text-[#005BAC] transition-colors">
            <Package size={14} /> Tracking Pesanan
          </Link>
          <Link href="/seller" className="flex items-center gap-1 hover:text-[#005BAC] transition-colors">
            Menjadi Penjual
          </Link>
          <Link href="/download" className="flex items-center gap-1 hover:text-[#005BAC] transition-colors ml-2 text-[#005BAC]">
            <Smartphone size={14} /> Download Aplikasi
          </Link>
        </div>
      </div>
    </div>
  );
}
