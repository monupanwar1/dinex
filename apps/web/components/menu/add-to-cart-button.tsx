"use client";

import { API_CONFIG } from "@/config/api";
import { getCartClient } from "@/lib/cart-client";
import { useCartStore } from "@/store/cart-store";
import { useUserStore } from "@/store/user-store";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { toast } from "sonner";

interface AddToCartButtonProps {
  menuId: string;
}

export default function AddToCartButton({ menuId }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();

  const setCart = useCartStore((s) => s.setCart);
  const user = useUserStore((s) => s.user);
  const router = useRouter();

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }
    startTransition(async () => {
      try {
        const res = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}/add`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ menuId, quantity: 1 }),
            credentials: "include",
          },
        );

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to add to cart");
        }

        toast.success("Menu added to cart");
        const freshCart = await getCartClient();
        if (freshCart) setCart(freshCart);
      } catch (err: any) {
        toast.error(err.message || "Please login first");
      }
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className="w-fit px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isPending ? "Adding..." : "Add To Cart"}
    </button>
  );
}
