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
  const [mainTab, setMainTab] = useState<'topup' | 'flight' | 'hotel' | 'train' | 'travel' | 'wisata'>('topup');
  
  const { activeTab: ppobActive, setActiveTab: setPpobActive, phoneNumber, setPhoneNumber } = usePPOBStore();
  const { origin, destination, setOrigin, setDestination } = useFlightStore();

  const mainTabsList = [
    { id: 'topup', label: 'Top Up & Tagihan' },
    { id: 'flight', label: 'Tiket Pesawat' },
    { id: 'hotel', label: 'Hotel' },
    { id: 'train', label: 'Kereta Api' },
    { id: 'travel', label: 'Bus & Travel' },
    { id: 'wisata', label: 'Paket Wisata' },
  ] as const;

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden my-4">
      {/* Top Section: Quick Service Icons */}
      <div className="p-4 border-b border-slate-100">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {ppobTabs.slice(0, 8).map((tab) => (
            <button
              key={tab.id}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white ${tab.color} group-hover:scale-110 transition-transform shadow-sm`}>
                <tab.icon size={20} />
              </div>
              <span className="text-[10px] md:text-xs text-center font-medium text-slate-700 leading-tight">
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section: Forms with Side/Top Tabs */}
      <div className="flex flex-col md:flex-row">
        {/* Tabs Menu */}
        <div className="flex md:flex-col overflow-x-auto md:w-48 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50 scrollbar-hide shrink-0">
          {mainTabsList.map((tab) => (
            <button 
              key={tab.id}
              className={`px-4 py-3 text-sm font-semibold text-left whitespace-nowrap transition-colors border-l-4 ${mainTab === tab.id ? 'border-[#005BAC] text-[#005BAC] bg-white' : 'border-transparent text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setMainTab(tab.id as any)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 md:p-6 flex-1">
          {mainTab === 'topup' && (
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nomor Telepon / ID Pelanggan</label>
                <input 
                  type="text" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Contoh: 081234567890" 
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-[#005BAC] focus:border-[#005BAC] outline-none text-sm"
                />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Pilih Nominal</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-[#005BAC] focus:border-[#005BAC] outline-none bg-white text-sm">
                  <option value="">Pilih Nominal</option>
                  <option value="10000">10.000</option>
                  <option value="20000">20.000</option>
                  <option value="50000">50.000</option>
                  <option value="100000">100.000</option>
                </select>
              </div>
              <button className="w-full md:w-auto bg-[#005BAC] hover:bg-[#004a8e] text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm whitespace-nowrap">
                Beli
              </button>
            </div>
          )}

          {mainTab === 'flight' && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Kota Asal</label>
                <div className="relative">
                  <Plane className="absolute left-3 top-3 text-slate-400" size={16} />
                  <input type="text" placeholder="Jakarta (CGK)" value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-[#005BAC] outline-none text-sm" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Kota Tujuan</label>
                <div className="relative">
                  <Map className="absolute left-3 top-3 text-slate-400" size={16} />
                  <input type="text" placeholder="Pontianak (PNK)" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-[#005BAC] outline-none text-sm" />
                </div>
              </div>
              <button className="bg-[#F9B000] hover:bg-yellow-500 text-slate-900 font-bold py-2.5 px-4 rounded-lg transition-colors text-sm w-full">
                Cari
              </button>
            </div>
          )}

          {(mainTab === 'hotel' || mainTab === 'train' || mainTab === 'travel' || mainTab === 'wisata') && (
            <div className="flex items-center justify-center h-full min-h-[80px] text-slate-500 text-sm">
              Form pencarian untuk {mainTabsList.find(t => t.id === mainTab)?.label}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
