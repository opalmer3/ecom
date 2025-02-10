import { Product } from "@/types/storefront.types";
import { ProductCard } from "@/components/product/product-card";
import { CardContainer } from "@/components/card-container";

type RelatedProduct = Pick<
  Product,
  "handle" | "description" | "id" | "title"
> & {
  collections: {
    edges: Array<{
      node: Pick<
        Product["collections"]["edges"][0]["node"],
        "handle" | "title"
      >;
    }>;
  };
  featuredImage?: {
    url: string;
    altText?: string;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange?: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
};

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) return null;

  return (
    <CardContainer
      content={{
        title: "You May Also Like",
      }}
    >
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            handle: product.handle,
            title: product.title,
            collection: product.collections.edges?.[0].node,
            description: product.description,
            price: product.priceRange.minVariantPrice.amount,
            salePrice:
              product.compareAtPriceRange?.minVariantPrice?.amount &&
              parseFloat(product.compareAtPriceRange.minVariantPrice.amount) >
                parseFloat(product.priceRange.minVariantPrice.amount)
                ? product.compareAtPriceRange.minVariantPrice.amount
                : undefined,
            image: product.featuredImage?.url
              ? {
                  url: product.featuredImage.url,
                  altText: product.featuredImage.altText ?? product.title,
                }
              : undefined,
          }}
        />
      ))}
    </CardContainer>
  );
}
