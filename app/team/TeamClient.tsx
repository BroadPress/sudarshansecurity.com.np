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
    <div
      className="w-full"
      style={{
        background: 'var(--mainBackground)',
        color: 'var(--text)',
      }}
    >
      {/* Full-width Ribbon Header */}
      <Ribbon name="Team" showfont={true} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="
                group relative w-full max-w-[300px] flex flex-col items-center
                rounded-2xl shadow-sm p-8
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:-translate-y-2
              "
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Image Container with subtle decoration */}
              <div className="relative mb-6">
                {/* glow */}
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: 'var(--text2)',
                  }}
                />

                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                  style={{
                    border: '4px solid var(--background)',
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3
                  className="text-xl font-bold transition-opacity duration-300 group-hover:opacity-95"
                  style={{ color: 'var(--text)' }}
                >
                  {member.name}
                </h3>

                <div
                  className="h-1 w-12 mx-auto my-3 rounded-full transition-opacity duration-300 group-hover:opacity-95"
                  style={{
                    background: '#00715D',
                  }}
                />

                <p
                  className="text-sm font-medium uppercase tracking-wide"
                  style={{ color: 'var(--text2)' }}
                >
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
