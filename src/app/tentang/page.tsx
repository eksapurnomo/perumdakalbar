import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Perumda Kalbar",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Tentang Perumda Kalbar</h1>
      <p className="text-xl text-foreground/70 mb-16 max-w-2xl mx-auto">
        Mengalirkan kehidupan dan memajukan peradaban melalui pengelolaan sumber daya air yang profesional dan berkelanjutan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <div>
          <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
          <p className="text-foreground/70 leading-relaxed">
            Menjadi perusahaan penyedia air minum terbaik dan terpercaya di Indonesia dengan standar pelayanan internasional yang mengutamakan kelestarian lingkungan.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
          <ul className="space-y-3 text-foreground/70 list-disc pl-5">
            <li>Menyediakan air bersih berkualitas sesuai standar kesehatan.</li>
            <li>Memberikan pelayanan prima kepada seluruh pelanggan.</li>
            <li>Mengembangkan infrastruktur berbasis teknologi modern.</li>
            <li>Menjaga kelestarian sumber daya alam dan lingkungan hidup.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
