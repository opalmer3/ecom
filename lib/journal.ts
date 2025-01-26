import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const journalDirectory = path.join(process.cwd(), "journal");

export interface PostMetadata {
  title: string;
  date: string;
  cardImage: string;
  heroImage: string;
  excerpt?: string;
}

export interface JournalPost {
  slug: string;
  content: string;
  metadata: PostMetadata;
}

export async function getAllPosts(): Promise<JournalPost[]> {
  const files = await fs.readdir(journalDirectory);
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith(".mdx"))
      .map(async file => {
        const slug = file.replace(/\.mdx$/, "");
        const fullPath = path.join(journalDirectory, file);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { content, data } = matter(fileContents);
        
        return {
          slug,
          content,
          metadata: {
            title: data.title || formatSlug(slug),
            date: data.date || "",
            cardImage: data.cardImage || "",
            heroImage: data.heroImage || "",
            excerpt: data.excerpt || "",
          },
        };
      })
  );
  
  return posts.sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export async function getPost(slug: string): Promise<JournalPost | null> {
  try {
    const fullPath = path.join(journalDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    
    return {
      slug,
      content,
      metadata: {
        title: data.title || formatSlug(slug),
        date: data.date || "",
        cardImage: data.cardImage || "",
        heroImage: data.heroImage || "",
        excerpt: data.excerpt || "",
      },
    };
  } catch {
    return null;
  }
}

function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
