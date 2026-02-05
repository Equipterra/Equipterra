"use client";

export default function SafetyGuidelinesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#243B6B] tracking-tight mb-10">
        Safety Guidelines
      </h1>

      <p className="text-gray-600 leading-relaxed text-lg mb-16 max-w-2xl">
        Equipterra is a global marketplace connecting equipment owners and renters. 
        To ensure a safe and professional experience for everyone, please follow the 
        guidelines below. These recommendations apply internationally and are designed 
        to support responsible use, clear communication, and safe equipment handling.
      </p>

      {/* SECTION 1 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">1. General Responsibilities</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra provides the platform, while all equipment interactions occur directly 
          between owners and renters. Both parties are responsible for ensuring safe, 
          respectful, and professional conduct throughout the rental process.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Communicate clearly and professionally at all times.</li>
          <li>Meet in safe, public, or mutually agreed‑upon locations.</li>
          <li>Verify identities when necessary before handing over equipment.</li>
          <li>Document equipment condition during pickup and return.</li>
        </ul>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">2. Equipment Pickup & Return</h2>
        <p className="text-gray-600 leading-relaxed">
          Owners and renters must coordinate pickup and return directly. 
          Equipterra does not deliver, ship, or transport equipment.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Choose a safe, well‑lit location for handovers.</li>
          <li>Inspect equipment together before confirming pickup.</li>
          <li>Test functionality when possible to avoid misunderstandings.</li>
          <li>Record the condition with photos or video for transparency.</li>
        </ul>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">3. Equipment Use & Care</h2>
        <p className="text-gray-600 leading-relaxed">
          Renters must handle all equipment responsibly and in accordance with the 
          owner’s instructions, manufacturer guidelines, and local regulations.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Use equipment only for its intended purpose.</li>
          <li>Follow all safety instructions provided by the owner.</li>
          <li>Avoid exposing equipment to extreme conditions or misuse.</li>
          <li>Report any issues or malfunctions to the owner immediately.</li>
        </ul>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">4. Accuracy & Condition of Equipment</h2>
        <p className="text-gray-600 leading-relaxed">
          Owners are responsible for ensuring that equipment is accurately described, 
          fully functional, and safe to use at the time of pickup.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Provide honest, detailed descriptions of equipment.</li>
          <li>Ensure items are clean, tested, and ready for use.</li>
          <li>Disclose any defects or limitations before confirming a rental.</li>
          <li>Be available to answer renter questions before and during the rental period.</li>
        </ul>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">5. Damage, Loss & Disputes</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra does not mediate disputes, verify equipment, or provide insurance. 
          Owners and renters must resolve any issues directly.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Document equipment condition before and after the rental.</li>
          <li>Discuss expectations clearly before confirming a booking.</li>
          <li>Handle disagreements respectfully and professionally.</li>
          <li>Consider using written agreements for high‑value equipment.</li>
        </ul>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">6. Personal Safety</h2>
        <p className="text-gray-600 leading-relaxed">
          Your safety is important. Always prioritize secure communication and safe meeting practices.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Meet in public or familiar locations when possible.</li>
          <li>Share meeting details with a trusted person if needed.</li>
          <li>Trust your instincts and cancel if something feels unsafe.</li>
          <li>Never share sensitive personal information unnecessarily.</li>
        </ul>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">7. Platform Safety</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra continuously works to maintain a safe and reliable platform. 
          Please report any suspicious activity or policy violations.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Report fraudulent listings or suspicious behavior immediately.</li>
          <li>Do not complete payments outside the platform.</li>
          <li>Keep communication within Equipterra for transparency.</li>
        </ul>
      </section>

      {/* SECTION 8 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#243B6B]">8. Contact</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have questions about safety or need assistance, please contact us through the{" "}
          <a href="/contact" className="text-[#243B6B] font-semibold hover:underline">
            Contact Support
          </a>{" "}
          page.
        </p>
      </section>

    </div>
  );
}