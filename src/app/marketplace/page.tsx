import React from "react";
import HeroBanner from "@/components/marketplace/HeroBanner";
import SuperAppServices from "@/components/marketplace/SuperAppServices";
import CategoryShortcuts from "@/components/marketplace/CategoryShortcuts";
import PromoSection from "@/components/marketplace/PromoSection";
import FlashSaleCarousel from "@/components/marketplace/FlashSaleCarousel";
import StoreTypes from "@/components/marketplace/StoreTypes";
import FeaturedStores from "@/components/marketplace/FeaturedStores";
import ProductGridSection from "@/components/marketplace/ProductGridSection";
import TodayDealsCarousel from "@/components/marketplace/TodayDealsCarousel";
import StatsSection from "@/components/marketplace/StatsSection";
import TestimonialSection from "@/components/marketplace/TestimonialSection";
import FAQSection from "@/components/marketplace/FAQSection";
import NewsletterSection from "@/components/marketplace/NewsletterSection";
import SellerCTA from "@/components/marketplace/SellerCTA";
import { dummyProducts } from "@/data/marketplace-dummy";

export default function MarketplacePage() {
  const recommendedProducts = dummyProducts.slice(0, 10);
  const kalbarProducts = dummyProducts.filter(p => p.city === "Pontianak" || p.city === "Singkawang" || p.city === "Ketapang").slice(0, 10);

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] gap-y-6 pb-20">
      <HeroBanner />
      
      <div className="container mx-auto px-4 -mt-4">
        <SuperAppServices />
      </div>

      <CategoryShortcuts />
      
      <PromoSection />

      <FlashSaleCarousel />

      <div className="container mx-auto px-4">
        <StoreTypes />
      </div>

      <FeaturedStores />

      <ProductGridSection 
        title="Rekomendasi Untuk Anda" 
        products={recommendedProducts} 
        viewAllLink="/marketplace/search" 
        bgColor="bg-white"
      />

      <ProductGridSection 
        title="Produk Lokal Kalimantan Barat" 
        products={kalbarProducts} 
        viewAllLink="/marketplace/search?location=kalbar" 
        bgColor="bg-blue-50/50"
        badges={["UMKM Kalbar", "Produk Lokal", "Binaan Perumda"]}
      />

      <TodayDealsCarousel />

      <StatsSection />
      
      <TestimonialSection />
      
      <FAQSection />
      
      <NewsletterSection />
      
      <SellerCTA />
    </div>
  );
}
