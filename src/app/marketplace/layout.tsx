import React from "react";
import { Metadata } from "next";
import MarketplaceHeader from "@/components/marketplace/MarketplaceHeader";
import MarketplaceFooter from "@/components/marketplace/MarketplaceFooter";
import TopHeader from "@/components/marketplace/TopHeader";
import FloatingChat from "@/components/marketplace/FloatingChat";
import MobileBottomNav from "@/components/marketplace/MobileBottomNav";

export const metadata: Metadata = {
  title: "Aneka Usaha - Super App Perumda Kalbar",
  description: "Marketplace, PPOB, Tiket Pesawat, dan Layanan Digital resmi dari Perumda Kalbar.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans transition-colors duration-300">
      <TopHeader />
      <MarketplaceHeader />
      <main className="flex-1">
        {children}
      </main>
      <MarketplaceFooter />
      <FloatingChat />
      <MobileBottomNav />
      {/* Padding for mobile bottom nav */}
      <div className="h-16 lg:hidden"></div>
    </div>
  );
}
