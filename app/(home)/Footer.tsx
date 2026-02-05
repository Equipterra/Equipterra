"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#1A2B4B] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14">

        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Equipterra</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            A global marketplace for renting professional equipment — built for engineers, creators, and industry specialists.
          </p>
        </div>

        {/* EXPLORE */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/browse" className="hover:text-white transition">Browse Equipment</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="/list-your-equipment" className="hover:text-white transition">List Your Equipment</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/contact" className="hover:text-white transition">Contact Support</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQs</Link></li>
            <li><Link href="/safety" className="hover:text-white transition">Safety Guidelines</Link></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            <li><Link href="/imprint" className="hover:text-white transition">Imprint</Link></li>
            <li><Link href="/gdpr" className="hover:text-white transition">GDPR Compliance</Link></li>
          </ul>
        </div>

        {/* JOIN US (SOCIAL LINKS) */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Join Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#" className="hover:text-white transition">LinkedIn</Link></li>
            <li><Link href="#" className="hover:text-white transition">Instagram</Link></li>
            <li><Link href="#" className="hover:text-white transition">YouTube</Link></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-300">
        © 2026 Equipterra. All rights reserved.
      </div>
    </footer>
  );
};