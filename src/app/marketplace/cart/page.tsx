"use client";

import React from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCartStore();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/marketplace" className="text-slate-500 hover:text-[#005BAC] transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">Keranjang Belanja</h1>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag size={48} className="text-slate-300" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Keranjang Anda masih kosong</h2>
          <p className="text-slate-500 mb-8 max-w-md">
            Temukan berbagai produk menarik di Aneka Usaha Marketplace dan mulai berbelanja.
          </p>
          <Link 
            href="/marketplace" 
            className="bg-[#005BAC] text-white px-8 py-3 rounded-full font-bold hover:bg-[#004a8c] transition-colors"
          >
            Mulai Belanja
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <span className="font-bold text-slate-800">Produk ({totalItems})</span>
              </div>
              
              <div className="divide-y divide-slate-100">
                {items.map((item) => (
                  <div key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <Link href={`/marketplace/product/${item.product.slug}`}>
                            <h3 className="font-bold text-lg text-slate-800 hover:text-[#005BAC] transition-colors line-clamp-2">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-slate-500 mt-1">Toko: {item.product.storeName}</p>
                        </div>
                        <p className="font-bold text-lg text-[#005BAC] shrink-0">
                          {formatRupiah(item.product.price)}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                          <button 
                            className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-red-500 flex items-center gap-1 text-sm transition-colors"
                        >
                          <Trash2 size={16} />
                          <span className="hidden sm:inline">Hapus</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-[350px]">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-lg text-slate-800 mb-6">Ringkasan Belanja</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Total Harga ({totalItems} barang)</span>
                  <span>{formatRupiah(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Diskon Promo</span>
                  <span className="text-emerald-600">-Rp 0</span>
                </div>
              </div>
              
              <div className="border-t border-slate-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-800">Total Tagihan</span>
                  <span className="font-bold text-xl text-[#005BAC]">{formatRupiah(totalPrice)}</span>
                </div>
              </div>
              
              <button className="w-full bg-[#005BAC] text-white py-3 rounded-xl font-bold hover:bg-[#004a8c] transition-colors shadow-md">
                Beli ({totalItems})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
