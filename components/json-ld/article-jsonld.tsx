import { siteConfig } from "@/lib/site.config";

interface ArticleJsonLdProps {
  title: string;
  description?: string;
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
  images?: string[];
  url: string;
}

export function ArticleJsonLd({
  title,
  description,
  publishedTime,
  modifiedTime,
  authors = [siteConfig.seo.author],
  images,
  url,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: images,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: authors.map((author) => ({
      "@type": "Person",
      name: author,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/journal`,
    })),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}
