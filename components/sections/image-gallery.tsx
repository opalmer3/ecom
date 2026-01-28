import { cn } from "@/lib/utils";
import { ResponsiveImage } from "@/components/ui/responsive-image";

interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Image Gallery Section
 *
 * Responsive grid image gallery for lifestyle shots.
 *
 * @example
 * ```tsx
 * <ImageGallery
 *   title="Shop the Look"
 *   images={[
 *     { src: "/lifestyle-1.jpg", alt: "Living room setup", aspectRatio: "landscape" },
 *     { src: "/lifestyle-2.jpg", alt: "Bedroom lighting", aspectRatio: "portrait" },
 *     { src: "/lifestyle-3.jpg", alt: "Office space", aspectRatio: "square" },
 *   ]}
 *   columns={3}
 * />
 * ```
 */
export function ImageGallery({
  images,
  title,
  description,
  columns = 3,
  className,
}: ImageGalleryProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  const aspectRatios = {
    square: "aspect-square",
    portrait: "aspect-3/4",
    landscape: "aspect-4/3",
  };

  return (
    <section className={cn("py-3xl", className)}>
      <div className="container">
        {(title || description) && (
          <div className="text-center mb-3xl">
            {title && <h2 className="type-title-lg mb-md">{title}</h2>}
            {description && (
              <p className="type-body-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        <div className={cn("grid grid-cols-1 gap-md", gridCols[columns])}>
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg group",
                aspectRatios[image.aspectRatio || "square"]
              )}
            >
              <ResponsiveImage
                fill
                alt={image.alt}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                containerClassName="absolute inset-0"
                sizes={`(max-width: 768px) 100vw, ${100 / columns}vw`}
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
