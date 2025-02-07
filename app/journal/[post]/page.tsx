import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/journal";
import { ArticleJsonLd } from "@/components/json-ld/article-jsonld";
import { CustomComponents } from "@/mdx-components";
import { Hero } from "@/components/hero/hero";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{
    post: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPost((await params).post);

  if (!post) {
    return {
      title: "Post Not Found | The Modern Lighting Store",
      description: "The requested article could not be found.",
    };
  }

  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/journal/${post.slug}`;

  return {
    title: `${post.metadata.title} | Modern Lighting Insights | The Modern Lighting Store Journal`,
    description: post.metadata.excerpt,
    authors: [{ name: "The Modern Lighting Store" }],
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      type: "article",
      url: postUrl,
      images: post.metadata.heroImage
        ? [
            {
              url: post.metadata.heroImage,
              width: 1920,
              height: 1080,
              alt: post.metadata.title,
            },
          ]
        : [],
      publishedTime: post.metadata.date,
      modifiedTime: post.metadata.modifiedDate || post.metadata.date,
      siteName: "The Modern Lighting Store",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: post.metadata.heroImage ? [post.metadata.heroImage] : [],
    },
  };
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
