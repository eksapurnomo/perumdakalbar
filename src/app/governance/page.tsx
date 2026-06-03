import { Metadata } from "next";
import { FileText, Shield, Scale, Target, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance - Perumda Aneka Usaha",
};

const DOC_CATEGORIES = [
  { id: 'gcg', title: 'Good Corporate Governance (GCG)', icon: Shield, desc: 'Pedoman dan tata kelola perusahaan yang baik.' },
  { id: 'annual-report', title: 'Laporan Tahunan', icon: FileText, desc: 'Laporan kinerja dan keuangan tahunan perusahaan.' },
  { id: 'sustainability', title: 'Laporan Keberlanjutan', icon: Target, desc: 'Laporan dampak lingkungan dan sosial.' },
  { id: 'risk-management', title: 'Manajemen Risiko', icon: Scale, desc: 'Kebijakan mitigasi dan manajemen risiko korporasi.' },
  { id: 'procurement', title: 'Pengadaan Barang & Jasa', icon: CheckCircle, desc: 'SOP dan transparansi proses pengadaan.' },
];

export default function GovernancePage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Governance Center</h1>
        <p className="text-xl text-foreground/70">
          Komitmen Perumda Aneka Usaha terhadap transparansi, akuntabilitas, dan tata kelola perusahaan yang berstandar tinggi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOC_CATEGORIES.map((cat) => (
          <div key={cat.id} className="bg-white border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors shadow-sm hover:shadow-md flex flex-col">
            <div className="w-14 h-14 bg-soft rounded-2xl flex items-center justify-center text-primary mb-6">
              <cat.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
            <p className="text-foreground/70 mb-8 flex-grow">{cat.desc}</p>
            
            <div className="pt-6 border-t border-border mt-auto">
              <p className="text-sm text-foreground/50 italic mb-4">Mendukung integrasi PDF interaktif</p>
              <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-2">
                Jelajahi Dokumen <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Whistleblowing System */}
      <div className="mt-32 bg-soft border border-border rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Whistleblowing System (WBS)</h2>
          <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
            Kami menyediakan sarana pelaporan yang aman dan rahasia bagi siapa saja yang memiliki informasi terkait pelanggaran hukum, kode etik, atau benturan kepentingan di lingkungan Perumda Aneka Usaha.
          </p>
          <button className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors shadow-lg">
            Buat Laporan Pelanggaran
          </button>
        </div>
        <div className="w-full md:w-1/3 aspect-square bg-white border border-border rounded-3xl flex items-center justify-center relative overflow-hidden">
          <Shield size={120} className="text-primary/10 absolute -right-4 -bottom-4" />
          <Shield size={80} className="text-primary/40" />
        </div>
      </div>
    </div>
  );
}
