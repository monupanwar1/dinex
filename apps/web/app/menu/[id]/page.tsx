import React from "react";

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

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MenuPage({ params }: Props) {
  const { id } = await params;
  const menu = await getMenu(id);

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
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

          <button className="w-fit px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
