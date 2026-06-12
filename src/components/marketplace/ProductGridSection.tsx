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
}

export default function ProductGridSection({ title, products, viewAllLink, bgColor = "bg-white" }: ProductGridSectionProps) {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          {viewAllLink && (
            <Link href={viewAllLink} className="text-[#005BAC] font-medium hover:underline flex items-center">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
