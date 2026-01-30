'use client';

import React from "react";
import Ribbon from "../../components/Ribbon";

export default function RefundPolicy() {
  return (
    <div className="h-full">
      {/* Header / Ribbon */}
      <Ribbon name="Refund Policy" showfont={false} />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            At <span className="font-medium">Sudarshan Security Services Pvt. Ltd.</span>, we are committed
            to delivering reliable security services with professionalism and transparency. This Refund Policy
            explains when refunds may be granted and how to request one.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Eligibility for Refunds
            </h2>
            <p className="about leading-relaxed mb-2">
              Refunds may be considered in the following situations:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Payment is charged more than once for the same invoice or period.</li>
              <li>Incorrect billing amount due to an administrative or system error.</li>
              <li>
                A service request was cancelled by our team before deployment and the payment was already received.
              </li>
              <li>
                A prepaid service was not initiated within the agreed timeframe due to reasons solely attributable to us.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Non-Refundable Cases
            </h2>
            <p className="about leading-relaxed mb-2">
              Refunds will generally not be issued in the following cases:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Change of mind after confirmation of service or contract signing.</li>
              <li>Services already delivered, partially delivered, or in active deployment.</li>
              <li>Client-side delays, access issues, or failure to provide required information.</li>
              <li>Termination due to violation of contract terms or misuse of services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Refund Process
            </h2>
            <p className="about leading-relaxed mb-2">
              To request a refund, contact our support team at{" "}
              <span className="font-medium">support@sudarshansecurity.com</span> within{" "}
              <span className="font-medium">7 days</span> of the payment date. Please include your invoice/receipt,
              payment reference, reason for the request, and any supporting documents.
            </p>
            <p className="about leading-relaxed">
              After review, we will respond within 5 business days. If approved, refunds will be processed to the
              original payment method within 7–10 business days (depending on your bank/payment provider).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Contact Us
            </h2>
            <p className="about leading-relaxed mb-1">
              Email: info@sudarshansecurity.com.np
            </p>
            <p className="about leading-relaxed mb-1">
              Phone: + 977-9852054100
            </p>
            <p className="about leading-relaxed">
              Address:  Sunsari, Nepal , Nepal
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
