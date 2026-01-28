import { Metadata } from "next";
import { LucideIcon, Package, Shield, Truck, Sparkles } from "lucide-react";

/**
 * Site Configuration
 *
 * This file contains all store-specific branding, content, and metadata.
 * Edit this file to customize the boilerplate for your store.
 */

export interface SiteConfig {
  /** Store name used in branding and SEO */
  name: string;
  /** Short tagline for the store */
  tagline: string;
  /** Longer description used in footer and meta tags */
  description: string;
  /** Path to logo image (relative to /public) */
  logo: string;
  /** Logo aspect ratio for proper sizing (width/height) */
  logoAspectRatio: number;
  /** Contact details */
  contact: {
    email: string;
    phone?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zip?: string;
      country: string;
    };
  };
  /** Social media links */
  social: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    pinterest?: string;
    tiktok?: string;
  };
  /** Homepage hero section content */
  hero: {
    title: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
    image: {
      src: string;
      mobileSrc?: string;
      alt: string;
    };
  };
  /** About page content */
  about: {
    eyebrow: string;
    title: string;
    description: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
    sections: Array<{
      eyebrow: string;
      title: string;
      description: string;
      image: {
        src: string;
        alt: string;
      };
      variant: "third-right-small" | "third-left-small";
    }>;
  };
  /** Featured collection handle for homepage */
  featuredCollection: string;
  /** Brand highlights shown on homepage */
  brandHighlights: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  /** SEO defaults */
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    author: string;
    openGraph: {
      type: "website";
      locale: string;
      siteName: string;
      images: Array<{
        url: string;
        width: number;
        height: number;
        alt: string;
      }>;
    };
  };
}

export const siteConfig: SiteConfig = {
  // ============================================
  // BASIC STORE INFO
  // ============================================
  name: "Velvet & Vine Vintage",
  tagline: "Timeless Elegance, Renewed.",
  description:
    "A curated escape into the past. We source the finest vintage women's clothing, celebrating timeless silhouettes and sustainable style.",
  logo: "/logo.png",
  logoAspectRatio: 48 / 13, // width / height

  // ============================================
  // CONTACT & BUSINESS INFO
  // ============================================
  contact: {
    email: "hello@yourstore.com",
    phone: "+44 (0) 123 456 789",
    address: {
      city: "London",
      country: "UK",
    },
  },

  // ============================================
  // SOCIAL LINKS
  // ============================================
  social: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
    pinterest: undefined,
    tiktok: undefined,
  },

  // ============================================
  // HOMEPAGE HERO
  // ============================================
  hero: {
    title: "Timeless Silhouettes for the Modern Muse",
    description:
      "Discover our handpicked collection of rare vintage treasures, where every piece tells a story of elegance and character.",
    cta: {
      label: "Shop the Collection",
      href: "#featured",
    },
    image: {
      src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1920&q=80",
      mobileSrc:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
      alt: "Elegant vintage floral dress",
    },
  },

  // ============================================
  // ABOUT PAGE CONTENT
  // ============================================
  about: {
    eyebrow: "Our Heritage",
    title: "Celebrating the Art of the Past",
    description:
      "At Velvet & Vine, we believe that style is eternal. Our collection is a love letter to the craftsmanship of yesteryear, carefully curated to bring a touch of vintage magic to your contemporary wardrobe. Each piece is hand-selected for its quality, character, and timeless appeal.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1549060279-7e168f00cc8a?w=1200&q=80",
        alt: "Vintage boutique interior",
      },
    ],
    sections: [
      {
        eyebrow: "Curation",
        title: "Hand-Picked Authenticity",
        description:
          "We scour the globe for authentic pieces that resonate with history. From 1950s evening gowns to 70s bohemian silhouettes, our curation is intentional and exquisite.",
        image: {
          src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
          alt: "Close up of vintage fabric textures",
        },
        variant: "third-right-small",
      },
      {
        eyebrow: "Sustainability",
        title: "A Conscious Choice",
        description:
          "Choosing vintage is an act of love for the planet. By giving beautiful garments a second life, we embrace a slower, more sustainable approach to fashion without compromising on style.",
        image: {
          src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
          alt: "Classy vintage accessories",
        },
        variant: "third-left-small",
      },
    ],
  },

  // ============================================
  // FEATURED COLLECTION
  // ============================================
  featuredCollection: "best-sellers",

  // ============================================
  // BRAND HIGHLIGHTS
  // ============================================
  brandHighlights: [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Carefully curated products that meet our high standards.",
    },
    {
      icon: Package,
      title: "Secure Packaging",
      description: "Every order is carefully packaged for safe delivery.",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Quick and reliable delivery to your doorstep.",
    },
    {
      icon: Shield,
      title: "Satisfaction Guaranteed",
      description: "Not happy? We offer hassle-free returns.",
    },
  ],

  // ============================================
  // SEO CONFIGURATION
  // ============================================
  seo: {
    titleTemplate: "%s | Velvet & Vine Vintage",
    defaultTitle: "Velvet & Vine Vintage | Timeless Elegance, Renewed.",
    defaultDescription:
      "Curated escape into the past. We source the finest vintage women's clothing, celebrating timeless silhouettes and sustainable style.",
    keywords: ["vintage clothing", "women's vintage", "antique fashion", "sustainable style"],
    author: "Velvet & Vine Vintage",
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Velvet & Vine Vintage",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Velvet & Vine Vintage",
        },
      ],
    },
  },
};

/**
 * Generate metadata for pages using site config
 */
export function generateSiteMetadata(
  pageTitle?: string,
  pageDescription?: string
): Metadata {
  const title = pageTitle
    ? siteConfig.seo.titleTemplate.replace("%s", pageTitle)
    : siteConfig.seo.defaultTitle;

  const description = pageDescription || siteConfig.seo.defaultDescription;

  return {
    title,
    description,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.seo.author }],
    creator: siteConfig.seo.author,
    publisher: siteConfig.seo.author,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    alternates: {
      canonical: "./",
    },
    openGraph: {
      type: siteConfig.seo.openGraph.type,
      title,
      description,
      siteName: siteConfig.seo.openGraph.siteName,
      locale: siteConfig.seo.openGraph.locale,
      images: siteConfig.seo.openGraph.images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: siteConfig.seo.openGraph.images,
    },
  };
}
