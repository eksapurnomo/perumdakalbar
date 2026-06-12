import React from "react";
import HeroBanner from "@/components/marketplace/HeroBanner";
import SuperAppServices from "@/components/marketplace/SuperAppServices";
import CategoryGrid from "@/components/marketplace/CategoryGrid";
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
  // Slicing data for different sections
  const recommendedProducts = dummyProducts.slice(0, 12);
  const kalbarProducts = dummyProducts.filter(p => p.city === "Pontianak" || p.city === "Singkawang" || p.city === "Ketapang").slice(0, 6);

  return (
    <div className="flex flex-col w-full bg-slate-50">
      <HeroBanner />
      
      <div className="container mx-auto px-4">
        {/* 4. PPOB & Digital Services */}
        <SuperAppServices />
      </div>

      {/* 5. Categories */}
      <CategoryGrid />

      {/* 6. Flash Sale */}
      <FlashSaleCarousel />

      <div className="container mx-auto px-4">
        {/* Store Types (UMKM, BUMD, dll) */}
        <StoreTypes />
      </div>

      {/* 8. Featured Stores */}
      <FeaturedStores />

      {/* 9. Recommended Products */}
      <ProductGridSection 
        title="Rekomendasi Untuk Anda" 
        products={recommendedProducts} 
        viewAllLink="/marketplace/search" 
        bgColor="bg-white"
      />

      {/* 10. Products From Kalimantan Barat */}
      <ProductGridSection 
        title="Produk Asli Kalimantan Barat" 
        products={kalbarProducts} 
        viewAllLink="/marketplace/search?location=kalbar" 
        bgColor="bg-blue-50/30"
      />

      {/* 11. Today's Deals */}
      <TodayDealsCarousel />

      {/* 12. Statistics Counter */}
      <StatsSection />

      {/* 13. Testimonials */}
      <TestimonialSection />

      {/* 14. FAQ */}
      <FAQSection />

      {/* 15. Newsletter */}
      <NewsletterSection />

      {/* 16. Seller CTA */}
      <SellerCTA />
    </div>
  );
}
