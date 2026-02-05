"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40"
        onClick={() => onOpenChange(false)}
      />

      {/* Sidebar */}
      <aside className="relative z-50 h-full w-80 bg-white border-r shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b">
          <Link href="/" onClick={() => onOpenChange(false)}>
            <span className="text-2xl font-semibold tracking-tight">
              Equipterra
            </span>
          </Link>

          <button
            onClick={() => onOpenChange(false)}
            className="p-2 rounded-full hover:bg-slate-100 transition"
          >
            <X className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        {/* Scrollable content */}
        <ScrollArea className="flex-1 px-5 py-4">

          {/* EXPLORE */}
          <section className="mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Explore
            </p>
            <nav className="space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className="w-full text-left p-4 rounded-md flex items-center text-base font-medium 
                             text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition"
                >
                  {item.children}
                </Link>
              ))}
            </nav>
          </section>

          {/* DASHBOARD */}
          <section className="mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Dashboard
            </p>
            <nav className="space-y-1">
              <Link href="/dashboard" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                Overview
              </Link>
              <Link href="/rentals" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                My Rentals
              </Link>
              <Link href="/listings" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                My Listings
              </Link>
              <Link href="/listings/new" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                Add New Listing
              </Link>
            </nav>
          </section>

          {/* ACTIVITY */}
          <section className="mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Activity
            </p>
            <nav className="space-y-1">
              <Link href="/messages" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                Messages
              </Link>
              <Link href="/wallet" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                Wallet & Payouts
              </Link>
            </nav>
          </section>

          {/* ACCOUNT */}
          <section className="mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Account
            </p>
            <nav className="space-y-1">
              <Link href="/profile" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                Profile & Settings
              </Link>
              <Link href="/support" onClick={() => onOpenChange(false)} className="w-full text-left p-4 rounded-md flex items-center text-base font-medium text-[#243B6B] hover:text-[#1A2B4B] hover:bg-slate-100 transition">
                Support & Help Center
              </Link>
            </nav>
          </section>

        </ScrollArea>

        {/* Footer */}
        <div className="border-t px-5 py-4 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/login"
              onClick={() => onOpenChange(false)}
              className="text-base text-[#243B6B] hover:text-[#1A2B4B]"
            >
              Log In
            </Link>

            <Button
              asChild
              className="px-4 py-2 rounded-full bg-[#1A2B4B] text-white text-sm shadow-sm 
                         hover:bg-[#243B6B] hover:shadow-md transition-all duration-200"
            >
              <Link href="/list-your-equipment" onClick={() => onOpenChange(false)}>
                List Your Equipment
              </Link>
            </Button>
          </div>

          <button
            onClick={() => onOpenChange(false)}
            className="w-full text-left text-sm text-slate-500 hover:text-red-600 transition"
          >
            Log out
          </button>
        </div>
      </aside>
    </div>
  );
};