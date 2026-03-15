"use client";

import { CartItem } from "@/types/cart";
import Image from "next/image";
import React from "react";

type Props = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
  isPending: boolean;
};

export default function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  isPending,
}: Props) {
  return (
    <div
      className={`flex items-center gap-4 border rounded-lg md:p-4 transition-opacity ${isPending ? "opacity-50" : "opacity-100"}`}
    >
      <Image
        src={item.menu.imageUrl}
        alt={item.menu.name}
        width={96}
        height={96}
        className="w-24 h-24 object-cover rounded-md bg-gray-100"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.menu.name}</h2>
        <p className="text-gray-500">${item.menu.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onDecrease}
          disabled={item.quantity <= 1 || isPending}
          className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-30"
        >
          -
        </button>

        <span className="w-6 text-center font-medium">{item.quantity}</span>

        <button
          onClick={onIncrease}
          disabled={isPending}
          className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-30"
        >
          +
        </button>
      </div>

      <div className="w-24 text-right font-semibold">
        ${(item.menu.price * item.quantity).toFixed(2)}
      </div>

      <button
        onClick={onRemove}
        disabled={isPending}
        className="text-red-500 text-sm hover:underline disabled:opacity-30"
      >
        Remove
      </button>
    </div>
  );
}
