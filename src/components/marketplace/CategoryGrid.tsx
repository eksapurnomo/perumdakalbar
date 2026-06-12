"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { dummyCategories } from "@/data/marketplace-dummy";
import * as LucideIcons from "lucide-react";

// Helper to render dynamic Lucide icon
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.HelpCircle className={className} />;
  return <Icon className={className} />;
};

export default function CategoryGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Kategori Pilihan</h2>
          <Link href="/marketplace/category" className="text-[#005BAC] font-medium hover:underline">
            Lihat Semua Kategori
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {dummyCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link 
                href={`/marketplace/category/${category.slug}`}
                className="group flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-[#005BAC]/30 transition-all duration-300 text-center h-full"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#005BAC] group-hover:text-white transition-colors duration-300">
                  <IconComponent name={category.icon || "HelpCircle"} className="w-8 h-8 text-[#005BAC] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-slate-700 text-sm group-hover:text-[#005BAC] transition-colors">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
