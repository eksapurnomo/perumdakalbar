import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownContent {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  contentHtml?: string;
}

// category can be 'news', 'pages', 'governance', 'reports'
export async function getMarkdownContent(category: string, slug: string): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title || '',
    date: matterResult.data.date || '',
    description: matterResult.data.description || '',
    image: matterResult.data.image || '',
  };
}

export function getAllMarkdownSlugs(category: string) {
  const dirPath = path.join(contentDirectory, category);
  if (!fs.existsSync(dirPath)) return [];
  const fileNames = fs.readdirSync(dirPath);
  return fileNames.filter(f => f.endsWith('.md')).map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

export function getSortedMarkdownContent(category: string): Omit<MarkdownContent, 'contentHtml'>[] {
  const dirPath = path.join(contentDirectory, category);
  if (!fs.existsSync(dirPath)) return [];
  
  const fileNames = fs.readdirSync(dirPath);
  const allData = fileNames.filter(f => f.endsWith('.md')).map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(dirPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      description: matterResult.data.description || '',
      image: matterResult.data.image || '',
    };
  });

  return allData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
