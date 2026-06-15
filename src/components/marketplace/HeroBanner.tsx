"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { dummyBanners } from "@/data/marketplace-dummy";

export default function HeroBanner() {
  return (
    <section className="bg-slate-50 pt-6 pb-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[220px]">
          {/* Main Slider (70%) */}
          <div className="w-full lg:w-[70%] h-[140px] md:h-[180px] lg:h-full rounded-2xl overflow-hidden shadow-sm relative group">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full h-full"
            >
              {dummyBanners.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <Link href={banner.link} className="relative w-full h-full block">
                    <img
                      src={banner.imageUrl}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Stacked Promos (30%) */}
          <div className="hidden lg:flex lg:w-[30%] flex-col gap-4 h-full">
            <Link href="/marketplace/promo-1" className="flex-1 rounded-2xl overflow-hidden shadow-sm relative block bg-slate-200 hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&h=150&auto=format&fit=crop" 
                alt="Promo 1" 
                className="w-full h-full object-cover"
              />
            </Link>
            <Link href="/marketplace/promo-2" className="flex-1 rounded-2xl overflow-hidden shadow-sm relative block bg-slate-200 hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=400&h=150&auto=format&fit=crop" 
                alt="Promo 2" 
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
