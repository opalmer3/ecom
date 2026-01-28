import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Feature Grid Section
 *
 * A grid of feature cards with icons, titles, and descriptions.
 *
 * @example
 * ```tsx
 * import { Truck, Shield, Package } from "lucide-react";
 *
 * <FeatureGrid
 *   features={[
 *     { icon: Truck, title: "Fast Shipping", description: "Free delivery on orders over £50" },
 *     { icon: Shield, title: "Secure Payment", description: "Your data is always protected" },
 *     { icon: Package, title: "Easy Returns", description: "30-day hassle-free returns" },
 *   ]}
 *   columns={3}
 * />
 * ```
 */
export function FeatureGrid({
  features,
  columns = 3,
  title,
  description,
  className,
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("py-3xl", className)}>
      <div className="container">
        {(title || description) && (
          <div className="text-center mb-2xl">
            {title && <h2 className="type-title-lg mb-md">{title}</h2>}
            {description && (
              <p className="type-body-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}
        <div className={cn("grid grid-cols-1 gap-xl", gridCols[columns])}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-md p-lg bg-card rounded-lg"
            >
              <feature.icon className="size-12 text-primary" />
              <h3 className="type-title-sm">{feature.title}</h3>
              <p className="type-body-md text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
