import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { getProductByHandle, getProducts } from "@/lib/services/products";
import { ProductDescription } from "@/components/product/product-description";
import {
  getProductRatingsWidget,
  getServerReviewWidget,
} from "@/lib/services/judge-me/server";
import "./styles.css";
import dynamic from "next/dynamic";
import LazyWrap from "@/components/lazy-wrap";
import { Product } from "@/types/storefront.types";
import { RelatedProducts } from "@/components/product/related-products";
import { BrandHighlights } from "@/components/brand-highlights";

const ProductReviews = dynamic(
  () =>
    import("@/components/product/product-reviews").then(
      (mod) => mod.ProductReviews
    ),
  { ssr: true }
);

type PageParams = {
  params: Promise<{ collection: string; product: string }>;
};

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { product } = await params;
  const data = await getProductByHandle(product);

  if (!data?.product) {
    notFound();
  }

  const title = data.product.seo.title || data.product.title;
  const description = data.product.seo.description || data.product.description;

  if (!title || !description) {
    throw new Error(
      `Missing title or description for product ${data?.product?.handle}`
    );
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  const validPaths: { collection: string; product: string }[] = [];

  products.forEach((product) => {
    const collection = product.node.collections.edges[0]?.node;
    if (collection) {
      validPaths.push({
        collection: collection.handle,
        product: product.node.handle,
      });
    }
  });

  return validPaths;
}

export default async function ProductPage({ params }: PageParams) {
  const { collection, product } = await params;

  const [data, ratingsWidget, initialReviews] = await Promise.all([
    getProductByHandle(product),
    getProductRatingsWidget(product),
    getServerReviewWidget(product),
  ]);

  if (!data?.product) {
    notFound();
  }

  return (
    <>
      <Breadcrumb className="container mx-auto py-md md:pt-0">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${collection}`}>
                {data.product.collections.edges[0]?.node.title}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-foreground/80">
              {data.product.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ProductDescription
        product={data.product as Product}
        reviewWidget={ratingsWidget}
      />

      <LazyWrap>
        <ProductReviews
          handle={data.product.handle}
          initialData={initialReviews}
        />
      </LazyWrap>

      <RelatedProducts
        products={data.product.collections.edges[0]?.node.products.edges
          .map((edge) => ({
            ...edge.node,
            featuredImage: edge.node.featuredImage
              ? {
                  url: edge.node.featuredImage.url,
                  altText: edge.node.featuredImage.altText || undefined,
                }
              : undefined,
          }))
          .filter((product) => product.handle !== data?.product?.handle)}
      />

      <BrandHighlights />
    </>
  );
}
