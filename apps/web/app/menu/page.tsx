"use client";

import MenuTabs from "@/components/menu/menu-tabs";
import H1 from "@/components/shared/H1";
import React from "react";

export default function MenuPage() {
  return (
    <main className="max-w-7xl py-20 mx-auto p-6">
      <H1 className="text-4xl font-bold text-center mb-4">Menu</H1>
      <MenuTabs />
    </main>
  );
}
