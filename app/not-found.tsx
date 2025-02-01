import Link from "next/link";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-4 text-center">
      <Zap className="h-20 w-20 text-yellow-500 animate-pulse" />
      <h1 className="font-heading text-4xl font-bold">Page Not Found</h1>
      <p className="text-muted-foreground text-lg">
        Oops! The page you&apos;re looking for has been struck by lightning.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
