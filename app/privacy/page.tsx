'use client';

import React from "react";
import Ribbon from "../../components/Ribbon";

const PrivacyPolicy = () => {
  return (
    <div className="h-full">
      {/* Header / Ribbon */}
      <Ribbon name="Privacy Policy" showfont={false} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="text leading-relaxed">
            <span className="font-medium">Effective Date:</span> 1st June, 2025
          </p>

          <p className="about leading-relaxed">
            Sudarshan Security Services Pvt. Ltd. (also referred to as
            &quot;Sudarshan &quot;, &quot;Sudarshan Security&quot;, &quot;us&quot;,
            &quot;we&quot; or &quot;our&quot;) operates the
            www.sudarshansecurity.com.np website and related digital services
            (the “Service”). This Privacy Policy explains how we collect, use,
            store, and disclose personal data when you use our Service or engage
            our security services.
          </p>

          <p className="about leading-relaxed">
            By using our Service or communicating with us, you agree to the
            collection and use of information in accordance with this Privacy
            Policy. Any terms used here have the same meaning as in our Terms &
            Conditions unless specified otherwise.
          </p>

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Collection of Information
            </h2>
            <p className="about leading-relaxed">
              We collect information that helps us provide professional security
              services, respond to inquiries, manage contracts, and improve our
              operations.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Types of Data We Collect
            </h2>

            <h3 className="text-lg font-medium text-teal-600 mt-3">
              Personal & Business Information
            </h3>
            <p className="about leading-relaxed">
              When you request a quote, sign a service agreement, or contact us,
              we may collect:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Company/Organization Name (if applicable)</li>
              <li>Service Site Address (Province/City/Location)</li>
              <li>Billing details (as required for invoicing)</li>
              <li>Communication records (messages, calls, emails)</li>
            </ul>

            <h3 className="text-lg font-medium text-teal-600 mt-4">
              Service & Operational Data
            </h3>
            <p className="about leading-relaxed">
              To deliver and manage security services, we may collect or create
              records such as:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Visitor log details shared by a client site (if applicable)</li>
              <li>Incident/occurrence reports and shift reports</li>
              <li>Access control entries and site instructions</li>
              <li>Photos or documents you provide for verification or reporting</li>
            </ul>

            <h3 className="text-lg font-medium text-teal-600 mt-4">
              Usage Data (Website/App)
            </h3>
            <p className="about leading-relaxed">
              We may collect information such as your IP address, browser type,
              device details, pages visited, time spent, and diagnostic data to
              improve our website and user experience.
            </p>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Cookies & Tracking Technologies
            </h2>
            <p className="about leading-relaxed">
              We use cookies and similar technologies to operate our website and
              understand how it’s used.
            </p>

            <h3 className="text-lg font-medium text-teal-600 mt-4">
              Examples of cookies:
            </h3>
            <ul className="list-disc list-inside about space-y-1">
              <li>Session Cookies (to keep you logged in during a session)</li>
              <li>Preference Cookies (to remember your settings)</li>
              <li>Security Cookies (to help protect the Service)</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              How We Use Your Data
            </h2>
            <ul className="list-disc list-inside about space-y-1">
              <li>To provide and maintain our services</li>
              <li>To respond to inquiries and provide quotations</li>
              <li>To manage contracts, billing, and client support</li>
              <li>To coordinate deployments, supervision, and service quality</li>
              <li>To monitor, audit, and improve operational performance</li>
              <li>To detect, prevent, and address technical or security issues</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Sharing & Disclosure of Data
            </h2>
            <p className="about leading-relaxed">
              We do not sell your personal data. We may share data only when
              necessary, such as:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>With your consent</li>
              <li>
                With service providers (e.g., hosting, IT support) under
                confidentiality obligations
              </li>
              <li>To comply with legal obligations or lawful requests</li>
              <li>
                To protect the rights, safety, and property of Sudarshan, our
                clients, or the public
              </li>
              <li>To investigate fraud, misuse, or security incidents</li>
            </ul>
          </div>

          {/* SECTION 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Data Retention
            </h2>
            <p className="about leading-relaxed">
              We retain personal data only for as long as necessary to fulfill
              the purposes described in this policy, including legal, accounting,
              and operational requirements. Retention periods may vary depending
              on the type of record (e.g., contracts, incident reports, support
              requests).
            </p>
          </div>

          {/* SECTION 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Data Security
            </h2>
            <p className="about leading-relaxed">
              We use reasonable administrative, technical, and physical measures
              to protect your data. However, no method of online transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* SECTION 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              International Transfers
            </h2>
            <p className="about leading-relaxed">
              Your information may be processed and stored in Nepal and, in some
              cases, in other locations where our service providers operate (for
              example, cloud hosting). We take reasonable steps to ensure
              appropriate safeguards are in place.
            </p>
          </div>

          {/* SECTION 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Links to Other Websites
            </h2>
            <p className="about leading-relaxed">
              Our website may contain links to third-party sites. We are not
              responsible for their content or privacy practices. Please review
              their privacy policies separately.
            </p>
          </div>

          {/* SECTION 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Children’s Privacy
            </h2>
            <p className="about leading-relaxed">
              Our services are not directed to children under 18. We do not
              knowingly collect personal data from children. If you believe a
              child has provided us personal data, please contact us and we will
              take appropriate steps to remove it.
            </p>
          </div>

          {/* SECTION 11 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Your Rights & Choices
            </h2>
            <p className="about leading-relaxed">
              Depending on applicable laws, you may request access, correction,
              or deletion of your personal data, or object to certain processing.
              To make a request, contact us using the details below.
            </p>
          </div>

          {/* SECTION 12 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Changes to This Privacy Policy
            </h2>
            <p className="about leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with an updated “Effective Date.”
            </p>
          </div>

          {/* SECTION 13 */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Contact Us
            </h2>
            <p className="about leading-relaxed mb-1">
              Email: info@sudarshansecurity.com.np
            </p>
            <p className="about leading-relaxed">
              Address: Sudarshan Security Services Pvt. Ltd., Kathmandu, Nepal
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
