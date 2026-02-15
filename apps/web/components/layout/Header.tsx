"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";

// react
import React, { useState } from "react";

// third party
import { CiForkAndKnife, CiLogin } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

// shared ui
import { Button } from "@repo/ui/components/ui/button";
import { AnimatePresence, motion } from "@repo/ui/lib/framer-motion";
import { cn } from "@repo/ui/lib/utils";

// ---------------- TYPES ----------------

type Route = {
  name: string;
  path: string;
};

// ---------------- DATA ----------------

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// ---------------- HEADER ----------------

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-black bg-transparent px-3 backdrop-blur-2xl md:px-9">
      <Logo />

      <DesktopNav routes={routes} activePath={pathname} />

      <RightActions isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <MobileMenu
        isOpen={isOpen}
        routes={routes}
        activePath={pathname}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}

// ---------------- LOGO ----------------

function Logo() {
  return (
    <h1 className="flex items-center font-bold">
      Dinex
      <CiForkAndKnife className="ml-1 text-xl text-orange-500" />
    </h1>
  );
}

// ---------------- DESKTOP NAV ----------------

function DesktopNav({
  routes,
  activePath,
}: {
  routes: Route[];
  activePath: string;
}) {
  return (
    <nav className="hidden h-full md:block">
      <ul className="flex h-full gap-x-6 text-sm">
        {routes.map((route) => (
          <NavItem key={route.path} route={route} activePath={activePath} />
        ))}
      </ul>
    </nav>
  );
}

// ---------------- NAV ITEM ----------------

function NavItem({ route, activePath }: { route: Route; activePath: string }) {
  const isActive = activePath === route.path;

  return (
    <li
      className={cn(
        "relative flex items-center text-xl transition",
        isActive ? "text-neutral-900" : "text-neutral-800",
      )}
    >
      <Link href={route.path}>{route.name}</Link>

      {isActive && (
        <motion.div
          layoutId="header-active-link"
          className="absolute bottom-0 h-1 w-full bg-[#FF8702]"
        />
      )}
    </li>
  );
}

// ---------------- RIGHT ACTIONS ----------------

function RightActions({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="flex items-center space-x-4">
      <Cart />

      <LoginButton />

      <button className="text-2xl md:hidden" onClick={toggle}>
        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>
    </div>
  );
}

// ---------------- CART ----------------

function Cart() {
  return (
    <div className="relative">
      <FaCartShopping className="text-xl" />
      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-xs">
        2
      </span>
    </div>
  );
}

// ---------------- LOGIN BUTTON ----------------

function LoginButton() {
  return (
    <Button className="hidden items-center rounded-md bg-[#FF6B35] px-6 py-2 text-md text-white shadow-[2px_2px_0px_#2D1E2F] transition-all duration-300 hover:bg-[#e85b29] hover:shadow-[3px_3px_0px_#2D1E2F] md:flex">
      <CiLogin className="mr-2" />
      Login
    </Button>
  );
}

// ---------------- MOBILE MENU ----------------

function MobileMenu({
  isOpen,
  routes,
  activePath,
  onClose,
}: {
  isOpen: boolean;
  routes: Route[];
  activePath: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed right-0 top-14 flex h-screen w-2/3 flex-col gap-6 bg-[#FFF9EA] p-6 backdrop-blur-3xl md:hidden"
        >
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={onClose}
              className={cn(
                "text-lg font-medium",
                activePath === route.path
                  ? "text-orange-500"
                  : "text-neutral-800",
              )}
            >
              {route.name}
            </Link>
          ))}

          <LoginButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
