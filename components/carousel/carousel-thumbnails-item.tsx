import { CarouselItem } from "@/components/ui/carousel";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import type { Image } from "@/types/storefront.types.d";

type Props = {
  item: Image;
};

export function ThumbnailCarouselItem({ item }: Props) {
  return (
    <CarouselItem className="bg-background h-full">
      <ResponsiveImage
        fill
        priority
        alt={item.altText ?? "Product image"}
        className="rounded-md"
        containerClassName="mx-auto aspect-square rounded-md"
        sizes="(max-width: 1024px) 100vw, 50vw"
        src={item.url}
      />
    </CarouselItem>
  );
}
