"use client";

import React from "react";

import { motion } from "@repo/ui/lib/framer-motion";
import SectionCard from "../shared/SectionCard";
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
        <SectionCard
          index={index}
          heading={service.heading}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
}
