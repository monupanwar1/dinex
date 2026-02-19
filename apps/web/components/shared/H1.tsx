import React from "react";

import { motion } from "@repo/ui/lib/framer-motion";
import { cn } from "@repo/ui/lib/utils";

interface H1Props {
  children: React.ReactNode;
  className?: string;
}

export default function H1({ children, className }: H1Props) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={cn(
        "text-4xl md:text-5xl font-extrabold text-[#2D1E2F] mt-2 drop-shadow-[3px_3px_0px_#FF9F68]",
        className,
      )}
    >
      {children}
    </motion.h1>
  );
}
