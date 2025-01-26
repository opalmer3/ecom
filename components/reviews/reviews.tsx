import { cn } from "@/lib/utils";
import { ReviewCard } from "./review-card";
import type { ReviewsProps } from "./types";

export function Reviews({ title, reviews }: ReviewsProps) {
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  // Split reviews into two rows
  const topRowReviews = duplicatedReviews.filter((_, i) => i % 2 === 0);
  const bottomRowReviews = duplicatedReviews.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div className="container py-3xl space-y-3xl">
        <h2 className="text-center type-title-lg">{title}</h2>

        <div className="relative w-full space-y-2xl">
          {/* Top row */}
          <div
            className={cn(
              "flex gap-3xl animate-scroll",
              "hover:[animation-play-state:paused]"
            )}
            style={{
              width: "fit-content",
            }}
          >
            {topRowReviews.map((review, index) => (
              <div
                key={`top-${review.id}-${index}`}
                className="w-[300px] flex-shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Bottom row - reversed direction */}
          <div
            className={cn(
              "flex gap-3xl animate-scroll-reverse",
              "hover:[animation-play-state:paused]"
            )}
            style={{
              width: "fit-content",
            }}
          >
            {bottomRowReviews.map((review, index) => (
              <div
                key={`bottom-${review.id}-${index}`}
                className="w-[300px] flex-shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
