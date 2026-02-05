"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#243B6B] tracking-tight">
          Contact Support
        </h1>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We're here to help with general questions, platform guidance, or account support. 
          Equipterra is a global marketplace, and all equipment arrangements are coordinated directly between owners and renters.
        </p>
      </div>

      {/* If submitted, show confirmation */}
      {submitted ? (
        <div className="bg-white shadow-lg rounded-2xl p-12 border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            Message Sent
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-xl mx-auto">
            Thank you for contacting Equipterra.  
            Our support team has received your message and will respond within 24–48 hours.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            For equipment‑specific questions, please contact the owner directly through the listing page.
          </p>
        </div>
      ) : (
        /* Contact Form */
        <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#243B6B] mb-2">
                Full Name
              </label>
              <Input 
                placeholder="Enter your full name"
                className="h-12"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#243B6B] mb-2">
                Email Address
              </label>
              <Input 
                placeholder="you@example.com"
                className="h-12"
                type="email"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-[#243B6B] mb-2">
                Subject
              </label>
              <Input 
                placeholder="How can we help?"
                className="h-12"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#243B6B] mb-2">
                Message
              </label>
              <Textarea 
                placeholder="Write your message here..."
                className="min-h-[150px]"
                required
              />
            </div>

            {/* Submit */}
            <Button 
              type="submit"
              className="w-full h-12 text-lg font-semibold bg-[#243B6B] hover:bg-[#1d315a] transition"
            >
              Send Message
            </Button>

          </form>
        </div>
      )}

      {/* Additional Info */}
      <div className="text-center mt-16 text-gray-600 text-sm leading-relaxed">
        <p>
          For equipment‑specific questions, availability, or pickup arrangements, 
          please contact the owner directly through the listing page.
        </p>
        <p className="mt-2">
          Our support team responds to general inquiries within 24–48 hours.
        </p>
      </div>

    </div>
  );
}