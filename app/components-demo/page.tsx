import {
  FeatureGrid,
  StatsSection,
  Testimonials,
  CtaBanner,
  FaqAccordion,
  IconGrid,
  NewsletterSection,
  ImageGallery,
} from "@/components/sections";
import { siteConfig } from "@/lib/site.config";
import { Truck, ShieldCheck, RefreshCcw, Headphones } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Component Showcase | Boilerplate Sections",
  description: "Explore all available layout components in the Shopify Boilerplate.",
};

export default function ComponentDemoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section (Existing Component) */}
      <section className="bg-primary text-primary-foreground py-4xl">
        <div className="container">
          <h1 className="type-title-xl mb-md">Component Showcase</h1>
          <p className="type-body-lg text-primary-foreground/80">
            This page demonstrates all the reusable section components available in this boilerplate.
            These components are designed to be easily configurable and visually consistent.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <FeatureGrid
        columns={3}
        description="Explain your product&apos;s key benefits"
        features={siteConfig.brandHighlights}
        title="Feature Grid"
      />

      {/* Stats Section */}
      <StatsSection
        description="Highlight key metrics and achievements"
        title="Stats Section"
        stats={[
          { value: "10k+", label: "Happy Customers" },
          { value: "24/7", label: "Expert Support" },
          { value: "100%", label: "Satisfaction Rate" },
          { value: "50+", label: "Award Wins" },
        ]}
      />

      {/* CTA Banner */}
      <CtaBanner
        description="Join thousands of satisfied customers who have transformed their spaces with our premium products."
        primaryCta={{ label: "Get Started", href: "/collections/all" }}
        title="Ready to Transform Your Space?"
      />

      {/* Icon Grid */}
      <IconGrid
        description="Display trust badges or service highlights"
        title="Icon Grid"
        items={[
          {
            label: "Free Shipping",
            description: "On all orders over £100",
            icon: Truck,
          },
          {
            label: "Secure Payment",
            description: "100% secure checkout",
            icon: ShieldCheck,
          },
          {
            label: "Easy Returns",
            description: "30-day money back guarantee",
            icon: RefreshCcw,
          },
          {
            label: "Support",
            description: "24/7 dedicated support",
            icon: Headphones,
          },
        ]}
      />

      {/* Image Gallery */}
      <ImageGallery
        columns={3}
        description="Showcase lifestyle photography or product use-cases"
        title="Image Gallery"
        images={[
          {
            src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
            alt: "Modern Workspace",
            aspectRatio: "landscape",
          },
          {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
            alt: "Elegant Living Room",
            aspectRatio: "portrait",
          },
          {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
            alt: "Collaborative Space",
            aspectRatio: "square",
          },
          {
            src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
            alt: "Minimalist Office",
            aspectRatio: "landscape",
          },
        ]}
      />

      {/* Testimonials */}
      <Testimonials
        title="Testimonials"
        variant="carousel"
        testimonials={[
          {
            quote: "The quality of these products is unmatched. They have completely transformed the ambiance of my home.",
            author: "Sarah Johnson",
            role: "Interior Designer",
            avatar: "https://i.pravatar.cc/150?u=sarah",
          },
          {
            quote: "Fast shipping and excellent customer service. I couldn't be happier with my purchase!",
            author: "Michael Chen",
            role: "Homeowner",
            avatar: "https://i.pravatar.cc/150?u=michael",
          },
          {
            quote: "Beautiful designs and great attention to detail. Highly recommend to anyone looking for premium quality.",
            author: "Emma Wilson",
            role: "Creative Director",
            avatar: "https://i.pravatar.cc/150?u=emma",
          },
        ]}
      />

      {/* FAQ Accordion */}
      <FaqAccordion
        description="Answer common buyer questions"
        title="FAQ Accordion"
        faqs={[
          {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery.",
          },
          {
            question: "What is your return policy?",
            answer: "We offer a 30-day hassle-free return policy. If you're not completely satisfied, simply contact us for a full refund.",
          },
          {
            question: "Do you offer international delivery?",
            answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and times vary by location.",
          },
        ]}
      />

      {/* Newsletter Section */}
      <NewsletterSection
        description="Subscribe to receive updates, access to exclusive deals, and more."
        title="Newsletter Section"
      />
    </div>
  );
}
