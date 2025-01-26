import { Truck } from "lucide-react";
import { getShippingDateRange } from "@/lib/utils/date";
import { Metafield } from "@/types/storefront.types";

interface ShippingDateProps {
  metafields: Array<Metafield | null>;
}

interface ShippingDateMetafield {
  minDays: number;
  maxDays: number;
}

export function ShippingDate({ metafields }: ShippingDateProps) {
  const shippingDateMetafield = metafields.find(
    (metafield) => metafield?.key === "shipping_date"
  );

  if (!shippingDateMetafield?.value) return null;

  let shippingDates;
  try {
    const { minDays, maxDays } = JSON.parse(
      shippingDateMetafield.value
    ) as ShippingDateMetafield;
    shippingDates = getShippingDateRange(minDays, maxDays);
  } catch (e) {
    console.error("Error parsing shipping date metafield:", e);
    return null;
  }

  return (
    <div className="flex items-center gap-xs text-muted-foreground type-body-sm">
      <Truck className="size-4" />
      <span>
        Expected delivery between{" "}
        <span className="font-medium">{shippingDates.min}</span> -{" "}
        <span className="font-medium">{shippingDates.max}</span>
      </span>
    </div>
  );
}
