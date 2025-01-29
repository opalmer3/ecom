import {
  LampCeilingIcon,
  LampDeskIcon,
  LampWallDownIcon,
  TruckIcon,
} from "lucide-react";

const highlights = [
  {
    icon: LampWallDownIcon,
    title: "Effortless Elegance",
    description:
      "Transform your spaces with lighting designed to captivate and inspire.",
  },
  {
    icon: LampCeilingIcon,
    title: "Crafted to Perfection",
    description:
      "Our lights combine contemporary style with exceptional craftsmanship.",
  },
  {
    icon: LampDeskIcon,
    title: "Innovative Illumination",
    description:
      "Discover cutting-edge designs that blend form and function seamlessly.",
  },
  {
    icon: TruckIcon,
    title: "Seamless Experience",
    description:
      "From selection to delivery, enjoy a smooth and delightful journey.",
  },
];

export function BrandHighlights() {
  return (
    <section className="bg-accent">
      <div className="container py-3xl lg:py-5xl">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-(--spacing-xl)">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col space-y-md">
              <highlight.icon className="size-10" />

              <h3 className="type-title-sm">{highlight.title}</h3>
              <p className="type-body-md text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
