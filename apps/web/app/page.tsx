"use client";
import React from "react";
import HeroSection from "../components/home/HeroSection";
import HowItWork from "../components/home/HowItWork";
import MenuSection from "../components/home/MenuSection";
export default function Page() {
  return (
    <div className="flex-col items-center justify-center">
      <HeroSection />
      <HowItWork/>
      <MenuSection/>
    </div>
  );
}
