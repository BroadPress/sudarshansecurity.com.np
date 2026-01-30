import React from "react";
import Ribbon from "../../components/Ribbon";

const Disclaimer = () => {
  return (
    <div className="h-full">
      {/* Header / Ribbon */}
      <Ribbon name="Disclaimer" showfont={false} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            <span className="font-medium">Effective Date:</span> 1st June, 2025
          </p>

          <p className="about leading-relaxed">
            <span className="font-medium">Sudarshan Security Services Pvt. Ltd.</span> (also
            referred to as “we”, “us”, or “our”) provides information on this website and related
            services for general informational purposes only. By accessing or using our Service,
            you agree to this Disclaimer along with our Terms &amp; Conditions and Privacy Policy.
          </p>

          {/* Section: General Information */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              General Information
            </h2>
            <p className="about leading-relaxed">
              The content on our website is provided in good faith. However, we make no
              representations or warranties of any kind, express or implied, about the accuracy,
              adequacy, validity, reliability, availability, or completeness of any information on
              the Service.
            </p>
          </div>

          {/* Section: No Professional Advice */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              No Professional Advice
            </h2>
            <p className="about leading-relaxed">
              Nothing on this Service constitutes professional, legal, financial, or security
              consultancy advice. Any reliance you place on information from this Service is
              strictly at your own risk. For site-specific security requirements, please consult
              with our team for a formal assessment and proposal.
            </p>
          </div>

          {/* Section: Service Availability */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Service Availability
            </h2>
            <p className="about leading-relaxed">
              We may modify, suspend, or discontinue any part of the Service at any time without
              notice. We do not guarantee uninterrupted access or that the Service will be free
              of errors, viruses, or other harmful components.
            </p>
          </div>

          {/* Section: Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Limitation of Liability
            </h2>
            <p className="about leading-relaxed">
              To the fullest extent permitted by applicable law, Sudarshan Security Services
              Pvt. Ltd. shall not be liable for any loss or damage of any nature (direct, indirect,
              incidental, consequential, or special) arising from your use of, or inability to use,
              the Service or reliance on any information provided on the Service.
            </p>
          </div>

          {/* Section: External Links */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              External Links Disclaimer
            </h2>
            <p className="about leading-relaxed">
              The Service may contain links to third-party websites or services that are not owned
              or controlled by us. We do not guarantee, endorse, or assume responsibility for the
              accuracy or reliability of any information offered by third-party websites linked
              through the Service.
            </p>
          </div>

          {/* Section: Testimonials / Images */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Testimonials, Photos &amp; Media
            </h2>
            <p className="about leading-relaxed">
              Any testimonials, images, or media displayed on the Service are for illustrative
              purposes. Individual results and experiences may vary depending on site conditions,
              requirements, and service scope.
            </p>
          </div>

          {/* Section: Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Contact Us</h2>
            <p className="about leading-relaxed">
              If you have any questions about this Disclaimer, please contact us at:
              <br />
              Email: <span className="font-medium">info@sudarshansecurity.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
