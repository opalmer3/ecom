import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "@/components/layout/nav-link";
import { FooterLink } from "@/components/layout/footer-link";
import { PromotionalBanner } from "./promotional-banner";
// import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Logo } from "@/components/Logo";
import { CollectionEdge } from "@/types/storefront.types";
import { Separator } from "@/components/ui/separator";
import { CartSheet } from "@/components/cart/cart-sheet";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar({ collections }: { collections: CollectionEdge[] }) {
  return (
    <>
      <div className="w-full">
        <PromotionalBanner />
      </div>

      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between md:justify-end gap-md">
          <div className="flex-1 hidden md:flex justify-end">
            <nav className="flex items-center space-x-lg">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center justify-between space-x-sm md:justify-end">
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    className="mr-2 px-0 text-base md:hidden rounded-md"
                    variant="ghost"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-0 flex flex-col" side="left">
                  <SheetTitle>
                    <span className="sr-only">Navigation Menu</span>
                  </SheetTitle>
                  <nav className="flex flex-col space-y-md mt-md pt-2xl px-2xl">
                    {collections.map((collection) => (
                      <NavLink
                        key={collection.node.handle}
                        href={`/${collection.node.handle}`}
                      >
                        {collection.node.title}
                      </NavLink>
                    ))}

                    <Separator className="my-md" />

                    {navItems.map((item) => (
                      <NavLink key={item.href} href={item.href}>
                        {item.label}
                      </NavLink>
                    ))}
                  </nav>

                  <div className="bg-accent px-2xl py-xl gap-(--spacing-xl) mt-auto flex flex-col items-start">
                    <Separator className="mb-4" />
                    <div className="flex flex-col gap-md">
                      <FooterLink href="/privacy-policy">
                        Privacy Policy
                      </FooterLink>
                      <FooterLink href="/cookie-policy">
                        Cookie Policy
                      </FooterLink>
                      <FooterLink href="/terms">Terms & Conditions</FooterLink>
                      <FooterLink href="/contact">Contact Us</FooterLink>
                    </div>
                    <p className="type-body-sm">
                      &copy; THE MODERN LIGHTING STORE{" "}
                      {new Date().getFullYear()}
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <Link className="md:-order-1" href="/">
            {/* <ResponsiveImage
              alt="Illumivera"
              height={66}
              src="/logo.png"
              width={300}
            /> */}
            <Logo />
          </Link>

          <nav className="flex items-center">
            <CartSheet />
          </nav>
        </div>
      </header>

      <nav className="hidden md:flex items-center justify-center space-x-lg h-12">
        {collections.map((collection) => (
          <NavLink
            key={collection.node.handle}
            className="type-button-sm"
            href={`/${collection.node.handle}`}
          >
            {collection.node.title}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
