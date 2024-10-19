'use client'
import React, { useState } from 'react';
import { images } from '../../../constant';
// Lightbox Component
const Lightbox = ({ isOpen, onClose, imageSrc }: { isOpen: boolean; onClose: () => void; imageSrc: string }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <span className="absolute top-4 right-4 text-white text-3xl cursor-pointer" onClick={onClose}>&times;</span>
      <img src={imageSrc} alt="" className="lightbox-image max-w-full max-h-full" />
    </div>
  );
};

// Gallery Component
const Gallery: React.FC = () => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  // Image sources array


  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage('');
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">Our Gallery</h2>
          <div className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Step into a realm where art comes to life.
          </div>
        </div>
        <div className="gallery">
          <div className="flex flex-col mb-10">
            <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
              <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                <img
                  src={images[0]}
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full cursor-pointer"
                  onClick={() => openLightbox(images[0])}
                />
              </div>
              <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                <img
                  src={images[1]}
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full cursor-pointer"
                  onClick={() => openLightbox(images[1])}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              {images.slice(2).map((src, index) => (
                <div key={index} className="h-[277px] w-full rounded-3xl">
                  <img
                    src={src}
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full cursor-pointer"
                    onClick={() => openLightbox(src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Lightbox
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          imageSrc={selectedImage}
        />
      </div>
    </section>
  );
};

export default Gallery;
