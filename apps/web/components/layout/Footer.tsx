"use client";

// next
import Link from "next/link";

// react
import React from "react";

// third-party
import { CiForkAndKnife } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// shared ui
import { motion } from "@repo/ui/lib/framer-motion";

// ---------------- FOOTER ----------------

export default function Footer() {
  return (
    <footer className="relative mt-2 w-full overflow-hidden border-t border-[#2D1E2F] text-[#2D1E2F]">
      <FooterGrid />

      <FooterBottom />

      <Watermark />
    </footer>
  );
}

// ---------------- GRID ----------------

function FooterGrid() {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-16 text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
      <Brand />
      <Company />
      <Policy />
      <Contact />
    </div>
  );
}

// ---------------- BRAND ----------------

function Brand() {
  return (
    <MotionItem>
      <h1 className="flex items-center text-3xl font-extrabold tracking-wider drop-shadow-[2px_2px_0px_#FF9F68]">
        Dinex
        <CiForkAndKnife className="ml-1 text-3xl text-[#FF6B35]" />
      </h1>

      <p className="mt-3 font-semibold text-[#4B2E05]/80">
        Jalan Semangka Raya, Telaga Murni
      </p>

      <SocialIcons />
    </MotionItem>
  );
}

// ---------------- SOCIAL ----------------

function SocialIcons() {
  return (
    <div className="mt-4 flex gap-5 text-2xl text-[#2D1E2F]">
      <FaInstagram className="transition-transform hover:scale-110 hover:text-[#FF6B35]" />
      <FaFacebook className="transition-transform hover:scale-110 hover:text-[#FF6B35]" />
      <FaTwitter className="transition-transform hover:scale-110 hover:text-[#FF6B35]" />
    </div>
  );
}

// ---------------- COMPANY ----------------

function Company() {
  return (
    <MotionItem delay={0.1}>
      <SectionTitle>Company</SectionTitle>

      <FooterLink href="/about">About us</FooterLink>
      <FooterLink href="/career">Career</FooterLink>
      <FooterLink href="#how-it-works">How it Works</FooterLink>
    </MotionItem>
  );
}

// ---------------- POLICY ----------------

function Policy() {
  return (
    <MotionItem delay={0.2}>
      <SectionTitle>Policy</SectionTitle>

      <FooterLink href="/faq">FAQ</FooterLink>
      <FooterLink href="/privacy">Privacy</FooterLink>
      <FooterLink href="/shipping">Shipping</FooterLink>
    </MotionItem>
  );
}

// ---------------- CONTACT ----------------

function Contact() {
  return (
    <MotionItem delay={0.3}>
      <SectionTitle>Get In Touch</SectionTitle>

      <FooterLink href="#">+91 123456789</FooterLink>

      <p className="mt-1 font-semibold text-[#4B2E05]/70">
        silverspoon@gmail.com
      </p>
    </MotionItem>
  );
}

// ---------------- SHARED ----------------

function MotionItem({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center md:items-start"
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-2 text-2xl font-bold drop-shadow-[2px_2px_0px_#FFB26B]">
      {children}
    </h1>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="footer-link">
      {children}
    </Link>
  );
}

// ---------------- BOTTOM ----------------

function FooterBottom() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 border-t border-[#2D1E2F]/30 py-6 text-center text-sm font-semibold text-[#4B2E05]/70"
    >
      © {new Date().getFullYear()} Let&apos;sFood. ALL RIGHTS RESERVED 🍔
    </motion.div>
  );
}

// ---------------- WATERMARK ----------------

function Watermark() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-2 right-2 select-none text-[8rem] font-extrabold text-[#2D1E2F] md:text-[14rem]"
    >
      EATS
    </motion.div>
  );
}
