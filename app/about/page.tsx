'use client';

import Feedback from '@/components/Feedback';
import ClapFunction from '../../components/ClappingFunction';
import Ribbon from '../../components/Ribbon';
import Image from 'next/image';

const features = [
  'Security Guard',
  'V.I.P. Scout Service',
  'Personal Bodyguard',
  'Unarmed Security Service',
  'Event Management Services',
];

const CheckIcon = () => (
  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400">
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </span>
);

const About = () => {
  return (
    <div className="about font-size bg-[#f3f5ff]">
      {/* Full-width Ribbon Header */}
      <Ribbon name="About" showfont={true} />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT: OVERLAPPING IMAGES */}
          <div className="relative w-full max-w-md mx-auto md:mx-0 h-[320px] sm:h-[380px]">
            {/* soft backdrop */}
            <div className="absolute left-2 top-2 w-[88%] h-[62%] rounded-[24px] bg-white/45" />

            {/* outline box behind */}
            <div className="absolute right-4 top-12 w-[82%] h-[70%] rounded-[24px] border-2 border-white/70" />

            {/* image 1 (top) ✅ hide below 900px */}
            <div className="absolute left-0 top-0 w-[78%] h-[56%] rounded-[24px] overflow-hidden shadow-lg z-10 max-[900px]:hidden">
              <Image
                src="/images/about/img_1.jpg"
                alt="Sudarshan Security - 1"
                fill
                priority
                sizes="(min-width: 900px) 40vw, 0px"
                className="object-cover"
              />
            </div>

            {/* image 2 (bottom, overlapping) */}
            <div className="absolute left-6 sm:left-8 top-40 sm:top-44 w-[88%] h-[56%] rounded-[24px] overflow-hidden shadow-xl z-20">
              <Image
                src="/images/about/img_2.jpg"
                alt="Sudarshan Security - 2"
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="text-center md:text-left">
            <p className="text-emerald-700 font-semibold italic tracking-wide">
              About Sudarshan Security
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
              Get to know about <br className="hidden sm:block" />
              Security service
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              Sudarshan Security Services as an experienced service provider,
              takes pride in offering our clients an effective solution and world
              class service throughout the country.
            </p>

            {/* ✅ LIST: starts from flex-start + discs aligned vertically */}
            <div className="mt-8 flex justify-start ml-[72px] md:ml-0">

              <ul className="space-y-4 text-left">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-800 font-medium leading-6">
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
        <Feedback />
      </section>
    </div>
  );
};

export default About;
