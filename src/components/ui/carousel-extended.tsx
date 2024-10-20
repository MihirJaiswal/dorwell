"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { cn } from "../../lib/utils";
import type React from "react";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// Define types
type CarouselContextProps = {
  carouselOptions?: EmblaOptionsType;
  orientation?: "vertical" | "horizontal";
  plugins?: Parameters<typeof useEmblaCarousel>[1];
};

type DirectionOption = "ltr" | "rtl" | undefined;

type CarouselContextType = {
  emblaMainApi: ReturnType<typeof useEmblaCarousel>[1];
  mainRef: ReturnType<typeof useEmblaCarousel>[0];
  thumbsRef: ReturnType<typeof useEmblaCarousel>[0];
  scrollNext: () => void;
  scrollPrev: () => void;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  activeIndex: number;
  onThumbClick: (index: number) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  orientation: "vertical" | "horizontal";
  direction: DirectionOption;
} & CarouselContextProps;

// Create Carousel Context
const CarouselContext = createContext<CarouselContextType | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};

// Main Carousel Component
const Carousel = forwardRef<
  HTMLDivElement,
  CarouselContextProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    { carouselOptions, orientation = "horizontal", dir, plugins, children, className, ...props },
    ref
  ) => {
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
      {
        ...carouselOptions,
        axis: orientation === "vertical" ? "y" : "x",
        direction: carouselOptions?.direction ?? (dir as DirectionOption),
      },
      plugins
    );

    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
      {
        ...carouselOptions,
        axis: orientation === "vertical" ? "y" : "x",
        containScroll: "keepSnaps",
        dragFree: true,
        direction: carouselOptions?.direction ?? (dir as DirectionOption),
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollNext = useCallback(() => emblaMainApi?.scrollNext(), [emblaMainApi]);
    const scrollPrev = useCallback(() => emblaMainApi?.scrollPrev(), [emblaMainApi]);

    const onThumbClick = useCallback(
      (index: number) => emblaMainApi?.scrollTo(index),
      [emblaMainApi]
    );

    const onSelect = useCallback(() => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      const selected = emblaMainApi.selectedScrollSnap();
      setActiveIndex(selected);
      emblaThumbsApi.scrollTo(selected);
      setCanScrollPrev(emblaMainApi.canScrollPrev());
      setCanScrollNext(emblaMainApi.canScrollNext());
    }, [emblaMainApi, emblaThumbsApi]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!emblaMainApi) return;
        switch (event.key) {
          case "ArrowLeft":
            orientation === "horizontal" && scrollPrev();
            break;
          case "ArrowRight":
            orientation === "horizontal" && scrollNext();
            break;
          case "ArrowUp":
            orientation === "vertical" && scrollPrev();
            break;
          case "ArrowDown":
            orientation === "vertical" && scrollNext();
            break;
        }
      },
      [scrollNext, scrollPrev, emblaMainApi, orientation]
    );

    useEffect(() => {
      if (!emblaMainApi) return;
    
      emblaMainApi.on("select", onSelect);
    
      // Always return a valid cleanup function.
      return () => {
        emblaMainApi?.off("select", onSelect);
      };
    }, [emblaMainApi, onSelect]);
    


    const direction = carouselOptions?.direction ?? (dir as DirectionOption);

    return (
      <CarouselContext.Provider
        value={{
          emblaMainApi,
          mainRef: emblaMainRef,
          thumbsRef: emblaThumbsRef,
          scrollNext,
          scrollPrev,
          canScrollNext,
          canScrollPrev,
          activeIndex,
          onThumbClick,
          handleKeyDown,
          carouselOptions,
          direction,
          orientation,
        }}
      >
        <div
          {...props}
          ref={ref}
          tabIndex={0}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative grid w-full gap-2", className)}
          dir={direction}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";

// Navigation Buttons
const CarouselNext = () => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button onClick={scrollNext} disabled={!canScrollNext}>
      Next
    </Button>
  );
};

const CarouselPrevious = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button onClick={scrollPrev} disabled={!canScrollPrev}>
      Previous
    </Button>
  );
};

// Main Container for Carousel Items
const CarouselMainContainer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { mainRef, orientation } = useCarousel();
    return (
      <div {...props} ref={mainRef} className="overflow-hidden">
        <div ref={ref} className={cn(orientation === "vertical" ? "flex-col" : "flex", className)}>
          {children}
        </div>
      </div>
    );
  }
);

CarouselMainContainer.displayName = "CarouselMainContainer";

// Thumbs Container
const CarouselThumbsContainer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { thumbsRef, orientation } = useCarousel();
    return (
      <div {...props} ref={thumbsRef} className="overflow-hidden">
        <div ref={ref} className={cn(orientation === "vertical" ? "flex-col" : "flex", className)}>
          {children}
        </div>
      </div>
    );
  }
);

CarouselThumbsContainer.displayName = "CarouselThumbsContainer";

// Carousel Indicators
const CarouselIndicator = () => {
  const { activeIndex } = useCarousel();
  return <div>Active Slide: {activeIndex + 1}</div>;
};

// Individual Carousel Items
const SliderMainItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div {...props} ref={ref} className={cn("min-w-0 shrink-0 grow-0 basis-full p-1", className)}>
      {children}
    </div>
  )
);

SliderMainItem.displayName = "SliderMainItem";

// Thumbnail Items
const SliderThumbItem = forwardRef<
  HTMLDivElement,
  { index: number } & React.HTMLAttributes<HTMLDivElement>
>(({ index, className, children, ...props }, ref) => {
  const { activeIndex, onThumbClick } = useCarousel();
  const isActive = activeIndex === index;
  return (
    <div
      {...props}
      ref={ref}
      onClick={() => onThumbClick(index)}
      className={cn("p-1", className, isActive ? "opacity-100" : "opacity-40")}
    >
      {children}
    </div>
  );
});

SliderThumbItem.displayName = "SliderThumbItem";

// Exports
export {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
  useCarousel,
};
