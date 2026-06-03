import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kontak - Perumda Kalbar",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Hubungi Kami</h1>
        <p className="text-lg text-foreground/70">
          Punya pertanyaan atau keluhan? Tim layanan pelanggan kami siap membantu Anda 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-soft p-8 rounded-3xl border border-border">
          <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-foreground/50 font-medium mb-1">Alamat Kantor</p>
              <p className="font-medium text-foreground">Jl. Pahlawan No.1, Pontianak, Kalimantan Barat</p>
            </div>
            <div>
              <p className="text-sm text-foreground/50 font-medium mb-1">Telepon (24 Jam)</p>
              <p className="font-medium text-foreground">(0561) 123456</p>
            </div>
            <div>
              <p className="text-sm text-foreground/50 font-medium mb-1">Email</p>
              <p className="font-medium text-foreground">info@perumdakalbar.go.id</p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Nama Lengkap</label>
              <input id="name" type="text" className="w-full h-10 px-3 rounded-md border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" className="w-full h-10 px-3 rounded-md border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subjek</label>
            <input id="subject" type="text" className="w-full h-10 px-3 rounded-md border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Pesan</label>
            <textarea id="message" rows={5} className="w-full p-3 rounded-md border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>
          <Button type="button" className="w-full">Kirim Pesan</Button>
        </form>
      </div>
    </div>
  );
}
