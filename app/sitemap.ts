import { getAllPosts } from "@/lib/journal";
import { getCollections } from "@/lib/services/collections";
import { getProducts } from "@/lib/services/products";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL environment variable is not defined");
  }

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-notice`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/returns-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ] as const;

  // Get dynamic routes
  const [products, collections, journalPosts] = await Promise.all([
    getProducts(),
    getCollections(),
    getAllPosts(),
  ]);

  // Create product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/${product.node.collections.edges[0]?.node.handle}/${product.node.handle}`,
    lastModified: new Date(product.node.updatedAt),
    changeFrequency: "daily" as const,
    priority: 1,
    images: product.node.images.edges.slice(0, 3).map((image) => image.node.url),
  }));

  // Create collection routes
  const collectionRoutes = collections.map((collection) => {
    const firstThreeProductImages = collection.node.products.edges
      .slice(0, 3)
      .map((product) => product.node.images.edges[0]?.node)
      .filter((image): image is NonNullable<typeof image> => image != null);

    return {
      url: `${baseUrl}/${collection.node.handle}`,
      lastModified: new Date(collection.node.updatedAt),
      changeFrequency: "daily" as const,
      priority: 1,
      images: firstThreeProductImages.map((image) => image.url),
    };
  });

  // Create journal post routes
  const journalPostRoutes = journalPosts.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(post.metadata.modifiedDate),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...collectionRoutes,
    ...journalPostRoutes,
  ];
}
