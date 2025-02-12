import Link from "next/link";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

export function FooterLink({
  href,
  children,
  className,
  ...props
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "type-body-md text-accent-foreground/80 hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
