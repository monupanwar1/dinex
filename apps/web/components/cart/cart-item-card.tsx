"use client";

import { CartItem } from "@/types/cart";
import { motion } from "@repo/ui/lib/framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
  isPending: boolean;
};
console.log("card re-render");

function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  isPending,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      layout
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-4 border-2 border-[#2D1E2F] rounded-xl p-4 bg-[#fff0da82] shadow-[6px_6px_0px_#2D1E2F] transition-opacity ${
        isPending ? "opacity-50" : "opacity-100"
      }`}
    >
      {/* Image */}
      <div className="relative w-24 h-24">
        <Image
          src={item.menu.imageUrl}
          alt={item.menu.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.menu.name}</h2>
        <p className="text-gray-500">${item.menu.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={onDecrease}
          disabled={item.quantity <= 1 || isPending}
          className="w-8 h-8 border border-[#2D1E2F] rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-30"
        >
          -
        </button>

        <span className="w-6 text-center font-medium">{item.quantity}</span>

        <button
          onClick={onIncrease}
          disabled={isPending}
          className="w-8 h-8 border border-[#2D1E2F] rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-30"
        >
          +
        </button>
      </div>

      {/* Price */}
      <div className="w-24 text-right font-semibold">
        ${(item.menu.price * item.quantity).toFixed(2)}
      </div>

      {/* Remove */}
      <button
        onClick={onRemove}
        disabled={isPending}
        className="text-red-500 text-sm hover:underline disabled:opacity-30"
      >
        Remove
      </button>
    </motion.div>
  );
}

export default CartItemCard;
