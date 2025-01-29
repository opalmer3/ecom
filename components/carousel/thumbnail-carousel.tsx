import * as React from "react";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { ThumbnailCarouselDots } from "@/components/carousel/carousel-thumbnails-dots";
import { ThumbnailCarouselItem } from "@/components/carousel/carousel-thumbnails-item";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { ImageEdge } from "@/types/storefront.types";

export function ThumbnailCarousel({ content }: { content: ImageEdge[] }) {
  return (
    <Carousel className="lg:grid grid-cols-[auto_1fr] gap-(--spacing-sm)">
      <CarouselContent>
        {content.map((item) => (
          <ThumbnailCarouselItem key={item.node.id} item={item.node} />
        ))}
      </CarouselContent>
      <div className="grid grid-cols-4 gap-(--spacing-xs) lg:grid-cols-1 lg:w-20 lg:-order-1 mt-sm lg:mt-0">
        {content.map((item, idx) => (
          <ThumbnailCarouselDots key={item.node.id} slideNumber={idx}>
            <ResponsiveImage
              fill
              alt={item.node.altText ?? "Product image"}
              containerClassName="aspect-square h-full overflow-hidden rounded-md"
              quality={100}
              sizes="(max-width: 1024px) 25vw, 64px"
              src={item.node.url}
            />
          </ThumbnailCarouselDots>
        ))}
      </div>
    </Carousel>
  );
}
