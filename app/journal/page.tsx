import { getAllPosts } from "@/lib/journal";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lighting Ideas & Trends | The Modern Lighting Store Journal",
  description:
    "Explore expert lighting tips, design inspiration, and the latest trends in modern lighting. Get inspired with our carefully curated articles.",
};

export default async function JournalPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto py-xl">
      <h1 className="type-title-xl mb-xl">Journal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-(--spacing-2xl)">
        {posts.map((post, index) => (
          <article key={post.slug} className="group">
            <Link className="no-underline" href={`/journal/${post.slug}`}>
              <div className="grid xl:grid-cols-2 gap-(--spacing-lg)">
                {post.metadata.cardImage && (
                  <ResponsiveImage
                    fill
                    alt={post.metadata.title}
                    className="object-cover transition-transform group-hover:scale-105"
                    containerClassName="aspect-square rounded-lg overflow-hidden"
                    loading={index < 2 ? "eager" : "lazy"}
                    src={post.metadata.cardImage}
                  />
                )}
                <div className="flex flex-col gap-(--spacing-sm)">
                  <h2 className="type-title-lg group-hover:text-primary transition-colors">
                    {post.metadata.title}
                  </h2>
                  {post.metadata.date && (
                    <time className="type-label-sm text-muted-foreground">
                      {new Date(post.metadata.date).toLocaleDateString(
                        "en-GB",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                  )}
                  {post.metadata.excerpt && (
                    <p className="type-body-md text-muted-foreground">
                      {post.metadata.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
