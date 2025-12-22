'use client'
import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-teal-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Heading */}
        <h2 className="text-white font-semibold italic text-3xl sm:text-4xl text-left md:pl-8">
          Join our Newsletter
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">

          <input
            type="email"
            placeholder="enter your eMail"
            className="
              w-full sm:w-[360px] lg:w-[460px]
              py-3 px-5
              bg-transparent
              border border-white
              rounded-xl
              text-lg sm:text-xl
              font-semibold
              focus:outline-none
            "
          />

          <button
            className="
              bg-[#FFC700]
              text-green-900
              italic
              text-xl sm:text-2xl
              font-medium
              py-3 px-8 sm:px-12
              rounded-xl
              w-full sm:w-auto
              cursor-pointer
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
