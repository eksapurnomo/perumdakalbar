"use client";

import React from "react";
import Link from "next/link";
import { Store, ArrowRight, ShieldCheck, TrendingUp, Wallet } from "lucide-react";

export default function SellerCTA() {
  return (
    <section className="py-16 bg-[#F9B000] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-slate-900">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Mulai Jual Produk Anda di Marketplace Aneka Usaha
            </h2>
            <p className="text-lg md:text-xl text-slate-800 mb-8 max-w-2xl">
              Jangkau jutaan pembeli potensial, kembangkan bisnis UMKM Anda, dan nikmati berbagai kemudahan berjualan bersama kami.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Terpercaya</h3>
                  <p className="text-sm text-slate-800">Dikelola langsung oleh Perumda Kalbar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shrink-0">
                  <TrendingUp size={24} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Jangkauan Luas</h3>
                  <p className="text-sm text-slate-800">Akses pasar ke seluruh Kalimantan Barat</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shrink-0">
                  <Wallet size={24} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Bebas Biaya</h3>
                  <p className="text-sm text-slate-800">Gratis biaya pendaftaran dan potongan rendah</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shrink-0">
                  <Store size={24} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dukungan Penuh</h3>
                  <p className="text-sm text-slate-800">Tim siap membantu pemasaran produk Anda</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/marketplace/seller/register"
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Daftar Sebagai Penjual
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="hidden lg:block w-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop" 
              alt="Penjual UMKM" 
              className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
