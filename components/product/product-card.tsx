import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Collection } from "@/types/storefront.types";
import { getProductUrl } from "@/lib/utils/url";
import { ArrowRight } from "lucide-react";

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  collection: Pick<Collection, "title" | "handle">;
  price: string;
  salePrice?: string;
  badge?: string;
  image?: {
    altText: string;
    url: string;
  };
};

export type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product: { id, ...product } }: ProductCardProps) {
  const cardTitleId = `title-${id}`;
  const cardDescriptionId = `description-${id}`;

  const productUrl = getProductUrl({
    collection: product.collection,
    handle: product.handle,
  });

  return (
    <div
      aria-describedby={cardDescriptionId}
      aria-labelledby={cardTitleId}
      className="align-stretch flex flex-col"
    >
      <div className="bg-muted/20 relative aspect-[3/4] rounded-lg">
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
          <h3 className="type-button-md" id={cardTitleId}>
            {product.title}
          </h3>
          <ArrowRight className="size-4" />
        </Link>

        <div
          className="gap-xs flex flex-row items-center"
          id={cardDescriptionId}
        >
          <span
            aria-label={`Actual Price ${product.price}`}
            className="type-button-md"
          >
            &pound;{product.price}
          </span>
          {Boolean(product.salePrice) && (
            <span
              aria-label={`Was Price ${product.salePrice}`}
              className="type-button-sm line-through text-foreground/80"
            >
              &pound;{product.salePrice}
            </span>
          )}
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
    </div>
  );
}
