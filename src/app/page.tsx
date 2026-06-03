import Link from "next/link";
import Button from "@/components/ui/Button";
import { getSortedMarkdownContent } from "@/lib/markdown";
import { ArrowRight, Building2, Ticket, Ship, ShoppingCart } from "lucide-react";
import Hero from "@/components/home/Hero";

export default function Home() {
  const latestNews = getSortedMarkdownContent('news').slice(0, 3);
  return (
    <div className="flex flex-col pb-32">
      <Hero />
      
      {/* Business Pillars Section */}
      <section className="bg-soft py-32 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pilar Bisnis Kami</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Empat fokus utama usaha yang menjadi motor penggerak pembangunan ekonomi daerah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1 */}
            <Link href="/services#property" className="group bg-background p-10 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
              <div className="h-14 w-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <Building2 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business & Property</h3>
              <p className="text-foreground/70 mb-8 text-lg">
                Pengelolaan dan penyewaan aset properti daerah termasuk ruang usaha, gudang, dan lahan strategis komersial.
              </p>
              <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Pelajari Lebih Lanjut <ArrowRight size={18} />
              </span>
            </Link>

            {/* Pillar 2 */}
            <Link href="/services#ticketing" className="group bg-background p-10 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
              <div className="h-14 w-14 bg-secondary/10 text-secondary flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <Ticket size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ticketing & PPOB</h3>
              <p className="text-foreground/70 mb-8 text-lg">
                Layanan Payment Point Online Bank (PPOB) dan penyediaan tiket pesawat, kapal laut, hingga travel.
              </p>
              <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Pelajari Lebih Lanjut <ArrowRight size={18} />
              </span>
            </Link>

            {/* Pillar 3 */}
            <Link href="/services#tugboat" className="group bg-background p-10 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
              <div className="h-14 w-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <Ship size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tug Boat Rental</h3>
              <p className="text-foreground/70 mb-8 text-lg">
                Penyewaan armada tug boat untuk mendukung sektor pertambangan dan logistik perairan di wilayah Kalimantan.
              </p>
              <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Pelajari Lebih Lanjut <ArrowRight size={18} />
              </span>
            </Link>

            {/* Pillar 4 */}
            <Link href="/marketplace" className="group bg-background p-10 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
              <div className="h-14 w-14 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <ShoppingCart size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Marketplace Digital</h3>
              <p className="text-foreground/70 mb-8 text-lg">
                Platform e-commerce B2B dan B2C untuk produk unggulan UMKM, korporasi, dan mitra strategis daerah.
              </p>
              <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Kunjungi Marketplace <ArrowRight size={18} />
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Tentang Perusahaan</h2>
        <p className="text-xl text-foreground/80 leading-relaxed">
          Sebagai Badan Usaha Milik Daerah (BUMD) Provinsi Kalimantan Barat, kami bertransformasi dari perusahaan konvensional menjadi entitas bisnis modern yang siap menghadapi tantangan era digital, mendorong pertumbuhan UMKM, dan meningkatkan Pendapatan Asli Daerah (PAD).
        </p>
        <div className="mt-10">
          <Button href="/tentang" variant="outline">Baca Profil Lengkap</Button>
        </div>
      </section>

      {/* Latest News */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border pt-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Berita Terbaru</h2>
            <p className="text-foreground/70">Informasi dan pembaruan terkini dari perusahaan.</p>
          </div>
          <Button href="/berita" variant="outline" className="hidden sm:inline-flex">Lihat Semua Berita</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <Link key={news.slug} href={`/berita/${news.slug}`} className="group block border border-border rounded-2xl p-6 transition-colors hover:border-primary/50 shadow-sm hover:shadow-md">
              <p className="text-sm text-foreground/50 mb-3">{news.date}</p>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{news.title}</h3>
              <p className="text-foreground/70 line-clamp-3">{news.description}</p>
            </Link>
          ))}
          {latestNews.length === 0 && (
            <p className="text-foreground/50 col-span-3 text-center py-12 border border-dashed border-border rounded-2xl">Belum ada berita yang diterbitkan.</p>
          )}
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto bg-primary text-white rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Tumbuh Bersama Kami</h2>
          <p className="text-xl text-white/80 mb-10">
            Kami membuka peluang kerja sama yang luas bagi investor, vendor, dan mitra strategis untuk mengembangkan potensi Kalimantan Barat bersama-sama.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/partnership" className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-white text-primary hover:bg-white/90 h-12 px-8 text-lg">
              Menjadi Mitra
            </Link>
            <Link href="/kontak" className="inline-flex items-center justify-center rounded-md font-medium transition-colors border border-white/30 bg-transparent text-white hover:bg-white/10 h-12 px-8 text-lg">
              Hubungi Tim Bisnis
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      </section>

    </div>
  );
}
