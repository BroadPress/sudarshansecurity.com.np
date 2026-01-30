'use client';

import Image from 'next/image';
import Ribbon from '../../components/Ribbon';

export default function History() {
  return (
    <div>
      {/* Header */}
      <Ribbon name="History" showfont={false} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Beginning</h2>
          <p className="leading-relaxed">
            Sudarshan Security Services Pvt. Ltd. began its journey with a clear mission: to provide reliable,
            professional, and disciplined security solutions for organizations and communities across Nepal.
            With strong leadership and a commitment to service excellence, what started as a focused security
            initiative has grown into a trusted partner for industrial sites, commercial premises, banks,
            hotels, schools, and many other institutions.
          </p>

          <div className="mt-6 rounded-lg overflow-hidden shadow-md">
            <Image
              height={600}
              width={800}
              src="/images/history/2.jpg"
              alt="Sudarshan Security Services - Our Beginning"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Evolution Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Evolution Over the Years</h2>
          <p className="leading-relaxed">
            Over the years, Sudarshan Security Services expanded its operations by strengthening training
            standards, improving deployment systems, and building a disciplined team capable of serving
            diverse sectors. Continuous improvement, professionalism, and quick responsiveness have shaped
            our growth—helping us deliver dependable security services at scale while maintaining quality
            and trust.
          </p>

          {/* Two Card Format */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Card 1 */}
            <div className="card p-6 shadow-sm rounded-xl hover:shadow-md transition">
              <Image
                height={600}
                width={800}
                src="/images/history/1.png"
                alt="Leadership & Management"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-[24px] font-semibold text-center">Leadership & Management</h3>
              <p className="text-center text-sm">Guiding Standards & Discipline</p>
              <p className="mt-3 text-center leading-relaxed">
                Our leadership team has played a key role in building strong operational discipline, setting
                professional standards, and ensuring responsible security deployment. Their focus on training,
                supervision, and accountability has helped strengthen service delivery and long-term growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card p-6 shadow-sm rounded-xl hover:shadow-md transition h-full">
              <Image
                height={600}
                width={800}
                src="/images/history/2.png"
                alt="Operations & Field Team"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-[24px] font-semibold text-center">Operations & Field Team</h3>
              <p className="text-center text-sm">Frontline Service Excellence</p>
              <p className="mt-3 text-center leading-relaxed">
                Our operational teams and security personnel are at the core of our success. Through consistent
                training, punctual deployment, and professional conduct, they help protect people, property,
                and premises every day—earning trust across multiple industries and institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Key Milestones</h2>

          <div className="space-y-6">
            <div className="p-6 card rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold">Company Established</h3>
              <p className="mt-2">
                Sudarshan Security Services Pvt. Ltd. was established to provide professional private security
                services with a focus on discipline, training, and reliability.
              </p>
            </div>

            <div className="p-6 card rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold">Service Expansion</h3>
              <p className="mt-2">
                Expanded security coverage across industrial and commercial sectors including banks, hotels,
                schools, and office premises.
              </p>
            </div>

            <div className="p-6 card rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold">Stronger Deployment & Training</h3>
              <p className="mt-2">
                Improved training systems, supervision, and deployment processes to ensure consistent service
                quality across multiple locations.
              </p>
            </div>

            <div className="p-6 card rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold">Growth Across Nepal</h3>
              <p className="mt-2">
                Strengthened operational scale and reach—serving a wide range of clients and maintaining a
                reputation for dependable security solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="pb-12">
          <h2 className="text-2xl font-bold mb-4">Our Journey Continues</h2>
          <p className="leading-relaxed">
            With each passing year, Sudarshan Security Services continues to grow stronger and more dedicated
            to protecting people and property with professionalism and integrity. Our history reflects our
            commitment to disciplined service, client trust, and continuous improvement—today and into the
            future.
          </p>
        </section>
      </div>
    </div>
  );
}
