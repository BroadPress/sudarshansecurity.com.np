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
  <div className="absolute -top-7 right-8 h-14 w-14 rounded-full bg-emerald-800 flex items-center justify-center shadow-md z-30">
    <span className="text-white text-4xl leading-none -mt-1">”</span>
  </div>
);

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="relative overflow-visible pt-14">
      {/* Avatar circle (overlapping) */}
      <div className="absolute -top-2 left-8 z-40">
        <div className="h-28 w-28 rounded-full bg-[#f3f5ff] flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-white border-[5px] border-white overflow-hidden shadow-md">
            <Image
              src={t.avatar}
              alt={t.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className="
          relative rounded-[18px] bg-white border-2 border-[#e9e2d1] shadow-sm overflow-visible
          h-[520px] sm:h-[540px] md:h-[560px]
          flex flex-col
        "
      >
        <QuoteBadge />

        {/* ✅ make inner content take full height */}
        <div className="px-8 pb-8 pt-10 flex flex-col flex-1">
          <h3 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            {t.name}
          </h3>

          {/* ✅ quote can grow, but card height stays same */}
          <p className="text-slate-500 text-lg leading-9 whitespace-pre-line flex-1">
            {t.quote}
          </p>

          {/* ✅ always pushed to bottom */}
          <div className="mt-10">
            <p className="text-2xl font-medium text-slate-800">{t.company}</p>
            <p className="text-lg text-slate-600">{t.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f3f5ff] py-14 md:py-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-visible">
        <div className="overflow-x-auto overflow-y-visible pb-6">
          <div className="flex gap-8 md:gap-10 min-w-max items-stretch">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="
                  w-[320px] sm:w-[380px] md:w-[520px]
                  flex-shrink-0
                  overflow-visible
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
