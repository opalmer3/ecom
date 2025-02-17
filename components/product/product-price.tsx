import { formatCurrency } from "@/lib/utils/currency";
import { calculateDiscount } from "@/lib/utils/price";
import { Pill } from "@/components/ui/pill";
import { MoneyV2 } from "@/types/storefront.types";

interface ProductPriceProps {
  price: {
    minVariantPrice: Pick<MoneyV2, "amount" | "currencyCode">;
    maxVariantPrice?: Pick<MoneyV2, "amount" | "currencyCode">;
  };
  compareAtPrice?: {
    minVariantPrice: Pick<MoneyV2, "amount" | "currencyCode">;
    maxVariantPrice?: Pick<MoneyV2, "amount" | "currencyCode">;
  } | null;
}

export function ProductPrice({ price, compareAtPrice }: ProductPriceProps) {
  const { minVariantPrice, maxVariantPrice } = price;
  const hasMaxPrice =
    maxVariantPrice &&
    Number(maxVariantPrice.amount) > Number(minVariantPrice.amount);

  const isOnSale =
    compareAtPrice?.minVariantPrice &&
    Number(compareAtPrice.minVariantPrice.amount) >
      Number(minVariantPrice.amount);

  return (
    <div className="flex items-center gap-(--spacing-sm)">
      <div className="flex items-center gap-(--spacing-xs)">
        <span className="type-title-md">
          {hasMaxPrice ? (
            <>
              {formatCurrency(
                minVariantPrice.amount,
                minVariantPrice.currencyCode
              )}
              {" - "}
              {formatCurrency(
                maxVariantPrice.amount,
                maxVariantPrice.currencyCode
              )}
            </>
          ) : (
            formatCurrency(minVariantPrice.amount, minVariantPrice.currencyCode)
          )}
        </span>
        {isOnSale && (
          <>
            <span className="type-body-sm text-muted-foreground line-through">
              {formatCurrency(
                compareAtPrice.minVariantPrice.amount,
                compareAtPrice.minVariantPrice.currencyCode
              )}
            </span>
            <Pill className="type-body-sm" variant="secondary">
              {calculateDiscount(
                Number(minVariantPrice.amount),
                Number(compareAtPrice.minVariantPrice.amount)
              )}
              % Off
            </Pill>
          </>
        )}
      </div>
    </div>
  );
}
