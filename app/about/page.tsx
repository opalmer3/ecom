import { SplitContentBlock } from "@/components/content-block";
import { HalfHero } from "@/components/hero/half-hero";
import LazyWrap from "@/components/lazy-wrap";
import { OrganizationJsonLd } from "@/components/json-ld/organization-jsonld";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Innovative & Stylish Lighting | The Modern Lighting Store",
  description:
    "Learn more about The Modern Lighting Store your destination for modern lighting. We blend innovation, aesthetics, and quality to illuminate your spaces beautifully.",
};

export default function About() {
  return (
    <>
      <OrganizationJsonLd
        description="The Modern Lighting Store blends sleek, modern designs with cutting-edge technology to craft lighting solutions that are beautiful, functional, and durable. We specialize in innovative LED lighting, customizable designs, and superior quality fixtures."
        logo={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}`}
        images={[
          "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Bauhaus_Mushroom_Table_Lamp_3.webp?v=1741017247",
          "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Contemporary_Nordic_Chandeliers.webp?v=1741017809",
          "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Droplet_Glass_Pendant_Light.webp?v=1741018229",
        ]}
      />
      <div className="relative">
        <div className="absolute inset-x-0 top-lg z-10">
          <Breadcrumb className="container mx-auto">
            <BreadcrumbList className="text-light md:text-secondary-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-light/80 md:text-secondary-foreground/80">
                  About
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <HalfHero
          content={{
            img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Bauhaus_Mushroom_Table_Lamp_3.webp?v=1741017247",
            alt: "Modern lighting design showcasing exquisite craftsmanship",
            eyebrow: "Welcome to The Modern Lighting Store",
            title: "Where Lighting Meets Artistry",
            description:
              "We believe that great lighting is more than just a necessity—it's an opportunity to transform your spaces, set the mood, and express your unique style. Our journey began with a vision to redefine how people experience lighting. By blending sleek, modern designs with cutting-edge technology, we craft lighting solutions that are not only beautiful but also functional and durable.",
          }}
        />
        <SplitContentBlock
          variant="third-right-small"
          content={{
            img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Droplet_Glass_Pendant_Light.webp?v=1741018229",
            alt: "Innovative lighting technology demonstration",
            eyebrow: "Innovation & Technology",
            title: "Driving Innovation in Lighting",
            description:
              "At The Modern Lighting Store, innovation drives everything we do. From energy-efficient LEDs to customizable designs, our products are crafted with the latest advancements to ensure superior performance. Whether you're looking to create a warm, inviting ambiance or a bright, productive workspace, we offer solutions tailored to suit every environment.",
          }}
        />
        <LazyWrap>
          <SplitContentBlock
            variant="third-left-small"
            content={{
              img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Contemporary_Nordic_Chandeliers.webp?v=1741017809",
              alt: "Quality craftsmanship in lighting manufacturing",
              eyebrow: "Quality & Design",
              title: "Committed to Excellence",
              description:
                "What sets us apart is our commitment to quality and design. Every fixture we create undergoes meticulous testing to meet our exacting standards. We source only the finest materials, ensuring each piece is built to last and perform flawlessly for years to come. We're not just about lighting; we're about creating experiences.",
            }}
          />
        </LazyWrap>

        <LazyWrap>
          <SplitContentBlock
            variant="third-right-small"
            content={{
              img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Contemporary_Nordic_Chandeliers_4.webp?v=1741017915",
              alt: "Beautifully lit interior showcasing modern lighting",
              eyebrow: "Our Promise",
              title: "Illuminate Your World",
              description:
                "The Modern Lighting Store is here to inspire, innovate, and illuminate—one room at a time. Thank you for choosing us to light up your world. Let us help you find the perfect balance of style, innovation, and functionality for your space. Illuminate Your World. Choose The Modern Lighting Store.",
            }}
          />
        </LazyWrap>
      </div>
    </>
  );
}
