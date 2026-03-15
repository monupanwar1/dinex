"use client";

import React, { useEffect, useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";

import { API_CONFIG } from "@/config/api";
import { motion } from "@repo/ui/lib/framer-motion";

import MenuGrid from "./menu-grid";
import MenuSkeleton from "./menu-skeleton";

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
    return (
      <div className="max-w-6xl mx-auto">
        <MenuSkeleton />
      </div>
    );
  }

  return (
    <Tabs defaultValue={categories[0]?.id} className="w-full space-y-8">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center w-full"
      >
        <TabsList
          className="
          flex w-full max-w-4xl
          overflow-x-auto
          sm:overflow-visible
          flex-nowrap sm:flex-wrap
          justify-start sm:justify-center
          bg-gray-100/60 backdrop-blur-md
          p-2 gap-2
          rounded-xl
          scrollbar-hide
        "
        >
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="px-4 sm:px-8 py-2 whitespace-nowrap"
            >
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </motion.div>

      {/* Content */}
      {categories.map((cat) => (
        <TabsContent key={cat.id} value={cat.id} className="min-h-137.5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MenuGrid categoryId={cat.id} />
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
