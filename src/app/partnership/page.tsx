"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Building2, Handshake, Users, Presentation, CheckCircle2 } from "lucide-react";

export default function PartnershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      alert("Terjadi kesalahan koneksi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Partnership & Investor Relations</h1>
        <p className="text-xl text-foreground/70">
          Mari berkolaborasi membangun ekosistem bisnis yang berkelanjutan dan memberikan dampak positif bagi perekonomian daerah.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { icon: Building2, title: "Vendor Registration", desc: "Menjadi mitra pengadaan barang dan jasa resmi." },
          { icon: Handshake, title: "Joint Venture", desc: "Kerjasama operasional untuk pengembangan aset." },
          { icon: Users, title: "Keagenan PPOB", desc: "Buka loket pembayaran terintegrasi di wilayah Anda." },
          { icon: Presentation, title: "Investment", desc: "Peluang pendanaan proyek strategis daerah." }
        ].map((item, idx) => (
          <div key={idx} className="bg-soft border border-border p-8 rounded-3xl hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-border/50">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-foreground/70">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-border rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-primary/5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Mulai Kolaborasi</h2>
          <p className="text-foreground/70">Isi formulir di bawah ini dan tim representatif kami akan segera menghubungi Anda.</p>
        </div>

        {isSuccess ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 text-green-500 rounded-full mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Terima Kasih!</h3>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">Pengajuan kolaborasi Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1-2 hari kerja.</p>
            <Button onClick={() => setIsSuccess(false)} variant="outline">Kirim Pengajuan Lain</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Nama Perusahaan / Instansi *</label>
                <input required name="companyName" className="w-full bg-soft border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="PT Contoh Maju Bersama" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Nama Kontak Person *</label>
                <input required name="contactPerson" className="w-full bg-soft border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Budi Santoso" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Email Resmi *</label>
                <input required type="email" name="email" className="w-full bg-soft border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="budi@contoh.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Nomor Telepon / WhatsApp *</label>
                <input required type="tel" name="phone" className="w-full bg-soft border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="08123456789" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/80">Jenis Kolaborasi *</label>
              <select required name="businessType" className="w-full bg-soft border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                <option value="">Pilih jenis kolaborasi...</option>
                <option value="vendor">Pendaftaran Vendor (Penyedia Barang/Jasa)</option>
                <option value="joint_venture">Joint Venture / Kerjasama Operasional</option>
                <option value="investment">Investasi / Pendanaan</option>
                <option value="agen_ppob">Keagenan PPOB & Tiket</option>
                <option value="other">Lainnya</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/80">Pesan & Penjelasan Singkat *</label>
              <textarea required name="message" rows={5} className="w-full bg-soft border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Jelaskan secara singkat maksud dan tujuan kolaborasi yang ingin dijalin..."></textarea>
            </div>

            <Button type="submit" className="w-full justify-center" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Kirim Pengajuan Kolaborasi"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
