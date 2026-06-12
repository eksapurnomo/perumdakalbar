"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, Menu, X, Bell, Globe, User, ChevronDown, LayoutGrid } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import MegaMenu from "./MegaMenu";

export default function MarketplaceHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  
  // Hydration state for Zustand
  const [mounted, setMounted] = useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());
  const wishlistItems = useWishlistStore((state) => state.items.length);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Main Header */}
      <header 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "border-b border-slate-200 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-6">
            
            {/* Left: Logo */}
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden p-2 text-slate-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link href="/marketplace" className="flex items-center relative h-10 w-40 shrink-0">
                <img 
                  src="/marketplace-logo.svg" 
                  alt="Aneka Usaha Logo" 
                  className="w-full h-full object-contain object-left"
                />
              </Link>
            </div>

            {/* Center: Search & Categories */}
            <div className="hidden lg:flex flex-1 items-center max-w-3xl">
              <button 
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-l-lg border border-r-0 border-slate-300 transition-colors shrink-0"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                <LayoutGrid size={18} />
                <span className="font-medium">Kategori</span>
                <ChevronDown size={16} />
              </button>
              
              <div className="flex-1 flex relative">
                <input 
                  type="text" 
                  placeholder="Cari produk, toko, atau layanan..." 
                  className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-shadow"
                />
                <button className="bg-[#005BAC] hover:bg-[#004a8e] text-white px-6 py-2.5 rounded-r-lg font-medium transition-colors flex items-center gap-2">
                  <Search size={18} />
                  <span>Cari</span>
                </button>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1 sm:gap-4 shrink-0">
              <button className="hidden md:flex items-center gap-1 text-slate-600 hover:text-[#005BAC] p-2">
                <Globe size={20} />
                <span className="text-sm font-medium">ID</span>
              </button>
              
              <div className="h-6 w-px bg-slate-200 hidden md:block mx-1"></div>

              <Link href="/marketplace/notifications" className="p-2 text-slate-600 hover:text-[#005BAC] relative transition-colors">
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Link>

              <Link href="/marketplace/wishlist" className="p-2 text-slate-600 hover:text-red-500 relative transition-colors">
                <Heart size={24} />
                {mounted && wishlistItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {wishlistItems}
                  </span>
                )}
              </Link>

              <Link href="/marketplace/cart" className="p-2 text-slate-600 hover:text-[#005BAC] relative transition-colors">
                <ShoppingCart size={24} />
                {mounted && cartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-[#005BAC] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartItems}
                  </span>
                )}
              </Link>
              
              <div className="hidden sm:flex items-center gap-3 ml-2">
                <Link href="/marketplace/login" className="text-[#005BAC] font-medium border border-[#005BAC] hover:bg-[#005BAC] hover:text-white px-4 py-2 rounded-lg transition-colors">
                  Masuk
                </Link>
                <Link href="/marketplace/login" className="bg-[#005BAC] text-white font-medium border border-[#005BAC] hover:bg-[#004a8e] px-4 py-2 rounded-lg transition-colors">
                  Daftar
                </Link>
              </div>
            </div>

          </div>

          {/* Mobile Search - Visible only on mobile */}
          <div className="mt-4 lg:hidden flex relative">
            <input 
              type="text" 
              placeholder="Cari produk..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005BAC]"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div onMouseLeave={() => setIsMegaMenuOpen(false)}>
          <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
        </div>
      </header>

      {/* Mobile Menu Sidebar (Simplified) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-white flex flex-col shadow-2xl animate-in slide-in-from-left">
            <div className="p-4 border-b flex justify-between items-center bg-[#005BAC] text-white">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="p-4 flex flex-col gap-4 overflow-y-auto">
              <div className="flex gap-2">
                <Link href="/marketplace/login" className="flex-1 text-center border border-[#005BAC] text-[#005BAC] py-2 rounded-lg font-medium">Masuk</Link>
                <Link href="/marketplace/login" className="flex-1 text-center bg-[#005BAC] text-white py-2 rounded-lg font-medium">Daftar</Link>
              </div>
              <div className="h-px bg-slate-200 my-2"></div>
              <h3 className="font-bold text-slate-800">Kategori</h3>
              {/* Add dummy categories here later */}
              <Link href="#" className="py-2 text-slate-600">Properti</Link>
              <Link href="#" className="py-2 text-slate-600">Pertambangan</Link>
              <Link href="#" className="py-2 text-slate-600">Pertanian</Link>
              <Link href="#" className="py-2 text-slate-600">Fashion</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
