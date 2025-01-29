import { Star, UserIcon } from "lucide-react";
import type { Review } from "./types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex gap-(--spacing-sm) flex-col bg-card p-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-md">
        <UserIcon className="size-6 fill-muted stroke-muted" />
        <div className="type-title-xs">{review.author.name}</div>
      </div>

      <div className="flex gap-(--spacing-2xs)">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-4 ${
              i < review.rating
                ? "fill-yellow-300 stroke-yellow-300"
                : "fill-muted stroke-muted"
            }`}
          />
        ))}
      </div>

      <p className="type-body-sm text-muted-foreground flex-1 line-clamp-3 text-ellipsis">
        {review.content}
      </p>
    </div>
  );
}
