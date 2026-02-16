"use client";

import React from "react";

import { cn } from "@repo/ui/lib/utils";
import { motion } from "@repo/ui/lib/framer-motion";

type Props = {
  sectionName: string;
  heading: string;
  description: string|React.ReactNode;
  sectionNameClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeader({
  sectionName,
  heading,
  description,
  sectionNameClassName,
  headingClassName,
  descriptionClassName,
}: Props) {
  return (
    <div className="w-full relative px-6  flex flex-col items-center justify-center">
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={cn(
          "text-lg md:text-xl font-bold text-[#FF6B35] uppercase tracking-wider",
          sectionNameClassName,
        )}
      >
        {sectionName}
      </motion.h4>

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={cn(
          "text-4xl md:text-5xl font-extrabold text-[#2D1E2F] mt-2 drop-shadow-[3px_3px_0px_#FF9F68]",
          headingClassName,
        )}
      >
        {heading}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={cn(
          "text-center font-medium text-[#4B2E05] mt-4 leading-relaxed",
          descriptionClassName,
        )}
      >
        {description}
      </motion.p>
    </div>
  );
}
