"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { Product } from "@/types/marketplace";
import { Star, Heart, ShoppingCart, MapPin, Store as StoreIcon, Truck } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const inWishlist = mounted ? isInWishlist(product.id) : false;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div 
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] overflow-hidden border border-slate-100 flex flex-col h-full relative"
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.discount && (
          <span className="bg-[#F9B000] text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>
      
      <button 
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 z-10 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm"
      >
        <Heart size={16} fill={inWishlist ? "currentColor" : "none"} className={inWishlist ? "text-red-500" : ""} />
      </button>

      {/* Image (1:1 Ratio) */}
      <Link href={`/marketplace/product/${product.slug}`} className="relative aspect-square w-full overflow-hidden block bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick Add Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-[#005BAC] font-bold py-1.5 px-4 rounded-full flex items-center gap-1.5 hover:bg-[#005BAC] hover:text-white text-xs"
          >
            <ShoppingCart size={14} />
            + Keranjang
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <Link href={`/marketplace/product/${product.slug}`} className="block flex-1">
          <h3 className="text-xs text-slate-800 line-clamp-2 mb-1 group-hover:text-[#005BAC] transition-colors leading-snug">
            {product.name}
          </h3>
          
          <div className="mb-1">
            <p className="font-bold text-sm text-slate-900">
              {formatRupiah(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-[10px] text-slate-400 line-through">
                {formatRupiah(product.originalPrice)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 mb-2">
            <Star size={12} className="text-[#F9B000] fill-current" />
            <span className="text-[10px] font-medium text-slate-700">{product.rating}</span>
            <span className="text-[10px] text-slate-400">| {product.sold} terjual</span>
          </div>
        </Link>

        {/* Footer Info */}
        <div className="mt-auto pt-2 flex flex-col gap-1">
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <MapPin size={10} />
            <span className="truncate">{product.city}</span>
          </div>
          {product.freeShipping && (
            <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600">
              <Truck size={10} />
              Gratis Ongkir
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
