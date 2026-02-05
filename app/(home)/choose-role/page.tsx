"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Upload, Layers } from "lucide-react";

export default function ChooseRolePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-28 pb-20 flex justify-center">
      <div className="w-full max-w-4xl space-y-16">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-[#243B6B]">
            How do you want to use Equipterra?
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose your role to personalize your experience.  
            You can switch or upgrade anytime.
          </p>
        </div>

        {/* Role Options */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Renter */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition cursor-pointer border-[#243B6B]/20 h-full">
            <div className="flex flex-col items-center text-center h-full">
              <Search size={50} className="text-[#243B6B] mb-4" />

              <h2 className="text-2xl font-semibold text-[#243B6B] mb-3">
                I want to rent
              </h2>

              <p className="text-gray-600 mb-6 flex-grow">
                Browse and rent technical equipment from trusted owners worldwide.
              </p>

              <Link href="/complete-registration" className="w-full mt-auto">
                <Button className="h-12 w-full bg-[#243B6B] hover:bg-[#1d3158]">
                  Continue as Renter
                </Button>
              </Link>
            </div>
          </Card>

          {/* Owner */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition cursor-pointer border-[#243B6B]/20 h-full">
            <div className="flex flex-col items-center text-center h-full">
              <Upload size={50} className="text-[#243B6B] mb-4" />

              <h2 className="text-2xl font-semibold text-[#243B6B] mb-3">
                I want to list equipment
              </h2>

              <p className="text-gray-600 mb-6 flex-grow">
                Earn money by listing your technical equipment for professionals to rent.
              </p>

              <Link href="/complete-registration" className="w-full mt-auto">
                <Button className="h-12 w-full bg-[#243B6B] hover:bg-[#1d3158]">
                  Continue as Owner
                </Button>
              </Link>
            </div>
          </Card>

          {/* Both */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition cursor-pointer border-[#243B6B]/20 h-full">
            <div className="flex flex-col items-center text-center h-full">
              <Layers size={50} className="text-[#243B6B] mb-4" />

              <h2 className="text-2xl font-semibold text-[#243B6B] mb-3">
                I want both
              </h2>

              <p className="text-gray-600 mb-6 flex-grow">
                Rent equipment when you need it and list your own gear when you're not using it.
              </p>

              <Link href="/complete-registration" className="w-full mt-auto">
                <Button className="h-12 w-full bg-[#243B6B] hover:bg-[#1d3158]">
                  Continue with Both
                </Button>
              </Link>
            </div>
          </Card>

        </div>

      </div>
    </div>
  );
}