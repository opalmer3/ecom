import Link from "next/link";
import { NavLink } from "@/components/layout/nav-link";
import { PromotionalBanner } from "./promotional-banner";
import { Logo } from "@/components/Logo";
import { CollectionEdge } from "@/types/storefront.types";
import { CartSheet } from "@/components/cart/cart-sheet";
import { MobileMenu } from "@/components/layout/mobile-nav-menu";

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
          <MobileMenu collections={collections} navItems={navItems} />

          <Link className="md:-order-1" href="/">
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
            className="type-button-md"
            href={`/${collection.node.handle}`}
          >
            {collection.node.title}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
