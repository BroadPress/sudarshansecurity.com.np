'use client';

import Feedback from '@/components/Feedback';
import ClapFunction from '../../components/ClappingFunction';
import Ribbon from '../../components/Ribbon';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials';

const features = [
  'Security Guard',
  'V.I.P. Scout Service',
  'Personal Bodyguard',
  'Unarmed Security Service',
  'Event Management Services',
];

const CheckIcon = () => (
  <span
    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
    style={{
      background: 'yellow',
      color: 'white',
      border: '1px solid var(--border)',
    }}
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </span>
);

const AboutClient = () => {
  return (
    <div
      className="about font-size pb-20"
      style={{ background: 'var(--mainBackground)', color: 'var(--text)' }}
    >
      {/* Full-width Ribbon Header */}
      <Ribbon name="About" />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT: OVERLAPPING IMAGES (fixed for md & smaller) */}
          <div className="relative w-full max-w-md mx-auto md:mx-0 h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden lg:overflow-visible">
            {/* soft backdrop (only show on large screens) */}
            <div
              className="hidden lg:block absolute left-2 top-2 w-[88%] h-[62%] rounded-[24px]"
              style={{
                background: 'var(--background)',
                opacity: 0.45,
              }}
            />

            {/* image 1 (top) only on large screens */}
            <div className="hidden lg:block absolute left-0 top-0 w-[78%] h-[56%] rounded-[24px] overflow-hidden shadow-lg z-10">
              <Image
                src="/images/about/img_1.jpg"
                alt="Sudarshan Security - 1"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 0px"
                className="object-cover"
              />
            </div>

            {/* image 2: normal on md & smaller, overlapping only on lg+ */}
            <div
              className="
                relative w-full h-full
                rounded-[24px] overflow-hidden shadow-xl z-20

                lg:absolute
                lg:left-6 lg:top-40
                lg:w-[88%] lg:h-[56%]
              "
            >
              <Image
                src="/images/about/img_2.jpg"
                alt="Sudarshan Security - 2"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="text-center md:text-left">
            <p
              className="font-semibold text-2xl italic tracking-wide"
              style={{ color: '#00715D' }}
            >
              About Sudarshan Security
            </p>

            <h1
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: 'var(--text)' }}
            >
              Get to know about <br className="hidden sm:block" />
              Security service
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
              style={{ color: 'var(--text2)' }}
            >
              Sudarshan Security Services as an experienced service provider, takes
              pride in offering our clients an effective solution and world class
              service throughout the country.
            </p>

            
            <div className="mt-8 flex justify-start ml-4  md:ml-0">
              <ul className="space-y-4 text-left">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5">
                      <CheckIcon />
                    </span>
                    <span
                      className="font-medium leading-6"
                      style={{ color: 'var(--text)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
              <ClapFunction />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default AboutClient;
