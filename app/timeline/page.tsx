'use client';

import Ribbon from '../../components/Ribbon';

export default function Timeline() {
  // Newer at TOP, older at BOTTOM
  const events = [
    {
      year: '2024',
      title: 'Service Modernization',
      description:
        'Strengthened operations with improved training, smarter reporting, and more structured client support to deliver reliable protection nationwide.',
    },
    {
      year: '2021',
      title: '24/7 Surveillance & Nationwide Operations',
      description:
        'Enhanced round-the-clock monitoring, supervision, and shift management to support individual, corporate, and institutional security needs across Nepal.',
    },
    {
      year: '2018',
      title: 'Advanced Security Solutions',
      description:
        'Expanded comprehensive security services with stronger access control practices, close protection capabilities, and improved site-level security procedures.',
    },
    {
      year: 'ISO 9001:2015',
      title: 'Quality & Excellence Commitment',
      description:
        'Aligned our quality management approach with ISO 9001:2015 standards—reinforcing consistent service delivery, accountability, and continuous improvement.',
    },
    {
      year: '2005',
      title: 'Corporate & Major Event Security Growth',
      description:
        'Scaled deployments for corporate facilities and major events with better coordination, risk planning, and professional guarding standards.',
    },
    {
      year: '1995',
      title: 'Close Protection Development',
      description:
        'Strengthened close protection and VIP security practices with disciplined teams, sharper protocols, and mission-focused supervision.',
    },
    {
      year: '1983',
      title: 'Company Established',
      description:
        "Founded in 1983 as Nepal’s first registered security company—building decades of unmatched experience, knowledge, and trust in the security sector.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <Ribbon name="Timeline" showfont={false} />

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-18 bottom-18 transform -translate-x-1/2 w-1 bg-teal-600 rounded-full"></div>

        <div className="space-y-16 mt-24">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0; // alternate

            return (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 border-2 header rounded-full shadow-md"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 px-6 md:px-0 
                    ${isLeft ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}
                >
                  <div className="rounded-xl shadow-lg p-6 border card hover:shadow-xl transition-all">
                    <span className="text-sm font-semibold">{event.year}</span>
                    <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                    <p className="mt-2 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-24"></div>
    </div>
  );
}
