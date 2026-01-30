import React from "react";
import Ribbon from "../../components/Ribbon";

const CookiePolicy = () => {
  return (
    <div className="h-full">
      {/* Header / Ribbon */}
      <Ribbon name="Cookie Policy" showfont={false} />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            At <span className="font-medium">Sudarshan Security Services Pvt. Ltd.</span>, we
            respect your privacy and are committed to providing a transparent and secure browsing
            experience. This Cookie Policy explains what cookies are, how we use them, what types
            of cookies we may use, and how you can manage or disable them.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Introduction</h2>
            <p className="about leading-relaxed mb-2">
              Sudarshan Security Services Pvt. Ltd. uses cookies and similar tracking technologies
              on our website to enhance your experience, operate our services effectively, and
              improve site performance. This Cookie Policy explains what cookies are, how we use
              them, and how you can control them through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              What are Cookies &amp; Tracking Technologies?
            </h2>
            <ul className="list-disc list-inside about space-y-1">
              <li>
                Cookies are small text files stored on your device by your web browser when you
                visit a website. They may store information such as preference settings, session
                details, and anonymous identifiers.
              </li>
              <li>
                We may also use similar technologies (such as scripts, pixels, or tags) that
                perform functions like cookies (storing or accessing information on a device).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">How We Use Cookies</h2>
            <p className="about leading-relaxed mb-2">
              We use cookies and tracking technologies for purposes such as:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>
                To provide and maintain our website features (e.g., basic navigation, page
                functionality).
              </li>
              <li>
                To remember your preferences and settings (e.g., language, display preferences,
                session state).
              </li>
              <li>
                To monitor and analyze website usage (traffic, page views, performance, and
                errors) so we can improve our website and services.
              </li>
              <li>
                For security purposes, such as protecting forms and preventing fraudulent or
                malicious activity.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Consent and Cookie Settings
            </h2>
            <ul className="list-disc list-inside about space-y-1">
              <li>
                Depending on your location and applicable laws, you may see a cookie notice/banner
                requesting your consent for certain categories of cookies.
              </li>
              <li>
                If you consent, cookies beyond strictly necessary ones (such as analytics or
                preference cookies) may be used.
              </li>
              <li>
                You can manage, block, or delete cookies at any time through your browser settings.
                Please note that disabling cookies may affect some parts of the website.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Third-Party Services &amp; Cookies
            </h2>
            <p className="about leading-relaxed">
              We may use third-party services (such as analytics tools or embedded content) which
              may set cookies on your device. These cookies are managed by the third-party
              providers and are subject to their own privacy and cookie policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Changes to this Cookie Policy
            </h2>
            <p className="about leading-relaxed">
              We may update this Cookie Policy from time to time. When we do, we will update the
              effective date on this page. Any changes will become effective when posted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Contact Us</h2>
            <p className="about leading-relaxed mb-1">
              Email: <span className="font-medium">info@sudarshansecurity.com.np</span>
            </p>
            <p className="about leading-relaxed mb-1">
              Phone: <span className="font-medium">+ 977-9852054100</span>
            </p>
            <p className="about leading-relaxed">
              Address: <span className="font-medium">Sunsari, Nepal, Nepal</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
