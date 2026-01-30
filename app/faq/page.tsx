'use client';
import React, { useState } from 'react';
import Ribbon from '../../components/Ribbon';

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: 'What services does Sudarshan Security Services Pvt. Ltd. provide?',
      answer:
        'We provide professional security guard services, site supervision, event security, access control, and safety support for commercial, industrial, financial, educational, and residential premises.',
    },
    {
      id: 2,
      question: 'Where does Sudarshan Security Services operate?',
      answer:
        'We operate across Nepal, providing security personnel and services for clients in various locations depending on requirements.',
    },
    {
      id: 3,
      question: 'How do I request security guards for my site?',
      answer:
        'You can contact our office through the Contact section of the website. Share your site location, required number of guards, shift timing, and service duration to get a proposal.',
    },
    {
      id: 4,
      question: 'Do you provide 24/7 security coverage?',
      answer:
        'Yes. We can provide round-the-clock coverage with day/night shifts based on your site needs and risk level.',
    },
    {
      id: 5,
      question: 'What types of sites do you secure?',
      answer:
        'We secure banks and financial institutions, corporate offices, factories/industries, hotels, schools/colleges, hospitals, construction sites, warehouses, and residential compounds.',
    },
    {
      id: 6,
      question: 'Are your guards trained?',
      answer:
        'Yes. Our personnel are trained for discipline, site duty procedures, access control, visitor handling, patrol routines, emergency response, and professional conduct.',
    },
    {
      id: 7,
      question: 'Can you provide security for events?',
      answer:
        'Yes. We provide event security for concerts, VIP programs, corporate events, ceremonies, and large gatherings with crowd-control support when needed.',
    },
    {
      id: 8,
      question: 'Do you provide armed security?',
      answer:
        'We provide security services based on legal requirements and client needs. If any specialized arrangement is required, we follow applicable laws and official procedures.',
    },
    {
      id: 9,
      question: 'How is pricing calculated?',
      answer:
        'Pricing depends on the number of guards, shift hours, site risk level, duty requirements, location, and contract duration. Contact us for a site-based quotation.',
    },
    {
      id: 10,
      question: 'Do you offer short-term and long-term contracts?',
      answer:
        'Yes. We support both short-term requirements (temporary duty/event security) and long-term contracts for continuous site security.',
    },
    {
      id: 11,
      question: 'How do you ensure quality and supervision?',
      answer:
        'We provide regular supervision, reporting, and coordination to ensure guards follow duty procedures and maintain professional standards at the site.',
    },
    {
      id: 12,
      question: 'What documents are needed to start the service?',
      answer:
        'Typically we require basic site details, service scope, shift timing, contact person details, and a signed agreement/contract for service activation.',
    },
    {
      id: 13,
      question: 'Can you replace a guard if needed?',
      answer:
        'Yes. If replacement is required due to performance, scheduling, or operational needs, we provide a replacement as per the contract terms.',
    },
    {
      id: 14,
      question: 'How quickly can you deploy security personnel?',
      answer:
        'Deployment depends on the number of personnel required and site location. In many cases, we can arrange deployment quickly after confirmation and paperwork.',
    },
    {
      id: 15,
      question: 'Do you provide security for banks and financial institutions?',
      answer:
        'Yes. We have experience providing security for banks, finance companies, and other financial premises with strict access control and duty protocols.',
    },
    {
      id: 16,
      question: 'Do your guards wear uniforms?',
      answer:
        'Yes. Our guards are deployed in proper uniform and follow discipline and grooming standards for professional appearance.',
    },
    {
      id: 17,
      question: 'What should I do in case of an emergency on-site?',
      answer:
        'Immediately contact the site in-charge/supervisor and local emergency services if required. Our guards follow emergency procedures and coordinate with management.',
    },
    {
      id: 18,
      question: 'What is your company’s mission?',
      answer:
        'Our mission is to provide reliable, disciplined, and professional security services that protect people, property, and operations with integrity and responsiveness.',
    },
    {
      id: 19,
      question: 'What is your company’s vision?',
      answer:
        'Our vision is to be a trusted and leading security service provider in Nepal by consistently delivering quality service, trained manpower, and strong supervision.',
    },
    {
      id: 20,
      question: 'Why choose Sudarshan Security Services?',
      answer:
        'Because we focus on disciplined manpower, professional duty procedures, supervision, quick coordination, and dependable service across diverse sectors.',
    },
    {
      id: 21,
      question: 'Do you provide security consulting and risk assessment?',
      answer:
        'We can guide clients on basic site security planning, manpower requirements, and duty procedures based on site conditions and risks.',
    },
    {
      id: 22,
      question: 'How can I contact Sudarshan Security Services?',
      answer:
        'Please visit the Contact page on our website to call, email, or visit our office. You can also send an inquiry from the website contact form.',
    },
    {
      id: 23,
      question: 'Do you provide guards for schools, hospitals, and hotels?',
      answer:
        'Yes. We provide security for educational institutions, hospitals/clinics, hotels, and other service facilities with professional visitor and access management.',
    },
    {
      id: 24,
      question: 'Can I request a site visit before finalizing?',
      answer:
        'Yes. A site visit helps us understand entry/exit points, risk areas, shift needs, and the best duty plan to propose the right manpower and supervision.',
    },
  ];

  const faq1 = faqs.slice(0, faqs.length / 2);
  const faq2 = faqs.slice(faqs.length / 2);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="footer">
      {/* Ribbon/Header */}
      <Ribbon name="Frequently Asked Questions" showfont={false} />

      <div className="px-5 py-10 max-w-7xl mx-auto">
        {/* FAQ List */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-4 ">
          <div className="w-full lg:w-1/2 space-y-3 ">
            {faq1.map((faq) => (
              <div key={faq.id} className="rounded-md overflow-hidden group border-none">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between card text2 items-center py-5 px-6 transition"
                >
                  <h2 className="text-md font-semibold ">{faq.question}</h2>
                  <span className="text-2xl font-bold">
                    {openIndex === faq.id ? (
                      <div className="w-[15px] cursor-pointer h-0.5 rounded-full bg-black"></div>
                    ) : (
                      <img src="/icons/plus.svg" className="w-[19px] cursor-pointer h-[19px]" alt="" />
                    )}
                  </span>
                </button>

                <div
                  className={`transition-all card2 duration-300 cursor-pointer ease-in-out ${
                    openIndex === faq.id ? 'max-h-96 opacity-100 translate-y-0 p-6' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 space-y-3">
            {faq2.map((faq) => (
              <div key={faq.id} className="rounded-md overflow-hidden group border-none">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full card text2 flex justify-between faqsQuestions items-center py-5 px-6 transition"
                >
                  <h2 className="text-md font-semibold">{faq.question}</h2>
                  <span className="text-2xl font-bold">
                    {openIndex === faq.id ? (
                      <div className="w-[15px] cursor-pointer h-0.5 rounded-full bg-black"></div>
                    ) : (
                      <img src="/icons/plus.svg" className="w-[19px] cursor-pointer h-[19px]" alt="" />
                    )}
                  </span>
                </button>

                <div
                  className={`card2 transition-all duration-300 ease-in-out ${
                    openIndex === faq.id ? 'max-h-96 opacity-100 translate-y-0 p-6' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
