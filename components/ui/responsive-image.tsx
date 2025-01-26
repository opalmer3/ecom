"use client";

import { useIsBreakpoint } from "@/lib/hooks/use-is-breakpoint";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps extends ImageProps {
  containerClassName?: string;
  mobileSrc?: string;
}

export function ResponsiveImage({
  src,
  alt,
  className,
  containerClassName,
  sizes,
  priority = false,
  mobileSrc,
  quality,
  ...props
}: ResponsiveImageProps) {
  const isMobile = useIsBreakpoint("sm");

  return (
    <figure className={cn("block relative w-full", containerClassName)}>
      <Image
        alt={alt}
        className={cn("object-cover", className)}
        priority={priority}
        quality={quality || (isMobile ? 60 : 80)}
        sizes={sizes}
        src={isMobile && mobileSrc ? mobileSrc : src}
        {...props}
      />
    </figure>
  );
}
