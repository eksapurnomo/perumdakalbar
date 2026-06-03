import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarkdownContent, getAllMarkdownSlugs } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllMarkdownSlugs('news');
  return slugs.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const postData = await getMarkdownContent('news', resolvedParams.slug);
    return {
      title: `${postData.title} - Perumda Kalbar`,
      description: postData.description,
    };
  } catch {
    return {
      title: "Not Found",
    };
  }
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const postData = await getMarkdownContent('news', resolvedParams.slug);
    
    return (
      <article className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link href="/berita" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-primary mb-8 transition-colors">
          &larr; Kembali ke Berita
        </Link>
        <header className="mb-10">
          <p className="text-sm text-foreground/50 mb-3">{postData.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            {postData.title}
          </h1>
          <p className="text-lg text-foreground/70">{postData.description}</p>
        </header>
        
        <div 
          className="[&>p]:mb-6 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>a]:text-primary text-foreground/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />
      </article>
    );
  } catch (e) {
    notFound();
  }
}
