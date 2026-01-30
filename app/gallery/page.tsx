import React from 'react';
import Ribbon from '../../components/Ribbon';
import Link from 'next/link';
import Image from 'next/image';

function Gallery() {
    const galleryItems = [
        { id: 1, image: '/images/gallery/0FU5710.jpg',  },
        { id: 2, image: '/images/gallery/0vy8CTW.jpg',},
        { id: 3, image: '/images/gallery/2XnPNpC.jpg', },
        { id: 4, image: '/images/gallery/2XnPNpC.jpg',},
        { id: 5, image: '/images/gallery/4ETIATp.jpg',},
        { id: 7, image: '/images/gallery/4rKnBib.jpg',},
        { id: 9, image: '/images/gallery/5tXRyOn.jpg',},
        { id: 10, image: '/images/gallery/6ZurGOx.jpg',},
        { id: 11, image: '/images/gallery/07EjLiv.jpg',},
        { id: 12, image: '/images/gallery/7rf9d43.jpg', },
        { id: 13, image: '/images/gallery/541epzx.jpg', },
        { id: 14, image: '/images/gallery/bbSKRVo.jpg', },
        { id: 15, image: '/images/gallery/BkuI9Ta.jpg', },
        { id: 16, image: '/images/gallery/BuqMSU9.jpg', },
        { id: 17, image: '/images/gallery/d0HsMEd.jpg', },
        { id: 18, image: '/images/gallery/DLht5gE.jpg', },
        { id: 19, image: '/images/gallery/E5bkr5B.jpg', },
        { id: 20, image: '/images/gallery/GomFdNw.jpg', },
        { id: 21, image: '/images/gallery/hFEcDwO.jpg', },
        { id: 22, image: '/images/gallery/hpTYblh.jpg', },

        { id: 23, image: '/images/gallery/jh0PdOt.jpg', },
        { id: 24, image: '/images/gallery/JmpBfKR.jpg', },
        { id: 25, image: '/images/gallery/Jr2MPBU.jpg', },
        { id: 26, image: '/images/gallery/L6zRl4W.jpg', },
        { id: 27, image: '/images/gallery/LUrlWEs.jpg', },
        { id: 28, image: '/images/gallery/MFzDoH8.jpg', },
        { id: 29, image: '/images/gallery/mRl3YQI.jpg', },
        { id: 30, image: '/images/gallery/MY59Oy9.jpg', },
        { id: 31, image: '/images/gallery/nH0k3Bq.jpg', },
        { id: 32, image: '/images/gallery/NrwSrRc.jpg', },
        { id: 33, image: '/images/gallery/OG7ZZs1.jpg', },
        { id: 34, image: '/images/gallery/PzfVsmq.jpg', },
        { id: 35, image: '/images/gallery/RaxiuAE.jpg', },
        { id: 36, image: '/images/gallery/sudarshan1.jpeg', },
        { id: 37, image: '/images/gallery/sudarshan2.jpeg', },
        { id: 38, image: '/images/gallery/sudarshan3.jpeg', },
        { id: 39, image: '/images/gallery/sudarshan4.jpeg', },
        { id: 40, image: '/images/gallery/sudarshan5.jpeg', },
        { id: 41, image: '/images/gallery/sudarshan6.jpeg', },
        { id: 42, image: '/images/gallery/sudarshan7.jpeg', },
        { id: 43, image: '/images/gallery/sudarshan8.jpeg', },
        { id: 44, image: '/images/gallery/sudarshan9.jpeg', },
        { id: 45, image: '/images/gallery/sudarshan10.jpeg', },





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
                                {/* Photo Count Badge
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                    <span className="text-sm font-semibold text-gray-700">📷 {item.count}</span>
                                </div> */}
                            </div>

                            {/* Card Content */}
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;