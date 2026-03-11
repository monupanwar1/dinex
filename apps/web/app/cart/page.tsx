"use client";

import React from "react";

import { useEffect, useState } from "react";
import { deleteCartItem, getCart, updateCartItem } from "@/actions/cart";
import { Cart, CartItem } from "@/types/cart";
import CartItemCard from "./cart-item-card";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const userId = "user-123";

  async function loadCart() {
    const data = await getCart(userId);
    setCart(data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  const increase = async (item: CartItem) => {
    await updateCartItem(item.id, item.quantity + 1);
    loadCart();
  };

  const decrease = async (item: CartItem) => {
    if (item.quantity <= 1) return;
    await updateCartItem(item.id, item.quantity - 1);
    loadCart();
  };

  const remove = async (id: string) => {
    await deleteCartItem(id);
    loadCart();
  };

  if (!cart || !cart.items.length) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <p className="text-gray-500 mt-4">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 space-y-10">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="space-y-6">
        {cart.items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onIncrease={() => increase(item)}
            onDecrease={() => decrease(item)}
            onRemove={() => remove(item.id)}
          />
        ))}
      </div>

      <div className="border-t pt-6 flex justify-between items-center">
        <div className="text-xl font-semibold">
          Total: ${cart.total.toFixed(2)}
        </div>

        <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
          Checkout
        </button>
      </div>
    </div>
  );
}
