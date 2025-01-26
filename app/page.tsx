import { CardContainer } from "@/components/card-container";
import { Hero } from "@/components/hero/hero";
import { ProductCard } from "@/components/product/product-card";
import { BrandHighlights } from "@/components/brand-highlights";
import { getProducts } from "@/lib/services/products";
import { getCollections } from "@/lib/services/collections";
import { CollectionCard } from "@/components/collection/collection-card";

export default async function Home() {
  const [products, collections] = await Promise.all([
    getProducts(6),
    getCollections(4),
  ]);

  console.log(products, collections);
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
          src: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/home_hero.jpg?v=1737568895",
          mobileSrc:
            "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/home_hero_mobile.jpg?v=1737574826",
          alt: "Stylish furniture and floor lamp",
        }}
      />

      {products?.length ? (
        <CardContainer
          id="bestsellers"
          content={{
            eyebrow: "Featured Products",
            title: "Discover Our Bestsellers",
            link: {
              text: "View All",
              url: "/bestsellers",
            },
          }}
        >
          {products?.map((product) => (
            <ProductCard
              key={product.node.id}
              product={{
                id: product.node.id,
                handle: product.node.handle,
                title: product.node.title,
                description: product.node.description,
                collection: product.node.collections.edges?.[0].node,
                price: product.node.priceRange.minVariantPrice.amount,
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

      <BrandHighlights />

      {collections?.length ? (
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
                        collection.node.image.altText || collection.node.title,
                    }
                  : undefined
              }
            />
          ))}
        </CardContainer>
      ) : null}
    </>
  );
}
