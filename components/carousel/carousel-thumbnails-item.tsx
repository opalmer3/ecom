"use client";

import { useEffect, useState, memo } from "react";
import { useCarousel } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import type { Image } from "@/types/storefront.types.d";
import { Spinner } from "@/components/ui/spinner";

type Props = {
  item: Image;
  index: number;
};

function ThumbnailCarouselItemComponent({ item, index }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);
  const { api } = useCarousel();

  const inView = slidesInView.includes(index);
  const isFirstSlide = index === 0;

  useEffect(() => {
    if (!api) return;

    const updateSlidesInView = () => {
      setSlidesInView(api.slidesInView());
    };

    // Initial update
    updateSlidesInView();

    // Setup observers
    api.on("slidesInView", updateSlidesInView);
    api.on("select", updateSlidesInView);

    return () => {
      api.off("slidesInView", updateSlidesInView);
      api.off("select", updateSlidesInView);
    };
  }, [api]);

  // Preload adjacent slides
  const shouldRender = isFirstSlide || inView || loaded;

  return (
    <CarouselItem className="bg-background h-full">
      {!shouldRender && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="animate-spin" />
        </div>
      )}
      {shouldRender && (
        <ResponsiveImage
          fill
          alt={item.altText ?? "Product image"}
          className="rounded-md"
          containerClassName="mx-auto aspect-square rounded-md"
          loading={isFirstSlide ? "eager" : "lazy"}
          priority={isFirstSlide}
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={item.url}
          onLoad={() => setLoaded(true)}
        />
      )}
    </CarouselItem>
  );
}

// Memoize the component to prevent unnecessary re-renders
export const ThumbnailCarouselItem = memo(ThumbnailCarouselItemComponent);
