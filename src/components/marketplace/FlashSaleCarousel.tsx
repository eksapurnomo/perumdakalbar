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
    hours: 5,
    minutes: 45,
    seconds: 30,
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
    <section className="py-12 bg-gradient-to-r from-[#005BAC] to-[#003d73]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-white">
              <Timer size={32} className="text-[#F9B000]" />
              <h2 className="text-3xl font-bold italic">KILAT SALE</h2>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-white font-medium mr-2">Berakhir dalam:</span>
              <div className="flex gap-2">
                <div className="bg-white text-[#005BAC] font-bold w-10 h-10 flex items-center justify-center rounded-lg shadow-sm">
                  {formatTime(timeLeft.hours)}
                </div>
                <span className="text-white font-bold text-xl">:</span>
                <div className="bg-white text-[#005BAC] font-bold w-10 h-10 flex items-center justify-center rounded-lg shadow-sm">
                  {formatTime(timeLeft.minutes)}
                </div>
                <span className="text-white font-bold text-xl">:</span>
                <div className="bg-white text-[#005BAC] font-bold w-10 h-10 flex items-center justify-center rounded-lg shadow-sm">
                  {formatTime(timeLeft.seconds)}
                </div>
              </div>
            </div>
          </div>
          
          <Link 
            href="/marketplace/deals" 
            className="text-white hover:text-[#F9B000] font-medium flex items-center gap-1 transition-colors group"
          >
            Lihat Semua Promo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            navigation
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="flash-sale-swiper"
          >
            {dummyFlashSale.map((product) => (
              <SwiperSlide key={product.id} className="pb-4">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Styling needed in global CSS or inline block, Swiper adds its own classes */}
        </div>
      </div>
    </section>
  );
}
