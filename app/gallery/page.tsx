import React from 'react';
import Ribbon from '../../components/Ribbon';
import Link from 'next/link';
import Image from 'next/image';

function Gallery() {
    // Using existing placeholder images from public folder
    const galleryItems = [
        { id: 1, image: '/images/gallery/1.jpg', title: 'Digital Solutions Launch', date: 'Jun 14, 2018', place: 'Kathmandu Durbar Square', count: 10, description: 'Marking the beginning of SRIYOG Consulting Pvt. Ltd., empowering organizations with innovative IT solutions.' },
        { id: 2, image: '/images/gallery/2.jpg', title: 'Healthcare Digitization', date: 'Mar 05, 2019', place: 'Pokhara Lakeside', count: 15, description: 'Implemented advanced digital infrastructure to streamline healthcare operations and improve patient experiences.' },
        { id: 3, image: '/images/gallery/3.jpg', title: 'Employment Platform ', date: 'Aug 12, 2019', place: 'Lumbini', count: 12, description: 'Developed robust and scalable job-matching platforms connecting employers and job seekers effectively.' },
        { id: 4, image: '/images/gallery/4.jpg', title: 'Tourism Management System', date: 'Feb 20, 2020', place: 'Chitwan National Park', count: 8, description: 'Optimized tourism services with user-friendly digital solutions for enhanced visitor engagement.' },
        { id: 5, image: '/images/gallery/5.jpg', title: 'E-commerce Solutions', date: 'Jul 15, 2020', place: 'Bhaktapur Durbar Square', count: 20, description: 'Delivered scalable e-commerce platforms enabling businesses to expand their digital presence.' },
        { id: 7, image: '/images/gallery/7.jpg', title: 'Business Process Automation', date: 'Mar 22, 2021', place: 'Patan', count: 14, description: 'Implemented automated workflows to increase operational efficiency and reduce costs.' },
        { id: 9, image: '/images/gallery/9.jpg', title: 'Database & Data Management', date: 'Jan 18, 2022', place: 'Nagarkot', count: 16, description: 'Designed secure and scalable databases to manage critical business information efficiently.' },
        { id: 10, image: '/images/gallery/10.jpg', title: 'IT Consultancy', date: 'May 05, 2022', place: 'Everest Base Camp', count: 19, description: 'Provided expert IT consultancy to guide organizations in implementing effective technology strategies.' },
        { id: 11, image: '/images/gallery/11.jpg', title: 'UI/UX Design Excellence', date: 'Sep 12, 2023', place: 'Janakpur', count: 11, description: 'Delivered modern, intuitive designs focused on enhancing user engagement and satisfaction.' },
        { id: 12, image: '/images/gallery/12.jpg', title: 'Global Client Impact', date: 'Dec 20, 2023', place: 'Ilam', count: 13, description: 'Successfully served over 500 clients across 15 countries with tailored IT solutions.' },
        { id: 6, image: '/images/gallery/6.jpg', title: 'Progressive Web Apps', date: 'Nov 03, 2020', place: 'Rara Lake', count: 18, description: 'Created mobile-first PWAs with offline functionality for smooth user experiences.' },
        { id: 8, image: '/images/gallery/8.jpg', title: 'Digital Marketing Services', date: 'Aug 10, 2021', place: 'Gosaikunda', count: 22, description: 'Enhanced client presence through SEO, social media, and targeted digital campaigns.' },
    ];


     return (
        <div>
            {/* Header */}
            <Ribbon name="Gallery" showfont={false}/>

            {/* Gallery Grid */}
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-80 w-full overflow-hidden"> {/*  Increased height */}
                                <Image
                                    width={600}
                                    height={800}
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover" // Image fully covers
                                />
                                {/* Photo Count Badge */}
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                    <span className="text-sm font-semibold text-gray-700">📷 {item.count}</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 card2 flex flex-col space-y-4">
                                <h2 className="text-lg font-medium">{item.title}</h2>
                                <p className="card2 text-sm mt-1">{item.description}</p> {/*  Reduced gap */}
                                <div className="flex items-center gap-2 text-sm card2 mt-1"> {/*  Tight spacing */}
                                    📅
                                    <span>{item.date}</span>
                                </div>
                                <div>
                                    <Link href={{
                                        pathname: `gallery/${item.id}`,
                                        query: {
                                          count: item.count,
                                          title: item.title,
                                          date: item.date,
                                          place: item.place
                                        }
                                      }}>
                                    <button className='bg-[#ebebeb] cursor-pointer hover:text-gray-50 hover:bg-teal-700 text-black border border-[#074842] px-2 py-1 rounded-md'>View Gallery</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;