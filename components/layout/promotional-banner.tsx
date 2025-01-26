"use client";

import { Truck, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="container relative flex py-sm justify-end">
        <div className="p-sm text-center type-body-sm w-full justify-center flex items-center gap-sm absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Truck className="size-4" />
          <span>Free Delivery on orders over £50</span>
        </div>

        <Button
          className="h-fit w-fit"
          size="icon"
          variant="ghost"
          onClick={() => setIsVisible(false)}
        >
          <X className="size-5" />
          <span className="sr-only">Close promotional banner</span>
        </Button>
      </div>
    </div>
  );
}
