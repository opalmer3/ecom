import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export function Spinner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("h-6 w-6 animate-spin text-muted-foreground", className)}
      role="status"
      {...props}
    >
      <Loader2 className="h-full w-full" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
