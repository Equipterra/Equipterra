"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Globe } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-4 pt-28">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 space-y-10">

        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-[#243B6B]">
            Create your Equipterra account
          </h1>
          <p className="text-gray-600 text-base">
            Join a global marketplace for technical equipment
          </p>
        </div>

        {/* Signup Form */}
        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Full Name</label>
            <Input type="text" placeholder="John Doe" className="mt-1 h-12" />
          </div>

          <div>
            <label className="text-sm font-medium text-[#243B6B]">Email</label>
            <Input type="email" placeholder="you@example.com" className="mt-1 h-12" />
          </div>

          <div>
            <label className="text-sm font-medium text-[#243B6B]">Password</label>
            <Input type="password" placeholder="••••••••" className="mt-1 h-12" />
          </div>

          {/* Create Account → Choose Role */}
          <Link href="/choose-role">
            <Button className="w-full h-12 font-semibold bg-[#243B6B] hover:bg-[#1d3158]">
              Create Account
            </Button>
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-gray-500 text-xs">OR</span>
          <Separator className="flex-1" />
        </div>

        {/* Social Signup */}
        <div className="space-y-4">
          <Button variant="outline" className="w-full h-12 text-[#243B6B] font-medium">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full h-12 text-[#243B6B] font-medium">
            Continue with Apple
          </Button>
          <Button variant="outline" className="w-full h-12 text-[#243B6B] font-medium">
            Continue with Microsoft
          </Button>
        </div>

        {/* Already have an account */}
        <div className="text-center text-base">
          Already have an account?{" "}
          <Link 
            href="/login"
            className="text-[#243B6B] font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>

        {/* Trust Signals */}
        <div className="pt-4 space-y-3 text-gray-500 text-sm text-center">
          <div className="flex justify-center items-center gap-2">
            <ShieldCheck size={18} className="text-[#243B6B]" />
            <span>Secure account creation with industry‑standard protection</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Globe size={18} className="text-[#243B6B]" />
            <span>Trusted by professionals worldwide</span>
          </div>
        </div>

      </div>
    </div>
  );
}