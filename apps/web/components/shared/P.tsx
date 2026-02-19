import React from "react";

import { motion } from "@repo/ui/lib/framer-motion";

interface PProps {
  children: React.ReactNode;
}

export default function P({ children }: PProps) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className=" font-medium text-[#4B2E05] mt-4 leading-relaxed"
    >
      {children}
    </motion.p>
  );
}
