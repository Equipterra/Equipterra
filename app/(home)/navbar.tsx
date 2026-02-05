"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Globe } from "lucide-react";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./NavbarSidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  variant?: "default" | "outline";
}

const navbarItems: NavbarItemProps[] = [
  { href: "/browse", children: "Browse Equipment", variant: "outline" },
  { href: "/how-it-works", children: "How It Works", variant: "outline" },
  { href: "/pricing", children: "Pricing", variant: "outline" },
];

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full border-transparent px-4 text-lg transition",
        "text-white hover:text-gray-200",
        isActive && "bg-white text-[#243B6B] hover:bg-gray-100"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

// 🌍 LANGUAGE SELECTOR COMPONENT
const LanguageSelector = () => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-white hover:text-gray-200 transition text-lg">
        <Globe className="h-5 w-5" />
        EN
      </button>

      {/* DROPDOWN */}
      <div
        className="absolute right-0 mt-2 hidden group-hover:block bg-white text-[#243B6B] 
                   rounded-lg shadow-lg border border-gray-200 w-32 py-2 z-50"
      >
        <Link
          href="/"
          className="block px-4 py-2 hover:bg-gray-100 transition text-sm"
        >
          English
        </Link>
        <Link
          href="/de"
          className="block px-4 py-2 hover:bg-gray-100 transition text-sm"
        >
          Deutsch
        </Link>
        <Link
          href="/fr"
          className="block px-4 py-2 hover:bg-gray-100 transition text-sm"
        >
          Français
        </Link>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "relative h-20 flex justify-between items-center font-medium px-8 sticky top-0 z-50",

          // ⭐ EXACT EQUIPTERRA NAVY
          "bg-[#243B6B] border-b border-[#1E3158]",

          // ⭐ PREMIUM DEPTH
          "shadow-[0_6px_25px_rgba(0,0,0,0.25)]"
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <span
            className={cn(
              "text-4xl font-semibold tracking-tight text-white",
              poppins.className
            )}
          >
            Equipterra
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="items-center gap-6 hidden lg:flex">
          {navbarItems.map((item) => (
            <NavbarItem
              key={item.href}
              href={item.href}
              isActive={item.isActive}
              variant={item.variant}
            >
              {item.children}
            </NavbarItem>
          ))}

          {/* 🌍 LANGUAGE SELECTOR */}
          <LanguageSelector />

          {/* LOGIN */}
          <Link
            href="/login"
            className="relative text-white hover:text-gray-200 text-lg font-medium
                       after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                       after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Log In
          </Link>

          {/* CTA BUTTON */}
          <Button
            asChild
            className="px-8 py-2 rounded-full bg-white text-[#243B6B] text-lg shadow-sm
                       hover:bg-gray-100 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
          >
            <Link href="/list-your-equipment">List Your Equipment</Link>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-white/10 transition"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>

      {/* SIDEBAR */}
      <NavbarSidebar
        items={navbarItems}
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />
    </>
  );
};