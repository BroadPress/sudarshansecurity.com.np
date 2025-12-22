'use client'

import { useState } from 'react'
import Lightbox from '../../../components/Lightbox';
import { useParams, useSearchParams } from "next/navigation";
import FontSizeChanger from '../../../components/FontSizeChanger';
import Link from 'next/link';

const Album = () => {
    const searchParams = useSearchParams();

    const count = searchParams.get("count");
    const title = searchParams.get("title");
    const date = searchParams.get("date");
    const place = searchParams.get("place");

    const [lightbox,setLightbox] = useState(false);
    const [index, setIndex] = useState<number | null>(null);
    type ImageItem = {
        id: number;
        count: number;
        img: string;
    };

    const imageCount = count ? parseInt(count) : 0;

    const images: ImageItem[] = Array.from({ length: imageCount }, (_, i) => ({
        id: i,
        count: i + 1,
        img: "/images/gallery/1.jpg"
    }));
  return (
        <div>
            {/* Header */}
            <div className='bg-teal-800 text-white'>
                <div className="max-w-7xl mx-auto flex justify-between items-center py-8 px-4 md:px-8 mb-8 w-full">
                    <div className=" px-4 md:px-8 ">
                        <h1 className="text-[28px] sm:text-4xl">{title}</h1>
                        <p className="flex items-center pt-2 gap-2 text-md text-gray-500 mt-1"> {/*  Tight spacing */}
                            <span className='text-gray-300'>📅 {date}</span>
                        </p>
                        <p className="text-gray-300">📌 {place}</p>
                    </div>
                    <div>
                    <FontSizeChanger showFont={false}/>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl pl-4 mx-auto'>
                <Link href="/gallery">
                <button className='bg-teal-800 ml-1 cursor-pointer text-white px-6 rounded-md text-xl py-1'>Back</button>
                </Link>
            </div>
            {/* Gallery Grid */}
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {images.map((item,id)=>(
                        <div
                            key={item.id}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-80 w-full overflow-hidden"> {/*  Increased height */}
                                <img
                                    onClick={()=>{setLightbox(true);setIndex(id)}}
                                    src={item.img}
                                    alt={String(title)}
                                    className="w-full cursor-pointer h-full object-cover rounded-lg" // Image fully covers
                                />
                                {/* Photo Count Badge */}
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                    <span className="text-sm font-semibold text-gray-700">{item.count}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lightbox &&
            <Lightbox setIndex={setIndex} index={index} setLightbox={setLightbox} lightbox={lightbox} data={images}/>
            }        
        </div>
  )
}

export default Album