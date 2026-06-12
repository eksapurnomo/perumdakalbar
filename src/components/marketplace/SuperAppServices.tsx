"use client";

import React, { useState } from "react";
import { Smartphone, Zap, Droplet, HeartPulse, Tv, Wallet, Gamepad2, Plane, Train, Building2, Ship, Car, Map, Moon, ShieldCheck } from "lucide-react";
import { usePPOBStore } from "@/store/ppobStore";
import { useFlightStore } from "@/store/flightStore";
import { useHotelStore } from "@/store/hotelStore";

const ppobTabs = [
  { id: 'pulsa', label: 'Pulsa', icon: Smartphone, color: 'bg-blue-500' },
  { id: 'data', label: 'Paket Data', icon: Smartphone, color: 'bg-blue-400' },
  { id: 'pln-token', label: 'Token Listrik', icon: Zap, color: 'bg-yellow-500' },
  { id: 'pln-tagihan', label: 'Tagihan PLN', icon: Zap, color: 'bg-yellow-600' },
  { id: 'pdam', label: 'PDAM', icon: Droplet, color: 'bg-cyan-500' },
  { id: 'bpjs', label: 'BPJS', icon: HeartPulse, color: 'bg-green-500' },
  { id: 'internet', label: 'Internet & TV', icon: Tv, color: 'bg-indigo-500' },
  { id: 'ewallet', label: 'E-Wallet', icon: Wallet, color: 'bg-purple-500' },
  { id: 'game', label: 'Voucher Game', icon: Gamepad2, color: 'bg-orange-500' },
];

const travelTabs = [
  { id: 'flight', label: 'Tiket Pesawat', icon: Plane, color: 'bg-sky-500' },
  { id: 'train', label: 'Kereta Api', icon: Train, color: 'bg-orange-600' },
  { id: 'hotel', label: 'Hotel', icon: Building2, color: 'bg-rose-500' },
  { id: 'ferry', label: 'Ferry', icon: Ship, color: 'bg-teal-500' },
  { id: 'travel', label: 'Travel', icon: Car, color: 'bg-blue-600' },
  { id: 'wisata', label: 'Paket Wisata', icon: Map, color: 'bg-emerald-500' },
  { id: 'umroh', label: 'Umroh & Haji', icon: Moon, color: 'bg-yellow-700' },
  { id: 'asuransi', label: 'Asuransi', icon: ShieldCheck, color: 'bg-slate-500' },
];

export default function SuperAppServices() {
  const [mainTab, setMainTab] = useState<'ppob' | 'travel'>('ppob');
  
  const { activeTab: ppobActive, setActiveTab: setPpobActive, phoneNumber, setPhoneNumber } = usePPOBStore();
  const { origin, destination, setOrigin, setDestination, passengers } = useFlightStore();
  const { city, checkIn, checkOut } = useHotelStore();

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden my-8">
      {/* Main Tabs */}
      <div className="flex border-b border-slate-200">
        <button 
          className={`flex-1 py-4 font-bold text-lg transition-colors ${mainTab === 'ppob' ? 'text-[#005BAC] border-b-2 border-[#005BAC] bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
          onClick={() => setMainTab('ppob')}
        >
          PPOB & Tagihan
        </button>
        <button 
          className={`flex-1 py-4 font-bold text-lg transition-colors ${mainTab === 'travel' ? 'text-[#005BAC] border-b-2 border-[#005BAC] bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
          onClick={() => setMainTab('travel')}
        >
          Travel & Hiburan
        </button>
      </div>

      <div className="p-6">
        {mainTab === 'ppob' ? (
          <div>
            {/* PPOB Sub Tabs */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {ppobTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPpobActive(tab.id)}
                  className={`flex flex-col items-center min-w-[80px] gap-2 p-2 rounded-xl transition-all ${ppobActive === tab.id ? 'bg-blue-50 ring-1 ring-blue-200' : 'hover:bg-slate-50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${tab.color}`}>
                    <tab.icon size={24} />
                  </div>
                  <span className={`text-xs text-center font-medium ${ppobActive === tab.id ? 'text-[#005BAC]' : 'text-slate-600'}`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* PPOB Form Area */}
            <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor Telepon / ID Pelanggan</label>
                  <input 
                    type="text" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Contoh: 081234567890" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#005BAC] focus:border-[#005BAC] outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pilih Nominal</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#005BAC] focus:border-[#005BAC] outline-none bg-white">
                    <option value="">Pilih Nominal</option>
                    <option value="10000">10.000</option>
                    <option value="20000">20.000</option>
                    <option value="50000">50.000</option>
                    <option value="100000">100.000</option>
                  </select>
                </div>
                <button className="bg-[#005BAC] hover:bg-[#004a8e] text-white font-bold py-3 px-8 rounded-lg transition-colors h-[50px]">
                  Beli
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Travel Sub Tabs */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {travelTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex flex-col items-center min-w-[80px] gap-2 p-2 rounded-xl transition-all hover:bg-slate-50`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${tab.color}`}>
                    <tab.icon size={24} />
                  </div>
                  <span className="text-xs text-center font-medium text-slate-600">
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Flight Form Area */}
            <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Kota Asal</label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input type="text" placeholder="Jakarta (CGK)" value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#005BAC] outline-none" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Kota Tujuan</label>
                  <div className="relative">
                    <Map className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input type="text" placeholder="Pontianak (PNK)" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#005BAC] outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Penumpang</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#005BAC] outline-none bg-white">
                    <option value="1">1 Dewasa</option>
                    <option value="2">2 Dewasa</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="bg-[#F9B000] hover:bg-yellow-500 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors">
                  Cari Penerbangan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
