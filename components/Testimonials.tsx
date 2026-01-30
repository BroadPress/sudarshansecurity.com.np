'use client';

import Image from 'next/image';

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
      "Our Sudarshan employees on-site always provide excellent service and are extremely customer-focused. Their management team responds quickly to our needs and consistently offers strong support. We've been a client for several years.",
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 2,
    name: 'Samir Poudel',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding.",
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 3,
    name: 'Rakesh Mehta',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is “Excellent Service!” They have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 4,
    name: 'Geeta Bhattarai',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'Sudarshan Security is reliable, disciplined, and always responsive. Their guards are well-trained and punctual, and the supervision team regularly checks performance. We feel safer and more confident with their service.',
    company: 'Company Name',
    position: 'Position',
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="h-full w-full">
      <div
        className="
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
        "
      >
        {/* Avatar (top-center, like feedback) */}
        <div className="flex justify-center">
          <div
            className="rounded-full p-3"
            style={{ background: 'rgba(224, 208, 160, 0.55)' }}
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

        {/* Company (center title) */}
        <h3 className="mt-5 text-lg sm:text-xl font-medium" style={{ color: 'var(--text)' }}>
          {t.company}
        </h3>

        {/* Quote (clamped so no vertical scrollbar) */}
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
          {t.quote}
        </p>

        {/* Signature (bottom-center) */}
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
          <h2 className="mt-3 text-4xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            What they&apos;re talking about sudarshan
          </h2>
        </div>

        {/* Slider (NO vertical scroll) */}
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
