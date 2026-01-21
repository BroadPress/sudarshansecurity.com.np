'use client';

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Geeta Bhattarai',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 2,
    name: 'Kishor Pathak',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 3,
    name: 'Samir Poudel',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'I’m new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding.',
    company: 'Company Name',
    position: 'Position',
  },
  {
    id: 4,
    name: 'Rakesh Mehta',
    avatar: '/images/testimonials/nameste.jpg',
    quote:
      'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    company: 'Company Name',
    position: 'Position',
  },
];

const QuoteBadge = () => (
  <div
    className="
      absolute -top-7 right-8 h-14 w-14 rounded-full bg-emerald-800
      flex items-center justify-center z-30
      shadow-md
      transition-transform duration-300 ease-out
      group-hover:scale-105 group-hover:-rotate-6
    "
  >
    <span className="text-white text-4xl leading-none -mt-1">”</span>
  </div>
);

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="relative overflow-visible pt-14 group">
      {/* Avatar circle (overlapping) */}
      <div className="absolute -top-2 left-8 z-40">
        <div
          className="
            h-28 w-28 rounded-full bg-[#f3f5ff] flex items-center justify-center
            transition-transform duration-300 ease-out
            group-hover:-translate-y-1
          "
        >
          <div className="h-24 w-24 rounded-full bg-white border-[5px] border-white overflow-hidden shadow-md">
            <Image
              src={t.avatar}
              alt={t.name}
              width={96}
              height={96}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className="
          relative rounded-[18px] bg-white border-2 border-[#e9e2d1] overflow-visible
          h-[520px] sm:h-[540px] md:h-[560px]
          flex flex-col
          shadow-md
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.01]
        "
      >
        <QuoteBadge />

        <div className="px-8 pb-8 pt-10 flex flex-col flex-1">
          <h3 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            {t.name}
          </h3>

          <p className="text-slate-500 text-lg leading-9 whitespace-pre-line flex-1">
            {t.quote}
          </p>

          <div className="mt-10">
            <p className="text-2xl font-medium text-slate-800">{t.company}</p>
            <p className="text-lg text-slate-600">{t.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Feedback() {
  return (
    <section className="w-full bg-[#f3f5ff] py-14 md:py-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-visible">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-emerald-700 font-semibold italic text-lg md:text-xl">
            Feedback
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            What they're talking about SSS
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-x-auto overflow-y-visible pb-6">
          <div className="flex gap-8 md:gap-10 min-w-max items-stretch">
            {testimonials.map((t) => (
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
