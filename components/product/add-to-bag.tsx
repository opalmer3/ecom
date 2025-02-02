"use client";

import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { Select } from "@/components/ui/select";

interface AddToBagProps {
  maxQuantity: number;
  isAvailable: boolean;
  onAddToBag: (quantity: number) => Promise<void>;
  isLoading?: boolean;
}

export function AddToBag({
  maxQuantity,
  isAvailable,
  onAddToBag,
  isLoading = false,
}: AddToBagProps) {
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isAvailable && quantity > maxQuantity) {
      setQuantity(maxQuantity);
    }
  }, [isAvailable, maxQuantity, quantity]);

  const handleAddToBag = async () => {
    await onAddToBag(quantity);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 2000);
  };

  if (!isAvailable) {
    return (
      <div
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground cursor-not-allowed"
        )}
      >
        Out of stock
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-(--spacing-sm)">
      <Select
        aria-label="Select quantity"
        className="text-center shrink-0 min-w-[80px]"
        value={quantity.toString()}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setQuantity(parseInt(e.target.value))
        }
      >
        {Array.from({ length: Math.min(maxQuantity, 20) }, (_, i) => i + 1).map(
          (value) => (
            <option key={value} value={value.toString()}>
              {value}
            </option>
          )
        )}
      </Select>
      <Button
        className="w-full"
        disabled={!isAvailable || isLoading || isSuccess}
        onClick={() =>
          isAvailable && !isLoading && !isSuccess && handleAddToBag()
        }
      >
        {isLoading ? (
          <Spinner className="text-primary-foreground" />
        ) : (
          <>
            <ShoppingBagIcon className="mr-2 h-4 w-4" />
            {isSuccess ? "Added!" : "Add to Bag"}
          </>
        )}
      </Button>
    </div>
  );
}
