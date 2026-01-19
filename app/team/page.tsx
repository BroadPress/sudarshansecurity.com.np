// 'use client'
// import Ribbon from "../../components/Ribbon";

// const teamMembers = [
//   { id: 1, name: "", role: "", image: "" },
//   { id: 2, name: "Dambar Bahadur Tamang", role: "Managing Director", image: "/images/team/1.png" },
//   { id: 3, name: "Keshab Adhikari", role: "General Manager", image: "/images/team/2.png" },
//   { id: 4, name: "Dambar Bahadur Tamang", role: "Managing Director", image: "/images/team/4.png" },

  
// ];

// const OurTeam = () => {
//   return (
//     <div className="about-w-full ">
//       {/* Full-width Ribbon Header */}
//       <Ribbon name="Our Team" showfont={true}/>

//       <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-10">

//         {/* PRESIDENT SECTION */}
//         <div className="rounded-lg  card  p-6 md:p-10">
//           <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
//             <div className="flex flex-col items-center">
//               <img
//                 src="/images/team/1.png"
//                 className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
//                 alt="Pracas"
//               />
//               <h2 className="text-[1em] md:text-[1.7em] font-bold mt-4 text-center">
//                 Pracas
//               </h2>
//               <p className="text-[1em]  mt-1 text-center">C.T.O</p>
//             </div>

//             {/* Text */}
//             <div className="flex-1 leading-relaxed space-y-7">
//               <h1 className=" text-[1.8em]">About Pracas</h1>
//               <p className="text-[1em]">
//                 Pracas Upreti's journey from a startup founder to a
//                 technology-driven change-maker in Biratnagar, Nepal, exemplifies
//                 the profound impact that individuals can have when they combine
//                 innovation with a commitment to social responsibility. Through
//                 his endeavors, Upreti has not only transformed his community but
//                 has also set a precedent for how technology can be harnessed to
//                 drive positive change and create a better future for all.
//               </p>
//               <p className="text-[1em]">Through his endeavors, Upreti has not only
//                  transformed his community but has also set a precedent for how technology
//                   can be harnessed to drive positive change and create a better future for all.</p>
//               <p  className="text-[1em]">
//                 Upreti's journey into the realm of technology began over a
//                 decade ago when he founded his first IT startup in 2007 A.D. as
//                 PRACAS Infosys in Biratnagar. Recognizing the potential of
//                 technology to bridge gaps and catalyze progress, he embarked on
//                 a mission to leverage digital solutions to address local
//                 challenges and foster economic development. His vision was not
//                 merely to create successful businesses but to effect meaningful
//                 change in his community.
//               </p>

//               {/* Social icons */}
//               <div className="mt-6">
//                 <p className="font-normal text-base md:text-[1em]">
//                   Follow Pracas on social media:
//                 </p>

//                 <div className="flex gap-3 mt-2">
//                   <img
//                     src="/icons/x.svg"
//                     className="w-5 h-5 cursor-pointer hover:opacity-75"
//                   />
//                   <img
//                     src="/icons/linkedin.svg"
//                     className="w-5 h-5 cursor-pointer hover:opacity-75"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>

//         {/* TEAM GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
//           {teamMembers.map((member) => (
//             <div
//               key={member.id}
//               className=" card  rounded-lg p-6  flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 md:w-full md:h-full rounded-full object-cover shadow"
//               />
//               <h3 className=" font-semibold mt-5 text-[1.2em] ">{member.name}</h3>
//               <p className=" text-sm mt-2">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;



'use client';

import Ribbon from '../../components/Ribbon';

const teamMembers = [
  {
    id: 1,
    name: 'Dambar Bahadur Tamang',
    role: 'Managing Director',
    image: '/images/team/1.png',
  },
  {
    id: 2,
    name: 'Keshab Adhikari',
    role: 'General Manager',
    image: '/images/team/2.png',
  },
  {
    id: 3,
    name: 'Ramesh Ghising',
    role: 'Operation Director',
    image: '/images/team/4.png',
  },
];

const OurTeam = () => {
  return (
    <div className="w-full bg-gray-50/30">
      {/* Full-width Ribbon Header */}
      <Ribbon name="Our Team" showfont={true} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* LAYOUT CONTAINER:
          - flex + flex-wrap: Allows items to wrap nicely on mobile.
          - justify-center: KEEPS ITEMS CENTERED regardless of how many there are (3 items will be dead center).
          - gap-8: Adds consistent symmetrical spacing.
        */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative w-full max-w-[300px] flex flex-col items-center 
                         bg-white rounded-2xl shadow-sm border border-gray-100 p-8 
                         transition-all duration-300 ease-in-out
                         hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image Container with subtle decoration */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md border-4 border-white group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Content - Centered */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <div className="h-1 w-12 bg-gray-200 mx-auto my-3 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;