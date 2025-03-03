import { CardContainer } from "@/components/card-container";
import { Hero } from "@/components/hero/hero";
import { ProductCard } from "@/components/product/product-card";
import { BrandHighlights } from "@/components/brand-highlights";
import {
  getCollectionByHandle,
  getCollections,
} from "@/lib/services/collections";
import { CollectionCard } from "@/components/collection/collection-card";
import LazyWrap from "@/components/lazy-wrap";

export const revalidate = 3600;
export default async function Home() {
  const [bestsellers, collections] = await Promise.all([
    getCollectionByHandle("best-sellers"),
    getCollections(8),
  ]);

  return (
    <>
      <Hero
        description="Explore innovative lighting designs crafted to elevate your living spaces."
        title="Illuminate Your World"
        xAlign="left"
        yAlign="bottom"
        cta={{
          label: "Browse Our Bestsellers",
          href: "#bestsellers",
          variant: "secondary",
        }}
        image={{
          src: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/assorted_ceiling_lights.jpg?v=1741017614",
          mobileSrc:
            "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/assorted_ceiling_lights_mobile.jpg?v=1741017644",
          alt: "Modern lighting design showcasing exquisite craftsmanship",
        }}
      />

      {bestsellers?.collection?.products?.edges?.length ? (
        <CardContainer
          id="bestsellers"
          content={{
            eyebrow: "Featured Products",
            title: "Discover Our Bestsellers",
            link: {
              text: "View All",
              url: "/best-sellers",
            },
          }}
        >
          {bestsellers?.collection?.products?.edges?.map((product) => (
            <ProductCard
              key={product.node.id}
              product={{
                id: product.node.id,
                handle: product.node.handle,
                title: product.node.title,
                description: product.node.description,
                collection: product.node.collections.edges?.[0].node,
                price: product.node.priceRange,
                compareAtPrice: product.node.compareAtPriceRange,
                image: product.node.featuredImage?.url
                  ? {
                      url: product.node.featuredImage.url,
                      altText:
                        product.node.featuredImage.altText ??
                        product.node.title,
                    }
                  : undefined,
              }}
            />
          ))}
        </CardContainer>
      ) : null}

      <LazyWrap>
        <BrandHighlights />
      </LazyWrap>

      {collections?.length ? (
        <LazyWrap>
          <CardContainer>
            {collections.map((collection) => (
              <CollectionCard
                key={collection.node.id}
                description={collection.node.description}
                handle={collection.node.handle}
                title={collection.node.title}
                image={
                  collection.node.image
                    ? {
                        url:
                          collection.node.metafield?.reference?.image?.url ??
                          collection.node.image.url,
                        altText:
                          collection.node.image.altText ||
                          collection.node.title,
                      }
                    : undefined
                }
              />
            ))}
          </CardContainer>
        </LazyWrap>
      ) : null}
    </>
  );
}
