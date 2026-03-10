"use client";

import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";

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
        { cache: "no-store" },
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
      <div className="flex justify-center mb-8">
        <TabsList className="bg-gray-100/50 p-1">
          {categories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id} className="px-8">
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
