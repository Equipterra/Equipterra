"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, ShieldCheck } from "lucide-react";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-4 pt-28">

      {/* Reset Password Card */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 space-y-10">

        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-[#243B6B]">
            Reset your password
          </h1>
          <p className="text-gray-600 text-base">
            Enter your email and we’ll send you a secure reset link
          </p>
        </div>

        {/* Reset Form */}
        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Email</label>
            <Input 
              type="email" 
              placeholder="you@example.com" 
              className="mt-1 h-12" 
            />
          </div>

          <Button className="w-full h-12 font-semibold bg-[#243B6B] hover:bg-[#1d3158]">
            Send reset link
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-gray-500 text-xs">OR</span>
          <Separator className="flex-1" />
        </div>

        {/* Back to Login */}
        <div className="text-center text-base">
          Remember your password?{" "}
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
            <Mail size={18} className="text-[#243B6B]" />
            <span>You’ll receive a secure email with a reset link</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <ShieldCheck size={18} className="text-[#243B6B]" />
            <span>Your account remains protected at all times</span>
          </div>
        </div>

      </div>
    </div>
  );
}