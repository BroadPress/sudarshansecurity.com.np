'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import CommitmentsSection from "@/components/Commitments";
import { motion } from 'framer-motion';

const HERO_SLIDES = [
  "/images/home/hero/slider1.jpg",
  "/images/home/hero/slider2.jpg",
  "/images/home/hero/slider3.jpg",
];

const Home = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500); // change every 4.5s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION (Auto Slider) */}
      <section className="w-full min-h-[600px] relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center">
        {/* Slides */}
        <div className="absolute inset-0">
          {HERO_SLIDES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Hero slide ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className={[
                "object-cover object-center",
                "transition-opacity duration-1000 ease-in-out",
                i === slide ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6 relative z-10">
          {/* Text Content */}
          <div className="flex flex-col justify-start sm:justify-center text-left z-10 w-full sm:w-1/2 mt-6 sm:mt-0 px-6">
            <div className="text-[23px] text-white md:text-2xl lg:text-3xl font-semibold mb-3 leading-tight opacity-90">
              Welcome to
            </div>

            <div className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Sudarshan Security.
            </div>

            <div className="mt-2 text-white font-bold sm:mt-4 text-[18px] md:text-[18px] lg:text-[20px] max-w-[600px] leading-relaxed opacity-95">
              Let's give them a elite service
            </div>

            <div className="mt-8 mb-8 sm:mb-0 md:mt-10 flex flex-row gap-4 md:gap-6">
              <Link href="/about">
                <button className="cursor-pointer text-white bg-[#4fa19d] border-2 border-[#0D5D59] py-2 md:py-3 px-4 md:px-8 rounded-md font-semibold hover:bg-[#0D5D59] hover:text-white transition-all duration-300 ease-in-out min-w-[130px] shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  About
                </button>
              </Link>

              <Link href="/contact">
                <button className="cursor-pointer bg-[#0D5D59] text-white px-4 md:px-10 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 ease-in-out min-w-[150px] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Book Service
                </button>
              </Link>
            </div>

            {/* Optional dots */}
            <div className="mt-2 flex gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === slide ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="w-full md:hidden h-px" />
        </div>
      </section>

      {/* REST SECTION */}
      <section className="w-full max-w-350 m-auto h-full pt-24 pb-24 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-10 px-6 items-center">
        {/* TEXT: animate from left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className="md:w-1/2"
        >
          <p className="font-mono text-blue-600 text-2xl text-left">
            Join us for service
          </p>

          <p className="font-sans text-black pt-8 font-extrabold text-3xl">
            What we stand for
          </p>

          <p className="pt-8">
            Since 1983, Sudarshan Security has been a leading name in Nepal's
            security sector. As the first registered security company, we have
            unmatched experience and knowledge. Our highly trained professionals
            deliver comprehensive security solutions, including advanced access
            control, close protection, and 24/7 surveillance. We offer high-quality
            services for individual, corporate, and major event security needs.
          </p>

          <p className="pt-4">
            Our ISO 9001:2015 certification reflects our commitment to quality and
            excellence. With decades of experience, Sudarshan Security is the most
            reputable and reliable choice for safeguarding what matters most to you.
          </p>

          <Link href="/about">
            <button className="text-center bg-red-600 text-white w-42 h-14 p-2 rounded-full hover:bg-amber-400 mt-11 transition-colors">
              DISCOVER MORE
            </button>
          </Link>
        </motion.div>

        {/* IMAGE: animate from right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
          viewport={{ once: true, amount: 0.25 }}
          className="md:w-1/2 w-full"
        >
          <Image
            src="/images/home/img_2.jpg"
            alt="Join us"
            width={1000}
            height={800}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>

      <section>
        <Feedback  />
        <CommitmentsSection/>
      </section>
    </div>
  );
};

export default Home;
