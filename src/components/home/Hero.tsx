'use client';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img2 from '../../../public/hero.webp';
import img1 from '../../../public/hero1.webp';
import img from '../../../public/hero2.webp';
import img3 from '../../../public/hero3.webp';
import ZoomedImage from './ZoomImage';
import Image from 'next/image';
import HeroWord from './Heroword';

export default function Component() {
  const images = [img, img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  const handlePrevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0.8, // Start with partial opacity
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0.8, // Keep partial opacity during exit
    }),
  };

  const transition = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
    duration: 0.6, // Adjust duration for smoother effect
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4"> {/* Added background and padding */}
      <div className="relative z-10  flex flex-col-reverse lg:flex-row items-center justify-between h-full">
        <div className="lg:w-1/2 w-full lg:h-full flex items-center justify-center py-10 lg:py-0 relative">
          <button
            onClick={handlePrevImage}
            className="absolute left-4 lg:left-10 z-20 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition duration-200 ease-in-out" 
            aria-label="Previous Image"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <div className="w-[90%] h-[300px] lg:h-[530px] mt-12 overflow-hidden rounded-lg">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="absolute w-full h-full rounded-lg overflow-hidden" // Added rounded corners
              >
                <ZoomedImage imgSrc={images[currentImageIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNextImage}
            className="absolute right-4 lg:right-10 z-20 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition duration-200 ease-in-out" 
            aria-label="Next Image"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div> 
    </div>
  );
}
