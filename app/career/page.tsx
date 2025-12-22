'use client'
import { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import Ribbon from '../../components/Ribbon';
import Link from 'next/link';


export default function Career() {

const jobs = [
  {
    id: 1,
    title: "Mobile App Developer",
    department: "IT & Development",
    category: "Full Time",
    urgent: true,
    location: "Kathmandu, Nepal",
    experience: "1–3 years",
    date: "2025-01-10",
    description:
      "Responsible for designing, developing, and maintaining mobile applications for Android and iOS platforms. Work with cross-functional teams href define, design, and ship new features."
  },
  {
    id: 2,
    title: "Web Developer",
    department: "IT & Development",
    category: "Full Time",
    urgent: false,
    location: "Kathmandu, Nepal",
    experience: "1–3 years",
    date: "2025-01-08",
    description:
      "Build and maintain responsive websites and web applications. Work with backend and frontend technologies href deliver optimized digital solutions."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    category: "Full Time",
    urgent: false,
    location: "Remote / On-site",
    experience: "1–2 years",
    date: "2025-01-05",
    description:
      "Create user-centered designs, wireframes, prototypes, and conduct usability testing href improve overall user experience."
  },
  {
    id: 4,
    title: "Call Centre Executive",
    department: "Customer Support",
    category: "Full Time",
    urgent: true,
    location: "Kathmandu, Nepal",
    experience: "0–2 years",
    date: "2025-01-03",
    description:
      "Handle inbound/outbound calls, resolve customer inquiries, maintain customer satisfaction, and document call records."
  },
  {
    id: 5,
    title: "Digital Marketing Manager",
    department: "Marketing",
    category: "Full Time",
    urgent: false,
    location: "Hybrid",
    experience: "2–4 years",
    date: "2025-01-01",
    description:
      "Plan, execute, and monitor digital marketing campaigns, SEO/SEM strategies, and social media activities href drive brand growth."
  },
  {
    id: 6,
    title: "Content Writer",
    department: "Marketing",
    category: "Part Time",
    urgent: false,
    location: "Remote",
    experience: "0–2 years",
    date: "2024-12-28",
    description:
      "Write engaging blog posts, website content, social media captions, and marketing content aligned with brand voice and SEO."
  },
  {
    id: 7,
    title: "Graphic Designer",
    department: "Design",
    category: "Full Time",
    urgent: false,
    location: "Kathmandu, Nepal",
    experience: "1–3 years",
    date: "2024-12-27",
    description:
      "Design graphics, banners, marketing materials, and digital creatives for websites, apps, and social platforms."
  },
  {
    id: 8,
    title: "SEO Analyst",
    department: "Marketing",
    category: "Full Time",
    urgent: true,
    location: "Hybrid",
    experience: "1–3 years",
    date: "2024-12-25",
    description:
      "Analyze website performance, conduct keyword research, track rankings, and optimize content href improve search engine visibility."
  },
  {
    id: 9,
    title: "Frontend Developer",
    department: "IT & Development",
    category: "Full Time",
    urgent: false,
    location: "On-site",
    experience: "1–3 years",
    date: "2024-12-20",
    description:
      "Develop responsive UI components using HTML, CSS, JavaScript, React, and ensure optimized performance and accessibility."
  },
  {
    id: 10,
    title: "MERN Stack Developer",
    department: "IT & Development",
    category: "Full Time",
    urgent: true,
    location: "On-site",
    experience: "1–3 years",
    date: "2024-12-18",
    description:
      "Develop full-stack applications using MongoDB, Express, React, and Node.js. Handle API integration, backend logic, and UI implementation."
  },
  {
    id: 11,
    title: "Security Engineer",
    department: "IT Security",
    category: "Full Time",
    urgent: false,
    location: "Hybrid",
    experience: "2–5 years",
    date: "2024-12-15",
    description:
      "Monitor and secure systems, perform security audits, identify vulnerabilities, and implement cybersecurity best practices."
  }
];

    const sortedJobs = jobs.sort((a, b) => {
        // urgent first
        if (a.urgent && !b.urgent) return -1;
        if (!a.urgent && b.urgent) return 1;
        return 0; // keep original order if both urgent or both not
    });

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState(8);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = ["All", "Full Time", "Part Time", "Internship", "Contract", "Remote"];


    useEffect(() => {
    if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [currentPage]);

    // Filtering logic
    const filteredJobs = sortedJobs.filter(job => {
        const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Pagination logic
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
                                    className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Categories */}
                            <div className="relative w-full md:w-auto">
                                <div className="
                                flex gap-2 overflow-x-auto pb-3
                                scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
                                whitespace-nowrap
                                ">
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            className={`
                                            px-4 py-2 rounded-full cursor-pointer shrink-0 transition-colors
                                            ${selectedCategory === category
                                                   ? 'bg-[#074842] text-white'
                                                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                                                    
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
                            {currentData.map(job => (
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
                                            <h3 className="text-xl font-semibold  mb-2 md:mb-0">
                                                {job.title}
                                            </h3>

                                            <div className="flex items-center gap-4">
                                                <span className="bg-green-100 text-black text-sm px-3 py-1 rounded-full">
                                                    {job.category}
                                                </span>
                                                <Link href={{
                                                    pathname: `/internship`,
                                                    query: {
                                                     job:job.title
                                                    }
                                                }}>
                                                <button className='card cursor-pointer hover:bg-teal-700 hover:text-white text-[13px] border px-2 py-1 rounded-md border-gray-800'>
                                                    Apply Now
                                                </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <span className=" text-sm">
                                                   📆 {new Date(job.date).toLocaleDateString()}
                                        </span>
                                        <p className=" mb-2">
                                            <strong>📌</strong> {job.location}
                                        </p>

                                        <p className=" text-md leading-relaxed">
                                            {job.description}
                                        </p>
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
