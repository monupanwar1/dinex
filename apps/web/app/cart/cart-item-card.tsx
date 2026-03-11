"use client";

import React from "react";

import { CartItem } from "@/types/cart";

type Props = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export default function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  return (
    <div className="flex items-center gap-6 border rounded-lg p-4">
      <img
        src={item.menu.image}
        alt={item.menu.name}
        className="w-24 h-24 object-cover rounded-md"
      />

      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.menu.name}</h2>
        <p className="text-gray-500">${item.menu.price}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onDecrease}
          className="w-8 h-8 border rounded flex items-center justify-center"
        >
          -
        </button>

        <span className="w-6 text-center">{item.quantity}</span>

        <button
          onClick={onIncrease}
          className="w-8 h-8 border rounded flex items-center justify-center"
        >
          +
        </button>
      </div>

      <div className="w-20 text-right font-semibold">
        ${(item.menu.price * item.quantity).toFixed(2)}
      </div>

      <button onClick={onRemove} className="text-red-500 text-sm">
        Remove
      </button>
    </div>
  );
}
