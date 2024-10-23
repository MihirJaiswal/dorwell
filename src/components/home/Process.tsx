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
      className="flex h-full items-center justify-center rounded-lg border border-gray-300 shadow-md relative overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <Image
        src={craftSteps[index].image}
        alt={craftSteps[index].title}
        quality={100}
        loading="lazy"
        className="w-full h-full object-cover"
        layout="fill"
      />
      <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-70 rounded-tl-md rounded-br-md">
        <h2 className="text-lg font-semibold text-white">
          {craftSteps[index].title}
        </h2>
        <p className="text-sm text-gray-300">
          {craftSteps[index].description}
        </p>
      </div>
    </SliderMainItem>
  );

  const renderThumbnails = () =>
    craftSteps.map((_, index) => (
      <SliderThumbItem key={index} index={index} className="rounded-md bg-transparent">
        <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-red-600 transition-colors duration-300 hover:bg-gray-200 shadow-md">
          <span className="text-white font-medium p-2">Step {index + 1}</span>
        </span>
      </SliderThumbItem>
    ));

  return (
    <div className="relative border-t border-b border-gray-400 py-12 ">
      <h2 className="max-w-7xl mx-auto text-4xl font-bold text-gray-900 mt-10 mb-4 text-center">
        Our Manufacturing Process
      </h2>
      <p className="max-w-6xl mx-auto px-6 text-gray-600 text-sm md:text-base text-justify font-normal leading-relaxed lg:text-start md:text-center mb-10">
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
