import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { getCollections } from "@/lib/services/collections";
import { CollectionEdge } from "@/types/storefront.types";
import { Analytics } from "@/components/analytics";
import CookieBanner from "@/components/cookie-banner";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "700"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Modern Lighting for Every Space | The Modern Lighting Store",
  description:
    "Discover contemporary lighting solutions designed to enhance your home. Shop stylish table lamps, floor lamps, ceiling lights, and smart lighting.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.modernlighting.store"
  ),
  alternates: {
    canonical: "./",
  },
  keywords: [
    "modern lighting",
    "contemporary lamps",
    "smart lighting",
    "home lighting",
    "LED lights",
    "designer lamps",
    "ceiling lights",
    "table lamps",
    "floor lamps",
    "office lighting",
  ],
  authors: [{ name: "The Modern Lighting Store" }],
  creator: "The Modern Lighting Store",
  publisher: "The Modern Lighting Store",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    title: "The Modern Lighting Store | Contemporary Lighting Solutions",
    description:
      "Discover contemporary lighting solutions designed to enhance your home. Shop stylish table lamps, floor lamps, ceiling lights, and smart lighting.",
    url: "https://www.modernlighting.store",
    siteName: "The Modern Lighting Store",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/logo.png?v=1738422128",
        width: 645,
        height: 175,
        alt: "The Modern Lighting Store - Contemporary Lighting Solutions",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Modern Lighting Store | Contemporary Lighting Solutions",
    description:
      "Discover contemporary lighting solutions designed to enhance your home. Shop stylish table lamps, floor lamps, ceiling lights, and smart lighting.",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/logo.png?v=1738422128",
        width: 645,
        height: 175,
        alt: "The Modern Lighting Store - Contemporary Lighting Solutions",
      },
    ],
  },
  category: "Home & Garden",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collections = await getCollections();

  return (
    <html className={`${mPlus.variable}`} lang="en">
      <Analytics />
      <body>
        <div className="relative min-h-screen flex flex-col">
          <Navbar collections={collections as CollectionEdge[]} />
          <main className="flex-1">{children}</main>
          <Footer collections={collections as CollectionEdge[]} />
        </div>
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
