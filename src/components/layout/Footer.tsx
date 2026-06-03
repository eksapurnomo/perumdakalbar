import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-soft py-12 text-sm text-foreground/80 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold text-lg text-primary mb-4">Perumda Kalbar</h3>
          <p className="max-w-xs">
            Menyediakan layanan air bersih yang andal dan berkualitas untuk masyarakat Kalimantan Barat.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Tautan</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
            <li><Link href="/services" className="hover:text-primary">Layanan</Link></li>
            <li><Link href="/berita" className="hover:text-primary">Berita</Link></li>
            <li><Link href="/tentang" className="hover:text-primary">Tentang</Link></li>
            <li><Link href="/kontak" className="hover:text-primary">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Kontak</h4>
          <ul className="space-y-2">
            <li>Jl. Pahlawan No.1, Pontianak</li>
            <li>info@perumdakalbar.go.id</li>
            <li>(0561) 123456</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-border text-center">
        <p>&copy; {new Date().getFullYear()} Perumda Kalbar. All rights reserved.</p>
      </div>
    </footer>
  );
}
