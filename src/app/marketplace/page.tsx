import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { getProducts, getCategories } from "@/lib/commerce/api";
import { ArrowRight, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketplace B2B - Perumda Aneka Usaha",
};

export default async function MarketplacePage() {
  const categories = await getCategories();
  const featuredProducts = await getProducts({ featured: true });
  const allProducts = await getProducts();

  return (
    <div className="pt-24 pb-24">
      {/* Marketplace Hero */}
      <section className="bg-soft border-b border-border pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <ShoppingBag size={16} /> Beta Version
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Platform Pengadaan & Distribusi Komoditas
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl">
              Marketplace B2B terintegrasi untuk mendukung rantai pasok daerah. Dapatkan akses langsung ke distributor dan produsen lokal.
            </p>
            <div className="pt-4 flex gap-4">
              <Button>Daftar sebagai Pembeli</Button>
              <Button variant="outline">Daftar sebagai Penjual</Button>
            </div>
          </div>
          <div className="flex-1 w-full relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-white flex items-center justify-center">
             <Image src="/web-data/kios-perumdakalbar.png" alt="Kios Perumda" fill className="object-cover" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Category Grid */}
          <div className="lg:w-1/4">
            <div className="sticky top-28 bg-soft rounded-3xl p-6 border border-border">
              <h2 className="text-xl font-bold mb-6">Kategori Produk</h2>
              <ul className="space-y-3">
                <li><button className="text-primary font-semibold w-full text-left">Semua Produk</button></li>
                {categories.map(c => (
                  <li key={c.id}>
                    <button className="text-foreground/70 hover:text-primary transition-colors w-full text-left">
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">MedusaJS Integration</h3>
                <p className="text-sm text-foreground/70">
                  Sistem keranjang dan checkout saat ini dalam tahap integrasi dengan engine headless commerce.
                </p>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="mb-12 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Produk Unggulan</h2>
                <p className="text-foreground/70">Komoditas utama dari jaringan mitra kami.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map((product) => (
                <div key={product.id} className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg flex flex-col">
                  <div className="aspect-square bg-soft relative overflow-hidden">
                    <Image 
                      src={product.imageUrl} 
                      alt={product.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">{product.category}</div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.title}</h3>
                    <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xl font-bold text-foreground">
                        Rp {product.price.toLocaleString('id-ID')}
                      </span>
                      <button className="w-10 h-10 rounded-full bg-soft flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
