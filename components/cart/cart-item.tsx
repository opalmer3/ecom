"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { formatCurrency } from "@/lib/utils/currency";
import { Select } from "@/components/ui/select";
import { CartLine } from "@/types/storefront.types";

interface CartItemProps {
  node: CartLine;
  handleRemoveItem: (lineId: string) => void;
  handleUpdateQuantity: (
    lineId: string,
    merchandiseId: string,
    quantity: number
  ) => void;
}

function CartItem({
  node,
  handleRemoveItem,
  handleUpdateQuantity,
}: CartItemProps) {
  return (
    <div key={node.id} className="flex items-start gap-md py-md">
      <ResponsiveImage
        fill
        alt={node.merchandise.image?.altText ?? ""}
        containerClassName="rounded-lg overflow-hidden bg-muted/20 w-24 h-24"
        sizes="96px"
        src={node.merchandise.image?.url ?? ""}
      />

      <div className="flex flex-1 flex-col gap-md">
        <div className="space-y-1">
          <h4 className="font-medium">{node.merchandise.product.title}</h4>
          {node.merchandise.title !== "Default Title" && (
            <span className="type-body-sm">({node.merchandise.title})</span>
          )}
        </div>

        <Select
          className="text-center shrink-0 w-[80px] ml-auto"
          containerClassName="flex"
          value={node.quantity.toString()}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleUpdateQuantity(
              node.id,
              node.merchandise.id,
              parseInt(e.target.value)
            )
          }
        >
          {Array.from(
            {
              length: Math.max(
                Math.min(node.merchandise.quantityAvailable ?? 20, 20),
                node.quantity
              ),
            },
            (_, i) => i + 1
          ).map((value) => (
            <option key={value} value={value.toString()}>
              {value}
            </option>
          ))}
        </Select>

        <span className="font-medium flex items-center gap-sm self-end">
          <span className="type-body-sm text-xs">
            ({node.quantity} x{" "}
            {formatCurrency(
              node.merchandise.price.amount,
              node.merchandise.price.currencyCode
            )}
            )
          </span>

          {formatCurrency(
            (parseFloat(node.merchandise.price.amount) * node.quantity).toFixed(
              2
            ),
            node.merchandise.price.currencyCode
          )}
        </span>
      </div>

      <Button
        aria-label={`Remove ${node.merchandise.title} from cart`}
        className="h-fit w-fit"
        size="icon"
        variant="ghost"
        onClick={() => handleRemoveItem(node.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

export { CartItem };
