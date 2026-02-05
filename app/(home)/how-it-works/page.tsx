"use client";

import { Card } from "@/components/ui/card";
import { Search, ShieldCheck, Wallet, Upload } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="bg-gray-50 px-6 pt-28 pb-16 flex justify-center">
      <div className="w-full max-w-6xl space-y-20">

        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-[#243B6B]">
            How Equipterra Works
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Equipterra connects renters and equipment owners worldwide through a secure,
            trusted, and easy‑to‑use platform. Whether you want to rent or list equipment,
            the process is simple, fast, and globally accessible.
          </p>
        </div>

        {/* 3-Step Overview */}
        <div className="grid md:grid-cols-3 gap-10">
          <Card className="p-10 shadow-lg hover:shadow-xl transition rounded-2xl text-center space-y-6">
            <Search size={55} className="text-[#243B6B] mx-auto" />
            <h2 className="text-2xl font-semibold text-[#243B6B]">1. Browse or List</h2>
            <p className="text-gray-600 leading-relaxed">
              Renters explore professional equipment worldwide. Owners list their gear with
              detailed descriptions, pricing, and availability.
            </p>
          </Card>

          <Card className="p-10 shadow-lg hover:shadow-xl transition rounded-2xl text-center space-y-6">
            <ShieldCheck size={55} className="text-[#243B6B] mx-auto" />
            <h2 className="text-2xl font-semibold text-[#243B6B]">2. Book Securely</h2>
            <p className="text-gray-600 leading-relaxed">
              Every booking is protected with secure verification, trusted profiles, and
              transparent communication between renters and owners.
            </p>
          </Card>

          <Card className="p-10 shadow-lg hover:shadow-xl transition rounded-2xl text-center space-y-6">
            <Wallet size={55} className="text-[#243B6B] mx-auto" />
            <h2 className="text-2xl font-semibold text-[#243B6B]">3. Rent & Earn</h2>
            <p className="text-gray-600 leading-relaxed">
              Renters pick up or receive the equipment. Owners earn money safely and
              reliably with every completed rental.
            </p>
          </Card>
        </div>

        {/* Owners + Renters Side-by-Side Text */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Owners Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#243B6B]">
              For Equipment Owners
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              List your equipment and earn money with complete control over pricing,
              availability, and booking approvals. Equipterra connects you with verified
              renters worldwide through a secure and trusted platform.
            </p>
            <ul className="text-gray-600 space-y-3 text-lg">
              <li>• Set your own rental prices</li>
              <li>• Manage availability and bookings</li>
              <li>• Rent to verified, trusted users</li>
              <li>• Earn income from unused equipment</li>
            </ul>
          </div>

          {/* Renters Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#243B6B]">
              For Renters
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Find the equipment you need at competitive prices from trusted owners.
              Equipterra gives you access to professional gear locally or globally,
              with secure bookings and transparent communication.
            </p>
            <ul className="text-gray-600 space-y-3 text-lg">
              <li>• Search by category or location</li>
              <li>• Compare prices and availability</li>
              <li>• Book securely with verified owners</li>
              <li>• Pick up or receive your equipment</li>
            </ul>
          </div>

        </div>

        {/* Cards Under Both Text Blocks */}
        <div className="grid md:grid-cols-2 gap-16 mt-12">

          {/* Owner Card */}
          <Card className="p-10 shadow-lg rounded-2xl text-center space-y-6">
            <Upload size={60} className="text-[#243B6B] mx-auto" />
            <h3 className="text-2xl font-semibold text-[#243B6B]">
              List Your Equipment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Create a listing in minutes. Add photos, descriptions, pricing, and
              availability — and start earning.
            </p>
          </Card>

          {/* Renter Card */}
          <Card className="p-10 shadow-lg rounded-2xl text-center space-y-6">
            <Search size={60} className="text-[#243B6B] mx-auto" />
            <h3 className="text-2xl font-semibold text-[#243B6B]">
              Rent Equipment Easily
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Find the exact equipment you need — cameras, lenses, drones, audio gear,
              tools, scientific equipment, and more.
            </p>
          </Card>

        </div>

      </div>
    </div>
  );
}