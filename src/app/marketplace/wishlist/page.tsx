"use client";

import React from "react";
import Link from "next/link";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/marketplace/ProductCard";
import { Heart, ArrowLeft } from "lucide-react";

export default function WishlistPage() {
  const { items } = useWishlistStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/marketplace" className="text-slate-500 hover:text-[#005BAC] transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">Wishlist Saya</h1>
        <span className="bg-[#005BAC]/10 text-[#005BAC] px-3 py-1 rounded-full text-sm font-bold">
          {items.length} Item
        </span>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
            <Heart size={48} className="text-slate-300" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Wishlist Anda masih kosong</h2>
          <p className="text-slate-500 mb-8 max-w-md">
            Simpan barang-barang yang Anda suka di Wishlist agar mudah ditemukan nanti.
          </p>
          <Link 
            href="/marketplace" 
            className="bg-[#005BAC] text-white px-8 py-3 rounded-full font-bold hover:bg-[#004a8c] transition-colors"
          >
            Cari Produk
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map((item) => (
            <ProductCard key={item.product.id} product={item.product} />
          ))}
        </div>
      )}
    </div>
  );
}
