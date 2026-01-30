'use client';

import React from 'react';
import Ribbon from '../../components/Ribbon';

export default function Location() {
  return (
    <div>
      <Ribbon name="Location" showfont={false} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
        {/* Map Wrapper */}
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            shadow-lg
            bg-white
          "
          style={{ borderColor: 'var(--border)' }}
        >
          {/* Optional small top bar */}
          <div
            className="px-5 py-3 border-b text-sm font-semibold"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            Sudarshan Security Services Pvt. Ltd.
          </div>

          {/* Map */}
          <div className="relative h-[360px] md:h-[600px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7586705571493!2d87.27178100000002!3d26.68819970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d0c244bd217%3A0xdd8e8a36049b0208!2sSudarshan%20Security%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1769772961049!5m2!1sen!2snp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Sudarshan Security Services Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
