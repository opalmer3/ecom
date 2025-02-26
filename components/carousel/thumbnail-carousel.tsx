import * as React from "react";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { ThumbnailCarouselDots } from "@/components/carousel/carousel-thumbnails-dots";
import { ThumbnailCarouselItem } from "@/components/carousel/carousel-thumbnails-item";
import {
  Carousel,
  CarouselContent,
  CarouselProgress,
} from "@/components/ui/carousel";
import { ImageEdge } from "@/types/storefront.types";

export function ThumbnailCarousel({ content }: { content: ImageEdge[] }) {
  const carouselItems = React.useMemo(
    () =>
      content.map((item, i) => (
        <ThumbnailCarouselItem key={item.node.id} index={i} item={item.node} />
      )),
    [content]
  );

  // Memoize the thumbnail dots to prevent unnecessary re-renders
  const thumbnailDots = React.useMemo(
    () =>
      content.map((item, idx) => (
        <ThumbnailCarouselDots key={item.node.id} slideNumber={idx}>
          <ResponsiveImage
            fill
            alt={item.node.altText ?? "Product image"}
            containerClassName="aspect-square h-full overflow-hidden rounded-md"
            loading={idx < 4 ? "eager" : "lazy"}
            quality={100}
            sizes="(max-width: 1024px) 25vw, 64px"
            src={item.node.url}
          />
        </ThumbnailCarouselDots>
      )),
    [content]
  );

  return (
    <Carousel className="lg:grid grid-cols-[auto_1fr] gap-(--spacing-sm)">
      <CarouselContent>{carouselItems}</CarouselContent>
      <div className="hidden lg:grid gap-(--spacing-xs) grid-cols-1 w-20 -order-1">
        {thumbnailDots}
      </div>
      <div className="lg:hidden mt-4">
        <CarouselProgress />
      </div>
    </Carousel>
  );
}
