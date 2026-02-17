"use client";

import Image from "next/image";

import React from "react";

import { Card, CardTitle } from "@repo/ui/components/ui/card";
import { motion } from "@repo/ui/lib/framer-motion";

export default function OfferSection() {
  return (
    <section className="min-h-screen relative container py-8 mb-20 px-4 md:px-8 mx-auto flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-[1000px]"
      >
        <OfferCard />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 md:bottom-0 right-2 text-[8rem] md:text-[14rem] font-extrabold text-[#2D1E2F] select-none z-10"
        >
          OFFER
        </motion.div>
      </motion.div>
    </section>
  );
}

function OfferCard() {
  return (
    <Card className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] overflow-hidden group z-10">
      {/* Background Image */}
      <Image
        src="/hamburger.jpg"
        alt="Special Offer"
        fill
        className="transition-all brightness-30 duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6">
        <CardTitle className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          🍔 Big Retro Burger Deal!
        </CardTitle>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-100">
          Get <span className="text-[#FFB26B] font-bold">30% OFF</span> your
          first order this weekend only.
        </p>
      </div>

      {/* Accent Glow */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-[#FFB26B]/40 blur-2xl rounded-full" />
    </Card>
  );
}
