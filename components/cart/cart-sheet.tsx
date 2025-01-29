"use client";

import { useCartStore } from "@/lib/store/cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X, Loader2 } from "lucide-react";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { formatCurrency } from "@/lib/utils/currency";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Select } from "@/components/ui/select";
import { CartItem } from "@/components/cart/cart-item";
import { CartLine } from "@/types/storefront.types";

export function CartSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, isLoading, removeItem, updateItem } = useCartStore();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleUpdateQuantity = async (
    lineId: string,
    merchandiseId: string,
    quantity: number
  ) => {
    await updateItem(lineId, merchandiseId, quantity);
  };

  const handleRemoveItem = async (lineId: string) => {
    await removeItem(lineId);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          aria-label="Open cart"
          className="relative rounded-md"
          size="icon"
          variant="ghost"
        >
          <ShoppingBag className="h-6 w-6" />
          {cart?.lines.edges.length ? (
            <span className="absolute right-0 top-0 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {cart.lines.edges.length}
            </span>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-[400px]">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Basket ({cart?.lines.edges.length ?? 0})</SheetTitle>
          <SheetDescription className="sr-only">
            Manage your items
          </SheetDescription>
        </SheetHeader>
        {isLoading && (
          <div className="absolute z-10 inset-0 bg-background/50 backdrop-blur-xs animate-pulse" />
        )}
        {cart?.lines.edges.length ? (
          <>
            <ScrollArea className="flex-1 pr-6">
              <div className="divide-y divide-muted">
                {cart.lines.edges.map((edge) => (
                  <CartItem
                    key={edge.node.id}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateQuantity={handleUpdateQuantity}
                    node={edge.node as CartLine}
                  />
                ))}
              </div>
            </ScrollArea>
            <div className="pr-6 border-t">
              <div className="space-y-4 pr-6 pt-sm">
                <div className="flex items-center justify-between font-medium">
                  <span>Subtotal</span>
                  <span>
                    {formatCurrency(
                      cart.cost.subtotalAmount.amount,
                      cart.cost.subtotalAmount.currencyCode
                    )}
                  </span>
                </div>
                <Button asChild className="w-full" size="lg">
                  <a href={cart.checkoutUrl}>Checkout</a>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingBag
              aria-hidden="true"
              className="h-12 w-12 text-muted-foreground"
            />
            <div className="text-xl font-medium">Your cart is empty</div>
            <Button
              className="text-sm text-muted-foreground"
              variant="link"
              onClick={() => setIsOpen(false)}
            >
              Continue shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
