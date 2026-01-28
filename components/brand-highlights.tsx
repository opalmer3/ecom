import { siteConfig } from "@/lib/site.config";

export function BrandHighlights() {
  return (
    <section className="bg-accent">
      <div className="container py-3xl lg:py-5xl">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-(--spacing-xl)">
          {siteConfig.brandHighlights.map((highlight, index) => (
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

