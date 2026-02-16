"use client";

import Image from "next/image";

import React from "react";

import { Card, CardDescription, CardTitle } from "@repo/ui/components/ui/card";
import { motion } from "@repo/ui/lib/framer-motion";
import SectionHeader from "../shared/SectionHeader";

type Service = {
  heading: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    heading: "Easy To Order",
    description: "You only order through the app",
    image: "/order-delivery.png",
  },
  {
    heading: "Fastest Delivery",
    description: "Delivery will be on time",
    image: "/delivery-bike.png",
  },
  {
    heading: "Best Quality",
    description: "The best Quality of food for you",
    image: "/food-delivery.png",
  },
];

export default function HowItWork() {
  return (
    <section
      // id="how-it-works"
      className="w-full min-h-screen relative px-6  flex flex-col items-center justify-center"
    >
      <SectionHeader
        sectionName="How it works"
        heading=" What We Serve"
        description={
          <>
            Product Quality Is Our Priority, And Always Guarantees <br />
            Until It’s In Your Hand
          </>
        }
      />

      {/* service cards */}
      <HowItWorkCard />

      {/* retro watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-2 right-2 text-[8rem] md:text-[14rem] font-extrabold text-[#2D1E2F] select-none"
      >
        FOOD
      </motion.div>
    </section>
  );
}

function HowItWorkCard() {
  return (
    <div className="grid md:grid-cols-3 gap-10 mt-16 ">
      {services.map((service, index) => (
        <motion.div
          key={service.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="relative h-80 w-72 bg-[#fff0da88] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col items-center justify-center text-center px-4 py-6 hover:scale-105 transition-transform duration-300 z-30 ">
            {/* retro highlight behind image */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#FFB26B]/40 blur-2xl rounded-full" />

            <Image
              src={service.image}
              height={80}
              width={140}
              alt={service.heading}
              className="relative  mb-4"
            />
            <CardTitle className="text-2xl font-extrabold text-[#2D1E2F] tracking-wide drop-shadow-[2px_2px_0px_#FF9F68]">
              {service.heading}
            </CardTitle>
            <CardDescription className="font-semibold text-[#4B2E05] text-base mt-2">
              {service.description}
            </CardDescription>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
