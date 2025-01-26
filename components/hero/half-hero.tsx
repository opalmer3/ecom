import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/ui/responsive-image";

interface HalfHeroContent {
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}

interface HalfHeroProps {
  content: HalfHeroContent;
}

export function HalfHero({ content }: HalfHeroProps) {
  return (
    <div className="relative bg-accent">
      <div className="md:container mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-md md:gap-lg">
          <div className="w-full md:w-1/2 py-xl md:py-4xl flex items-center container md:max-w-none md:px-0">
            <div className="space-y-md md:space-y-lg text-secondary-foreground">
              <div className="type-button-md text-primary uppercase">
                {content.eyebrow}
              </div>
              <h1 className="type-title-xl">{content.title}</h1>
              <p className="type-body-lg">{content.description}</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center">
            <ResponsiveImage
              fill
              priority
              alt={content.alt}
              containerClassName="aspect-[4/3] md:aspect-square w-full"
              src={content.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
