import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconItem {
  icon: LucideIcon;
  label: string;
  description?: string;
}

interface IconGridProps {
  items: IconItem[];
  columns?: 3 | 4 | 5 | 6;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Icon Grid Section
 *
 * Simple icon + text grid for trust badges, shipping info, etc.
 *
 * @example
 * ```tsx
 * import { Truck, RefreshCw, Shield, CreditCard } from "lucide-react";
 *
 * <IconGrid
 *   items={[
 *     { icon: Truck, label: "Free Shipping", description: "On orders over £50" },
 *     { icon: RefreshCw, label: "Easy Returns" },
 *     { icon: Shield, label: "Secure Checkout" },
 *     { icon: CreditCard, label: "Pay Later" },
 *   ]}
 *   columns={4}
 * />
 * ```
 */
export function IconGrid({
  items,
  columns = 4,
  title,
  description,
  className,
}: IconGridProps) {
  const gridCols = {
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-5",
    6: "grid-cols-3 md:grid-cols-6",
  };

  return (
    <section className={cn("py-xl border-y border-border", className)}>
      <div className="container">
        {(title || description) && (
          <div className="text-center mb-2xl">
            {title && <h2 className="type-title-lg mb-md">{title}</h2>}
            {description && (
              <p className="type-body-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        <div className={cn("grid gap-lg", gridCols[columns])}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-xs"
            >
              <item.icon className="size-8 text-primary" />
              <span className="type-button-sm">{item.label}</span>
              {item.description && (
                <span className="type-body-sm text-muted-foreground">
                  {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
