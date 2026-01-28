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
import { siteConfig, generateSiteMetadata } from "@/lib/site.config";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata(
  "About Us",
  `Learn more about ${siteConfig.name} your destination for quality products. We blend innovation, aesthetics, and quality to enhance your life.`
);

export default function About() {
  return (
    <>
      <OrganizationJsonLd
        description={siteConfig.about.description}
        images={siteConfig.about.images.map((img) => img.src)}
        logo={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}`}
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
            img: siteConfig.about.images[0].src,
            alt: siteConfig.about.images[0].alt,
            eyebrow: siteConfig.about.eyebrow,
            title: siteConfig.about.title,
            description: siteConfig.about.description,
          }}
        />
        {siteConfig.about.sections.map((section, index) => (
          <LazyWrap key={index}>
            <SplitContentBlock
              variant={section.variant}
              content={{
                img: section.image.src,
                alt: section.image.alt,
                eyebrow: section.eyebrow,
                title: section.title,
                description: section.description,
              }}
            />
          </LazyWrap>
        ))}
      </div>
    </>
  );
}
