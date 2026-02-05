"use client";

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#243B6B] tracking-tight mb-10">
        Frequently Asked Questions
      </h1>

      <p className="text-gray-600 leading-relaxed text-lg mb-16 max-w-2xl">
        Find answers to common questions about using Equipterra. 
        As a global marketplace, all equipment arrangements are coordinated directly 
        between owners and renters.
      </p>

      {/* FAQ SECTION */}
      <div className="space-y-16">

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            What is Equipterra?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Equipterra is a global marketplace where individuals and professionals can rent 
            high‑quality technical equipment from independent owners. We provide the platform, 
            while owners and renters coordinate pickup, return, and equipment details directly.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            Does Equipterra deliver or ship equipment?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            No. Equipterra does not deliver, ship, or transport equipment. 
            All pickup and return arrangements are made directly between the owner and renter.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            Who is responsible for the condition and accuracy of equipment?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Equipment owners are fully responsible for the accuracy, condition, and functionality 
            of the items they list. Renters should inspect equipment during pickup and communicate 
            directly with the owner regarding any questions or concerns.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            Does Equipterra provide insurance or protection?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            No. Equipterra does not provide insurance, coverage, or protection for equipment or 
            rental transactions. Owners and renters are responsible for agreeing on expectations 
            and handling any issues directly.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            How do I contact an equipment owner?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Each listing includes a contact option that allows renters to message the owner 
            directly. All equipment‑specific questions, availability checks, and pickup 
            arrangements should be handled through the listing page.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            How do payments work?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Payments are processed securely through Equipterra’s platform. 
            Owners receive payouts after a successful booking, and renters pay at the time of reservation.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            What if there is an issue with the equipment?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Owners and renters must communicate directly to resolve equipment‑related issues. 
            Equipterra does not mediate disputes, verify equipment, or inspect items. 
            We recommend documenting the equipment condition during pickup and return.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            Can I list my own equipment?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Yes. Anyone with professional‑grade equipment can create an account and list items 
            for rent. Owners are responsible for accuracy, pricing, availability, and communication.
          </p>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-2xl font-semibold text-[#243B6B] mb-4">
            How quickly does support respond?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our support team responds to general inquiries within 24–48 hours. 
            For equipment‑specific questions, please contact the owner directly.
          </p>
        </div>

      </div>

    </div>
  );
}