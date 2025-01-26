"use client";

import { useCarousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  slideNumber: number;
  children?: React.ReactNode;
};

export const ThumbnailCarouselDots = ({
  label = "Go to slide",
  slideNumber,
  children,
}: Props) => {
  const { selectedIndex, onSelect } = useCarousel();

  return (
    <>
      <button
        aria-label={`${label} ${slideNumber + 1}`}
        type="button"
        className={cn(
          "border-2 lg:h-20 rounded-lg",
          slideNumber === selectedIndex
            ? "border-primary"
            : "border-transparent"
        )}
        onClick={() => {
          onSelect(slideNumber);
        }}
      >
        {children}
      </button>
    </>
  );
};
ThumbnailCarouselDots.displayName = "ThumbnailCarouselDots";
