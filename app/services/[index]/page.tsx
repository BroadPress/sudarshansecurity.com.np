'use client'
import Link from 'next/link';
import Ribbon from '../../../components/Ribbon';
import { services } from '../../data/serviceData';
import {useSearchParams } from "next/navigation";

const ServiceInfo = () => {
    const searchParams = useSearchParams();  

    // Ensure index is always valid
    const indexParam = searchParams?.get("index"); 
    const index = indexParam ? parseInt(indexParam) : 0; // fallback 0 if not provided
    const service = services[index];
    const otherServices = services.filter((_, i) => i !== index);


    const relatedServices = otherServices
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

    // Stop crash if no service found
    if (!service) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-red-600">Service not found</h2>
                <p className="text-gray-600 mt-2">Please go back and select a valid service.</p>
            </div>
        );
    }

    return (
        <div>
            <Ribbon name={service.title} showfont={false}/>
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Display content here */}
                <div className='max-w-6xl mx-auto h-full'>
                   <img src='/images/services/2.jpg' alt=""  className='rounded-xl h-full w-full'/>
                </div>
                <h1 className='text-3xl text text-center mt-8'>{service.title}</h1>
                <p className='py-8 text-[17px]'>{service.Desc}</p>

                <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Related Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedServices.map((item, i) => (
                        <div key={i} className=" flex flex-col space-y-2  rounded-lg max-w-[300px] hover:scale-[1.02] transition-all">
                            <img src='/images/services/2.jpg' className=' h-full  rounded-xl' alt="" />
                            <h3 className="text-xl font-semibold mb-2 pt-1">{item.title}</h3>
                            <p className="card2 text-sm mb-4 line-clamp-3 pt-2">
                                {item.Desc}
                            </p>
                            <Link href={`/services/${services.indexOf(item)}`}>
                            <button 
                                className="px-4 py-2 cursor-pointer border-2 mt-2 border-teal-700 rounded-md hover:bg-teal-700 hover:text-white transition-all duration-300 font-medium text-sm"
                            >
                                Browse More
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default ServiceInfo;
