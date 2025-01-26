import Link from "next/link";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Button } from "@/components/ui/button";

interface CollectionCardProps {
  title: string;
  handle: string;
  image?: {
    url: string;
    altText: string;
  };
  description?: string;
}

export function CollectionCard({
  title,
  handle,
  image,
  description,
}: CollectionCardProps) {
  return (
    <Link
      className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm aspect-[3/4] relative"
      href={`/${handle}`}
    >
      {image && (
        <ResponsiveImage
          fill
          alt={image.altText || title}
          className="transition-transform duration-300 group-hover:scale-105"
          containerClassName="h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={image.url}
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 transition-transform duration-300 group-hover:translate-y-full p-md bg-primary text-primary-foreground">
        <div className="space-y-sm">
          <h3 className="type-title-sm">{title}</h3>
          <p className="type-body-sm">{description?.split(".")?.[0]}</p>
        </div>
      </div>
    </Link>
  );
}
