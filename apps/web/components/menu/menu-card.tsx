"use client";

import Image from "next/image";
import React from "react";

import { Menu } from "@/types/menu";
import { Card } from "@repo/ui/components/ui/card";
import Link from "next/link";
import AddToCartButton from "./add-to-cart-button";

interface Props {
  menu: Menu;
  onClick: () => void;
}

export default function MenuCard({ menu, onClick }: Props) {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
    >
      <Link href={`/menu/${menu.id}`}>
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={menu.imageUrl}
            alt={menu.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="font-bold text-lg">{menu.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 h-10 mt-1">
          {menu.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg text-green-600">
            ${menu.price.toFixed(2)}
          </span>
          <AddToCartButton menuId={menu.id} />
        </div>
      </div>
    </Card>
  );
}
