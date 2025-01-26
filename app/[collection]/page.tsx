import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCollections,
  getCollectionByHandle,
} from "@/lib/services/collections";
import { Hero } from "@/components/hero/hero";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { CardContainer } from "@/components/card-container";
import { ProductCard } from "@/components/product/product-card";

type PageParams = {
  params: Promise<{ collection: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const collectionHandle = (await params).collection;
  const data = await getCollectionByHandle(collectionHandle);

  if (!data?.collection) {
    throw new Error("Collection not found");
  }

  const title = data.collection.seo.title || data.collection.title;
  const description =
    data.collection.seo.description || data.collection.description;

  if (!title || !description) {
    throw new Error(
      `Missing title or description for collection ${data?.collection?.handle}`
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
  const data = await getCollections();

  return data
    .filter((collection) => collection.node.products.edges.length > 0)
    .map((collection) => ({
      collection: collection.node.handle,
    }));
}

export default async function CollectionPage({ params }: PageParams) {
  const collectionHandle = (await params).collection;
  const data = await getCollectionByHandle(collectionHandle, {
    productsFirst: 250,
  });

  if (!data?.collection) {
    notFound();
  }

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-lg z-10">
        <Breadcrumb className="container mx-auto">
          <BreadcrumbList className="text-light">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-light/80">
                {data.collection.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Hero
        description={data.collection.description}
        title={data.collection.title}
        xAlign="left"
        yAlign="bottom"
        image={{
          alt: data.collection.image?.altText || data.collection.title,
          mobileSrc: data.collection.metafield?.reference?.image?.url,
          src: data.collection.image?.url,
        }}
      />

      <CardContainer
        rangeEnd={data.collection.products.edges?.length}
        rangeStart={1}
        total={data.collection.products.edges?.length}
      >
        {data.collection.products.edges?.map((product) => (
          <ProductCard
            key={product.node.id}
            product={{
              id: product.node.id,
              handle: product.node.handle,
              title: product.node.title,
              collection: product.node.collections.edges?.[0].node,
              description: product.node.description,
              price: product.node.priceRange.minVariantPrice.amount,
              image: product.node.featuredImage?.url
                ? {
                    url: product.node.featuredImage.url,
                    altText:
                      product.node.featuredImage.altText ?? product.node.title,
                  }
                : undefined,
            }}
          />
        ))}
      </CardContainer>
    </div>
  );
}
