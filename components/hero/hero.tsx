import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { heroContentVariants } from "./hero.variants";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroImage {
  src: string;
  mobileSrc?: string;
  alt: string;
}

interface HeroCta {
  label: string;
  href: string;
  variant?: ComponentProps<typeof Button>["variant"];
}

interface HeroProps {
  xAlign?: "left" | "middle" | "right";
  yAlign?: "top" | "middle" | "bottom";
  title: string;
  description?: string;
  image: HeroImage;
  cta?: HeroCta;
  className?: string;
}

export function Hero({
  xAlign = "middle",
  yAlign = "middle",
  title,
  description,
  image,
  cta,
  className,
}: HeroProps) {
  return (
    <div
      className={cn(
        "relative aspect-9/16 md:aspect-16/9 max-h-[800px] w-full",
        className
      )}
    >
      <ResponsiveImage
        fill
        priority
        alt={image.alt}
        containerClassName="h-full"
        loading="eager"
        mobileSrc={image.mobileSrc}
        sizes="100vw"
        src={image.src}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/0" />

      <div className={heroContentVariants({ xAlign, yAlign })}>
        <div className="space-y-lg md:max-w-[400px]">
          <h1 className="type-title-xl text-light">{title}</h1>
          {description && (
            <p className="type-body-md md:type-body-lg text-light">
              {description}
            </p>
          )}
          {cta && (
            <Button
              asChild
              className="w-full md:min-w-[200px] md:w-auto"
              variant={cta.variant ?? "secondary"}
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
