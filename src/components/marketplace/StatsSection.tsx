"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Users, ShoppingBag, Map } from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const Counter = ({ end, label, icon, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mb-4 backdrop-blur-sm">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2">
        {count.toLocaleString('id-ID')}{suffix}
      </div>
      <div className="text-white/80 font-medium">{label}</div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#005BAC] relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F9B000]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <Counter 
            end={15000} 
            label="Produk Terjual" 
            icon={<Package size={32} />} 
            suffix="+" 
          />
          <Counter 
            end={2500} 
            label="Penjual Aktif" 
            icon={<Store size={32} />} 
            suffix="+" 
          />
          <Counter 
            end={50000} 
            label="Pelanggan" 
            icon={<Users size={32} />} 
            suffix="+" 
          />
          <Counter 
            end={120} 
            label="Kota Terjangkau" 
            icon={<Map size={32} />} 
          />
        </div>
      </div>
    </section>
  );
}

// Temporary Store Icon definition to avoid missing imports in Counter
const Store = ({ size, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
