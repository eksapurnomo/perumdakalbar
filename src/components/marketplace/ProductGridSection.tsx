"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/marketplace/ProductCard";
import { Product } from "@/types/marketplace";

interface ProductGridSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  bgColor?: string;
  badges?: string[];
}

export default function ProductGridSection({ title, products, viewAllLink, bgColor = "bg-white", badges }: ProductGridSectionProps) {
  return (
    <section className={`py-6 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2 flex-wrap">
              {title}
              {badges && badges.map((badge, idx) => (
                <span key={idx} className="text-[10px] md:text-xs font-bold bg-[#F9B000] text-slate-900 px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              ))}
            </h2>
          </div>
          {viewAllLink && (
            <Link href={viewAllLink} className="text-[#005BAC] text-sm md:text-base font-medium hover:underline flex items-center shrink-0">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
