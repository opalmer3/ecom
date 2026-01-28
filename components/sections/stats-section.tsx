import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Stats Section
 *
 * Display key metrics/numbers with large values and labels.
 *
 * @example
 * ```tsx
 * <StatsSection
 *   title="Trusted by Thousands"
 *   stats={[
 *     { value: "10K", suffix: "+", label: "Happy Customers" },
 *     { value: "98", suffix: "%", label: "Satisfaction Rate" },
 *     { value: "24/7", label: "Customer Support" },
 *   ]}
 * />
 * ```
 */
export function StatsSection({
  stats,
  title,
  description,
  className,
}: StatsSectionProps) {
  return (
    <section className={cn("py-3xl bg-muted", className)}>
      <div className="container">
        {(title || description) && (
          <div className="text-center mb-3xl ">
            {title && <h2 className="type-title-lg mb-md">{title}</h2>}
            {description && (
              <p className="type-body-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="type-title-xl text-primary">
                {stat.value}
                {stat.suffix && (
                  <span className="text-secondary">{stat.suffix}</span>
                )}
              </div>
              <div className="type-body-md text-muted-foreground mt-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
