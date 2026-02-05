"use client";

export default function ImprintPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#243B6B] tracking-tight mb-10">
        Imprint
      </h1>

      <p className="text-gray-600 leading-relaxed text-lg mb-16 max-w-2xl">
        This Imprint is provided in accordance with the Austrian E‑Commerce Act (ECG), 
        the Austrian Media Act (Mediengesetz), and the EU E‑Commerce Directive. 
        It applies to all online services offered through the Equipterra platform.
      </p>

      {/* SECTION 1 */}
      <section className="space-y-4 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">1. Service Provider</h2>
        <p className="text-gray-600 leading-relaxed">
          This website and online marketplace are operated by:
        </p>

        <div className="text-gray-600 leading-relaxed space-y-1">
          <p><strong>Operator:</strong> Mohibullah</p>
          <p><strong>Location:</strong> Vienna, Austria</p>
          <p><strong>Contact:</strong> support@equipterra.com</p>
        </div>

        <p className="text-gray-600 leading-relaxed mt-4">
          This information will be updated if Equipterra is incorporated as a registered business entity.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">2. Purpose of the Website</h2>
        <p className="text-gray-600 leading-relaxed">
          Equipterra is a global online marketplace that enables individuals and professionals 
          to list, discover, and rent technical equipment. The platform facilitates communication 
          and transactions between independent owners and renters.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Equipterra does not own, verify, inspect, deliver, insure, or guarantee any equipment 
          listed on the platform.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">3. Legal Responsibility</h2>
        <p className="text-gray-600 leading-relaxed">
          As the service provider, we are responsible for the content published on this website 
          in accordance with §5 ECG and §24 Mediengesetz. However, we are not responsible for 
          external content linked from this website.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Listings, descriptions, and equipment information are provided directly by users 
          (equipment owners). Equipterra does not verify or guarantee the accuracy of user‑generated content.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">4. Liability Notice</h2>
        <p className="text-gray-600 leading-relaxed">
          Despite careful content control, we assume no liability for the content of external links. 
          The operators of linked websites are solely responsible for their content.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Equipterra is not liable for damages, losses, or disputes arising from rental transactions, 
          equipment use, or interactions between users.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">5. Copyright</h2>
        <p className="text-gray-600 leading-relaxed">
          All content, branding, design elements, and platform features are protected by 
          international copyright and intellectual‑property laws. Unauthorized reproduction, 
          distribution, or modification is prohibited.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4 mb-16">
        <h2 className="text-2xl font-semibold text-[#243B6B]">6. Dispute Resolution</h2>
        <p className="text-gray-600 leading-relaxed">
          EU consumers may use the Online Dispute Resolution (ODR) platform provided by the 
          European Commission: https://ec.europa.eu/consumers/odr/
        </p>
        <p className="text-gray-600 leading-relaxed">
          Equipterra does not participate in voluntary alternative dispute resolution procedures.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#243B6B]">7. Contact</h2>
        <p className="text-gray-600 leading-relaxed">
          For legal inquiries related to this Imprint, please contact us through the{" "}
          <a href="/contact" className="text-[#243B6B] font-semibold hover:underline">
            Contact Support
          </a>{" "}
          page.
        </p>
      </section>

    </div>
  );
}