"use client";

import { useEffect, useState } from "react";
import { useCarousel } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import type { Image } from "@/types/storefront.types.d";
import { Spinner } from "@/components/ui/spinner";

type Props = {
  item: Image;
  index: number;
};

export function ThumbnailCarouselItem({ item, index }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const { api } = useCarousel();

  const inView = slidesInView.includes(index);

  useEffect(() => {
    if (!api) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateSlidesInView = (_api: any) => {
      setSlidesInView(_api.slidesInView());
    };

    api.on("slidesInView", updateSlidesInView);
    updateSlidesInView(api);

    return () => {
      api.off("slidesInView", updateSlidesInView);
    };
  }, [api]);

  return (
    <CarouselItem className="bg-background h-full">
      {index !== 0 && !loaded && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      )}
      {index === 0 || inView || loaded ? (
        <ResponsiveImage
          fill
          priority
          alt={item.altText ?? "Product image"}
          className="rounded-md"
          containerClassName="mx-auto aspect-square rounded-md"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={item.url}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      ) : null}
    </CarouselItem>
  );
}
