"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { dummyFlashSale } from "@/data/marketplace-dummy";
import ProductCard from "./ProductCard";
import { Timer, ArrowRight } from "lucide-react";

export default function FlashSaleCarousel() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 13,
    seconds: 25,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#005BAC] to-[#003d73] rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4 border-b border-white/20 pb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl md:text-3xl">🔥</span>
                <h2 className="text-xl md:text-2xl font-bold italic">Flash Sale</h2>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium mr-1 hidden md:block">Berakhir dalam:</span>
                <div className="flex gap-1.5 items-center">
                  <div className="bg-red-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded shadow-sm text-sm">
                    {formatTime(timeLeft.hours)}
                  </div>
                  <span className="text-red-500 font-bold">:</span>
                  <div className="bg-red-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded shadow-sm text-sm">
                    {formatTime(timeLeft.minutes)}
                  </div>
                  <span className="text-red-500 font-bold">:</span>
                  <div className="bg-red-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded shadow-sm text-sm">
                    {formatTime(timeLeft.seconds)}
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/marketplace/deals" 
              className="text-white hover:text-[#F9B000] font-medium flex items-center gap-1 transition-colors text-sm group"
            >
              Lihat Semua
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={12}
              slidesPerView={2}
              navigation
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
              className="flash-sale-swiper"
            >
              {dummyFlashSale.map((product) => (
                <SwiperSlide key={product.id} className="pb-2">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
