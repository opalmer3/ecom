import { formatCurrency } from "@/lib/utils/currency";
import { calculateDiscount } from "@/lib/utils/price";
import { Pill } from "@/components/ui/pill";
import { MoneyV2 } from "@/types/storefront.types";

interface ProductPriceProps {
  price: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
}

export function ProductPrice({ price, compareAtPrice }: ProductPriceProps) {
  const isOnSale =
    compareAtPrice && Number(compareAtPrice.amount) > Number(price.amount);

  return (
    <div className="flex items-center gap-sm">
      <div className="flex items-center gap-xs">
        <span className="type-title-md">
          {formatCurrency(price.amount, price.currencyCode)}
        </span>
        {isOnSale && (
          <>
            <span className="type-body-sm text-muted-foreground line-through">
              {formatCurrency(
                compareAtPrice.amount,
                compareAtPrice.currencyCode
              )}
            </span>
            <Pill className="text-xs type-body-sm" variant="secondary">
              {calculateDiscount(
                Number(price.amount),
                Number(compareAtPrice.amount)
              )}
              % Off
            </Pill>
          </>
        )}
      </div>
    </div>
  );
}
