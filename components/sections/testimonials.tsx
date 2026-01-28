"use client";

import { cn } from "@/lib/utils";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  variant?: "carousel" | "grid";
  className?: string;
}

/**
 * Testimonials Section
 *
 * Customer testimonials displayed as a carousel or grid.
 *
 * @example
 * ```tsx
 * <Testimonials
 *   title="What Our Customers Say"
 *   testimonials={[
 *     { quote: "Amazing quality!", author: "Jane D.", role: "Verified Buyer" },
 *     { quote: "Fast delivery and great service.", author: "John S." },
 *   ]}
 *   variant="carousel"
 * />
 * ```
 */
export function Testimonials({
  testimonials,
  title,
  variant = "carousel",
  className,
}: TestimonialsProps) {
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-card p-lg rounded-lg space-y-md">
      <blockquote className="type-body-lg italic text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-sm">
        {testimonial.avatar && (
          <ResponsiveImage
            fill
            alt={testimonial.author}
            className="object-cover"
            containerClassName="size-10 rounded-full overflow-hidden"
            sizes="40px"
            src={testimonial.avatar}
          />
        )}
        <div>
          <div className="type-button-md">{testimonial.author}</div>
          {testimonial.role && (
            <div className="type-body-sm text-muted-foreground">
              {testimonial.role}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className={cn("py-3xl", className)}>
      <div className="container">
        {title && (
          <h2 className="type-title-lg text-center mb-3xl">{title}</h2>
        )}

        {variant === "carousel" ? (
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-md">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-md md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
