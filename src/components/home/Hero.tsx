'use client';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { content } from '../../../constant/index'; // Importing the constants
import Image from 'next/image';
import ZoomedImage from './ZoomImage';
import img from '../../../public/hero.png'

export default function Component() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Left side - Image */}
      <div className="lg:w-1/2 h-1/3 lg:h-full relative overflow-hidden flex items-center justify-center">
        <ZoomedImage imgSrc={img} />
      </div>

      {/* Right side - Content */}
      <div className="lg:w-1/2 h-full lg:h-full bg-[#FAF5F5] p-6 md:p-10 lg:p-16 flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-800 mb-4 sm:mb-6 lg:mb-8 leading-tight">
          {content.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-lg text-zinc-600 mb-6 sm:mb-8 lg:mb-10">
          {content.description}
        </p>
        
        {/* Features list */}
        <ul className="mb-6 lg:mb-10 space-y-4">
          {content.features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-center text-zinc-700 transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <Check 
                className={`mr-3 h-6 w-6 transition-transform duration-300 ease-in-out ${
                  hoveredFeature === index ? 'text-primary scale-125' : 'text-zinc-400'
                }`}
              />
              <span className={`text-sm sm:text-base lg:text-md transition-colors duration-300 ${
                hoveredFeature === index ? 'font-semibold text-zinc-900' : ''
              }`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Call-to-action Button */}
        <Button className="self-start group flex items-center px-6 py-3 text-lg lg:text-xl transition-transform duration-300 hover:scale-105 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl focus:outline-none">
          {content.buttonText}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
