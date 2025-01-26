"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "@/components/ui/hooks/use-toast";
import {
  addCartLine,
  createCart,
  getCart,
  removeCartLine,
  updateCartLine,
} from "@/lib/services/cart";
import { CartFragment } from "@/types/storefront.generated";

interface CartState {
  cartId: string | null;
  isLoading: boolean;
  cart: CartFragment | null;
  initializeCart: (merchandiseId: string, quantity?: number) => Promise<void>;
  fetchCart: () => Promise<void>;
  addItem: (merchandiseId: string, quantity?: number) => Promise<void>;
  updateItem: (
    lineId: string,
    merchandiseId: string,
    quantity: number
  ) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartId: null,
      isLoading: false,
      cart: null,

      initializeCart: async (merchandiseId: string, quantity = 1) => {
        set({ isLoading: true });
        try {
          const { cart, errors, warnings } = await createCart(
            merchandiseId,
            quantity
          );
          if (errors?.length) {
            toast({
              variant: "destructive",
              title: "Error",
              description: errors[0].message,
            });
            set({ isLoading: false });
            return;
          }
          if (warnings?.length) {
            toast({
              title: "Warning",
              description: warnings[0].message,
            });
          }
          set({
            cart,
            cartId: cart?.id || null,
            isLoading: false,
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to create cart",
          });
          set({ isLoading: false });
        }
      },

      fetchCart: async () => {
        const cartId = get().cartId;
        if (!cartId) return;

        set({ isLoading: true });
        try {
          const { cart, errors, warnings } = await getCart(cartId);
          if (errors?.length) {
            toast({
              variant: "destructive",
              title: "Error",
              description: errors[0].message,
            });
            set({ isLoading: false });
            return;
          }
          if (warnings?.length) {
            toast({
              title: "Warning",
              description: warnings[0].message,
            });
          }
          set({
            cart,
            isLoading: false,
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to fetch cart",
          });
          set({ isLoading: false });
        }
      },

      addItem: async (merchandiseId: string, quantity = 1) => {
        const cartId = get().cartId;
        if (!cartId) {
          await get().initializeCart(merchandiseId, quantity);
          return;
        }

        set({ isLoading: true });
        try {
          const { cart, errors, warnings } = await addCartLine(
            cartId,
            merchandiseId,
            quantity
          );
          if (errors?.length) {
            toast({
              variant: "destructive",
              title: "Error",
              description: errors[0].message,
            });
            set({ isLoading: false });
            return;
          }
          if (warnings?.length) {
            toast({
              title: "Warning",
              description: warnings[0].message,
            });
          }
          set({
            cart,
            isLoading: false,
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to add item to cart",
          });
          set({ isLoading: false });
        }
      },

      updateItem: async (
        lineId: string,
        merchandiseId: string,
        quantity: number
      ) => {
        const cartId = get().cartId;
        if (!cartId) return;

        set({ isLoading: true });
        try {
          const { cart, errors, warnings } = await updateCartLine(
            cartId,
            lineId,
            merchandiseId,
            quantity
          );
          if (errors?.length) {
            toast({
              variant: "destructive",
              title: "Error",
              description: errors[0].message,
            });
            set({ isLoading: false });
            return;
          }
          if (warnings?.length) {
            toast({
              title: "Warning",
              description: warnings[0].message,
            });
          }
          set({
            cart,
            isLoading: false,
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to update cart item",
          });
          set({ isLoading: false });
        }
      },

      removeItem: async (lineId: string) => {
        const cartId = get().cartId;
        if (!cartId) return;

        set({ isLoading: true });
        try {
          const { cart, errors, warnings } = await removeCartLine(
            cartId,
            lineId
          );
          if (errors?.length) {
            toast({
              variant: "destructive",
              title: "Error",
              description: errors[0].message,
            });
            set({ isLoading: false });
            return;
          }
          if (warnings?.length) {
            toast({
              title: "Warning",
              description: warnings[0].message,
            });
          }
          set({
            cart,
            isLoading: false,
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to remove item from cart",
          });
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        cartId: state.cartId,
        cart: state.cart,
      }),
    }
  )
);
