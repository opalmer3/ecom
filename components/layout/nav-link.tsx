"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"a">;

export function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "type-button-lg text-foreground transition-colors hover:text-foreground/80",
        isActive && "text-foreground/80",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
