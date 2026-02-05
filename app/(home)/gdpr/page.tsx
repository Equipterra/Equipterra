"use client";

export default function GDPRCompliancePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#243B6B] tracking-tight mb-10">
        GDPR Compliance
      </h1>

      <p className="text-gray-600 leading-relaxed text-lg mb-16 max-w-2xl">
        Equipterra is committed to protecting your personal data in accordance with the 
        General Data Protection Regulation (GDPR), the Austrian Data Protection Act (DSG), 
        the EU Digital Services Act, and applicable global privacy standards. 
        This page explains your rights and how we safeguard your information.
      </p>

      {/* SECTION 1 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">1. Data Controller</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra acts as the data controller for personal data you provide when using 
          our platform. This means we determine how your data is collected, processed, 
          and protected.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">2. What Personal Data We Process</h2>
        <p className="text-gray-600 leading-relaxed">
          We process only the data necessary to operate the platform and provide services. 
          This may include:
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Account information (name, email, password)</li>
          <li>Communication data (messages sent through the platform)</li>
          <li>Transaction data (bookings, payments, confirmations)</li>
          <li>Technical data (IP address, device type, browser information)</li>
          <li>Cookies and usage analytics (see Cookie Policy)</li>
        </ul>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">3. Legal Basis for Processing</h2>
        <p className="text-gray-600 leading-relaxed">
          Under GDPR, we process personal data based on the following legal grounds:
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li><strong>Contractual necessity</strong> — to provide platform services.</li>
          <li><strong>Legitimate interest</strong> — to maintain security and improve functionality.</li>
          <li><strong>Legal obligation</strong> — to comply with tax, fraud, and regulatory requirements.</li>
          <li><strong>Consent</strong> — for optional features or non‑essential cookies.</li>
        </ul>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">4. Your GDPR Rights</h2>
        <p className="text-gray-600 leading-relaxed">
          As an EU/EEA user, you have the following rights under GDPR:
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li><strong>Right of Access:</strong> Request a copy of your personal data.</li>
          <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your data (“right to be forgotten”).</li>
          <li><strong>Right to Restrict Processing:</strong> Limit how your data is used.</li>
          <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine‑readable format.</li>
          <li><strong>Right to Object:</strong> Object to processing based on legitimate interest.</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time for optional features.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed">
          To exercise any of these rights, please contact us through the Contact Support page.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">5. Data Transfers Outside the EU/EEA</h2>
        <p className="text-gray-600 leading-relaxed">
          If personal data is transferred outside the EU/EEA, we ensure appropriate safeguards, 
          such as:
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>EU Standard Contractual Clauses (SCCs)</li>
          <li>Approved international data‑transfer frameworks</li>
          <li>Strict contractual and technical protections</li>
        </ul>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">6. Data Retention</h2>
        <p className="text-gray-600 leading-relaxed">
          We retain personal data only as long as necessary for platform operation, 
          legal compliance, fraud prevention, and security. When data is no longer required, 
          it is securely deleted.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">7. Security Measures</h2>
        <p className="text-gray-600 leading-relaxed">
          We use industry‑standard technical and organizational measures to protect personal data, 
          including encryption, access controls, secure infrastructure, and continuous monitoring.
        </p>
      </section>

      {/* SECTION 8 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">8. Automated Decision‑Making</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra does not use automated decision‑making or profiling that produces legal 
          or significant effects on users.
        </p>
      </section>

      {/* SECTION 9 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">9. Complaints</h2>
        <p className="text-gray-600 leading-relaxed">
          If you believe your data rights have been violated, you may file a complaint with your 
          local data‑protection authority. EU users may contact their national supervisory authority 
          or the Austrian Data Protection Authority (DSB).
        </p>
      </section>

      {/* SECTION 10 */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">10. Updates to This Page</h2>
        <p className="text-gray-600 leading-relaxed">
          We may update this GDPR Compliance page to reflect legal, technical, or operational changes. 
          The latest version will always be available on this page.
        </p>
      </section>

      {/* SECTION 11 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#243B6B]">11. Contact</h2>
        <p className="text-gray-600 leading-relaxed">
          For GDPR‑related questions or data requests, please contact us through the{" "}
          <a href="/contact" className="text-[#243B6B] font-semibold hover:underline">
            Contact Support
          </a>{" "}
          page.
        </p>
      </section>

    </div>
  );
}