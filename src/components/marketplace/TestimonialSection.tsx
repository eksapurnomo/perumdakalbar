"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { dummyTestimonials } from "@/data/marketplace-dummy";
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Apa Kata Pelanggan Kami?</h2>
          <p className="text-slate-600">
            Ribuan pelanggan telah mempercayakan kebutuhan mereka di Aneka Usaha Marketplace.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {dummyTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative h-full flex flex-col">
                  <Quote size={40} className="text-[#005BAC]/10 absolute top-6 right-6" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "text-[#F9B000] fill-current" : "text-slate-200"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 italic mb-6 flex-1 relative z-10">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#005BAC]/10 flex items-center justify-center text-[#005BAC] font-bold">
                      {testimonial.userName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{testimonial.userName}</h4>
                      <p className="text-xs text-slate-500">{testimonial.userCity}</p>
                    </div>
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
