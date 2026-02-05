"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  ShieldCheck,
  PackageSearch,
  Handshake,
  CreditCard,
  Truck,
  Search,
  CalendarCheck,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [equipment, setEquipment] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (equipment) params.set("equipment", equipment);
    if (location) params.set("location", location);

    router.push(`/browse?${params.toString()}`);
  };

  return (
    <div className="p-4">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-28 pb-20 gap-12">

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#243B6B] text-center">
          Rent Professional Equipment Across Every Industry
        </h1>

        <p className="text-gray-600 text-center max-w-2xl text-sm md:text-base">
          A global marketplace for professional tools, instruments, machinery, and gear — trusted by creators, builders, engineers, scientists, technicians, and businesses worldwide.
        </p>

        {/* Search Bar */}
        <div className="flex items-center gap-6 w-full max-w-4xl">

          <Input
            placeholder="Search equipment across all industries..."
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="flex-[2.5] h-12"
          />

          <div className="relative flex-[1.2]">
            <MapPin
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <Input
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <Button
            onClick={handleSearch}
            className="flex-[0.6] h-11 font-semibold text-sm"
            variant="elevated"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-[#243B6B] mb-10">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {[
            { name: "Creative & Production", image: "https://placehold.co/800x600?text=8K+Creative+Gear" },
            { name: "Construction & Power Tools", image: "https://placehold.co/800x600?text=8K+Construction+Tools" },
            { name: "Scientific & Laboratory", image: "https://placehold.co/800x600?text=8K+Lab+Equipment" },
            { name: "Automotive & Diagnostic", image: "https://placehold.co/800x600?text=8K+Automotive+Diagnostic" },
            { name: "Surveying & Measurement", image: "https://placehold.co/800x600?text=8K+Surveying+Gear" },
            { name: "Event & AV Equipment", image: "https://placehold.co/800x600?text=8K+Event+AV+Gear" },
            { name: "Mobility & Transport", image: "https://placehold.co/800x600?text=8K+Mobility+Transport" },
            { name: "Business & Commercial", image: "https://placehold.co/800x600?text=8K+Commercial+Equipment" },
          ].map((cat) => (
            <div key={cat.name} className="text-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-44 object-cover rounded-lg shadow-sm"
              />
              <p className="mt-3 text-[#243B6B] font-medium text-base">{cat.name}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Popular Items Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-[#243B6B] mb-10">
          Popular Across Industries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {[
            { name: "Thermal Imaging & Inspection", image: "https://placehold.co/800x600?text=8K+Thermal+Inspection" },
            { name: "Laser Scanning & Surveying", image: "https://placehold.co/800x600?text=8K+Laser+Scanning" },
            { name: "Heavy‑Duty Industrial Tools", image: "https://placehold.co/800x600?text=8K+Industrial+Tools" },
            { name: "Aerial & Drone Systems", image: "https://placehold.co/800x600?text=8K+Drone+Systems" },
            { name: "Scientific Measurement Instruments", image: "https://placehold.co/800x600?text=8K+Scientific+Instruments" },
            { name: "Event & Audio‑Visual Gear", image: "https://placehold.co/800x600?text=8K+Event+AV" },
            { name: "Diagnostic & Calibration Tools", image: "https://placehold.co/800x600?text=8K+Diagnostic+Tools" },
            { name: "Mobility & Transport Equipment", image: "https://placehold.co/800x600?text=8K+Transport+Equipment" },
          ].map((item) => (
            <div key={item.name} className="text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover rounded-lg shadow-sm"
              />
              <p className="mt-3 text-[#243B6B] font-medium text-base">{item.name}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Why Equipterra Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-[#243B6B] mb-10 text-center">
          Why Equipterra?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">

          <div className="flex flex-col items-center">
            <ShieldCheck className="text-[#243B6B]" size={52} />
            <h3 className="mt-4 text-lg font-semibold text-[#243B6B]">Multi‑Industry, One Platform</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Film, construction, science, engineering, events, automotive, surveying, and more — all in one place.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <PackageSearch className="text-[#243B6B]" size={52} />
            <h3 className="mt-4 text-lg font-semibold text-[#243B6B]">Pro‑Grade Only</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Serious tools for serious work — no hobby gear, only professional‑level equipment.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Handshake className="text-[#243B6B]" size={52} />
            <h3 className="mt-4 text-lg font-semibold text-[#243B6B]">Trusted by Specialists</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Used by engineers, filmmakers, technicians, researchers, inspectors, and industry professionals worldwide.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <CreditCard className="text-[#243B6B]" size={52} />
            <h3 className="mt-4 text-lg font-semibold text-[#243B6B]">Secure Bookings</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Transparent pricing, clear terms, and safe transactions for every rental.
            </p>
          </div>

        </div>
      </div>

      {/* How Equipterra Works Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-[#243B6B] mb-10 text-center">
          How Equipterra Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">

          <div className="flex flex-col items-center">
            <Search className="text-[#243B6B]" size={52} />
            <h3 className="mt-4 text-lg font-semibold text-[#243B6B]">Search & Compare</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Find the exact equipment you need — across all industries and locations.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <CalendarCheck className="text-[#243B6B]" size={52} />
            <h3 className="mt-4 text-lg font-semibold text-[#243B6B]">Book Securely</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Confirm availability, agree on terms, and complete your booking through Equipterra.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Truck className="text-[#243B6B]" size={52} />
            <h3 className="mt-4 text-lg font-semibold text-[#243B6B]">Coordinate Pickup</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Arrange pickup and return directly with the owner. Equipterra does not deliver or transport equipment.
            </p>
          </div>

        </div>
      </div>

      {/* Brand Names Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-center text-[#243B6B] text-3xl font-bold mb-10">
          Trusted by professionals worldwide
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 text-[#243B6B] text-lg font-semibold opacity-90">
          <span>Sony</span>
          <span>Hilti</span>
          <span>Thermo Fisher Scientific</span>
          <span>Leica Geosystems</span>
          <span>Bosch</span>
          <span>Shure</span>
          <span>Texa</span>
          <span>Segway</span>
        </div>
      </div>

    </div>
  );
}