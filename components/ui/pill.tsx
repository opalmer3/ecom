import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export type PillProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: VariantProps<typeof pillVariants>["variant"];
};

const pillVariants = cva(
  "type-button-sm inline-flex items-center justify-center rounded-full py-3xs px-xs",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Pill({ variant, className, ...props }: PillProps) {
  return (
    <div className={cn(pillVariants({ variant }), className)} {...props} />
  );
}

Pill.displayName = "Pill";

export { Pill, pillVariants };
