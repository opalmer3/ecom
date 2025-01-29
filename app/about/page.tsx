import { SplitContentBlock } from "@/components/content-block";
import { HalfHero } from "@/components/hero/half-hero";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function About() {
  return (
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
          img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Sc330662745e941528460605052904057n.webp?v=1736521961",
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
          img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Sc89541d8f64649d594694d63c4a2beb3h.webp?v=1736521961",
          alt: "Innovative lighting technology demonstration",
          eyebrow: "Innovation & Technology",
          title: "Driving Innovation in Lighting",
          description:
            "At The Modern Lighting Store, innovation drives everything we do. From energy-efficient LEDs to customizable designs, our products are crafted with the latest advancements to ensure superior performance. Whether you're looking to create a warm, inviting ambiance or a bright, productive workspace, we offer solutions tailored to suit every environment.",
        }}
      />
      <SplitContentBlock
        variant="third-left-small"
        content={{
          img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/Sa4888b20edc24dbfbd0b5175c0ea2efcS.webp?v=1736521961",
          alt: "Quality craftsmanship in lighting manufacturing",
          eyebrow: "Quality & Design",
          title: "Committed to Excellence",
          description:
            "What sets us apart is our commitment to quality and design. Every fixture we create undergoes meticulous testing to meet our exacting standards. We source only the finest materials, ensuring each piece is built to last and perform flawlessly for years to come. We're not just about lighting; we're about creating experiences.",
        }}
      />
      <SplitContentBlock
        variant="third-right-small"
        content={{
          img: "https://cdn.shopify.com/s/files/1/0883/7398/5623/files/S2d44c30f38194672ad66d7307d2248e78.webp?v=1735650385",
          alt: "Beautifully lit interior showcasing modern lighting",
          eyebrow: "Our Promise",
          title: "Illuminate Your World",
          description:
            "The Modern Lighting Store is here to inspire, innovate, and illuminate—one room at a time. Thank you for choosing us to light up your world. Let us help you find the perfect balance of style, innovation, and functionality for your space. Illuminate Your World. Choose The Modern Lighting Store.",
        }}
      />
    </div>
  );
}
