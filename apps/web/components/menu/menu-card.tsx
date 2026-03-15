"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Menu } from "@/types/menu";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { motion } from "@repo/ui/lib/framer-motion";

import AddToCartButton from "./add-to-cart-button";

interface Props {
  menu: Menu;
  index: number;
}

export default function MenuCard({ menu, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="relative h-[460px] w-full bg-[#fff0da82] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col items-center text-center px-4 py-6 hover:scale-105 transition-transform duration-300">
        <Link href={`/menu/${menu.id}`} className="w-full">
          <div className="relative w-full h-48">
            <Image
              src={menu.imageUrl}
              alt={menu.name}
              fill
              className="rounded-md object-cover"
            />
          </div>
        </Link>

        <div className="p-4 flex flex-col items-center text-center gap-2">
          <CardTitle>{menu.name}</CardTitle>

          <CardDescription className="font-semibold text-neutral-900/70 line-clamp-2">
            {menu.description}
          </CardDescription>
        </div>

        <div className="w-full h-0.5 border-b bg-neutral-950"></div>

        <CardFooter className="flex w-full justify-between items-center py-4">
          <span className="font-bold text-lg text-green-600">
            ${menu.price.toFixed(2)}
          </span>

          <AddToCartButton menuId={menu.id} />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
