import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "type-body-sm text-accent-foreground/80 hover:text-accent-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}
