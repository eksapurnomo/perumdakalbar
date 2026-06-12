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
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full relative"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.discount && (
          <span className="bg-[#F9B000] text-slate-900 text-xs font-bold px-2 py-1 rounded-md">
            {product.discount}% OFF
          </span>
        )}
      </div>
      
      <button 
        onClick={handleWishlistToggle}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm"
      >
        <Heart size={18} fill={inWishlist ? "currentColor" : "none"} className={inWishlist ? "text-red-500" : ""} />
      </button>

      {/* Image */}
      <Link href={`/marketplace/product/${product.slug}`} className="relative h-48 w-full overflow-hidden block bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick Add Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-[#005BAC] font-bold py-2 px-6 rounded-full flex items-center gap-2 hover:bg-[#005BAC] hover:text-white"
          >
            <ShoppingCart size={18} />
            + Keranjang
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/marketplace/product/${product.slug}`} className="block flex-1">
          <h3 className="font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-[#005BAC] transition-colors text-sm">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            <Star size={14} className="text-[#F9B000] fill-current" />
            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
            <span className="text-xs text-slate-400">({product.sold} terjual)</span>
          </div>

          <div className="mb-3">
            <p className="font-bold text-lg text-[#005BAC]">
              {formatRupiah(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-slate-400 line-through">
                {formatRupiah(product.originalPrice)}
              </p>
            )}
          </div>
        </Link>

        {/* Footer Info */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex flex-col gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <StoreIcon size={12} />
            <span className="truncate">{product.storeName}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={12} />
              <span className="truncate">{product.city}</span>
            </div>
            {product.freeShipping && (
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <Truck size={10} />
                Gratis Ongkir
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
