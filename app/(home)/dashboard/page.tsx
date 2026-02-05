"use client";

import { Card } from "@/components/ui/card";
import { Camera, ShoppingBag, Wallet } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-28 pb-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#243B6B]">Your Dashboard</h1>
        <p className="text-gray-600 text-lg mt-3">
          Manage your rentals, listings, and earnings in one place
        </p>
      </div>

      {/* Dashboard Sections */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Rentals */}
        <Card className="p-8 shadow hover:shadow-xl transition cursor-pointer text-center">
          <Camera size={40} className="text-[#243B6B] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-[#243B6B]">Your Rentals</h2>
          <p className="text-gray-600 mt-2">View and manage your rented equipment</p>
        </Card>

        {/* Listings */}
        <Card className="p-8 shadow hover:shadow-xl transition cursor-pointer text-center">
          <ShoppingBag size={40} className="text-[#243B6B] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-[#243B6B]">Your Listings</h2>
          <p className="text-gray-600 mt-2">Manage equipment you listed for rent</p>
        </Card>

        {/* Earnings */}
        <Card className="p-8 shadow hover:shadow-xl transition cursor-pointer text-center">
          <Wallet size={40} className="text-[#243B6B] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-[#243B6B]">Earnings</h2>
          <p className="text-gray-600 mt-2">Track your income from rentals</p>
        </Card>

      </div>

    </div>
  );
}