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
  title: "The Modern Lighting Store",
  description: "Your one-stop shop for all things lighting.",
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
