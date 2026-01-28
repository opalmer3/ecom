import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "accent" | "muted";
  className?: string;
}

/**
 * CTA Banner Section
 *
 * Full-width call-to-action with heading, description, and buttons.
 *
 * @example
 * ```tsx
 * <CtaBanner
 *   title="Ready to Get Started?"
 *   description="Join thousands of satisfied customers"
 *   primaryCta={{ label: "Shop Now", href: "/products" }}
 *   secondaryCta={{ label: "Learn More", href: "/about" }}
 *   variant="accent"
 * />
 * ```
 */
export function CtaBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
  className,
}: CtaBannerProps) {
  const bgVariants = {
    default: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    muted: "bg-muted text-muted-foreground",
  };

  return (
    <section className={cn("py-3xl", bgVariants[variant], className)}>
      <div className="container text-center">
        <div className="space-y-lg">
          <h2 className="type-title-lg">{title}</h2>
          {description && (
            <p
              className={cn(
                "type-body-lg max-w-3xl mx-auto",
                variant === "default" ? "text-primary-foreground/80" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Button
              asChild
              size="lg"
              variant={variant === "default" ? "secondary" : "default"}
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
