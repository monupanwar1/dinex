"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import React, { useEffect, useState } from "react";

import { API_CONFIG } from "@/config/api";
import MenuGrid from "./menu-grid";

type Category = {
  id: string;
  name: string;
};

export default function MenuTabs() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const res = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATEGORIES}`,
        { cache: "force-cache" },
      );

      const { data } = await res.json();
      setCategories(data);
    }

    loadCategories();
  }, []);

  if (!categories.length) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <Tabs defaultValue={categories[0]?.id} className="w-full space-y-8">
      <div className="flex justify-center mb-8 w-full">
        <TabsList
          className="
        flex w-full max-w-full
        overflow-x-auto
        sm:overflow-visible
        flex-nowrap sm:flex-wrap
        justify-start sm:justify-center
        bg-gray-100/50 p-1 gap-1
        scrollbar-hide
      "
        >
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="px-4 sm:px-8 whitespace-nowrap"
            >
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((cat) => (
        <TabsContent key={cat.id} value={cat.id}>
          <MenuGrid categoryId={cat.id} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
