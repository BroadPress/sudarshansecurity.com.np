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


// function TestimonialCard({ t }: { t: Testimonial }) {
//   return (
//     <div className="w-full pb-8">
//       <div
//         className="
//           relative w-full
//           rounded-[26px]
//           px-5 sm:px-8 md:px-10
//           pt-8 sm:pt-10
//           pb-8 sm:pb-10
//           flex flex-col items-center text-center
//           shadow-sm
//           transition-all duration-300 ease-out
//           hover:-translate-y-1 hover:shadow-lg
//         "
//         style={{
//           background: "var(--feedback-card-bg)",
//           border: "1px solid var(--feedback-card-border)",
//         }}
//       >
//         {/* Avatar */}
//         <div className="mb-5 sm:mb-6 shrink-0">
//           <div
//             className="h-24 w-24 rounded-full p-[3px]"
//             style={{ background: "var(--feedback-avatar-ring)" }}
//           >
//             <div
//               className="h-full w-full rounded-full p-[6px]"
//               style={{ background: "var(--background)" }}
//             >
//               <div className="h-full w-full rounded-full overflow-hidden">
//                 <Image
//                   src={t.avatar}
//                   alt={t.name}
//                   width={96}
//                   height={96}
//                   sizes="96px"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quote block (NO SCROLL — expands naturally) */}
//         <div className="w-full px-1">
//           <span
//             aria-hidden="true"
//             className="block text-5xl leading-none -mb-2 text-left"
//             style={{ color: "var(--feedback-quote)" }}
//           >
//             &ldquo;
//           </span>

//           <p
//             className="
//               cardText
//               mt-2
//               text-[15px] sm:text-[17px] md:text-[18px]
//               leading-7 sm:leading-8
//               whitespace-pre-line
//               break-words
//             "
//             style={{ color: "var(--text2)" }}
//           >
//             {t.quote}
//           </p>

//           <span
//             aria-hidden="true"
//             className="block text-5xl leading-none mt-4"
//             style={{ color: "var(--feedback-quote)" }}
//           >
//             &rdquo;
//           </span>
//         </div>

//         {/* Signature */}
//         <div className="mt-5 sm:mt-6 shrink-0">
//           <p
//             className="text-xl sm:text-2xl font-semibold"
//             style={{ color: "var(--feedback-accent)" }}
//           >
//             {t.name}
//           </p>
//           <p className="mt-1 text-sm sm:text-base" style={{ color: "var(--text2)" }}>
//             {t.position}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-full pb-8">
      <div
        className="
          relative w-full
          rounded-[26px]
          px-5 sm:px-8 md:px-10
          pt-8 sm:pt-10
          pb-8 sm:pb-10
          flex flex-col items-center text-center
          shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-lg
        "
        style={{
          background: 'var(--feedback-card-bg)',
          border: '1px solid var(--feedback-card-border)',
        }}
      >
        {/* Avatar */}
        <div className="mb-5 sm:mb-6 shrink-0">
          <div
            className="h-24 w-24 rounded-full p-[3px]"
            style={{ background: 'var(--feedback-avatar-ring)' }}
          >
            <div
              className="h-full w-full rounded-full p-[6px]"
              style={{ background: 'var(--background)' }}
            >
              <div className="h-full w-full rounded-full overflow-hidden">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={96}
                  height={96}
                  sizes="96px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quote block (INLINE quotes) */}
        <div className="w-full px-1">
          <p
            className="
              cardText
              mt-2
              text-[15px] sm:text-[17px] md:text-[18px]
              leading-7 sm:leading-8
              whitespace-pre-line
              break-words
            "
            style={{ color: 'var(--text2)' }}
          >
            <span
              aria-hidden="true"
              className="inline-block mr-2 align-top text-4xl leading-none"
              style={{ color: 'var(--feedback-quote)' }}
            >
              &ldquo;
            </span>

            {t.quote}

            <span
              aria-hidden="true"
              className="inline-block ml-2 align-bottom text-4xl leading-none"
              style={{ color: 'var(--feedback-quote)' }}
            >
              &rdquo;
            </span>
          </p>
        </div>

        {/* Signature */}
        <div className="mt-5 sm:mt-6 shrink-0">
          <p
            className="text-xl sm:text-2xl font-semibold"
            style={{ color: 'var(--feedback-accent)' }}
          >
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
    flex-none snap-center
    w-[min(92vw,420px)]
    sm:w-[420px]
    md:w-[540px] md:min-w-[540px]
    lg:w-[540px] lg:min-w-[540px]
    h-auto
    min-h-[530px]
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
