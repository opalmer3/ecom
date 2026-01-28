import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { getCollections } from "@/lib/services/collections";
import { CollectionEdge } from "@/types/storefront.types";
import { Analytics } from "@/components/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "@/components/cookie-banner";
import { siteConfig, generateSiteMetadata } from "@/lib/site.config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  ...generateSiteMetadata(),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Shopping",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collections = await getCollections();

  return (
    <html className={`${cormorant.variable} ${outfit.variable}`} lang="en">
      <Analytics />
      <SpeedInsights />
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
