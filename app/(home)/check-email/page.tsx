"use client";

import { MailCheck } from "lucide-react";

export default function CheckEmailPage() {
  return (
    <div className="bg-gray-50 px-4 pt-28 pb-16 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-12 space-y-6 text-center">

        <MailCheck size={60} className="text-[#243B6B] mx-auto" />

        <h1 className="text-3xl font-bold text-[#243B6B]">
          Check your email
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
          We’ve sent you a confirmation link to verify your email address.
          After confirming, you’ll be redirected to your Equipterra dashboard
          based on your selected role.
        </p>

        <p className="text-gray-500 text-sm">
          Didn’t receive the email? Check your spam folder or try again later.
        </p>

      </div>
    </div>
  );
}