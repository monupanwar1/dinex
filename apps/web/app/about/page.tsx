"use client";

import React from "react";

import Image from 'next/image';



import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { motion } from "@repo/ui/lib/framer-motion";

import H1 from "../../components/shared/H1";
import MotionDiv from "../../components/shared/MotionDiv";
import P from "../../components/shared/P";

const AboutCard = [
  {
    Title: "Our Mission",
    Detail:
      "To deliver exceptional food experiences that bring joy and connect people.",
  },
  {
    Title: "Our Values",
    Detail:
      "Passion for quality, respect for tradition, and a constant drive for innovation.",
  },
  {
    Title: "Our Promise",
    Detail:
      "Every dish we serve is crafted with care, freshness, and the SilverSpoon touch.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen py-20 relative">
      <section className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <H1>About SilverSpoon</H1>
          <P>
            Crafting unforgettable dining experiences with a perfect blend of
            taste, tradition, and innovation.
          </P>
        </div>

        {/* Story */}
        <div className="flex flex-col justify-center gap-10 items-center mb-16 relative">
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10 mt-12 md:mt-0 relative w-full"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-6 bg-[#FFB26B] blur-3xl opacity-40 animate-pulse rounded-full" />
              <Image
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                width={650}
                height={300}
                alt="about"
                priority
                className="relative rounded-2xl hover:scale-105 transition-transform duration-300 shadow-[10px_10px_0px_#2D1E2F] object-cover h-[200px] md:h-[300px] lg:h-[400px] w-full"
              />
            </div>
          </motion.section>

          <div className="max-w-3xl text-center">
            <P>
              SilverSpoon was founded with one simple belief: food is not just
              about eating, it’s about creating memories. From humble
              beginnings, we’ve grown into a place where people come together to
              celebrate flavors, cultures, and togetherness.
            </P>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="relative grid md:grid-cols-3 gap-8 text-center">
          {AboutCard.map((item, index) => (
            <MotionDiv key={index} index={index}>
              {/* Glowing background */}
              <div className="absolute -inset-6 bg-[#ffb36bbe] blur-3xl opacity-40 animate-pulse rounded-full" />
              <Card className="relative h-80 w-full bg-[#fff0da25] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col items-center justify-center text-center px-4 py-6 hover:scale-105 transition-transform duration-300 z-30">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2D1E2F] tracking-wide drop-shadow-[2px_2px_0px_#FF9F68]">
                    {item.Title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#4B2E05]">
                    {item.Detail}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </section>
    </main>
  );
}
