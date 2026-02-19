import React from "react";

import { motion } from "@repo/ui/lib/framer-motion";

interface DivProps {
  children: React.ReactNode;
  index?: number;
  customKey?: string | number;
}
export default function MotionDiv({
  children,
  index = 0,
  customKey,
}: DivProps) {
  return (
    <motion.div
      key={customKey ?? index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
