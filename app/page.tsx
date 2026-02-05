'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import CommitmentsSection from "@/components/Commitments";
import { motion } from "framer-motion";

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
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <div className="w-full overflow-x-hidden mb-20 bg-[#EDEDF8]">
      {/* HERO SECTION (Auto Slider) */}
      <section className="w-full relative overflow-hidden h-[80vh] sm:h-[80vh]">
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
                "transition-opacity duration-3000 ease-in-out",
                i === slide ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: isDark ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.4)",
            }}
          />
        </div>

        <div className="absolute ml-0 md:ml-16 inset-x-0 bottom-0 z-10">
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-[calc(40px+env(safe-area-inset-bottom))]">
            <div className="flex flex-col text-left w-full sm:w-1/2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 leading-tight opacity-90 text-white">
                Welcome to
              </div>

              <div className="font-bold text-4xl md:text-4xl lg:text-5xl mb-6 leading-tight text-white">
                Sudarshan Security.
              </div>

              <div className="mt-2 font-bold sm:mt-4 text-[21px] md:text-[18px] lg:text-[20px] max-w-[600px] leading-relaxed opacity-95 text-white">
                Let's give them a elite service
              </div>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link href="/about">
                  <button
                    className="
    group relative overflow-hidden
    cursor-pointer bg-transparent text-white
    border-2 border-red-800
    py-3 md:py-3 px-4 md:px-8
    w-full sm:w-auto min-w-[130px]
    font-semibold shadow-md
    rounded-md
    transition-[border-radius,transform,box-shadow,color,border-color] duration-300 ease-out
    hover:text-black hover:border-transparent hover:shadow-lg hover:-translate-y-0.5
  "
                  >
                    <span className="relative z-10">About</span>

                    {/* Curved fill starts from bottom-center and expands */}
                    <span
                      aria-hidden="true"
                      className="
      absolute inset-0 z-0
      bg-[#00715D]
      [clip-path:circle(0%_at_50%_100%)]
      transition-[clip-path] duration-500 ease-out
      group-hover:[clip-path:circle(150%_at_50%_100%)]
    "
                    />
                  </button>


                </Link>

                <Link href="/contact">
                  <button
                    className="
    group relative overflow-hidden
    cursor-pointer
    bg-red-800 text-white
    border-2 border-red-800
    hover:border-[#00715D]
    py-3 md:py-3 px-4 md:px-10
    w-full sm:w-auto min-w-[150px]
    font-semibold shadow-lg
    rounded-md
    transition-[transform,box-shadow] duration-300 ease-out
    hover:shadow-xl hover:-translate-y-0.5
  "
                  >
                    <span className="relative z-10">Book Service</span>

                    {/* Curved fill from bottom-center */}
                    <span
                      aria-hidden="true"
                      className="
      absolute inset-0 z-0
      bg-[#00715D]
      [clip-path:circle(0%_at_50%_100%)]
      transition-[clip-path] duration-500 ease-out
      group-hover:[clip-path:circle(160%_at_50%_100%)]
    "
                    />
                  </button>

                </Link>


              </div>

              {/* Dots */}
              <div className="mt-4 flex gap-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className="h-2.5 w-2.5 rounded-full transition-all"
                    style={{
                      background: i === slide ? "white" : "rgba(255,255,255,0.4)",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST SECTION */}
      <section
        className="w-full py-24 flex items-center justify-center"
        style={{ background: "var(--mainBackground)" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="md:w-1/2 w-full"
            >
              <p className="italic text-xl text-left" style={{ color: "#00715D" }}>
                Join us for service
              </p>

              <p className="font-sans pt-4 font-extrabold text-3xl" style={{ color: "var(--text)" }}>
                What we stand for
              </p>

              <p className="pt-8" style={{ color: "var(--text2)" }}>
                Since 1983, Sudarshan Security has been a leading name in Nepal's
                security sector. As the first registered security company, we have
                unmatched experience and knowledge. Our highly trained professionals
                deliver comprehensive security solutions, including advanced access
                control, close protection, and 24/7 surveillance. We offer high-quality
                services for individual, corporate, and major event security needs.
              </p>

              <p className="pt-4" style={{ color: "var(--text2)" }}>
                Our ISO 9001:2015 certification reflects our commitment to quality and
                excellence. With decades of experience, Sudarshan Security is the most
                reputable and reliable choice for safeguarding what matters most to you.
              </p>

              <Link href="/contact">
                <button className="text-center w-42 h-14 p-2 rounded-full mt-11 transition-colors text-[#ffffff] border bg-red-600 hover:bg-[#00715D]">
                  Hire a service
                </button>
              </Link>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
              className="md:w-1/2 w-full"
            >
              <div
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: "var(--border)", background: "var(--background)" }}
              >
                <Image
                  src="/images/home/img_2.jpg"
                  alt="Join us"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <Feedback />
        <CommitmentsSection />
      </section>
    </div>
  );
};

export default Home;