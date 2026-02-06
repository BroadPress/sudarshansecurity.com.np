'use client';

import { useEffect, useMemo, useState } from 'react';
import Pagination from '../../components/Pagination';
import Ribbon from '../../components/Ribbon';

type NoticeItem = {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  category:
    | 'Announcement'
    | 'Training'
    | 'Recruitment'
    | 'Tender'
    | 'Service Update'
    | 'Compliance'
    | 'Event'
    | 'Holiday';
  content: string;
  important?: boolean;
  href?: string; // optional details link
  attachmentHref?: string; // optional download link
};

export default function Notice() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // ✅ Sudarshan Security Services notices (you can edit dates/titles anytime)
  const [notices] = useState<NoticeItem[]>([
    {
      id: 1,
      title: 'Security Guard Basic Training – New Batch Opening',
      date: '2026-02-05',
      category: 'Training',
      content:
        'New Basic Security Guard Training batch starts soon. Includes drill, access control, incident reporting, customer handling, and emergency response. Limited seats—early registration recommended.',
      important: true,
      href: '/notice/1',
    },
    {
      id: 2,
      title: 'Recruitment Notice – Security Guard & Supervisor',
      date: '2026-02-01',
      category: 'Recruitment',
      content:
        'Vacancies open for Security Guards and Site Supervisors for Kathmandu Valley and major cities. Preference to experienced candidates; fresh candidates can apply after training.',
      important: true,
      href: '/notice/2',
    },
    {
      id: 3,
      title: 'Service Update – 24/7 Control Room & Response Coordination',
      date: '2026-01-28',
      category: 'Service Update',
      content:
        'Our Control Room is operating 24/7 for client coordination, shift monitoring, and incident escalation. Clients may contact us for urgent support or reporting.',
      href: '/notice/3',
    },
    {
      id: 4,
      title: 'Compliance Reminder – ID Card & Uniform Standards',
      date: '2026-01-25',
      category: 'Compliance',
      content:
        'All deployed personnel must wear uniform, ID card, and required accessories during duty hours. Site supervisors are instructed to ensure daily compliance checks.',
      href: '/notice/4',
    },
    {
      id: 5,
      title: 'Tender / Quotation – Supply of Security Equipment',
      date: '2026-01-22',
      category: 'Tender',
      content:
        'We invite quotations for supply of security equipment (torches, raincoats, whistles, boots, radios). Vendors can submit quotations within the deadline mentioned in the details.',
      important: false,
      href: '/notice/5',
      attachmentHref: '/downloads/security-equipment-quotation.pdf',
    },
    {
      id: 6,
      title: 'Client Update – Site Audit & Post Order Review',
      date: '2026-01-20',
      category: 'Announcement',
      content:
        'Our Operations team will conduct routine site audits and post order reviews. Clients will receive a short report with improvement points and action items.',
      href: '/notice/6',
    },
    {
      id: 7,
      title: 'Emergency Response Drill – Commercial Sites',
      date: '2026-01-18',
      category: 'Event',
      content:
        'Emergency response drills will be conducted at selected commercial sites. The drill includes evacuation coordination, crowd control, and reporting procedure.',
      important: true,
      href: '/notice/7',
    },
    {
      id: 8,
      title: 'Holiday Notice – Office Working Hours Update',
      date: '2026-01-15',
      category: 'Holiday',
      content:
        'During public holidays, the admin office may operate on limited hours. Deployment operations continue as usual. For urgent issues, contact the 24/7 Control Room.',
      href: '/notice/8',
    },

    // Extra items to keep pagination + layout filled (no “broken” empty space)
    {
      id: 9,
      title: 'Training: Fire Safety & First Aid Refresher (In-house)',
      date: '2026-01-12',
      category: 'Training',
      content:
        'Refresher session for deployed staff covering fire extinguisher basics, first-aid response, and incident documentation. Coordinated via site supervisors.',
      href: '/notice/9',
    },
    {
      id: 10,
      title: 'Service Update – Visitor Entry Register Standardization',
      date: '2026-01-10',
      category: 'Service Update',
      content:
        'All sites are instructed to maintain visitor entry register format with time, ID reference, purpose of visit, and host confirmation to improve traceability.',
      href: '/notice/10',
    },
    {
      id: 11,
      title: 'Recruitment: Night Shift Guards – Priority Hiring',
      date: '2026-01-08',
      category: 'Recruitment',
      content:
        'Priority hiring for night shift deployment at hotels and commercial complexes. Candidates should be physically fit and able to maintain logs and checkpoints.',
      href: '/notice/11',
    },
    {
      id: 12,
      title: 'Compliance: Daily Handover Log Mandatory at All Posts',
      date: '2026-01-06',
      category: 'Compliance',
      content:
        'Daily handover logs must be completed at shift change. Include site status, incidents (if any), key inventory, and pending instructions.',
      href: '/notice/12',
    },
    {
      id: 13,
      title: 'Tender – Uniform Stitching & Supply Partners',
      date: '2026-01-04',
      category: 'Tender',
      content:
        'We are onboarding tailoring/uniform suppliers for bulk stitching and delivery. Interested vendors may submit portfolio and pricing details.',
      href: '/notice/13',
    },
    {
      id: 14,
      title: 'Event – Supervisor Meeting & SOP Update Briefing',
      date: '2026-01-03',
      category: 'Event',
      content:
        'All site supervisors are requested to attend the SOP update briefing and coordination meeting. Attendance is mandatory for alignment on reporting.',
      href: '/notice/14',
    },
    {
      id: 15,
      title: 'Announcement – New Client Onboarding Checklist',
      date: '2026-01-01',
      category: 'Announcement',
      content:
        'New client onboarding checklist updated: post orders, site mapping, shift roster, escalation contacts, and equipment readiness confirmation.',
      href: '/notice/15',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Announcement',
    'Training',
    'Recruitment',
    'Tender',
    'Service Update',
    'Compliance',
    'Event',
    'Holiday',
  ] as const;

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesCategory =
        selectedCategory === 'All' || notice.category === selectedCategory;

      const q = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !q ||
        notice.title.toLowerCase().includes(q) ||
        notice.content.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [notices, selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredNotices.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  return (
    <>
      <Ribbon name="Notice" showfont={false} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* SEARCH + CATEGORY FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search notices..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category horizontal scroll */}
          <div className="relative w-full md:w-auto">
            <div
              className="
                flex gap-2 overflow-x-auto pb-3 whitespace-nowrap
                scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
              "
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`
                    px-4 py-2 rounded-full shrink-0 cursor-pointer transition-colors
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

        {/* ✅ TWO-COLUMN LAYOUT (fills space, looks complete) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: NOTICE LIST */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {currentData.map((notice) => (
                <div
                  key={notice.id}
                  className={`
                    answers rounded-lg shadow-md border-l-4
                    hover:scale-[1.02] transition-all hover:shadow-2xl
                    ${notice.important ? 'border-red-500' : 'border-[#074842]'}
                  `}
                >
                  {notice.important && (
                    <div className="bg-red-500 rounded-tr-lg text-white px-4 py-1 text-sm font-semibold">
                      Important
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{notice.title}</h3>

                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          <span className="bg-green-100 text-black text-sm px-3 py-1 rounded-full">
                            {notice.category}
                          </span>

                          <span className="text-gray-400 text-sm">
                            {formatDate(notice.date)}
                          </span>

                          <span className="text-gray-400 text-sm">
                            Ref: SSS-{String(notice.id).padStart(3, '0')}
                          </span>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex flex-wrap items-center gap-2 md:justify-end">
                        <a
                          href={notice.href || '#'}
                          className="cursor-pointer hover:bg-teal-700 hover:text-white text-[13px] border px-3 py-1 rounded-md border-gray-800 transition-colors"
                        >
                          Read Details
                        </a>

                        <a
                          href="/contact"
                          className="cursor-pointer hover:bg-teal-700 hover:text-white text-[13px] border px-3 py-1 rounded-md border-gray-800 transition-colors"
                        >
                          Contact Office
                        </a>

                        {notice.attachmentHref && (
                          <a
                            href={notice.attachmentHref}
                            className="cursor-pointer hover:bg-teal-700 hover:text-white text-[13px] border px-3 py-1 rounded-md border-gray-800 transition-colors"
                          >
                            Download
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="leading-relaxed mt-4">{notice.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            {filteredNotices.length !== 0 && (
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
            {filteredNotices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No notices found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: SIDEBAR (extra links + info, fills empty space) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-2xl border border-gray-200 shadow-sm p-5">
                <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                <div className="grid gap-2">
                  <a className="hover:underline text-sm" href="/services">
                    → Our Services
                  </a>
                  <a className="hover:underline text-sm" href="/about">
                    → About Sudarshan Security Services
                  </a>
                  <a className="hover:underline text-sm" href="/career">
                    → Career / Apply Now
                  </a>
                  <a className="hover:underline text-sm" href="/downloads">
                    → Downloads (Forms, Profiles)
                  </a>
                  <a className="hover:underline text-sm" href="/contact">
                    → Contact & Office Location
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 shadow-sm p-5">
                <h4 className="text-lg font-semibold mb-3">Need Help?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For urgent site support, deployment coordination, or incident reporting,
                  please contact the Control Room / Operations desk.
                </p>
                <div className="mt-4 grid gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Email</span>
                    <a className="hover:underline" href="mailto:info@sudarshansecurity.com">
                      info@sudarshansecurity.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Phone</span>
                    <a className="hover:underline" href="tel:+977-9852054100">
                      +977-9852054100
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">WhatsApp</span>
                    <a className="hover:underline" href="#">
                      Message Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 shadow-sm p-5">
                <h4 className="text-lg font-semibold mb-3">Popular Downloads</h4>
                <div className="grid gap-2 text-sm">
                  <a className="hover:underline" href="/downloads">
                    → Company Profile (PDF)
                  </a>
                  <a className="hover:underline" href="/contact">
                    → Service Request Form
                  </a>
                  <a className="hover:underline" href="/contact">
                    → Job Application Form
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
