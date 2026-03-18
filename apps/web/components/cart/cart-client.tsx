"use client";

import {
  deleteCartItem,
  getCartClient,
  updateCartItem,
} from "@/lib/cart-client";
import { useCartStore } from "@/store/cart-store";
import { useUserStore } from "@/store/user-store";
import { Cart } from "@/types/cart";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import CartItemCard from "../../components/cart/cart-item-card";

export default function CartClient({ initialCart }: { initialCart: Cart }) {
  const user = useUserStore((s) => s.user);
  const router = useRouter();

  const cart = useCartStore((s) => s.cart);
  const setCart = useCartStore((s) => s.setCart);
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);
  const remove = useCartStore((s) => s.remove);

  const [loadingId, setLoadingId] = useState<string | null>(null);

  // ✅ hydrate once from server
  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }
    if (!cart) {
      setCart(initialCart);
    }
  }, [initialCart, setCart, setCart, router]);

  const handleAction = async (
    type: "increase" | "decrease" | "remove",
    id: string,
  ) => {
    setLoadingId(id);

    const state = useCartStore.getState();
    const item = state.cart?.items.find((i) => i.id === id);

    if (!item) return;

    let newQuantity = item.quantity;

    // ✅ compute FIRST (fixes your bug)
    if (type === "increase") {
      newQuantity = item.quantity + 1;
      increase(id);
    }

    if (type === "decrease") {
      if (item.quantity <= 1) {
        remove(id);
        await deleteCartItem(id);
        setLoadingId(null);
        return;
      }

      newQuantity = item.quantity - 1;
      decrease(id);
    }

    if (type === "remove") {
      remove(id);
      await deleteCartItem(id);
      setLoadingId(null);
      return;
    }

    try {
      const ok = await updateCartItem(id, newQuantity);

      if (!ok) throw new Error("Update failed");
    } catch {
      toast.error("Action failed");

      // ✅ rollback from server (client fetch)
      const fresh = await getCartClient();
      if (fresh) setCart(fresh);
    } finally {
      setLoadingId(null);
    }
  };

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
            isPending={loadingId === item.id}
            onIncrease={() => handleAction("increase", item.id)}
            onDecrease={() => handleAction("decrease", item.id)}
            onRemove={() => handleAction("remove", item.id)}
          />
        ))}
      </div>

      <div className="border-t mt-10 pt-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Total: $
          {cart.items
            .reduce((sum, item) => sum + item.menu.price * item.quantity, 0)
            .toFixed(2)}
        </div>

        <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
