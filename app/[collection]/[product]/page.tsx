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
import { Product } from "@/types/storefront.types";
import LazyWrap from "@/components/lazy-wrap";
import { ProductJsonLd } from "@/components/json-ld/product-jsonld";

const ProductReviews = dynamic(
  () =>
    import("@/components/product/product-reviews").then(
      (mod) => mod.ProductReviews
    ),
  { ssr: true }
);

const RelatedProducts = dynamic(
  () =>
    import("@/components/product/related-products").then(
      (mod) => mod.RelatedProducts
    ),
  { ssr: true }
);

const BrandHighlights = dynamic(
  () =>
    import("@/components/brand-highlights").then((mod) => mod.BrandHighlights),
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
    title: `${title} | ${data.product.collections.edges[0]?.node.title} | The Modern Lighting Store`,
    description,
    keywords: [
      ...data.product.tags,
      data.product.collections.edges[0]?.node.title,
    ],
    openGraph: {
      title: `${title} | ${data.product.collections.edges[0]?.node.title} | The Modern Lighting Store`,
      description,
      type: "website",
      images:
        data.product.images?.edges.map((image) => ({
          url: image.node.url,
          width: 640,
          height: 640,
          alt: `${title}`,
        })) || [],
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${data.product.collections.edges[0]?.node.title} | The Modern Lighting Store`,
      description,
      images:
        data.product.images?.edges.map((image) => ({
          url: image.node.url,
          width: 640,
          height: 640,
          alt: `${title}`,
        })) || [],
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
      <ProductJsonLd
        description={data.product.description}
        images={data.product.images.edges.map((edge) => edge.node.url)}
        name={data.product.title}
        brand={{
          name: "The Modern Lighting Store",
        }}
        offers={data.product.variants.edges.map((variant) => ({
          "@type": "Offer",
          price: parseFloat(variant.node.price.amount),
          priceCurrency: variant.node.price.currencyCode,
          availability: variant.node.availableForSale
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${collection}/${product}`,
          ...(variant.node.sku && { sku: variant.node.sku }),
        }))}
        {...(ratingsWidget && {
          aggregateRating: {
            ratingValue: parseFloat(
              ratingsWidget.match(
                /data-average-rating='(\d+\.\d+)'\s+data-number-of-reviews='(\d+)'/
              )?.[1] || "5"
            ),
            reviewCount: parseInt(
              ratingsWidget.match(
                /data-average-rating='(\d+\.\d+)'\s+data-number-of-reviews='(\d+)'/
              )?.[2] || "1"
            ),
          },
        })}
      />
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

      <LazyWrap>
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
      </LazyWrap>
      <LazyWrap>
        <BrandHighlights />
      </LazyWrap>
    </>
  );
}
