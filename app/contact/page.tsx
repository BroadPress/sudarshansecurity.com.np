'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Ribbon from '../../components/Ribbon';
import { IoCall } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'Nepal (+977)',
    phone: '',
    extension: '',
    topic: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const info = [
    { icon: IoCall, title: 'Helpline', desc: '+977 9802754100' },
    { icon: IoIosMail, title: 'Send email', desc: 'info@sudarshansecurity.com.np' },
    {
      icon: FaMapMarkerAlt,
      title: 'Hospital road, Itahari, ward no.3',
      desc: 'Sunsari, Nepal',
    },
  ];

  const inputBase =
    'w-full h-14 px-6 rounded-full shadow-sm outline-none transition';
  const textareaBase =
    'w-full px-6 py-5 rounded-3xl shadow-sm outline-none transition resize-none';

  return (
    <div style={{ background: 'var(--mainBackground)', color: 'var(--text)' }}>
      {/* Header Section */}
      <Ribbon name="Contact" showfont={false} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Map */}
          <div className="space-y-6">
            {/* Welcome Section */}
            <div
              className="rounded-lg p-6"
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
              }}
            >
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                Welcome to Sudarshan Security Services!
              </h2>

              <p className="text-sm mb-4" style={{ color: 'var(--text2)' }}>
                Welcome to Sudarshan Security Services! We're located at Hospital
                Road, Itahari, Sub-Metropolitan City, Ward no.9 Sunsari, Nepal
              </p>

              {/* Google Map */}
              <div
                className="rounded-lg overflow-hidden h-64 mb-3"
                style={{ border: '1px solid var(--border)' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23648.373769035825!2d87.25197981402398!3d26.68414933027512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d0c244bd217%3A0xdd8e8a36049b0208!2sSudarshan%20Security%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1768901649654!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sudarshan%20Security%20Services%2C%20Hospital%20Road%2C%20Itahari%2C%20Sunsari%2C%20Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm hover:underline"
                style={{ color: 'var(--text)' }}
              >
                Directions →
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="rounded-2xl p-10 shadow-sm"
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
            }}
          >
            <h2
              className="text-center text-xl sm:text-2xl font-semibold italic mb-10"
              style={{ color: 'var(--text2)' }}
            >
              Feel free to contact us
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted:', formData);
                console.table(formData);
                setFormData(initialFormData);
              }}
              className="space-y-6"
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only" htmlFor="firstName">
                    Your name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Your name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputBase}
                    style={{
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.12)')}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBase}
                    style={{
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.12)')}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputBase}
                    style={{
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.12)')}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="topic">
                    Subject
                  </label>
                  <input
                    id="topic"
                    type="text"
                    name="topic"
                    placeholder="Subject"
                    value={formData.topic}
                    onChange={handleChange}
                    className={inputBase}
                    style={{
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.12)')}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="sr-only" htmlFor="message">
                  Write a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write a message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  className={textareaBase}
                  style={{
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.12)')}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
              </div>

              {/* Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="h-14 px-10 rounded-full font-semibold transition"
                  style={{
                    background: 'var(--text)',
                    color: 'var(--background)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  SEND A MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>
            Quick Contact
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text2)' }}>
            Quick contact the relevant people.
          </p>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {info.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  style={{
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:opacity-95"
                      style={{
                        background: 'var(--mainBackground)',
                        color: 'var(--text)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <Icon className="text-2xl" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
