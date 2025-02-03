interface ProductJsonLdProps {
  name: string;
  description: string;
  images: string[];
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    priceValidUntil?: string;
    url: string;
  }[];
  brand?: {
    name: string;
  };
  sku?: string;
  gtin?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ProductJsonLd({
  name,
  description,
  images,
  offers,
  brand,
  sku,
  gtin,
  aggregateRating,
}: ProductJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: images,
    offers,
    ...(brand && { brand: { "@type": "Brand", ...brand } }),
    ...(sku && { sku }),
    ...(gtin && { gtin }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ...aggregateRating,
      },
    }),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}
