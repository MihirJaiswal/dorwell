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
    enter: (direction:any) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0.8, // Start with partial opacity
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction:any) => ({
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
    <div className="relative w-full lg:h-screen bg-gradient-to-b from-zinc-50 to-gray-100">
       <div className="absolute inset-0 opacity-40">
        <Image
          src={images[currentImageIndex]}
          alt="Hero Background"
          className="w-full h-full object-cover"
          quality={100}
          loading='lazy'
        />
      </div>
 
      <div className="relative z-10 border-b flex flex-col-reverse lg:flex-row items-cnter justify-between h-full">
        <div className="lg:w-1/2 border-t w-full lg:h-full flex items-center justify-center py-10 lg:py-0 relative">
          <button
            onClick={handlePrevImage}
            className="absolute left-4 lg:left-10 z-20 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <div className="relative w-[90%] h-[300px] lg:h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="absolute w-full h-full"
              >
                <ZoomedImage imgSrc={images[currentImageIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNextImage}
            className="absolute right-4 lg:right-10 z-20 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
       <HeroWord/>
      </div> 
    </div>
  );
}
