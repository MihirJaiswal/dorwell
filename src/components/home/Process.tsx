'use client';

import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel-extended";
import Image from "next/image";
import { craftSteps } from "../../../constant";
import img from '../../../public/img2.png'

export function Process() {
  return (
    <div className="relative"> {/* Set the parent div to relative */}
      <div className="absolute inset-0 z-0 opacity-30"> {/* Use z-0 to place it behind the text */}
        <Image
          src={img}
          alt="Hero Background"
          className="w-full h-full object-cover"
          quality={100}
        />
      </div>
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mt-10 mb-2 relative z-10"> {/* Add z-10 to keep the title above the background */}
        What We Offer
      </h2>
      <Carousel orientation="vertical" className="flex items-center justify-center gap-2 my-12 relative z-10"> {/* Add relative z-10 to the carousel */}
        <div className="relative basis-3/4">
          <CarouselMainContainer className="h-96">
            {craftSteps.map((step, index) => (
              <SliderMainItem
                key={index}
                className="flex h-full items-center justify-center rounded-md border border-muted relative overflow-hidden" // Adjusted styles
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  quality={100}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  layout="fill" // Ensures the image fills the container
                />
                <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-70 rounded-tl-md rounded-br-md">
                  <h2 className="text-lg font-semibold text-white">{step.title}</h2>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </SliderMainItem>
            ))}
          </CarouselMainContainer>
        </div>
        <CarouselThumbsContainer className="h-60 basis-1/4">
          {craftSteps.map((_, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="rounded-md bg-transparent"
            >
              <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-md border border-muted bg-background transition-colors duration-300 hover:bg-gray-200">
                Slide {index + 1}
              </span>
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </div>
  );
}
