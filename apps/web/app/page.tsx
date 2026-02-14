"use client";

import { motion } from "@repo/ui/lib/framer-motion";
export default function Page() {
  return (
    <main>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-4 py-2 rounded-lg bg-black text-white"
      >
        Motion Button
      </motion.button>
    </main>
  );
}
