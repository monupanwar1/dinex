"use client";

import React, { useEffect, useState } from "react";

import { API_CONFIG } from "@/config/api";
import { Menu } from "@/types/menu";

import MenuCard from "./menu-card";
import MenuSkeleton from "./menu-skeleton";

async function getMenus(categoryId?: string): Promise<Menu[]> {
  if (!categoryId) return [];

  const res = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATEGORIES}/${categoryId}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch menus (${res.status})`);
  }

  const { data } = await res.json();
  return data.menus;
}

export default function MenuGrid({ categoryId }: { categoryId?: string }) {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenus() {
      setLoading(true);

      const data = await getMenus(categoryId);

      setMenus(data);
      setLoading(false);
    }

    loadMenus();
  }, [categoryId]);

  if (loading) {
    return <MenuSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {menus.map((menu, index) => (
        <MenuCard key={menu.id} menu={menu} index={index} />
      ))}
    </div>
  );
}
