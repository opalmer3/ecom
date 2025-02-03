import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/journal";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { ArticleJsonLd } from "@/components/json-ld/article-jsonld";

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
      <article className="container mx-auto py-xl">
        <header className="mb-xl">
          <h1 className="type-title-2xl mb-md">{post.metadata.title}</h1>
          {post.metadata.date && (
            <time className="type-label-lg text-muted-foreground">
              {new Date(post.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>

        {post.metadata.heroImage ? (
          <div className="relative aspect-21/9 mb-xl overflow-hidden rounded-lg">
            <ResponsiveImage
              fill
              priority
              alt={post.metadata.title}
              className="object-cover"
              loading="eager"
              src={post.metadata.heroImage}
            />
          </div>
        ) : null}
        <div className="prose prose-lg">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
}
