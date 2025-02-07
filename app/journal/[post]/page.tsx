import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/journal";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { ArticleJsonLd } from "@/components/json-ld/article-jsonld";
import { CustomComponents } from "@/mdx-components";
import { Hero } from "@/components/hero/hero";

interface PostPageProps {
  params: Promise<{
    post: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    post: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost((await params).post);

  if (!post) {
    notFound();
  }

  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/journal/${post.slug}`;

  // Format the date to ISO 8601
  const formattedDate = post.metadata.date
    ? new Date(post.metadata.date).toISOString()
    : new Date().toISOString();

  return (
    <>
      <ArticleJsonLd
        description={post.metadata.excerpt}
        images={post.metadata.heroImage ? [post.metadata.heroImage] : []}
        publishedTime={formattedDate}
        title={post.metadata.title}
        url={postUrl}
      />

      {post.metadata.heroImage ? (
        <Hero
          title={post.metadata.title}
          xAlign="left"
          yAlign="bottom"
          image={{
            mobileSrc: post.metadata.cardImage,
            src: post.metadata.heroImage,
            alt: post.metadata.title,
          }}
        />
      ) : null}

      <article className="container mx-auto py-xl">
        <header className="mb-xl">
          {post.metadata.date && (
            <time className="type-label-lg text-muted-foreground">
              {new Date(post.metadata.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>

        <div className="space-y-xl">
          <MDXRemote components={CustomComponents} source={post.content} />
        </div>
      </article>
    </>
  );
}
