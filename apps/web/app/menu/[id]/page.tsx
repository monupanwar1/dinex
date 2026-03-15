import React from "react";

import AddToCartButton from "@/components/menu/add-to-cart-button";
import { API_CONFIG } from "@/config/api";
import { Menu } from "@/types/menu";

async function getMenu(id: string): Promise<Menu> {
  const res = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MENUS}/${id}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  const { data } = await res.json();

  return data;
}
export async function addToCart(menuId: string, quantity = 1) {
  const res = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MENUS}/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menuId, quantity }),
      credentials: "include",
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to add to cart");
  }

  return data;
}

type Props = {
  params: Promise<{ id: string; menuId: string }>;
};

export default async function MenuPage({ params }: Props) {
  const { id } = await params;

  const menu = await getMenu(id);

  return (
    <div className="max-w-5xl  mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full aspect-square overflow-hidden rounded-xl border">
          <img
            src={menu.imageUrl}
            alt={menu.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{menu.name}</h1>

          <p className="text-gray-500 leading-relaxed">{menu.description}</p>

          <div className="text-3xl font-semibold">${menu.price}</div>

          <AddToCartButton menuId={menu.id} />
        </div>
      </div>
    </div>
  );
}
