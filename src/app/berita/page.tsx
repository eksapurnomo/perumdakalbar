import { Metadata } from "next";
import Link from "next/link";
import { getSortedMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Berita - Perumda Kalbar",
  description: "Berita terbaru dan informasi dari Perumda Kalbar.",
};

export default function NewsPage() {
  const allNews = getSortedMarkdownContent('news');

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Berita Terbaru</h1>
        <p className="text-lg text-foreground/70">Ikuti perkembangan dan informasi terkini dari kami.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allNews.map((news) => (
          <Link key={news.slug} href={`/berita/${news.slug}`} className="group block border border-border rounded-2xl p-6 transition-colors hover:border-primary/50">
            <p className="text-sm text-foreground/50 mb-3">{news.date}</p>
            <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{news.title}</h2>
            <p className="text-foreground/70">{news.description}</p>
          </Link>
        ))}
      </div>
      
      {allNews.length === 0 && (
        <div className="text-center py-20 border border-dashed border-border rounded-2xl">
          <p className="text-foreground/50">Belum ada berita yang diterbitkan.</p>
        </div>
      )}
    </div>
  );
}
