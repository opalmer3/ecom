import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: VariantProps<typeof badgeVariants>["variant"];
};

const badgeVariants = cva(
  "type-button-sm inline-flex items-center py-3xs px-xs rounded-md",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        accent: "bg-accent text-accent-foreground",
        muted: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

Badge.displayName = "Badge";

export { Badge };
