"use client";

import Image from "next/image";

import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { motion } from "@repo/ui/lib/framer-motion";
import SectionHeader from "../shared/SectionHeader";

type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const dishes: Dish[] = [
  {
    name: "Classic Beef Burger",
    description:
      "Grilled veg patty with cheddar,tomato, and special sauce on a toasted bun.",
    price: "$8.99",
    image: "/burger.jpg",
  },
  {
    name: "Crispy French Fries",
    description:
      "Golden and crispy potato fries served with a side of ketchup.",
    price: "$3.49",
    image: "/french-fries.jpg",
  },
  {
    name: "Margherita Pizza",
    description:
      "Stone-baked pizza topped with fresh mozzarella a drizzle of olive oil.",
    price: "$11.50",
    image: "/pizza.jpg",
  },
];

export default function MenuSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center">
      <SectionHeader
        sectionName="Our Menu"
        heading=" Our Popular Menu"
        description="Lorem ipsum dolor, sit a met consectetur a dipisicing elit. Hic, perferendis!"
      />
      <MenuSectionCard />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 right-2 text-[8rem] md:text-[14rem] font-extrabold text-[#2D1E2F] select-none"
      >
        MENU
      </motion.div>
      <Button className=" mt-20 bg-[#FF6B35] hover:bg-[#e85b29] text-white text-lg px-8 py-4 rounded-xl shadow-[6px_6px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300">
        More Menu 🍔
      </Button>
    </section>
  );
}
function MenuSectionCard() {
  const [likes, setLikes] = useState(Array(dishes.length).fill(false));

  const toggle = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((liked, i) => (i === index ? !liked : liked)),
    );
  };

  return (
    <div className="grid md:grid-cols-3 gap-10 mt-6 ">
      {dishes.map((dish, index) => (
        <motion.div
          key={dish.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="relative h-[460px] w-80 bg-[#fff0da82] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col items-center justify-center text-center px-4 py-6 hover:scale-105 transition-transform duration-300 z-30">
            <Image
              src={dish.image}
              alt={dish.name}
              height={600}
              width={1200}
              className="rounded-md  object-cover"
            />

            <div className="p-4 flex flex-col items-center text-center gap-2">
              <CardTitle>{dish.name}</CardTitle>

              <CardDescription className="font-semibold text-neutral-900/70">
                {dish.description}
              </CardDescription>
            </div>

            <div className="w-full h-0.5 border-b bg-neutral-950"></div>

            <CardFooter className="flex w-full mb-4 justify-between py-4">
              <p>{dish.price}</p>

              <button onClick={() => toggle(index)}>
                {likes[index] ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
