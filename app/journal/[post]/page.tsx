import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/journal";
import { ResponsiveImage } from "@/components/ui/responsive-image";

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

  return (
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

      {post.metadata.heroImage && (
        <div className="relative aspect-21/9 mb-xl overflow-hidden rounded-lg">
          <ResponsiveImage
            fill
            priority
            alt={post.metadata.title}
            className="object-cover"
            src={post.metadata.heroImage}
          />
        </div>
      )}

      <div className="prose prose-lg">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
