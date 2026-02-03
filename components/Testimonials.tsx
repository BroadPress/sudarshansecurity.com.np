'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  company: string;
  position: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sumnima Rai',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. \n\nTheir commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 2,
    name: 'Samir Poudel',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. \n\nTheir commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 3,
    name: 'Rakesh Mehta',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. \n\nTheir commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 4,
    name: 'Geeta Bhattarai',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. \n\nTheir commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const isLgUp = useMediaQuery('(min-width: 1024px)');

  // lg+ => convert double line breaks to single line break
  const displayQuote = useMemo(() => {
    if (!isLgUp) return t.quote; // keep same for smaller screens
    return t.quote.replace(/\n\s*\n+/g, '\n'); // \n\n -> \n
  }, [isLgUp, t.quote]);

  return (
    <div className="h-full w-full mt-5">
      <div
        className="
          group
          h-full w-full
          rounded-[22px]
          bg-white
          shadow-sm
          ring-1 ring-black/5
          px-6 sm:px-8
          py-10
          flex flex-col
          items-center
          text-center
          overflow-hidden

          transition-all duration-300 ease-out
          hover:-translate-y-2
          hover:shadow-xl
          hover:ring-black/10
          hover:bg-white
        "
      >
        {/* Avatar */}
        <div className="flex justify-center">
          <div
            className="rounded-full p-3 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            // style={{ background: 'rgba(224, 208, 160, 0.55)' }}
          >
            <div className="h-20 w-20 rounded-full overflow-hidden bg-white">
              <Image
                src={t.avatar}
                alt={t.name}
                width={96}
                height={96}
                sizes="80px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Company */}
        <h3 className="mt-5 text-lg sm:text-xl font-medium" style={{ color: 'var(--text)' }}>
          {t.company}
        </h3>

        {/* Quote */}
        <p
          className="
            mt-4
            w-full
            text-base sm:text-lg
            leading-7 sm:leading-8
            whitespace-pre-line
            line-clamp-7
            flex-1
          "
          style={{ color: 'var(--text2)' }}
        >
          {displayQuote}
        </p>

        {/* Signature */}
        <div className="pt-6">
          <p className="text-base sm:text-lg font-medium" style={{ color: 'var(--text)' }}>
            {t.name}
          </p>
          <p className="mt-1 text-sm sm:text-base" style={{ color: 'var(--text2)' }}>
            {t.position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-20" style={{ background: 'var(--mainBackground)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-14">
          <p className="font-semibold italic text-2xl text-[#00715D]">Our testimonials</p>
          <h2
            className="mt-3 text-4xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            What they&apos;re talking about sudarshan
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-x-auto overflow-y-hidden pb-6 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth lg:max-w-[1120px] lg:mx-auto">
          <div className="flex gap-6 sm:gap-8 md:gap-10 min-w-max items-stretch pr-2">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="
                  w-[calc(100vw-2rem)] max-w-none
                  sm:w-[400px] sm:max-w-none
                  md:w-[540px] md:min-w-[540px]
                  lg:w-[540px] lg:min-w-[540px]
                  flex-shrink-0
                  snap-center
                  h-[520px] sm:h-[480px] md:h-[480px]
                "
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
