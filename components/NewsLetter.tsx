'use client';
import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-teal-900 text-white py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
        
        {/* Heading */}
        <h2 className="text-white font-semibold italic text-2xl sm:text-4xl text-center lg:text-left lg:pl-8 leading-tight">
          Join our Newsletter
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full sm:w-[340px] md:w-[420px] lg:w-[460px]
              py-3 px-5
              bg-transparent
              border border-white
              rounded-xl
              text-base sm:text-lg md:text-xl
              font-semibold
              focus:outline-none
              placeholder:text-white/70
            "
          />

          <button
            className="
              bg-[#FFC700]
              text-green-900
              italic
              text-lg sm:text-xl md:text-2xl
              font-medium
              py-3 px-8 sm:px-10
              rounded-xl
              w-full sm:w-auto
              whitespace-nowrap
              cursor-pointer
              active:scale-[0.98]
              transition
            "
          >
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewsLetter;
