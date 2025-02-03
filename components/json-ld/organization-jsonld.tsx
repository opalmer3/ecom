interface OrganizationJsonLdProps {
  name?: string;
  description: string;
  url: string;
  logo?: string;
  images?: string[];
  sameAs?: string[]; // Social media profiles
}

export function OrganizationJsonLd({
  name = "The Modern Lighting Store",
  description,
  url,
  logo = `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  images = [],
  sameAs = [],
}: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    image: images,
    email: "contact@modernlighting.store",
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressCountry: "UK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    },
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}
