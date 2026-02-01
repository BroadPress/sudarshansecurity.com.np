'use client';

import React from 'react';
import Ribbon from '../../components/Ribbon';
import Image from 'next/image';

const Payment = () => {
  return (
    <div>
      {/* Page Header */}
      <Ribbon name="Payment" showfont={false} />

      {/* Main Payment Section */}
      <section className="flex flex-col justify-center items-center px-4 sm:px-0 py-8 sm:py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* ===== Left: Bank Details ===== */}
          <div className="space-y-3 text-center lg:text-left">
            <Image
              width={600}
              height={800}
              src="/images/payment/image.webp"
              alt="Sudarshan Security Services Logo"
              className="w-60 sm:w-56 mb-5 mx-auto lg:mx-0"
            />

            <p className="flex flex-col text-xl">
              <span>Account Name:</span>
              <span className="font-semibold">Sudarshan Security Services Pvt. Ltd.</span>
            </p>

            <p className="text-xl">Account number: XXXXXXXXXXXXXX</p>
            <p className="text-xl">Branch: Kathmandu</p>
            <p className="text-xl">SWIFT CODE: XXXXXXXX</p>

            <p className="text-xl">
              URL:{' '}
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                www.sudarshansecurity.com
              </a>
            </p>

            <p className="pt-8 text-2xl">VAT Number: XXXXXXXXX</p>
          </div>

          {/* ===== Right: QR Code Section ===== */}
          <div className="card flex flex-col justify-center items-center border rounded-3xl w-full max-w-sm mx-auto shadow-sm overflow-hidden">
            {/* Placeholder QR image */}
            <div className="w-full aspect-square flex items-center justify-center bg-gray-100">
              <Image
                width={900}
                height={900}
                src="/images/payment/placeholder.png"
                alt="Payment QR Placeholder"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Optional label */}
            <div className="w-full px-5 py-4 text-center">
              <p className="font-semibold" style={{ color: 'var(--text)' }}>
                Scan to Pay 
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--text2)' }}>
                Sudarshan Security Services Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
