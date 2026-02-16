"use client";

import Image from "next/image";

import React from "react";

import { Card, CardDescription, CardTitle } from "@repo/ui/components/ui/card";
import { motion } from "@repo/ui/lib/framer-motion";

type Props = {
  name?: string;
  heading?: string;
  description: string;
  image: string;
  price?: string;
  index: number;
  children?: React.ReactNode;
};

export default function SectionCard({
  name,
  heading,
  description,
  image,
  price,
  index,
  children,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="relative h-80 w-72 bg-[#fff0da88] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col items-center justify-center text-center px-4 py-6 hover:scale-105 transition-transform duration-300 z-30">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#FFB26B]/40 blur-2xl rounded-full" />

        <Image
          src={image}
          height={80}
          width={140}
          alt={description}
          className="relative mb-4"
        />

        {name && <CardTitle>{name}</CardTitle>}

        <CardTitle className="text-2xl font-extrabold text-[#2D1E2F]">
          {heading}
        </CardTitle>

        <CardDescription className="font-semibold text-neutral-900/70 mt-2">
          {description}
        </CardDescription>

        {children}
      </Card>
    </motion.div>
  );
}
