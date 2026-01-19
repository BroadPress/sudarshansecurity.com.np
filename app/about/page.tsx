'use client';

import ClapFunction from '../../components/ClappingFunction';
import Ribbon from '../../components/Ribbon';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about font-size">
      {/* Full-width Ribbon Header */}
      <Ribbon name="About" showfont={true} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* ✅ Image on mobile (centered) */}
          <div className="md:hidden overflow-hidden px-5 sm:px-0 flex justify-center">
            <Image
              src="/images/about/img_1.jpg"
              alt="Logo"
              width={800}
              height={800}
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full"
              priority
            />
          </div>

          {/* ✅ Left side - Text content (center on mobile, left on desktop) */}
          <div className="md:w-2/3 space-y-4 md:space-y-6 leading-relaxed text-center md:text-left">
            <h1 className="font-bold text-blue-900 text-2xl mt-10">
              About Sudarshan Security
            </h1>
            <h1 className="font-bold text-4xl">
              Get to know about Security service
            </h1>

            <p>
              Sudarshan Security Services as an experienced service provider,
              takes pride in offering our clients an effective solution and
              world class service throughout the country.
            </p>

            {/* ✅ List: centered as a block on mobile, normal on desktop */}
            <div className="flex justify-center md:justify-start">
              <ul className="list-disc list-inside md:list-outside md:pl-6 space-y-2 text-gray-700 text-left">
                <li>Security Guard</li>
                <li>V.I.P. Scout Service</li>
                <li>Personal Bodyguard</li>
                <li>Unarmed Security Service</li>
                <li>Event Management Services</li>
              </ul>
            </div>
          </div>

          {/* ✅ Right side - Image (Desktop only) */}
          <div className="hidden md:block md:w-1/3 space-y-6">
            <div className="overflow-hidden flex justify-center md:justify-end">
              <Image
                src="/images/about/img_1.jpg"
                alt="About Sudarshan Security"
                width={500}
                height={500}
                className="w-80 h-80 object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ✅ Clap Button (center on mobile, left on desktop) */}
        <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
          <ClapFunction />
        </div>
      </div>
    </div>
  );
};

export default About;
