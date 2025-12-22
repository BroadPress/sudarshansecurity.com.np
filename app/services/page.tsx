'use client';

import Ribbon from '../../components/Ribbon';
import { services } from '../data/serviceData';
import Link from 'next/link';

export default function Services() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' }
    ];

    
    const servicesList = services;

    return (
        <div className=" min-h-screen">
            {/* Header Section */}
            <Ribbon name="Services" showfont={false}/>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="footer shadow space-y-6 sm:space-y-4 border-gray-400 rounded-lg hover:shadow-2xl transition-shadow duration-300 p-9 flex flex-col "
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-28 h-28 object-contain"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-xl text py-1 sm:py-0 mb-4 text-center">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className=" text-l py-1 sm:py-0 leading-relaxed mb-4 grow text-justify">
                                {service.ShortDesc}
                            </p>

                            {/* Read More Button */}
                            <div className="flex  py-1 sm:py-0 justify-center">
                                <Link href={`/services/${index}`}>
                                <button className="cursor-pointer px-6 py-2.5 border-2 border-teal-700  rounded-md hover:bg-teal-700 hover:text-white transition-all duration-300 font-medium text-sm">
                                    Browse More
                                </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}