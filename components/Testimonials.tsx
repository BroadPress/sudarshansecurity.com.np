'use client';

import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  quote: string; // use \n\n to separate paragraphs
  company?: string;
  position?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Geeta Bhattarai',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!"\n\nThey have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 2,
    name: 'Kishor Pathak',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!"\n\nThey have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 3,
    name: 'Samir Poudel',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!"\n\nThey have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 4,
    name: 'Rakesh Mehta',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!"\n\nThey have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
];

const QuoteBadge = () => (
  <div
    className="
      absolute -top-7 right-8 h-14 w-14 rounded-full
      flex items-center justify-center z-30
      shadow-md
      transition-transform duration-300 ease-out
      group-hover:scale-105 group-hover:-rotate-6
    "
    style={{
      background: 'var(--text)',
      color: 'var(--background)',
      border: '1px solid var(--border)',
    }}
  >
    <span className="text-4xl leading-none -mt-1">”</span>
  </div>
);

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative overflow-visible pt-14 group">
      {/* Avatar circle (overlapping) */}
      <div className="absolute -top-2 left-8 z-40">
        <div
          className="
            h-28 w-28 rounded-full flex items-center justify-center
            transition-transform duration-300 ease-out
            group-hover:-translate-y-1
          "
          style={{
            background: 'var(--mainBackground)',
            border: '1px solid var(--border)',
          }}
        >
          <div
            className="h-24 w-24 rounded-full overflow-hidden shadow-md"
            style={{
              background: 'var(--background)',
              border: '5px solid var(--background)',
            }}
          >
            <Image
              src={t.avatar}
              alt={t.name}
              width={96}
              height={96}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              sizes="96px"
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className="
          relative rounded-[18px] overflow-visible
          h-[440px] sm:h-[460px] md:h-[480px]
          flex flex-col
          shadow-md
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.01]
        "
        style={{
          background: 'var(--background)',
          border: '2px solid var(--border)',
        }}
      >
        <QuoteBadge />

        <div className="px-8 pt-10 pb-[10px] flex flex-col flex-1">
          <h3
            className="text-3xl font-extrabold mb-6 text-center min-h-[40px] flex items-center justify-center"
            style={{ color: 'var(--text)' }}
          >
            {t.name}
          </h3>

          {/* Quote in TWO paragraphs */}
          <div className="text-lg leading-9" style={{ color: 'var(--text2)' }}>
            {t.quote.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4 last:mb-0 line-clamp-3">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-auto pt-10">
            {t.company ? (
              <p className="text-2xl font-medium" style={{ color: 'var(--text)' }}>
                {t.company}
              </p>
            ) : null}

            {t.position ? (
              <p className="text-lg" style={{ color: 'var(--text2)' }}>
                {t.position}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="w-screen py-14 md:py-20 overflow-visible"
      style={{ background: 'var(--mainBackground)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-visible">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-semibold text-2xl text-blue-700 italic md:text-2xl">
            Our testimonials
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            What they’re talking about sudarshan
          </h2>
        </div>

        <div
          className="
            overflow-x-auto overflow-y-visible pb-6
            snap-x snap-mandatory scroll-smooth
            lg:max-w-[1120px] lg:mx-auto
          "
        >
          <div className="flex w-full items-stretch gap-6 md:gap-10">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="
                  flex-shrink-0 overflow-visible
                  snap-center lg:snap-start
                  w-full min-w-full
                  sm:w-[400px] sm:min-w-[400px]
                  md:w-[540px] md:min-w-[540px]
                  lg:w-[540px] lg:min-w-[540px]
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
