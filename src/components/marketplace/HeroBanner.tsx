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
    <section className="bg-slate-50 py-6">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
          >
            {dummyBanners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
                      {banner.title}
                    </h2>
                    {banner.subtitle && (
                      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                        {banner.subtitle}
                      </p>
                    )}
                    <Link
                      href={banner.link}
                      className="bg-[#F9B000] hover:bg-[#e09e00] text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      {banner.buttonText}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
