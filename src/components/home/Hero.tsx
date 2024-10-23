import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';
import img2 from '../../../public/hero.webp';
import img1 from '../../../public/hero1.webp';
import img from '../../../public/hero2.webp';
import img3 from '../../../public/hero3.webp';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const images = [img, img1, img2, img3];

  return (
    <div className="relative w-full mt-12 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 flex flex-col justify-center px-8"
        >
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            <span className="inline-block">Elevate 
              <span className="relative whitespace-nowrap text-red-600">
              <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-red-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371 0.916 C 176.758 -1.162 125.687 2.78 100.643 9.08 C 75.599 15.38 50.555 29.56 36.235 35.37 Z" />
                </svg>

                <span className="relative"> your</span>
              </span>
            </span>
            <span className="inline-block">Space</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base md:text-xl text-gray-800 max-w-xl mx-auto lg:mx-0">
            Elevate your space with our premium, custom-crafted doors. From classic designs to modern innovations, we are redefining entrances one door at a time.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start space-x-4">
            <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white transition duration-300 ease-in-out transform hover:scale-105">
              Explore Collection
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Custom Design
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start -space-x-2 my-6">
            {/* Avatar Images */}
            {['bonnie-green', 'jese-leos', 'sofia-mcguire', 'thomas-lean'].map((name) => (
              <Image
                key={name}
                height={100}
                width={100}
                loading="lazy"
                className="w-10 h-10 rounded-full border-2 border-white shadow"
                src={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/${name}.png`}
                alt={`${name} Avatar`}
              />
            ))}
          </div>

          <a
            href="#"
            className="flex justify-center lg:justify-start text-gray-700 mb-4 hover:text-gray-900 transition duration-200"
          >
            <span className="text-sm">
              Rated Best Over <span className="font-bold">15.7k</span> Reviews
            </span>
          </a>
        </div>
        {/* Image Carousel */}
        <ImageCarousel images={images} />
      </div>
      <div className="flex items-center justify-center">
      <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-indigo-600 flex items-center"
        >
          Scroll for more
          <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
        </Button>
      </div>
    </div>
  );
}
