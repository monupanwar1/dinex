"use client";

// next
import Image from "next/image";

// react
import React from "react";

// shared ui
import { Button } from "@repo/ui/components/ui/button";
import { motion } from "@repo/ui/lib/framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 md:flex-row">
      <Background />
      <HeroContent />
      <Watermark />
    </section>
  );
}

// ---------------- BACKGROUND ----------------

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,122,0.25)_0%,transparent_70%)]" />
  );
}

// ---------------- CONTENT ----------------

function HeroContent() {
  return (
    <>
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex max-w-xl flex-col items-center space-y-6 text-center md:items-start md:text-left"
      >
        <h1 className="text-5xl font-extrabold leading-tight text-[#2D1E2F] drop-shadow-[4px_4px_0px_#FF934F] md:text-7xl">
          Be The Fastest In Delivery Your{" "}
          <span className="text-[#FF6B35]">Food</span>
        </h1>

        <p className="text-lg font-medium tracking-wide text-[#4B2E05] md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          reprehenderit.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start">
          <Button className="rounded-xl bg-[#FF6B35] px-8 py-4 text-lg text-white shadow-[6px_6px_0px_#2D1E2F] transition-all duration-300 hover:bg-[#e85b29] hover:shadow-[3px_3px_0px_#2D1E2F]">
            Get Started 🚀
          </Button>

          <Button
            variant="outline"
            className="rounded-xl border-2 border-[#2D1E2F] px-8 py-4 text-lg text-[#2D1E2F] shadow-[4px_4px_0px_#FF6B35] transition-all duration-300 hover:bg-[#2D1E2F] hover:text-[#FFD8B1]"
          >
            View Menu 🍔
          </Button>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 mt-12 md:mt-0"
      >
        <div className="relative md:ml-10">
          <div className="absolute -inset-6 animate-pulse rounded-full bg-[#FFB26B] blur-3xl opacity-40" />

          <Image
            src="https://images.unsplash.com/photo-1551730707-ae4fde676aae?q=80&w=764&auto=format&fit=crop"
            alt="retro burger and fries"
            width={650}
            height={450}
            priority
            className="relative h-[400px] rounded-2xl object-cover shadow-[10px_10px_0px_#2D1E2F] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </>
  );
}

// ---------------- WATERMARK ----------------

function Watermark() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute bottom-10 right-10 select-none text-[8rem] font-extrabold text-[#2D1E2F] md:text-[12rem]"
    >
      90’s
    </motion.div>
  );
}
