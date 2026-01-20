'use client';

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
  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
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
          {/* LEFT: OVERLAPPING IMAGES (SMALLER + TIGHTER OVERLAP) */}
          <div className="relative w-full max-w-md mx-auto md:mx-0 h-[320px] sm:h-[380px]">
            {/* soft backdrop */}
            <div className="absolute left-2 top-2 w-[88%] h-[62%] rounded-[24px] bg-white/45" />

            {/* outline box behind */}
            <div className="absolute right-4 top-12 w-[82%] h-[70%] rounded-[24px] border-2 border-white/70" />

            {/* image 1 (top) */}
            <div className="absolute left-0 top-0 w-[78%] h-[56%] rounded-[24px] overflow-hidden shadow-lg z-10">
              <Image
                src="/images/about/img_1.jpg" // ✅ your first image
                alt="Sudarshan Security - 1"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>

            {/* image 2 (bottom, overlapping) - tighter margin from top/left */}
            <div className="absolute left-6 sm:left-8 top-40 sm:top-44 w-[88%] h-[56%] rounded-[24px] overflow-hidden shadow-xl z-20">
              <Image
                src="/images/about/img_2.jpg" // ✅ your second image
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

            <ul className="mt-8 space-y-4 max-w-xl mx-auto md:mx-0">
              {features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <CheckIcon />
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center md:justify-start">
              <ClapFunction />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
