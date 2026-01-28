"use client";

import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { heroContentVariants } from "./hero.variants";
import { ComponentProps, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
}

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
  const [ref, isInView] = useInView();
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
          <h1
            ref={ref as React.RefObject<HTMLHeadingElement>}
            className={cn(
              "type-title-xl text-light",
              isInView
                ? "animate-fade-in animation-delay-300 motion-reduce:animate-none"
                : "opacity-0"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "type-body-md md:type-body-lg text-light",
                isInView
                  ? "animate-fade-in animation-delay-700 motion-reduce:animate-none"
                  : "opacity-0"
              )}
            >
              {description}
            </p>
          )}
          {cta && (
            <Button
              asChild
              variant={cta.variant ?? "secondary"}
              className={cn(
                "w-full md:min-w-[200px] md:w-auto",
                isInView
                  ? "animate-scale-in animation-delay-1000 motion-reduce:animate-none"
                  : "opacity-0",
                isInView && !description && "animation-delay-700"
              )}
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
