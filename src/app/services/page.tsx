import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Building2, Ticket, Ship, PackageOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Products - Perumda Aneka Usaha",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Services & Products</h1>
        <p className="text-xl text-foreground/70">
          Portofolio bisnis terpadu yang dirancang untuk mendukung kebutuhan korporasi, UMKM, dan masyarakat luas di Kalimantan Barat.
        </p>
      </div>

      <div className="space-y-32">
        {/* Business & Property */}
        <section id="property" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-2xl mb-6">
                <Building2 size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Business & Property</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Optimalisasi aset daerah melalui pengelolaan properti komersial yang profesional. Kami menyediakan fasilitas ruang usaha strategis untuk mendukung pertumbuhan bisnis Anda.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium"><span className="text-primary text-xl">✓</span> Penyewaan Aset Tanah & Bangunan</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-primary text-xl">✓</span> Pengelolaan Properti Perumda</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-primary text-xl">✓</span> Sewa Ruang Usaha & Ruko</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-primary text-xl">✓</span> Fasilitas Gudang Komersial</li>
              </ul>
              <Button>Hubungi Agen Properti</Button>
            </div>
            <div className="md:w-1/2 bg-soft aspect-video rounded-3xl border border-border flex items-center justify-center relative overflow-hidden">
              <span className="text-foreground/30 font-medium z-10">Gambar Ilustrasi Properti</span>
            </div>
          </div>
        </section>

        {/* Ticketing & PPOB */}
        <section id="ticketing" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center justify-center p-4 bg-secondary/10 text-secondary rounded-2xl mb-6">
                <Ticket size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Ticketing & PPOB</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Layanan keagenan tiket transportasi darat, laut, dan udara yang terpercaya, serta loket pembayaran multi-biller terintegrasi.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium"><span className="text-secondary text-xl">✓</span> Tiket Pesawat & Kapal Pelni</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-secondary text-xl">✓</span> Pembayaran Tagihan Listrik & PDAM</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-secondary text-xl">✓</span> Tagihan Internet & TV Kabel</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-secondary text-xl">✓</span> Pembelian Pulsa & Paket Data</li>
              </ul>
              <Button>Buka Aplikasi PPOB</Button>
            </div>
            <div className="md:w-1/2 bg-soft aspect-video rounded-3xl border border-border flex items-center justify-center">
              <span className="text-foreground/30 font-medium">Gambar Ilustrasi PPOB</span>
            </div>
          </div>
        </section>

        {/* Tug Boat Rental */}
        <section id="tugboat" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                <Ship size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Tug Boat Rental</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Dukungan armada laut yang tangguh untuk memfasilitasi logistik industri pertambangan, perkebunan, dan perdagangan antar pulau.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium"><span className="text-blue-600 text-xl">✓</span> Sewa Tug Boat & Tongkang (Time Charter/Voyage)</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-blue-600 text-xl">✓</span> Kapasitas Angkut Skala Besar</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-blue-600 text-xl">✓</span> Asuransi Pengiriman Komprehensif</li>
              </ul>
              <Button>Request Quotation Armada</Button>
            </div>
            <div className="md:w-1/2 bg-soft aspect-video rounded-3xl border border-border flex items-center justify-center">
              <span className="text-foreground/30 font-medium">Gambar Ilustrasi Tug Boat</span>
            </div>
          </div>
        </section>

        {/* Trading & Logistics */}
        <section id="logistics" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-2xl mb-6">
                <PackageOpen size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Trading & Logistics Services</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Distribusi komoditas unggulan daerah dan layanan logistik terintegrasi dari hulu ke hilir.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium"><span className="text-indigo-600 text-xl">✓</span> Perdagangan Hasil Bumi</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-indigo-600 text-xl">✓</span> Supply Chain Management</li>
                <li className="flex items-center gap-3 font-medium"><span className="text-indigo-600 text-xl">✓</span> Pergudangan & Distribusi Darat</li>
              </ul>
              <Button>Hubungi Tim Logistik</Button>
            </div>
            <div className="md:w-1/2 bg-soft aspect-video rounded-3xl border border-border flex items-center justify-center">
              <span className="text-foreground/30 font-medium">Gambar Ilustrasi Logistik</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
