'use client';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img2 from '../../../public/hero.webp';
import img1 from '../../../public/hero1.webp';
import img from '../../../public/hero2.webp';
import img3 from '../../../public/hero3.webp';
import ZoomedImage from './ZoomImage';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export default function HeroSection() {
  const images = [img, img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isScrolled] = useState(false);

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
      opacity: 0, // Start with zero opacity
    }),
    center: {
      x: 0,
      opacity: 1, // Fully visible in the center
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0, // Fade out while moving
    }),
  };

  const transition = {
    type: 'tween', // Change to 'tween' for smoother transitions
    ease: 'easeInOut', // Use easeInOut for smoother movement
    duration: 0.5, // Adjust duration for smoother effect
  };

  return (
    <div className="relative w-full mt-12 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2, delay: 0.1 }}
  className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 flex flex-col justify-center px-8"
>
<h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
        <span className="inline-block">Elevate 
            <span className="relative whitespace-nowrap text-red-600">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-red-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative"> your</span></span>
        </span>
        <span className="inline-block">Space</span>
    </h1>
  <p className="mt-4 sm:mt-6 text-base md:text-xl text-gray-800 max-w-xl mx-auto lg:mx-0">
    Elevate your space with our premium, custom-crafted doors. From classic designs to modern innovations, we are redefining entrances one door at a time.
  </p>
  <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start space-x-4">
    <Button 
       
      className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white transition duration-300 ease-in-out transform hover:scale-105">
      Explore Collection
    </Button>
    <Button 
      variant="outline" 
      className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:scale-105">
      Custom Design
    </Button>
  </div>
  <div className="flex -space-x-2 my-6">
                <Image
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green Avatar"
                />
                <Image
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos Avatar"
                />
                <Image 
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                    alt="Sofia McGuire Avatar"
                />
                <Image  
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                    alt="Thomas Lean Avatar"
                />
            </div>
            <a href="#" className="flex  text-gray-700 mb-4 hover:text-gray-900 transition duration-200">
                <span className="text-sm">
                    Rated Best Over <span className="font-bold">15.7k</span> Reviews
                </span>
            </a>
</motion.div>



        <div className="lg:w-1/2 w-full h-[300px] lg:h-[500px] relative">
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden"
            initial={{ rotateY: -15, rotateX: 15 }}
            animate={{ rotateY: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="absolute inset-0"
              >
                <ZoomedImage imgSrc={images[currentImageIndex]} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 text-indigo-600 p-3 rounded-full shadow-lg hover:bg-white transition duration-200 ease-in-out"
            aria-label="Previous Image"
          >
            <ArrowLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 text-indigo-600 p-3 rounded-full shadow-lg hover:bg-white transition duration-200 ease-in-out"
            aria-label="Next Image"
          >
            <ArrowRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? 20 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-indigo-600 flex items-center"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Scroll for more
          <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
        </Button>
      </motion.div>
    </div>
  );
}