'use client';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react'; // Importing Arrow Icons
import { Button } from "@/components/ui/button";
import { content } from '../../../constant/index'; // Importing the constants
import Image from 'next/image';
import ZoomedImage from './ZoomImage';
import img from '../../../public/hero.webp';
import img1 from '../../../public/hero1.webp';
import img2 from '../../../public/hero2.webp';
import img3 from '../../../public/hero3.webp';

export default function Component() {
  const images = [img, img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Handle previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handle next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-white to-gray-100 ">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={images[currentImageIndex]} // Set background image based on current index
          alt="Hero Background"
          className="w-full h-full object-cover"
          quality={100}
          placeholder='blur'
          loading='lazy'
        />
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between h-full">
        {/* Left Side - Image Slider */}
        <div className="lg:w-1/2 w-full lg:h-full flex items-center justify-center py-10 lg:py-0 relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 lg:left-10 z-20 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <div className="relative w-[90%] h-[300px] lg:h-[600px] transition-transform duration-500 transform hover:scale-105">
            <ZoomedImage imgSrc={images[currentImageIndex]} />
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-4 lg:right-10 z-20 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full h-full lg:h-auto bg-[#FAF5F5] bg-opacity-80 p-8 md:p-16 lg:py-24 lg:pr-24 shadow-md flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-zinc-800 mb-6 leading-snug">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-lg text-zinc-600 mb-8 lg:mb-10">
            {content.description}
          </p>

          {/* Features List */}
          <ul className="space-y-3 mb-8">
            {content.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center transition-transform duration-300"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <span
                  className={`inline-block w-5 h-5 mr-3 rounded-full bg-zinc-300 transition-transform duration-300 ${
                    hoveredFeature === index ? 'scale-125 bg-primary' : ''
                  }`}
                />
                <span
                  className={`text-md text-zinc-700 transition-colors duration-300 ${
                    hoveredFeature === index ? 'text-zinc-900 font-semibold' : ''
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Call-to-action Button */}
          <Button className="self-start group flex items-center px-8 py-6 text-lg lg:text-sm bg-primary hover:text-black text-white border rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all">
            {content.buttonText}
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
