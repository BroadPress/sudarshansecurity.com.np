'use client';

import { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import Ribbon from '../../components/Ribbon';
import Link from 'next/link';

export default function Career() {
  const jobs = [
    {
      id: 1,
      title: 'Security Guard (Unarmed)',
      department: 'Security Operations',
      category: 'Full Time',
      urgent: true,
      location: 'Kathmandu, Nepal',
      experience: '0–2 years',
      date: '2025-01-10',
      description:
        'Responsible for safeguarding client premises, controlling entry/exit, conducting routine patrols, and reporting incidents. Must be disciplined, punctual, and able to work in shifts.',
    },
    {
      id: 2,
      title: 'Security Supervisor',
      department: 'Security Operations',
      category: 'Full Time',
      urgent: true,
      location: 'Kathmandu, Nepal',
      experience: '2–4 years',
      date: '2025-01-08',
      description:
        'Supervise guard teams, ensure post compliance, coordinate shift rosters, handle incident reporting, and communicate with client representatives to maintain service standards.',
    },
    {
      id: 3,
      title: 'CCTV Monitoring Operator',
      department: 'Control Room',
      category: 'Full Time',
      urgent: false,
      location: 'Kathmandu, Nepal',
      experience: '1–3 years',
      date: '2025-01-05',
      description:
        'Monitor CCTV screens, identify suspicious activities, maintain logs, and coordinate with on-ground teams during incidents. Basic computer skills and alertness required.',
    },
    {
      id: 4,
      title: 'Reception / Front Desk Security',
      department: 'Client Site Services',
      category: 'Full Time',
      urgent: false,
      location: 'Kathmandu, Nepal',
      experience: '0–2 years',
      date: '2025-01-03',
      description:
        'Manage visitor entry protocols, check IDs, maintain visitor registers, support front-desk security procedures, and coordinate with the site supervisor for any issues.',
    },
    {
      id: 5,
      title: 'Field Officer',
      department: 'Operations & Inspection',
      category: 'Full Time',
      urgent: true,
      location: 'Kathmandu Valley, Nepal',
      experience: '2–5 years',
      date: '2025-01-01',
      description:
        'Conduct routine site inspections, evaluate guard performance, ensure compliance with SOPs, coordinate replacements, and support incident management across multiple client sites.',
    },
    {
      id: 6,
      title: 'Office Administrator (HR Support)',
      department: 'Administration',
      category: 'Full Time',
      urgent: false,
      location: 'Kathmandu, Nepal',
      experience: '1–3 years',
      date: '2024-12-28',
      description:
        'Support HR documentation, maintain employee records, assist with attendance and reporting, coordinate recruitment paperwork, and provide general administrative support.',
    },
    {
      id: 7,
      title: 'Training Assistant (Security)',
      department: 'Training & Development',
      category: 'Internship',
      urgent: false,
      location: 'Kathmandu, Nepal',
      experience: '0–1 years',
      date: '2024-12-27',
      description:
        'Assist trainers with drill sessions, attendance tracking, basic report preparation, and logistics for training programs (discipline, patrol procedures, communication protocols).',
    },
    {
      id: 8,
      title: 'Quick Response Team (QRT) Member',
      department: 'Emergency Response',
      category: 'Full Time',
      urgent: true,
      location: 'Kathmandu, Nepal',
      experience: '1–4 years',
      date: '2024-12-25',
      description:
        'Respond quickly to emergencies, support incident handling, coordinate with supervisors and control room, and ensure client safety. Prior field experience is preferred.',
    },
    {
      id: 9,
      title: 'Store / Warehouse Security',
      department: 'Client Site Services',
      category: 'Full Time',
      urgent: false,
      location: 'On-site',
      experience: '0–3 years',
      date: '2024-12-20',
      description:
        'Ensure safety of warehouse/store premises, monitor loading/unloading, prevent unauthorized access, check materials movement, and maintain daily security logs.',
    },
    {
      id: 10,
      title: 'Night Shift Security Guard',
      department: 'Security Operations',
      category: 'Full Time',
      urgent: true,
      location: 'On-site',
      experience: '0–2 years',
      date: '2024-12-18',
      description:
        'Perform night patrols, secure gates and sensitive areas, monitor unusual activity, and coordinate with the supervisor/control room. Must be reliable for night shifts.',
    },
    {
      id: 11,
      title: 'Safety & Compliance Officer',
      department: 'Quality & Compliance',
      category: 'Full Time',
      urgent: false,
      location: 'Hybrid',
      experience: '2–5 years',
      date: '2024-12-15',
      description:
        'Ensure operational compliance with SOPs, conduct audits, manage incident documentation, improve safety practices, and coordinate corrective actions with operations teams.',
    },
  ];

  const sortedJobs = jobs.sort((a, b) => {
    if (a.urgent && !b.urgent) return -1;
    if (!a.urgent && b.urgent) return 1;
    return 0;
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState(8);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Full Time', 'Part Time', 'Internship', 'Contract', 'Remote'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const filteredJobs = sortedJobs.filter((job) => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <Ribbon name="Career" showfont={false} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <>
          {/* SEARCH + CATEGORY FILTER */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search job roles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="relative w-full md:w-auto">
              <div
                className="
                  flex gap-2 overflow-x-auto pb-3
                  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
                  whitespace-nowrap
                "
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`
                      px-4 py-2 rounded-full cursor-pointer shrink-0 transition-colors
                      ${
                        selectedCategory === category
                          ? 'bg-[#074842] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }
                    `}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* JOB CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentData.map((job) => (
              <div
                key={job.id}
                className={`
                  answers rounded-lg shadow-md border-l-4
                  hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl
                  ${job.urgent ? 'border-red-500' : 'border-[#074842]'}
                `}
              >
                {job.urgent && (
                  <div className="bg-red-500 rounded-tr-lg text-white px-4 py-1 text-sm font-semibold">
                    Urgent Hiring
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.department}</p>
                    </div>

                    <div className="flex items-center gap-4 mt-3 md:mt-0">
                      <span className="bg-green-100 text-black text-sm px-3 py-1 rounded-full">
                        {job.category}
                      </span>

                      <Link
                        href={{
                          pathname: `/internship`,
                          query: { job: job.title },
                        }}
                      >
                        <button className="card cursor-pointer hover:bg-teal-700 hover:text-white text-[13px] border px-2 py-1 rounded-md border-gray-800">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>

                  <span className="text-sm">📆 {new Date(job.date).toLocaleDateString()}</span>

                  <p className="mb-2 mt-2">
                    <strong>📌</strong> {job.location}
                  </p>

                  <p className="text-md leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {filteredJobs.length !== 0 && (
            <div className="flex items-center justify-center mt-8">
              <Pagination
                color="bg-red-500"
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalPages={totalPages}
              />
            </div>
          )}

          {/* NO RESULTS */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No job openings found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </>
      </div>
    </>
  );
}
