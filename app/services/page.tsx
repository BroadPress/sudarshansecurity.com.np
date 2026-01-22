'use client';

import Ribbon from '../../components/Ribbon';
import { services } from '../data/serviceData';
import Link from 'next/link';

export default function Services() {
  const servicesList = services;

  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--background)', color: 'var(--text)' }}
    >
      {/* Header Section */}
      <Ribbon name="Services" showfont={false} />

      {/* Services Grid */}
      <div className="max-w-screen mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="
                shadow space-y-6 sm:space-y-4
                rounded-lg hover:shadow-2xl
                transition-all duration-300
                p-9 flex flex-col
                hover:-translate-y-1
              "
              style={{
                background: 'var(--background)',   // theme
                border: '1px solid var(--border)', // theme
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-100 h-100 border-none object-contain rounded-2xl"
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl py-1 sm:py-0 mb-4 text-center font-semibold"
                style={{ color: 'var(--text)' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-l py-1 w-100 h-auto m-auto sm:py-0 leading-relaxed mb-4 grow text-justify"
                style={{ color: 'var(--text2)' }}
              >
                {service.ShortDesc}
              </p>

              {/* Read More Button (theme-ready if you uncomment) */}
              {/*
              <div className="flex py-1 sm:py-0 justify-center">
                <Link href={`/services/${index}`}>
                  <button
                    className="cursor-pointer px-6 py-2.5 rounded-md transition-all duration-300 font-medium text-sm"
                    style={{
                      border: '2px solid var(--border)',
                      background: 'var(--background)',
                      color: 'var(--text)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--text)';
                      e.currentTarget.style.color = 'var(--background)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--background)';
                      e.currentTarget.style.color = 'var(--text)';
                    }}
                  >
                    Browse More
                  </button>
                </Link>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
