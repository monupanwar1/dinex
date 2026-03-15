"use client";

import { deleteCartItem, getCart, updateCartItem } from "@/actions/cart";
import { Cart } from "@/types/cart";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import CartItemCard from "./cart-item-card";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // One function to sync UI with Express DB
  const syncWithDb = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } catch (err) {
      toast.error("Failed to sync with server");
    } finally {
      setIsInitialLoading(false);
    }
  };

  useEffect(() => {
    syncWithDb();
  }, []);

  // Handler for all cart actions
  const handleAction = (actionFn: () => Promise<boolean>) => {
    startTransition(async () => {
      try {
        const success = await actionFn();
        if (success) {
          await syncWithDb();
        } else {
          toast.error("Action failed");
        }
      } catch (err) {
        toast.error("Network error");
      }
    });
  };

  if (isInitialLoading) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center">Loading cart...</div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

      <div className="space-y-6">
        {cart.items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            isPending={isPending}
            onIncrease={() =>
              handleAction(() => updateCartItem(item.id, item.quantity + 1))
            }
            onDecrease={() =>
              handleAction(() => updateCartItem(item.id, item.quantity - 1))
            }
            onRemove={() => handleAction(() => deleteCartItem(item.id))}
          />
        ))}
      </div>

      <div className="border-t mt-10 pt-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Total: ${cart.total.toFixed(2)}
        </div>

        <button
          disabled={isPending}
          className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition"
        >
          {isPending ? "Processing..." : "Checkout"}
        </button>
      </div>
    </div>
  );
}
