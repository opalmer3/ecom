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
import { siteConfig } from "@/lib/site.config";

export const revalidate = 3600;
export default async function Home() {
  const [bestsellers, collections] = await Promise.all([
    getCollectionByHandle(siteConfig.featuredCollection),
    getCollections(8),
  ]);

  return (
    <>
      <Hero
        description={siteConfig.hero.description}
        title={siteConfig.hero.title}
        xAlign="left"
        yAlign="bottom"
        cta={{
          label: siteConfig.hero.cta.label,
          href: siteConfig.hero.cta.href,
          variant: "secondary",
        }}
        image={{
          src: siteConfig.hero.image.src,
          mobileSrc: siteConfig.hero.image.mobileSrc,
          alt: siteConfig.hero.image.alt,
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
