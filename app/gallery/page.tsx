// import Ribbon from '../../components/Ribbon';
// import Image from 'next/image';

// type GalleryItem = {
//   id: number;
//   image: string;
//   alt?: string;
// };

// const galleryItems: GalleryItem[] = [
//   { id: 1, image: '/images/gallery/0FU5710.jpg' },
//   { id: 2, image: '/images/gallery/0vy8CTW.jpg' },
//   { id: 3, image: '/images/gallery/2XnPNpC.jpg' },
//   { id: 4, image: '/images/gallery/2XnPNpC.jpg' },
//   { id: 5, image: '/images/gallery/4ETIATp.jpg' },
//   { id: 7, image: '/images/gallery/4rKnBib.jpg' },
//   { id: 9, image: '/images/gallery/5tXRyOn.jpg' },
//   { id: 10, image: '/images/gallery/6ZurGOx.jpg' },
//   { id: 11, image: '/images/gallery/07EjLiv.jpg' },
//   { id: 12, image: '/images/gallery/7rf9d43.jpg' },
//   { id: 13, image: '/images/gallery/541epzx.jpg' },
//   { id: 14, image: '/images/gallery/bbSKRVo.jpg' },
//   { id: 15, image: '/images/gallery/BkuI9Ta.jpg' },
//   { id: 16, image: '/images/gallery/BuqMSU9.jpg' },
//   { id: 17, image: '/images/gallery/d0HsMEd.jpg' },
//   { id: 18, image: '/images/gallery/DLht5gE.jpg' },
//   { id: 19, image: '/images/gallery/E5bkr5B.jpg' },
//   { id: 20, image: '/images/gallery/GomFdNw.jpg' },
//   { id: 21, image: '/images/gallery/hFEcDwO.jpg' },
//   { id: 22, image: '/images/gallery/hpTYblh.jpg' },
//   { id: 23, image: '/images/gallery/jh0PdOt.jpg' },
//   { id: 24, image: '/images/gallery/JmpBfKR.jpg' },
//   { id: 25, image: '/images/gallery/Jr2MPBU.jpg' },
//   { id: 26, image: '/images/gallery/L6zRl4W.jpg' },
//   { id: 27, image: '/images/gallery/LUrlWEs.jpg' },
//   { id: 28, image: '/images/gallery/MFzDoH8.jpg' },
//   { id: 29, image: '/images/gallery/mRl3YQI.jpg' },
//   { id: 30, image: '/images/gallery/MY59Oy9.jpg' },
//   { id: 31, image: '/images/gallery/nH0k3Bq.jpg' },
//   { id: 32, image: '/images/gallery/NrwSrRc.jpg' },
//   { id: 33, image: '/images/gallery/OG7ZZs1.jpg' },
//   { id: 34, image: '/images/gallery/PzfVsmq.jpg' },
//   { id: 35, image: '/images/gallery/RaxiuAE.jpg' },
//   { id: 36, image: '/images/gallery/sudarshan1.jpeg' },
//   { id: 37, image: '/images/gallery/sudarshan2.jpeg' },
//   { id: 38, image: '/images/gallery/sudarshan3.jpeg' },
//   { id: 39, image: '/images/gallery/sudarshan4.jpeg' },
//   { id: 40, image: '/images/gallery/sudarshan5.jpeg' },
//   { id: 41, image: '/images/gallery/sudarshan6.jpeg' },
//   { id: 42, image: '/images/gallery/sudarshan7.jpeg' },
//   { id: 43, image: '/images/gallery/sudarshan8.jpeg' },
//   { id: 44, image: '/images/gallery/sudarshan9.jpeg' },
//   { id: 45, image: '/images/gallery/sudarshan10.jpeg' },
// ];

// export default function Gallery() {
//   return (
//     <div className="w-full">
//       {/* Header */}
//       <Ribbon name="Gallery" showfont={false} />

//       {/* Gallery Grid */}
//       <div className="px-5 py-10 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {galleryItems.map((item) => (
//             <div
//               key={item.id}
//               className="rounded-lg shadow-md overflow-hidden w-full max-w-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
//             >
//               {/* Image */}
//               <div className="relative h-80 w-full overflow-hidden">
//                 <Image
//                   width={600}
//                   height={800}
//                   src={item.image}
//                   alt={item.alt ?? `Gallery image ${item.id}`}
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useEffect, useMemo, useState } from 'react';
import Ribbon from '../../components/Ribbon';
import Image from 'next/image';

type GalleryItem = {
  id: number;
  image: string;
  alt?: string;
};

const galleryItems: GalleryItem[] = [
  { id: 1, image: '/images/gallery/0FU5710.jpg' },
  { id: 2, image: '/images/gallery/0vy8CTW.jpg' },
  { id: 3, image: '/images/gallery/2XnPNpC.jpg' },
  { id: 4, image: '/images/gallery/2XnPNpC.jpg' },
  { id: 5, image: '/images/gallery/4ETIATp.jpg' },
  { id: 7, image: '/images/gallery/4rKnBib.jpg' },
  { id: 9, image: '/images/gallery/5tXRyOn.jpg' },
  { id: 10, image: '/images/gallery/6ZurGOx.jpg' },
  { id: 11, image: '/images/gallery/07EjLiv.jpg' },
  { id: 12, image: '/images/gallery/7rf9d43.jpg' },
  { id: 13, image: '/images/gallery/541epzx.jpg' },
  { id: 14, image: '/images/gallery/bbSKRVo.jpg' },
  { id: 15, image: '/images/gallery/BkuI9Ta.jpg' },
  { id: 16, image: '/images/gallery/BuqMSU9.jpg' },
  { id: 17, image: '/images/gallery/d0HsMEd.jpg' },
  { id: 18, image: '/images/gallery/DLht5gE.jpg' },
  { id: 19, image: '/images/gallery/E5bkr5B.jpg' },
  { id: 20, image: '/images/gallery/GomFdNw.jpg' },
  { id: 21, image: '/images/gallery/hFEcDwO.jpg' },
  { id: 22, image: '/images/gallery/hpTYblh.jpg' },
  { id: 23, image: '/images/gallery/jh0PdOt.jpg' },
  { id: 24, image: '/images/gallery/JmpBfKR.jpg' },
  { id: 25, image: '/images/gallery/Jr2MPBU.jpg' },
  { id: 26, image: '/images/gallery/L6zRl4W.jpg' },
  { id: 27, image: '/images/gallery/LUrlWEs.jpg' },
  { id: 28, image: '/images/gallery/MFzDoH8.jpg' },
  { id: 29, image: '/images/gallery/mRl3YQI.jpg' },
  { id: 30, image: '/images/gallery/MY59Oy9.jpg' },
  { id: 31, image: '/images/gallery/nH0k3Bq.jpg' },
  { id: 32, image: '/images/gallery/NrwSrRc.jpg' },
  { id: 33, image: '/images/gallery/OG7ZZs1.jpg' },
  { id: 34, image: '/images/gallery/PzfVsmq.jpg' },
  { id: 35, image: '/images/gallery/RaxiuAE.jpg' },
  { id: 36, image: '/images/gallery/sudarshan1.jpeg' },
  { id: 37, image: '/images/gallery/sudarshan2.jpeg' },
  { id: 38, image: '/images/gallery/sudarshan3.jpeg' },
  { id: 39, image: '/images/gallery/sudarshan4.jpeg' },
  { id: 40, image: '/images/gallery/sudarshan5.jpeg' },
  { id: 41, image: '/images/gallery/sudarshan6.jpeg' },
  { id: 42, image: '/images/gallery/sudarshan7.jpeg' },
  { id: 43, image: '/images/gallery/sudarshan8.jpeg' },
  { id: 44, image: '/images/gallery/sudarshan9.jpeg' },
  { id: 45, image: '/images/gallery/sudarshan10.jpeg' },
];

export default function Gallery() {
  const items = useMemo(() => galleryItems, []);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const close = () => setActiveIndex(null);

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  };

  // ESC + Arrow navigation + lock scroll
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex]);

  return (
    <div className="w-full">
      {/* Header */}
      <Ribbon name="Gallery" showfont={false} />

      {/* Gallery Grid */}
      <div className="px-5 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="rounded-lg shadow-md overflow-hidden w-full max-w-md hover:shadow-lg transition-shadow duration-300 flex flex-col text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
              aria-label={`Open image ${item.id}`}
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  width={600}
                  height={800}
                  src={item.image}
                  alt={item.alt ?? `Gallery image ${item.id}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            // close when clicking the dark backdrop (not the image area)
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev / Next */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image container */}
          <div className="relative w-full max-w-6xl h-[75vh] md:h-[85vh]">
            <Image
              src={items[activeIndex].image}
              alt={items[activeIndex].alt ?? `Gallery image ${items[activeIndex].id}`}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-contain select-none"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
