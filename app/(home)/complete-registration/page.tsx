"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CompleteRegistrationPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 px-6 pt-28 pb-16 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-12 space-y-8">

        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-[#243B6B]">
            Complete your registration
          </h1>
          <p className="text-gray-600 text-base">
            Add your essential details to finalize your Equipterra profile
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* First Name */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">First Name</label>
            <Input type="text" placeholder="John" className="mt-1 h-12" />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Last Name</label>
            <Input type="text" placeholder="Doe" className="mt-1 h-12" />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Phone Number</label>
            <Input type="tel" placeholder="+43 660 0000000" className="mt-1 h-12" />
          </div>

          {/* Country */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Country</label>
            <Input type="text" placeholder="Austria" className="mt-1 h-12" />
          </div>

          {/* City */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">City</label>
            <Input type="text" placeholder="Vienna" className="mt-1 h-12" />
          </div>

          {/* Street Name */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Street Name</label>
            <Input type="text" placeholder="Mariahilfer Straße" className="mt-1 h-12" />
          </div>

          {/* Street Number */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Street Number</label>
            <Input type="text" placeholder="24A" className="mt-1 h-12" />
          </div>

          {/* ZIP / Postal Code */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">ZIP / Postal Code</label>
            <Input type="text" placeholder="1070" className="mt-1 h-12" />
          </div>

          {/* Profile Photo */}
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Profile Photo (optional)</label>
            <Input type="file" className="mt-1 h-12" />
          </div>

          {/* Submit */}
          <Button
            className="w-full h-12 font-semibold bg-[#243B6B] hover:bg-[#1d3158]"
            onClick={() => router.push("/check-email")}
          >
            Finish Registration
          </Button>

        </div>

      </div>
    </div>
  );
}