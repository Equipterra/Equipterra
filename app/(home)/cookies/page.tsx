"use client";

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#243B6B] tracking-tight mb-10">
        Cookie Policy
      </h1>

      <p className="text-gray-600 leading-relaxed text-lg mb-12">
        This Cookie Policy explains how Equipterra (“we”, “our”, “the platform”) uses cookies 
        and similar technologies on our website. We are committed to transparency and compliance 
        with international privacy standards, including the GDPR, the EU ePrivacy Directive, and 
        applicable global data‑protection laws.
      </p>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">1. What Are Cookies?</h2>
        <p className="text-gray-600 leading-relaxed">
          Cookies are small text files stored on your device when you visit a website. 
          They help websites function properly, improve user experience, and provide 
          essential analytics. Cookies cannot access your files or harm your device.
        </p>
      </section>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">2. How We Use Cookies</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra uses cookies strictly for essential and performance‑related purposes. 
          We do not use cookies for advertising, profiling, or cross‑site tracking.
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for core functionality such as navigation, security, and session management.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how users interact with the platform so we can improve stability and usability.</li>
          <li><strong>Preference Cookies:</strong> Store your language, region, or UI settings to enhance your experience.</li>
        </ul>
      </section>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">3. Cookies We Do Not Use</h2>
        <p className="text-gray-600 leading-relaxed">
          To maintain transparency, Equipterra does <strong>not</strong> use:
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Advertising cookies</li>
          <li>Third‑party marketing cookies</li>
          <li>Cross‑site tracking cookies</li>
          <li>Behavioral profiling cookies</li>
        </ul>

        <p className="text-gray-600 leading-relaxed">
          As a neutral marketplace, we focus solely on platform functionality and user experience.
        </p>
      </section>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">4. Third‑Party Tools</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra may use privacy‑respecting third‑party tools for analytics or performance monitoring. 
          These tools may place their own cookies, but they do not collect personal data for advertising 
          or profiling.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Any third‑party service we use must comply with GDPR and international data‑protection standards.
        </p>
      </section>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">5. Managing Your Cookie Preferences</h2>
        <p className="text-gray-600 leading-relaxed">
          You can control or disable cookies through your browser settings. 
          Most browsers allow you to:
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Block all cookies</li>
          <li>Allow only essential cookies</li>
          <li>Delete existing cookies</li>
          <li>Receive alerts before cookies are stored</li>
        </ul>

        <p className="text-gray-600 leading-relaxed">
          Please note that disabling essential cookies may affect the functionality of the platform.
        </p>
      </section>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">6. Legal Basis for Using Cookies</h2>
        <p className="text-gray-600 leading-relaxed">
          Under GDPR and the EU ePrivacy Directive, we may store essential cookies without consent. 
          All non‑essential cookies require user consent. Equipterra currently uses only essential 
          and performance cookies, which fall under legitimate interest and platform functionality.
        </p>
      </section>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">7. Updates to This Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          We may update this Cookie Policy to reflect changes in technology, legal requirements, 
          or platform improvements. The latest version will always be available on this page.
        </p>
      </section>

      {/* Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#243B6B]">8. Contact</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have questions about our Cookie Policy or data practices, please contact us through 
          the <a href="/contact" className="text-[#243B6B] font-semibold hover:underline">Contact Support</a> page.
        </p>
      </section>

    </div>
  );
}