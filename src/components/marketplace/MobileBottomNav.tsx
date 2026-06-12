"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, ShoppingCart, List, User } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function MobileBottomNav() {
  const pathname = usePathname();
  
  const [mounted, setMounted] = React.useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());
  const wishlistItems = useWishlistStore((state) => state.items.length);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-5px_10px_rgba(0,0,0,0.05)] z-50 lg:hidden">
      <div className="flex justify-around items-center h-16">
        <Link href="/marketplace" className={`flex flex-col items-center gap-1 w-full ${pathname === '/marketplace' ? 'text-[#005BAC]' : 'text-slate-500 hover:text-[#005BAC]'}`}>
          <Home size={22} />
          <span className="text-[10px] font-medium">Beranda</span>
        </Link>
        <Link href="/marketplace/category" className={`flex flex-col items-center gap-1 w-full ${pathname.includes('/category') ? 'text-[#005BAC]' : 'text-slate-500 hover:text-[#005BAC]'}`}>
          <List size={22} />
          <span className="text-[10px] font-medium">Kategori</span>
        </Link>
        <Link href="/marketplace/wishlist" className={`relative flex flex-col items-center gap-1 w-full ${pathname === '/marketplace/wishlist' ? 'text-[#005BAC]' : 'text-slate-500 hover:text-[#005BAC]'}`}>
          <Heart size={22} />
          <span className="text-[10px] font-medium">Wishlist</span>
          {mounted && wishlistItems > 0 && (
            <span className="absolute top-0 right-3 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {wishlistItems}
            </span>
          )}
        </Link>
        <Link href="/marketplace/cart" className={`relative flex flex-col items-center gap-1 w-full ${pathname === '/marketplace/cart' ? 'text-[#005BAC]' : 'text-slate-500 hover:text-[#005BAC]'}`}>
          <ShoppingCart size={22} />
          <span className="text-[10px] font-medium">Keranjang</span>
          {mounted && cartItems > 0 && (
            <span className="absolute top-0 right-3 bg-[#005BAC] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartItems}
            </span>
          )}
        </Link>
        <Link href="/marketplace/login" className={`flex flex-col items-center gap-1 w-full ${pathname === '/marketplace/login' ? 'text-[#005BAC]' : 'text-slate-500 hover:text-[#005BAC]'}`}>
          <User size={22} />
          <span className="text-[10px] font-medium">Akun</span>
        </Link>
      </div>
    </div>
  );
}
