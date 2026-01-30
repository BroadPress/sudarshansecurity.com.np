'use client';

export const dynamic = 'force-dynamic';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Ribbon from '../../components/Ribbon';

type InternshipForm = {
  firstname: string;
  lastname: string;
  country: string;
  phone: string;
  email: string;
  gender: string;
  headshot: File | null;
  cv: File | null;
  internshipPeriod: string;
  institution: string;
  subject: string;
  passedyear: string;
};

function SudarshanInternshipForm() {
  const headshot = useRef<HTMLInputElement | null>(null);
  const cv = useRef<HTMLInputElement | null>(null);

  const params = useSearchParams();
  const job = (params.get('job') ?? '').trim();

  const [form, setForm] = useState<InternshipForm>({
    firstname: '',
    lastname: '',
    country: '',
    phone: '',
    email: '',
    gender: '',
    headshot: null,
    cv: null,
    internshipPeriod: '',
    institution: '',
    subject: job,
    passedyear: '',
  });

  // Previews (browser only)
  const [cvPreview, setCvPreview] = useState<string | null>(null);
  const [headshotPreview, setHeadshotPreview] = useState<string | null>(null);

  // Keep subject synced if user opens /internship?job=...
  useEffect(() => {
    setForm((prev) => ({ ...prev, subject: job }));
  }, [job]);

  // CV preview
  useEffect(() => {
    if (!form.cv) {
      setCvPreview(null);
      return;
    }
    const url = URL.createObjectURL(form.cv);
    setCvPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [form.cv]);

  // Headshot preview
  useEffect(() => {
    if (!form.headshot) {
      setHeadshotPreview(null);
      return;
    }
    const url = URL.createObjectURL(form.headshot);
    setHeadshotPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [form.headshot]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.headshot || !form.cv) {
      alert('Please upload both CV/Resume and Headshot.');
      return;
    }

    console.log('Sudarshan Security Services Internship Form:', form);
    alert('Your application has been submitted to Sudarshan Security Services successfully!');

    // Reset (keep subject from URL)
    setForm({
      firstname: '',
      lastname: '',
      country: '',
      phone: '',
      email: '',
      gender: '',
      cv: null,
      headshot: null,
      internshipPeriod: '',
      institution: '',
      passedyear: '',
      subject: job,
    });

    if (cv.current) cv.current.value = '';
    if (headshot.current) headshot.current.value = '';
  };

  return (
    <>
      {/* Full-width Ribbon Header */}
      <Ribbon name="Sudarshan Security Services Form" showfont={false} />

      <div className="my-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col px-5 py-8">
          {/* Branding */}
          <div className="mb-5 text-center">
            <h2>This from will not work . please send us email.</h2>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text)' }}>
              Internship Application — Sudarshan Security Services Pvt. Ltd.
            </h2>
            <p className="mt-1 text-sm md:text-base" style={{ color: 'var(--text2)' }}>
              Technology Partner: <span className="font-semibold">SRIYOG Consulting</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card2 shadow-md rounded-lg p-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="pl-0.5">First Name *</label>
                <input
                  placeholder="First Name"
                  required
                  name="firstname"
                  value={form.firstname}
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  pattern="[A-Za-z\s]+"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="pl-0.5">Last Name *</label>
                <input
                  placeholder="Last Name"
                  required
                  name="lastname"
                  value={form.lastname}
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  pattern="[A-Za-z\s]+"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="pl-0.5">Country *</label>
                <input
                  placeholder="Country"
                  required
                  name="country"
                  value={form.country}
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  pattern="[A-Za-z\s]+"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="pl-0.5">Phone *</label>
                <input
                  placeholder="Phone"
                  required
                  name="phone"
                  value={form.phone}
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  pattern="[0-9\W]+"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="pl-0.5">Email *</label>
                <input
                  placeholder="Email"
                  required
                  name="email"
                  value={form.email}
                  type="email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  inputMode="email"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium pl-0.5">Gender *</label>
                <div className="relative h-[42px]">
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                    className="absolute inset-0 appearance-none w-full px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  >
                    <option disabled hidden value="">
                      -- Select --
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Rather Not to Say">Rather Not to Say</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="absolute right-5 pointer-events-none translate-y-1/2 top-0.5 cursor-pointer">
                    <img src="/icons/dropdown.svg" className="w-5 h-5" alt="" />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label>Upload CV/ Resume *</label>
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    ref={cv}
                    accept=".pdf"
                    onChange={(e) =>
                      setForm({ ...form, cv: e.target.files ? e.target.files[0] : null })
                    }
                    className="px-4 w-full h-[42px] pt-1.5 rounded-md focus:ring-2 file:border-none file:px-2 file:mr-3 file:py-1 file:rounded-md file:shadow-md file:cursor-pointer file:bg-red-50 file:text-red-600 border border-gray-300 file:hover:bg-red-100 focus:ring-teal-700 focus:outline-none"
                  />
                  {form.cv && (
                    <button
                      type="button"
                      onClick={() => {
                        setForm({ ...form, cv: null });
                        if (cv.current) cv.current.value = '';
                      }}
                      className="absolute cursor-pointer -top-8 right-1 bg-gray-200 rounded-full px-2"
                    >
                      X
                    </button>
                  )}
                </div>

                {cvPreview && (
                  <div className="relative">
                    <iframe title="CV Preview" src={cvPreview} className="h-[150px] w-fit" />
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label>Headshot *</label>
                <div className="relative inline-block">
                  <input
                    type="file"
                    name="headshot"
                    ref={headshot}
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        headshot: e.target.files ? e.target.files[0] : null,
                      })
                    }
                    className="px-4 w-full h-[42px] pt-1.5 rounded-md focus:ring-2 file:border-none file:mr-3 file:px-2 file:py-1 file:rounded-md file:shadow-md file:cursor-pointer file:bg-red-50 file:text-red-600 border border-gray-300 file:hover:bg-red-100 focus:ring-teal-700 focus:outline-none"
                  />
                  {form.headshot && (
                    <button
                      type="button"
                      onClick={() => {
                        setForm({ ...form, headshot: null });
                        if (headshot.current) headshot.current.value = '';
                      }}
                      className="absolute cursor-pointer -top-8 right-1 bg-gray-200 rounded-full px-2"
                    >
                      X
                    </button>
                  )}
                </div>

                {headshotPreview && (
                  <div className="relative w-fit">
                    <img
                      src={headshotPreview}
                      alt="Headshot Preview"
                      className="h-[150px] w-fit mt-2 rounded-md border"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium pl-0.5">Internship Subject *</label>
                <div className="relative h-[42px]">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="absolute inset-0 appearance-none w-full px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  >
                    <option value={form.subject || ''}>{form.subject || '-- Select --'}</option>
                    <option value="Management">Management</option>
                    <option value="Social Works">Social Works</option>
                    <option value="IT">IT</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="absolute right-5 pointer-events-none translate-y-1/2 top-0.5 cursor-pointer">
                    <img src="/icons/dropdown.svg" className="w-5 h-5" alt="" />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="pl-0.5">Name of Institution *</label>
                <input
                  required
                  name="institution"
                  placeholder="Name of Institution"
                  value={form.institution}
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  pattern="[A-Za-z/ ]+"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="pl-0.5">Passed Year *</label>
                <input
                  required
                  name="passedyear"
                  placeholder="Passed Year"
                  value={form.passedyear}
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  pattern="[0-9\W]+"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Internship Period *</label>
                <div className="relative h-[42px]">
                  <select
                    name="internshipPeriod"
                    value={form.internshipPeriod}
                    onChange={handleChange}
                    required
                    className="absolute inset-0 appearance-none w-full px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                  >
                    <option disabled hidden value="">
                      -- Select --
                    </option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                  </select>
                  <span className="absolute right-5 pointer-events-none translate-y-1/2 top-0.5 cursor-pointer">
                    <img src="/icons/dropdown.svg" className="w-5 h-5" alt="" />
                  </span>
                </div>
              </div>
            </div>

            <div className="py-5 flex justify-center mt-5 md:mr-10">
              <button
                type="submit"
                className="bg-gray-600 py-2 text-xl rounded-md px-10 text-white hover:bg-red-700 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function Internship() {
  // Suspense is needed because useSearchParams() is used inside
  return (
    <Suspense fallback={null}>
      <SudarshanInternshipForm />
    </Suspense>
  );
}
