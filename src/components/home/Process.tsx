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
  const renderCarouselContent = (index: number) => (
    <SliderMainItem
      key={index}
      className="flex h-full w-full items-center justify-center rounded-lg border border-gray-500 shadow-md relative overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-red-500"
    >
      <Image
        src={craftSteps[index].image}
        alt={`Image depicting ${craftSteps[index].title}`} // Accessible alt text
        quality={100}
        loading="lazy"
        className="w-full h-full object-cover scale-105 "
        width={1000}
        height={1000}
      />
      <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-75 rounded-tl-md rounded-br-md">
        <h2 className="text-lg font-semibold text-white">
          {craftSteps[index].title}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          {craftSteps[index].description}
        </p>
      </div>
    </SliderMainItem>
  );

  const renderThumbnails = () =>
    craftSteps.map((_, index) => (
      <SliderThumbItem key={index} index={index} className="rounded-md bg-transparent">
        <span
          className="flex h-full w-full cursor-pointer items-center justify-center rounded-md border border-gray-950 bg-black transition-colors duration-300 shadow-md focus:ring-2 focus:ring-gray-900"
          tabIndex={0} // Ensure keyboard accessibility
          aria-label={`Go to step ${index + 1}`}
        >
          <span className="text-white font-medium p-2 bg-black">Step {index + 1}</span>
        </span>
      </SliderThumbItem>
    ));

  return (
    <div className="relative border-t border-b border-gray-500 py-12">
      <h2 className="max-w-7xl mx-auto text-4xl font-bold text-gray-900 mt-10 mb-4 text-center">
        Our Manufacturing Process
      </h2>
      <p className="max-w-6xl mx-auto px-6 text-gray-700 text-sm md:text-base text-justify font-normal leading-relaxed lg:text-start md:text-center mb-10">
        Our Manufacturing Process ensures that every stage, from design to production, 
        is carefully executed for superior quality and innovation.
      </p>

      {/* Desktop Carousel */}
      <Carousel
        orientation="vertical"
        className="hidden md:flex max-w-7xl mx-auto items-center justify-center gap-4"
      >
        <div className="relative basis-3/4">
          <CarouselMainContainer className="h-[28rem]">
            {craftSteps.map((_, index) => renderCarouselContent(index))}
          </CarouselMainContainer>
        </div>
        <CarouselThumbsContainer className="h-[28rem] basis-1/4">
          {renderThumbnails()}
        </CarouselThumbsContainer>
      </Carousel>

      {/* Mobile Carousel */}
      <Carousel
        orientation="horizontal"
        className="md:hidden max-w-7xl px-4 mx-auto items-center justify-center gap-4"
      >
        <div className="relative basis-3/4">
          <CarouselMainContainer className="h-[28rem]">
            {craftSteps.map((_, index) => renderCarouselContent(index))}
          </CarouselMainContainer>
        </div>
        <CarouselThumbsContainer className="basis-1/4">
          {renderThumbnails()}
        </CarouselThumbsContainer>
      </Carousel>
    </div>
  );
}
