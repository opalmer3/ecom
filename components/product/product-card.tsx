import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Collection, MoneyV2 } from "@/types/storefront.types";
import { getProductUrl } from "@/lib/utils/url";
import { ArrowRight } from "lucide-react";

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  collection: Pick<Collection, "title" | "handle">;
  price: {
    minVariantPrice: Pick<MoneyV2, "amount" | "currencyCode">;
    maxVariantPrice?: Pick<MoneyV2, "amount" | "currencyCode">;
  };
  compareAtPrice?: {
    minVariantPrice: Pick<MoneyV2, "amount" | "currencyCode">;
    maxVariantPrice?: Pick<MoneyV2, "amount" | "currencyCode">;
  };
  salePrice?: string;
  badge?: string;
  image?: {
    altText: string;
    url: string;
  };
};

export type ProductCardProps = {
  product: Product;
  HeadingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function ProductCard({
  product: { id, ...product },
  HeadingLevel = "h3",
}: ProductCardProps) {
  const cardTitleId = `title-${id}`;
  const cardDescriptionId = `description-${id}`;

  const productUrl = getProductUrl({
    collection: product.collection,
    handle: product.handle,
  });

  return (
    <li
      aria-describedby={cardDescriptionId}
      aria-labelledby={cardTitleId}
      className="align-stretch flex flex-col"
    >
      <div className="bg-muted/20 relative aspect-3/4 rounded-lg">
        <Link className="absolute flex h-full w-full" href={productUrl}>
          {Boolean(product.badge) && (
            <Badge className="absolute right-sm top-sm z-10" variant="accent">
              {product.badge}
            </Badge>
          )}
          <ResponsiveImage
            fill
            alt={product.image?.altText ?? product.title}
            className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            containerClassName="overflow-hidden"
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={product.image?.url ?? ""}
          />
        </Link>
      </div>
      <div className="py-md flex flex-col space-y-xs ">
        <Link className="space-x-2 flex items-center" href={productUrl}>
          <HeadingLevel className="type-button-md" id={cardTitleId}>
            {product.title}
          </HeadingLevel>
          <ArrowRight className="size-4" />
        </Link>

        <div
          className="gap-(--spacing-xs) flex flex-row items-center"
          id={cardDescriptionId}
        >
          <span
            className="type-button-md"
            aria-label={
              product.price.minVariantPrice.amount ===
              product.price.maxVariantPrice?.amount
                ? `Price ${product.price.minVariantPrice.amount}`
                : `Price range from ${product.price.minVariantPrice.amount} to ${product.price.maxVariantPrice?.amount}`
            }
          >
            &pound;{product.price.minVariantPrice.amount}
            {product.price.minVariantPrice.amount <
            product.price.maxVariantPrice?.amount ? (
              <> - &pound;{product.price.maxVariantPrice?.amount}</>
            ) : null}
          </span>
          {product.compareAtPrice ? (
            parseFloat(product.compareAtPrice.minVariantPrice.amount) >
            parseFloat(product.price.minVariantPrice.amount) ? (
              <span
                className="type-button-sm line-through text-foreground/80"
                aria-label={
                  product.compareAtPrice.minVariantPrice.amount ===
                  product.compareAtPrice.maxVariantPrice?.amount
                    ? `Was Price ${product.compareAtPrice.minVariantPrice.amount}`
                    : `Was Price range from ${product.compareAtPrice.minVariantPrice.amount} to ${product.compareAtPrice.maxVariantPrice?.amount}`
                }
              >
                &pound;{product.compareAtPrice.minVariantPrice.amount}
                {product.compareAtPrice.minVariantPrice.amount <
                product.compareAtPrice.maxVariantPrice?.amount ? (
                  <>
                    {" "}
                    - &pound;{product.compareAtPrice.maxVariantPrice?.amount}
                  </>
                ) : null}
              </span>
            ) : null
          ) : null}
        </div>

        {product.collection ? (
          <Link
            className="type-button-sm text-foreground/80 hover:text-foreground"
            href={`/${product.collection.handle}`}
          >
            {product.collection.title}
          </Link>
        ) : null}
      </div>
    </li>
  );
}
