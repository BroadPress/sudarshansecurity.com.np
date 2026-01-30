'use client';

import Image from 'next/image';
import Ribbon from '../../components/Ribbon';

export default function WhyUs() {
  return (
    <div>
      {/* Header */}
      <Ribbon name="Why Us" showfont={false} />

      <div className="max-w-6xl mx-auto pt-8 mb-6 flex flex-col gap-20 items-center justify-center px-4 pb-7">
        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center">
          <div className="space-y-6 max-w-md">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Professional Security You Can Trust
            </h1>
            <p>
              Sudarshan Security Services provides trained, disciplined, and dependable security personnel
              for businesses, institutions, and residential premises. We focus on safety, vigilance, and
              service quality—so you can operate with confidence and peace of mind.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/images/home/1.jpg"
            alt="Sudarshan Security Services - Professional Security"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
          <div className="space-y-6 max-w-md text-left">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Trained Guards, Strong Supervision
            </h1>
            <p>
              Our guards are trained for access control, patrolling, visitor management, and incident reporting.
              With regular supervision and reporting, we ensure consistent performance and reliable coverage
              at every post.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/images/home/1.jpg"
            alt="Trained Security Guards and Supervision"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center">
          <div className="space-y-6 max-w-md">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Security Solutions for Every Sector
            </h1>
            <p>
              From commercial buildings and banks to hotels, schools, factories, and events—our security plans
              are tailored to your site needs. We deploy the right manpower and procedures to keep people and
              property protected.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/images/home/1.jpg"
            alt="Security Solutions for Multiple Sectors"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
          <div className="space-y-6 max-w-md text-left">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Responsive Support, Reliable Service
            </h1>
            <p>
              We prioritize quick communication, shift continuity, and disciplined deployment. With a focus on
              professionalism and accountability, Sudarshan Security Services delivers dependable security
              that evolves with your requirements.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/images/home/1.jpg"
            alt="Responsive Security Support"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
