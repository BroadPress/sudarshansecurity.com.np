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
    topic: 'Sales',
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    setFormData(initialFormData);
    
  };

  const teamMembers = [
    {
      name: 'Prakash',
      designation: 'Project Manager',
      img: '/images/contact/1.png',
      email: 'prakash@sriyog.com',
    },
    {
      name: 'Bijay',
      designation: 'Internship Coordinator',
      img: '/images/contact/2.png',
      email: 'bijay@sriyog.com',
    },
    {
      name: 'PRACAS',
      designation: 'CTO',
      img: '/images/contact/1.png',
      email: 'pracas@sriyog.com',
    },
  ];

  const services = [
    {
      title: 'Training Service',
      icon: '/images/services/training.png',
      desc: 'Every year around 750 individuals are trained by Sudarshan securities for other organisations. Apart from our regular guard training, we also conduct risk management training for corporate.',
    },
    {
      title: 'Office Supporting Staffs',
      icon: '/images/services/training.png',
      desc: 'We also provide well-trained and skilled business and office support staff members who can perform a variety of duties and are fully prepared to handle multiple tasks at the same time.',
    },
    {
      title: 'Industrial Security',
      icon: '/images/services/industrial.png',
      desc: "We offer high-quality, individualized security services for business and industrial settings. We are aware of how important employee, client, and visitor safety is to your business's success.",
    },
    {
      title: 'Unarmed Combat',
      icon: '/images/services/combat.png',
      desc: 'Unarmed is an art of self defense technique without using weapons.Punching Striking, Kicking and blocking are fundamentals of unarmed combat.it helps to defend agains the larger adversory by using proper technique.',
    },
  ];

  const info = [
    { icon: IoCall, title: 'Helpline', desc: '+977 9802754100' },
    { icon: IoIosMail, title: 'Send email', desc: 'info@sudarshansecurity.com.np' },
    {
      icon: FaMapMarkerAlt,
      title: 'Hospital road, Itahari, ward no.3',
      desc: 'Sunsari, Nepal',
    },
  ];

  const countries = [
    'Nepal (+977)',
    'Afghanistan (+93)',
    'Albania (+355)',
    'Algeria (+213)',
    'Andorra (+376)',
    'Angola (+244)',
    'Antigua and Barbuda (+1-268)',
    'Argentina (+54)',
    'Armenia (+374)',
    'Australia (+61)',
    'Austria (+43)',
    'Azerbaijan (+994)',
    'Bahrain (+973)',
    'Bangladesh (+880)',
    'Barbados (+1-246)',
    'Belarus (+375)',
    'Belgium (+32)',
    'Belize (+501)',
    'Benin (+229)',
    // Add more countries as needed
  ];

  return (
    <div className="">
      {/* Header Section */}
      <Ribbon name="Contact" showfont={false} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Map and Services */}
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="border border-gray-300  rounded-lg p-6">
              <h2 className="text-2xl font-bold  mb-3">
                Welcome to Sudarshan Security Services!
              </h2>
              <p className=" text-sm mb-4">
                Welcome to Sudarshan Security Services! We're located at Hospital
                Road, Itahari, Sub-Metropolitan City, Ward no.9 Sunsari, Nepal
              </p>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden border border-gray-200 h-64 mb-3">
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
                className="hover:text-teal-800 font-medium text-sm"
              >
                Directions →
              </a>
            </div>

            {/* Services Grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="  rounded-lg p-6 border border-gray-300  transition-shadow flex items-start gap-4"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 shrink-0"
                  />

                  <div>
                    <h3 className="text-lg font-bold  mb-2">
                      {service.title}
                    </h3>
                    <p className=" text-sm">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Side - Contact Form */}
          <div className=" rounded-lg p-8 card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8">
                <img src="/icons/email.svg" alt="email" className="w-full h-full" />
              </div>
              <h2 className="text-2xl font-bold ">Send Your Queries</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-7">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold  mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="eg: Madan"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border  rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold  mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="eg: Tamang"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  border rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold  mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="eg: madan@sriyog.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:bg-white"
                />
                <p className="text-xs text-gray-500 mt-1.5">
                  We'll never share your email with anyone else.
                </p>
              </div>

              {/* Phone Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold  mb-2">
                    Country Code
                  </label>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  border  rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:bg-white"
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold  mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  border  rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold  mb-2">
                    Extension
                  </label>
                  <input
                    type="text"
                    name="extension"
                    placeholder="Extension"
                    value={formData.extension}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  border  rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-sm font-semibold  mb-2">
                  What do you need help with?
                </label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5  border  rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:bg-white"
                >
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Billing">Billing</option>
                  <option value="Complain">Complain</option>
                  <option value="Training">Training</option>
                  <option value="Internship">Internship</option>
                  <option value="Certificates">Certificates</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold  mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 border  rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none focus:bg-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-40 cursor-pointer bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition-colors text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Quick Contact</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Quick contact the relevant people.
          </p>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {info.map((item, index) => {
              const Icon = item.icon; // ✅ render icon component
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-100">
                      <Icon className="text-2xl" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Members */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className=" rounded-lg p-8 text-center ">
              <img
                src={member.img}
                alt={member.name}
                className="w-56 h-56 mx-auto mb-6 rounded-full object-cover"
              />
              <h3 className="text-[22px] text mb-2">{member.name}</h3>
              <p className=" text-base mb-6">{member.designation}</p>
              <button className="px-5 cursor-pointer py-1.5 border border-teal-700  rounded hover:bg-teal-700 hover:text-white transition-colors font-semibold text-base">
                eMail
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
