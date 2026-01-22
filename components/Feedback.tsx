'use client';

import Image from 'next/image';

const feedbacks = [
  {
    id: 1,
    name: 'Sumnima Rai',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      "Our Sudarshan employees on-site always provide excellent service and are extremely customer-focused. Their management team responds quickly to our needs and consistently offers strong support. We've been a client for several years.",
    company: 'Apartment Community',
    position: 'Property Manager',
  },
  {
    id: 2,
    name: 'Samir Poudel',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      "I’m new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding.",
    company: 'Residential Complex',
    position: 'Property Manager',
  },
  {
    id: 3,
    name: 'Rakesh Mehta',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is “Excellent Service!” They have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Business Center',
    position: 'Operations Manager',
  },
  {
    id: 4,
    name: 'Geeta Bhattarai',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'Sudarshan Security is reliable, disciplined, and always responsive. Their guards are well-trained and punctual, and the supervision team regularly checks performance. We feel safer and more confident with their service.',
    company: 'Corporate Office',
    position: 'Admin Officer',
  },
];

const QuoteBadge = () => (
  <div
    aria-hidden="true"
    className="
      absolute top-6 right-6
      h-12 w-12 rounded-xl
      flex items-center justify-center
      shadow-md
      transition-all duration-300 ease-out
      group-hover:scale-110 group-hover:rotate-6
    "
    style={{
      background: 'var(--text)',          // theme
      color: 'var(--background)',         // theme
      border: '1px solid var(--border)',  // theme
    }}
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M10.3 5.5H6.9C5.3 5.5 4 6.8 4 8.4v3.2c0 1.6 1.3 2.9 2.9 2.9h1.7c-.2 1.8-1.4 3.2-3.4 3.8v1.7c3.6-.8 5.8-3.6 5.8-7.4V8.4c0-1.6-1.3-2.9-2.7-2.9Zm9.7 0h-3.4c-1.6 0-2.9 1.3-2.9 2.9v3.2c0 1.6 1.3 2.9 2.9 2.9h1.7c-.2 1.8-1.4 3.2-3.4 3.8v1.7c3.6-.8 5.8-3.6 5.8-7.4V8.4c0-1.6-1.3-2.9-2.7-2.9Z" />
    </svg>
  </div>
);

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="relative overflow-visible pt-14">
      {/* Avatar */}
      <div className="absolute -top-2 left-8 z-20">
        <div
          className="h-28 w-28 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105"
          style={{
            background: 'var(--mainBackground)',
            border: '1px solid var(--border)',
          }}
        >
          <div
            className="h-24 w-24 rounded-full shadow-md overflow-hidden"
            style={{
              background: 'var(--background)',
              border: '4px solid var(--background)',
            }}
          >
            <Image
              src={t.avatar}
              alt={t.name}
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className="
          group
          relative rounded-[22px]
          overflow-visible
          h-[420px] sm:h-[440px] md:h-[460px]
          flex flex-col
          transition-all duration-300 ease-out
          hover:-translate-y-3
        "
        style={{
          background: 'var(--background)',
          border: '1px solid var(--border)',
          boxShadow: '0 18px 55px -40px rgba(15,23,42,0.45)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 25px 70px -35px rgba(15,23,42,0.55)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 18px 55px -40px rgba(15,23,42,0.45)';
        }}
      >
        {/* Quote icon */}
        <QuoteBadge />

        {/* Right padding so text never goes under quote badge */}
        <div className="px-8 pb-8 pt-10 pr-24 flex flex-col flex-1">
          <h3
            className="text-3xl font-extrabold mb-6 text-center min-h-[44px] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-95"
            style={{ color: 'var(--text)' }}
          >
            {t.name}
          </h3>

          <p
            className="text-lg leading-9 whitespace-pre-line line-clamp-6 transition-opacity duration-300 group-hover:opacity-95"
            style={{ color: 'var(--text2)' }}
          >
            {t.quote}
          </p>

          {/* Bottom info */}
          <div className="mt-auto pt-8">
            <p className="text-xl font-semibold transition-opacity duration-300 group-hover:opacity-95" style={{ color: 'var(--text)' }}>
              {t.company}
            </p>
            <p className="text-base transition-opacity duration-300 group-hover:opacity-95" style={{ color: 'var(--text2)' }}>
              {t.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Feedback() {
  return (
    <section className="w-full py-14 md:py-20 overflow-visible" style={{ background: 'var(--mainBackground)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-visible">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-semibold italic text-lg md:text-xl" style={{ color: 'var(--text2)' }}>
            Feedback
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            What they're talking about SSS
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-x-auto overflow-y-visible pb-6">
          <div className="flex gap-8 md:gap-10 min-w-max items-stretch pr-2">
            {feedbacks.map((t) => (
              <div
                key={t.id}
                className="w-[320px] sm:w-[380px] md:w-[520px] flex-shrink-0 overflow-visible"
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
