'use client';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ZoomedImage from './ZoomImage';
import { StaticImageData } from 'next/image';

// Define the type for images prop
interface ImageCarouselProps {
  images: (string | StaticImageData)[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  };

  return (
    <div className="lg:w-1/2 w-full h-[300px] lg:h-[500px] relative">
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
  );
}
