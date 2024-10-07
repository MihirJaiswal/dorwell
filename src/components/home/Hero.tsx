'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { content } from '../../../constant/index'; // Importing the constants
import Image from 'next/image';
import img from '../../../public/hero.png';
import ZoomedImage from './ZoomImage';

export default function Component() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-white to-gray-100 ">
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={img}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between h-full">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full lg:h-full flex items-center justify-center py-10 lg:py-0">
          <div className="relative w-[90%] h-[300px] lg:h-[600px] transition-transform duration-500 transform hover:scale-105">
            <ZoomedImage imgSrc={img} />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full h-full lg:h-auto bg-white bg-opacity-80 p-8 md:p-16 lg:py-24 lg:pr-24 shadow-md flex flex-col justify-center">
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
          <Button className="self-start group flex items-center px-8 py-6 text-lg lg:text-sm bg-white text-black border rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all">
            {content.buttonText}
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
