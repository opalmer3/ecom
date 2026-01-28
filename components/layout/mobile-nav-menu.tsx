"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavLink } from "@/components/layout/nav-link";
import { FooterLink } from "@/components/layout/footer-link";
import { siteConfig } from "@/lib/site.config";
import { Separator } from "@/components/ui/separator";
import { CollectionEdge } from "@/types/storefront.types";
import { type MouseEvent, useCallback, useState } from "react";

interface MobileMenuProps {
  collections: CollectionEdge[];
  navItems: ReadonlyArray<{ href: string; label: string }>;
}

export function MobileMenu({ collections, navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
  }, []);

  return (
    <div className="flex md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className="mr-2 px-0 text-base md:hidden rounded-md"
            variant="ghost"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0 flex flex-col overflow-auto glass border-l border-white/20" side="left">
          <SheetTitle>
            <span className="sr-only">Navigation Menu</span>
          </SheetTitle>
          <nav className="flex flex-col space-y-md mt-md py-2xl px-2xl">
            <NavLink href="/" onClick={handleLinkClick}>
              Home
            </NavLink>

            <Separator />

            {collections.map((collection) => (
              <NavLink
                key={collection.node.handle}
                href={`/${collection.node.handle}`}
                onClick={handleLinkClick}
              >
                {collection.node.title}
              </NavLink>
            ))}

            <Separator />

            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="bg-accent px-2xl py-xl gap-(--spacing-xl) mt-auto flex flex-col items-start">
            <div className="flex flex-col gap-md">
              <FooterLink href="/privacy-policy" onClick={handleLinkClick}>
                Privacy Policy
              </FooterLink>
              <FooterLink href="/cookie-policy" onClick={handleLinkClick}>
                Cookie Policy
              </FooterLink>
              <FooterLink href="/terms" onClick={handleLinkClick}>
                Terms & Conditions
              </FooterLink>
              <FooterLink href="/contact" onClick={handleLinkClick}>
                Contact Us
              </FooterLink>
            </div>
            <p className="type-body-sm">
              &copy; {siteConfig.name.toUpperCase()} {new Date().getFullYear()}
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
