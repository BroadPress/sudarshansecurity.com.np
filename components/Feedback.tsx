'use client';

import Image from 'next/image';

type Feedback = {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  company: string;
  position: string;
};

const feedbacks: Feedback[] = [
  {
    id: 1,
    name: 'Sumnima Rai',
    avatar: '/images/feedback/nameste.jpg',
    quote:
      "Our Sudarshan employees on-site always provide excellent service and are extremely customer-focused. Their management team responds quickly to our needs and consistently offers strong support. We've been a client for several years.",
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 2,
    name: 'Samir Poudel',
    avatar: '/images/feedback/nameste.jpg',
    quote:
      "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding.",
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 3,
    name: 'Rakesh Mehta',
    avatar: '/images/feedback/nameste.jpg',
    quote:
      'The best way to describe this organization is “Excellent Service!” They have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
];

function FeedbackCard({ t }: { t: Feedback }) {
  return (
    <div className="h-full w-full">
      <div
        className="
          relative h-full w-full
          rounded-[26px]
          px-5 sm:px-7 md:px-8
          py-6 sm:py-7
          flex flex-col items-center text-center
          shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-lg
          overflow-hidden
          min-h-[420px] sm:min-h-[400px] lg:min-h-[380px]   /* ✅ +10px */
        "
        style={{
          background: 'var(--feedback-card-bg)',
          // ✅ softer/lighter border
          border:
            '1px solid color-mix(in srgb, var(--feedback-card-border) 45%, transparent)',
        }}
      >
        {/* Avatar */}
        <div className="mb-4 sm:mb-5 shrink-0">
          <div className="h-24 w-24 rounded-full p-[3px]">
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

        {/* ✅ Quote (NOT scrollable) */}
        <div className="flex-1 w-full px-1">
          <p
            className="
              cardText
              text-[15px] sm:text-[16px] md:text-[17px]
              leading-7 sm:leading-8
              whitespace-pre-line break-words
            "
            style={{ color: 'var(--text2)' }}
          >
            <span
              aria-hidden="true"
              className="inline-block align-top text-4xl leading-none mr-2"
              style={{ color: 'var(--text)' }} // ✅ darker quote
            >
              &ldquo;
            </span>

            {t.quote}

            <span
              aria-hidden="true"
              className="inline-block align-bottom text-4xl leading-none ml-2"
              style={{ color: 'var(--text)' }} // ✅ darker quote
            >
              &rdquo;
            </span>
          </p>
        </div>

        {/* Signature */}
        <div className="mt-4 sm:mt-5 shrink-0">
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

export default function Feedback() {
  const items = feedbacks.slice(0, 3);

  return (
    <section className="w-full py-12 md:py-20" style={{ background: 'var(--mainBackground)' }}>
      <div className="mx-4 sm:mx-6 lg:mx-12 xl:mx-[140px] 2xl:mx-[160px]">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-semibold italic text-2xl text-[#00715D]">Feedback</p>
          <h2
            className="not-prose mt-2 text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            What they&apos;re talking about SSS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 items-stretch">
          {items.map((t) => (
            <div key={t.id} className="h-full">
              <FeedbackCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
