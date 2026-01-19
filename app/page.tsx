import React from "react";
import Image from "next/image";
import Link from "next/link";


const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="w-full sm:bg-[url('/images/home/hero/slider3.jpg')] bg-cover bg-center bg-no-repeat min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center md:p-0 md:pt-0 relative overflow-hidden">
        {/*   header width and alignment */}
        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6">

          <div className="block sm:hidden w-full h-[300px] bg-[url('/images/home/1.jpg')] bg-center bg-cover bg-no-repeat">
          </div>

          {/* Text Content  Aligned directly below logo column */}
          <div className="flex flex-col text2 justify-start sm:justify-center text-left  z-10 w-full sm:w-1/2 mt-4 px-6 sm:mt-0">
            <div className="text-[23px] text-white md:text-2xl lg:text-3xl font-semibold mb-3 leading-tight opacity-90">
              Welcome to
            </div>
            <div className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-shadow-sm">
              Sudarshan Security.
            </div>
            <div className="mt-2 text-white font-bold  sm:mt-4 text-[18px] md:text-[18px] lg:text-[20px] max-w-[600px] leading-relaxed opacity-95 line-height-loose">
              {/* Empower organizations in these vital industries with innovative, scalable,
              technology-driven services that enhance operational efficiency and support
              long-term growth. */}
              Let's give them a elite service
            </div>
            <div className="mt-8 mb-8 sm:mb-0 md:mt-10 flex flex-row  gap-4 md:gap-6">
              <button className="cursor-pointer text-white bg-[#4fa19d] border-2 border-[#0D5D59] py-2 md:py-3 px-4 md:px-8 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition-all duration-300 ease-in-out min-w-[130px] shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                About
              </button>
              <button className="cursor-pointer bg-[#0D5D59] text-white px-4 md:px-10 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 ease-in-out min-w-[150px] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Book Service
              </button>
            </div>
          </div>

          {/* Spacer for mobile to push image below */}
          <div className="w-full md:hidden h-px"> </div>


        </div>

        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#D0D0D0]/50 to-transparent md:from-transparent"></div> */}
      </section>

      <section className="w-full max-w-350 m-auto h-full pt-24 pb-24 flex items-center justify-center">
        <div className="flex flex-col md:flex-row  gap-10 px-6">
          <div>
            <p className="font-mono text-blue-600 text-2xl text-left md:text-left">
              Join us for service
            </p>
            <p className="font-sans text-black pt-8 font-extrabold text-3xl  ">What we stand for</p>
            <p className="pt-8">Since 1983, Sudarshan Security has been a leading name in Nepal's security sector. As the first registered security company, we have unmatched experience and knowledge. Our highly trained professionals deliver comprehensive security solutions, including advanced access control, close protection, and 24/7 surveillance. We offer high-quality services for individual, corporate, and major event security needs.</p>
            <p className="pt-4">Our ISO 9001:2015 certification reflects our commitment to quality and excellence. With decades of experience, Sudarshan Security is the most reputable and reliable choice for safeguarding what matters most to you.</p>

            <Link href={"/about"}>
              <button className=" text-center bg-red-600 text-white w-42 h-14 p-2 rounded-full  hover:bg-amber-400 mt-11">DISCOVER  MORE</button>
            </Link>
          </div>

          <Image
            src="/images/home/img_2.jpg"
            alt="Join us"
            width={1000}
            height={800}
            className=" w-850 h-auto rounded-xl object-cover"
            priority
          />
        </div>
      </section>

    </div>

  );

};

export default Home;