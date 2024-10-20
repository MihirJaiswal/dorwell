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

export function Process() {
  return (
    <div className="relative border-t border-b border-gray-200 py-12 bg-gray-50"> {/* Add padding and background color */}
      <h2 className="max-w-7xl mx-auto text-4xl font-bold text-gray-900 mt-10 mb-4 relative z-10 text-center"> {/* Center align title */}
        Our Manufacturing Process
      </h2>
      <p className="max-w-6xl mx-auto px-16 text-gray-600 text-sm md:text-base text-justify font-normal leading-relaxed lg:text-start md:text-center mb-10">
      Our Manufacturing Process ensures that every stage, from design to production, is carefully executed for superior quality and innovation.
      </p>
      <Carousel orientation="vertical" className="flex max-w-7xl mx-auto items-center justify-center gap-4 relative z-10"> {/* Adjusted gap */}
        <div className="relative basis-3/4">
          <CarouselMainContainer className="h-[28rem]">
            {craftSteps.map((step, index) => (
              <SliderMainItem
                key={index}
                className="flex h-full items-center justify-center rounded-lg border border-gray-300 shadow-md relative overflow-hidden transition-transform duration-300 transform hover:scale-105" // Added shadow and hover scale effect
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
        <CarouselThumbsContainer className="h-[28rem] basis-1/4">
          {craftSteps.map((_, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="rounded-md bg-transparent"
            >
              <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white transition-colors duration-300 hover:bg-gray-200 shadow-md"> 
                <span className="text-gray-800 font-medium">Process {index + 1}</span>
              </span>
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </div>
  );
}
