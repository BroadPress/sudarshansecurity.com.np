'use client';

import React from 'react';
import Ribbon from '../../components/Ribbon';

const TermsofServices = () => {
  return (
    <div className="min-h-screen">
      {/* Header / Ribbon */}
      <Ribbon name="Terms of Services" showfont={false} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            <span className="font-medium">Last updated:</span> 1st June, 2025
          </p>

          <p className="about leading-relaxed">
            Welcome to <span className="font-medium">Sudarshan Security Services Pvt. Ltd.</span> (“Sudarshan Security Services”,
            “we”, “us”, or “our”). Please read these Terms and Conditions (“Terms”) carefully before
            using our website, digital platforms, communication channels, or any related services
            (collectively, the “Service”).
          </p>

          <p className="about leading-relaxed">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree
            with any part of the Terms, please immediately stop using the Service.
          </p>

          {/* Section: Eligibility/Age */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Eligibility / Age</h2>
            <p className="about leading-relaxed">
              You must be at least 18 years of age to request services, sign agreements, or work with
              Sudarshan Security Services. If you are under 18, you may only use the Service under
              the supervision and consent of a parent/guardian where legally permitted.
            </p>
          </div>

          {/* Section: Service Scope */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Understanding of Our Services</h2>
            <p className="about leading-relaxed">
              Sudarshan Security Services Pvt. Ltd. provides private security solutions such as
              security guarding, event security, VIP/protocol support, and related security services
              based on client requirements and mutually agreed terms. Availability of personnel,
              sites, and service levels may vary by location, risk category, and operational factors.
            </p>
            <p className="about leading-relaxed">
              Any service commitment, deployment, or scope is valid only when confirmed through an
              official agreement, work order, or written confirmation from SSS management.
            </p>
          </div>

          {/* Section: Accounts / Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Accounts / Contact Information</h2>
            <p className="about leading-relaxed">
              If you submit inquiries, requests, or forms, you must provide accurate, complete, and
              current information. Providing misleading or false information may result in refusal
              of service, cancellation, or termination of engagement.
            </p>
            <p className="about leading-relaxed">
              You are responsible for maintaining the confidentiality of any credentials (if any)
              used to access our platform. Notify us immediately if you believe your account or
              communication channel has been compromised.
            </p>
          </div>

          {/* Section: Quotes, Pricing & Changes */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Quotes, Pricing & Service Changes</h2>
            <p className="about leading-relaxed">
              Any quoted pricing, manpower count, shift schedule, and deployment plan are estimates
              unless finalized in a written agreement. Service scope may be updated based on site
              assessment, risk evaluation, legal requirements, or client request.
            </p>
            <p className="about leading-relaxed">
              Additional resources (extra guards, overtime, equipment, rapid response arrangements,
              or special assignments) may require additional charges as agreed in writing.
            </p>
          </div>

          {/* Section: Client Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Client Responsibilities</h2>
            <p className="about leading-relaxed">
              Clients agree to provide a safe working environment and share accurate site
              information, including hazards, access protocols, and emergency contacts. Clients
              should cooperate with reasonable security procedures such as visitor logging, ID
              verification, and access control.
            </p>
            <p className="about leading-relaxed">
              Clients must not request or instruct security personnel to perform unlawful acts or
              tasks outside the agreed scope (e.g., handling cash without agreement, operating
              machinery, or non-security duties not approved by SSS management).
            </p>
          </div>

          {/* Section: Conduct & Compliance */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Conduct & Compliance</h2>
            <p className="about leading-relaxed">
              Our personnel are expected to follow professional conduct and applicable laws.
              Clients/users agree not to harass, threaten, or discriminate against our staff.
              Misconduct may result in service suspension and reporting to relevant authorities where
              necessary.
            </p>
          </div>

          {/* Section: Limitations of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Limitations of Liability</h2>
            <p className="about leading-relaxed">
              While we aim to provide reliable security services, we do not guarantee prevention of
              all incidents, losses, thefts, or damages. Security reduces risk but cannot eliminate
              it entirely. Liability (if any) will be limited to the extent permitted by law and
              subject to the specific service agreement between SSS and the client.
            </p>
          </div>

          {/* Section: Payments */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Payments</h2>
            <p className="about leading-relaxed">
              Payment terms, billing cycles, deposits, and penalties (if applicable) will be defined
              in the service agreement or invoice terms. Delayed or non-payment may result in
              suspension or termination of services.
            </p>
          </div>

          {/* Section: Links to Other Web Sites */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Links to Other Websites</h2>
            <p className="about leading-relaxed">
              Our Service may contain links to third-party websites. We are not responsible for
              their content, privacy policies, or practices. Users should review their terms and
              policies before use.
            </p>
          </div>

          {/* Section: Copyrights/Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Copyrights / Intellectual Property
            </h2>
            <p className="about leading-relaxed">
              All content on our website and platforms—including logos, text, graphics, photos, and
              materials—is owned by or licensed to Sudarshan Security Services Pvt. Ltd. You may not
              copy, modify, distribute, or use our content without prior written permission, except
              where allowed by law.
            </p>
          </div>

          {/* Section: Termination */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Termination</h2>
            <p className="about leading-relaxed">
              We may suspend or terminate access to the Service immediately if you breach these
              Terms, misuse the platform, or violate applicable laws. Clients may terminate services
              as per the termination clause in the service agreement (including notice period, if
              applicable).
            </p>
          </div>

          {/* Section: Governing Law */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Governing Law</h2>
            <p className="about leading-relaxed">
              These Terms are governed by the laws of Nepal. If any provision is held invalid or
              unenforceable, the remaining provisions will remain in effect.
            </p>
          </div>

          {/* Section: Amendments */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Amendments</h2>
            <p className="about leading-relaxed">
              Sudarshan Security Services Pvt. Ltd. reserves the right to amend these Terms at its
              discretion. Updates will be posted on this page and may be communicated through our
              official channels. Continued use of the Service constitutes acceptance of the updated
              Terms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsofServices;
