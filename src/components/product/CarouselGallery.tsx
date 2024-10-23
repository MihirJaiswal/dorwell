// components/product/CarouselGallery.tsx
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from '@/components/ui/carousel-extended';
import Image from 'next/image';

interface CarouselGalleryProps {
  images: string[];
}

const CarouselGallery = ({ images }: CarouselGalleryProps) => (
  <Carousel className="lg:flex flex-col items-start lg:w-1/2">
    <CarouselMainContainer className="h-full lg:h-[28rem]">
      {images.map((image, index) => (
        <SliderMainItem key={index} className="bg-transparent">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={image}
              width={600}
              height={600}
              quality={100}
              alt={`Room ${index + 1}`}
              className="w-full h-full lg:h-[28rem] object-contain cursor-pointer"
            />
          </div>
        </SliderMainItem>
      ))}
    </CarouselMainContainer>
    <CarouselThumbsContainer>
      {images.map((image, index) => (
        <SliderThumbItem key={index} index={index} className="bg-transparent">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={image}
              width={100}
              height={100}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover"
            />
          </div>
        </SliderThumbItem>
      ))}
    </CarouselThumbsContainer>
  </Carousel>
);

export default CarouselGallery;
