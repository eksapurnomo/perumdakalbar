"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara berbelanja di Aneka Usaha Marketplace?",
    answer: "Anda dapat mencari produk yang diinginkan, menambahkannya ke keranjang, lalu melakukan proses checkout. Pastikan Anda telah login ke akun Anda untuk menyelesaikan pembayaran."
  },
  {
    question: "Bagaimana menjadi penjual?",
    answer: "Untuk menjadi penjual, Anda perlu mendaftar melalui halaman 'Mulai Berjualan' dan mengisi form verifikasi UMKM atau perusahaan Anda. Tim kami akan memverifikasi pendaftaran Anda dalam 1-2 hari kerja."
  },
  {
    question: "Apakah tersedia pengiriman gratis?",
    answer: "Ya, kami menyediakan promo gratis ongkir untuk produk-produk dengan label 'Gratis Ongkir' dengan syarat dan ketentuan yang berlaku."
  },
  {
    question: "Metode pembayaran apa yang didukung?",
    answer: "Kami mendukung berbagai metode pembayaran termasuk Bank Transfer (BCA, Mandiri, BNI, BRI, Bank Kalbar), E-Wallet (GoPay, OVO, Dana), dan Virtual Account."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <p className="text-slate-600">
            Temukan jawaban untuk pertanyaan umum seputar layanan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-[#005BAC] shadow-md' : 'border-slate-200 hover:border-[#005BAC]/50'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold ${openIndex === index ? 'text-[#005BAC]' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#005BAC]' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-slate-600 bg-white border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
