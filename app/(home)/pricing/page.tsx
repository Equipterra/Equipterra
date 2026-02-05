"use client";

import { Card } from "@/components/ui/card";
import { Wallet, Percent, Globe2, ShieldCheck, HelpCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="bg-gray-50 px-6 pt-28 pb-20 flex justify-center">
      <div className="w-full max-w-6xl space-y-20">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-[#243B6B]">
            Pricing & Fees
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Equipterra operates as a neutral international marketplace. Our pricing is designed to remain simple, transparent, and globally competitive — with clear fees for both renters and equipment owners.
          </p>
        </div>

        {/* Renters vs Owners */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Renters */}
          <Card className="p-10 shadow-lg rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <Wallet size={32} className="text-[#243B6B]" />
              <h2 className="text-3xl font-bold text-[#243B6B]">
                For Renters
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Renters pay the rental price set by the owner, plus a small service fee that supports secure payments and platform reliability.
            </p>

            <div className="bg-[#F3F5FB] rounded-xl p-5 space-y-3">
              <h3 className="text-xl font-semibold text-[#243B6B]">
                Renter Service Fee: 5%
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Applied at checkout. Displayed clearly before confirming any booking.
              </p>
            </div>
          </Card>

          {/* Owners */}
          <Card className="p-10 shadow-lg rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <Percent size={32} className="text-[#243B6B]" />
              <h2 className="text-3xl font-bold text-[#243B6B]">
                For Equipment Owners
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Listing equipment on Equipterra is free. A standard commission is applied only when a rental is successfully completed.
            </p>

            <div className="bg-[#F3F5FB] rounded-xl p-5 space-y-3">
              <h3 className="text-xl font-semibold text-[#243B6B]">
                Owner Commission: 10%
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deducted automatically from your earnings. All fees are shown before payout.
              </p>
            </div>
          </Card>

        </div>

        {/* Global & What Fees Support */}
        <div className="grid md:grid-cols-3 gap-10">

          <Card className="p-8 shadow-md rounded-2xl space-y-4 text-center">
            <Globe2 size={40} className="text-[#243B6B] mx-auto" />
            <h3 className="text-xl font-semibold text-[#243B6B]">
              Global & Consistent
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A unified fee structure that works across countries, currencies, and categories.
            </p>
          </Card>

          <Card className="p-8 shadow-md rounded-2xl space-y-4 text-center">
            <ShieldCheck size={40} className="text-[#243B6B] mx-auto" />
            <h3 className="text-xl font-semibold text-[#243B6B]">
              Platform Reliability
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fees support secure payments, fraud prevention, uptime, and continuous platform improvements.
            </p>
          </Card>

          <Card className="p-8 shadow-md rounded-2xl space-y-4 text-center">
            <HelpCircle size={40} className="text-[#243B6B] mx-auto" />
            <h3 className="text-xl font-semibold text-[#243B6B]">
              Clear & Transparent
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              No hidden charges. All fees are displayed before confirming a booking or accepting a rental.
            </p>
          </Card>

        </div>

        {/* Simple Fee Overview */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#243B6B] text-center">
            Simple, Transparent Structure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            Renters pay the rental price plus a 5% service fee. Owners receive their earnings after a 10% platform commission is applied. Equipterra does not charge for deposits, delivery, insurance, or damage handling — these responsibilities remain directly between owners and renters.
          </p>
        </div>

        {/* Example Section */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card className="p-8 shadow-md rounded-2xl space-y-4">
            <h3 className="text-xl font-semibold text-[#243B6B]">
              Example for Renters
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rental price: €100  
            </p>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Service fee (5%): €5</li>
              <li>• Total: €105</li>
            </ul>
          </Card>

          <Card className="p-8 shadow-md rounded-2xl space-y-4">
            <h3 className="text-xl font-semibold text-[#243B6B]">
              Example for Owners
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rental price: €100  
            </p>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Platform commission (10%): €10</li>
              <li>• Earnings after commission: €90</li>
            </ul>
          </Card>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            Equipterra is built on clarity and trust. Our pricing ensures a fair, consistent, and premium experience for both equipment owners and renters across the globe.
          </p>
        </div>

      </div>
    </div>
  );
}