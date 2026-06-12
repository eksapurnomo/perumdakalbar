"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { dummyProducts } from "@/data/marketplace-dummy";
import ProductCard from "./ProductCard";
import { Tag, ChevronRight } from "lucide-react";

export default function TodayDealsCarousel() {
  // Get products that are not in flash sale (simplified by taking from dummyProducts)
  const deals = dummyProducts.filter(p => !p.discount || p.discount < 15);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F9B000]/10 flex items-center justify-center">
              <Tag className="text-[#F9B000]" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Promo Hari Ini</h2>
          </div>
          <Link href="/marketplace/deals" className="text-[#005BAC] font-medium hover:underline flex items-center">
            Lihat Semua <ChevronRight size={18} />
          </Link>
        </div>

        <div className="relative -mx-4 px-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            navigation
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="pb-8 px-2"
          >
            {deals.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
