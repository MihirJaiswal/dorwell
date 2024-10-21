'use client';
import React, { useState } from 'react';
import { categories } from '../../../../constant'; 
import Header from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {
    Carousel,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    CarouselThumbsContainer,
    SliderMainItem,
    SliderThumbItem,
} from "@/components/ui/carousel-extended";
import Image from 'next/image';

// Lightbox Component
const Lightbox = ({ isOpen, onClose, imageSrc }: { isOpen: boolean; onClose: () => void; imageSrc: string }) => (
    <div
        className={`fixed inset-0 bg-black/80 flex justify-center items-center transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        onClick={onClose}
    >
        <span className="absolute top-6 right-6 text-white text-4xl font-bold cursor-pointer" onClick={onClose}>
            &times;
        </span>
        <Image src={imageSrc} alt="Lightbox" width={1000} height={1000} loading='lazy' className="rounded-lg shadow-lg" />
    </div>
);

// CategoryPage Component
const CategoryPage = ({ params }: { params: { categoryId: string } }) => {
    const categoryId = params.categoryId;
    const category = categories.find((cat) => cat.id === categoryId);

    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>('');

    const handleDownload = () => {
        if (category?.catalogUrl) {
            const link = document.createElement('a');
            link.href = category.catalogUrl;
            link.download = `${category.name}-catalog.pdf`;
            link.click();
        }
    };

    const openLightbox = (src: string) => {
        setSelectedImage(src);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage('');
    };

    return (
        <>
            <Header />

            <div className="max-w-7xl mx-auto px-6 py-10">
                {category ? (
                    <>
                        <div className="text-center mb-12">
                            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{category.name}</h1>
                            <p className="text-lg text-gray-600">{category.description}</p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 mb-16">
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={500}
                                loading='lazy'
                                height={500}
                                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            />

                            <div className="flex flex-col items-start space-y-6">
                                <h2 className="text-3xl font-semibold text-gray-800">Explore the Catalog</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {category.catalogImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                                            onClick={() => openLightbox(image)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Catalog ${index + 1}`}
                                                width={300}
                                                height={300}
                                                loading='lazy'
                                                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={handleDownload}
                                    className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-all"
                                >
                                    Download Full Catalog
                                </button>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Room Inspirations</h2>
                            <Carousel className='lg:flex flex-col items-start lg:w-1/2'>
                                <CarouselMainContainer className="h-full lg:h-[28rem] ">
                                    {category.roomImages.map((image, index) => (
                                        <SliderMainItem key={index} className="bg-transparent">
                                            <div className="rounded-xl overflow-hidden">
                                                <Image
                                                    src={image}
                                                    width={600}
                                                    height={600}
                                                    quality={100}
                                                    loading="lazy"
                                                    alt={`Room ${index + 1}`}
                                                    className="w-full h-full lg:h-[28rem] object-contain cursor-pointer"
                                                    onClick={() => openLightbox(image)}
                                                />
                                            </div>
                                        </SliderMainItem>
                                    ))}
                                </CarouselMainContainer>
                                <CarouselThumbsContainer>
                                    {category.roomImages.map((image, index) => (
                                        <SliderThumbItem key={index} index={index} className="bg-transparent">
                                            <div className="rounded-lg overflow-hidden">
                                                <Image
                                                    src={image}
                                                    width={100}
                                                    height={100}
                                                    loading='lazy'
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-16 h-16 object-cover"
                                                />
                                            </div>
                                        </SliderThumbItem>
                                    ))}
                                </CarouselThumbsContainer>
                                <CarouselNext className="top-1/3 -translate-y-1/3" />
                                <CarouselPrevious className="top-1/3 -translate-y-1/3" />
                            </Carousel>
                        </div>

                        <Lightbox isOpen={isLightboxOpen} onClose={closeLightbox} imageSrc={selectedImage} />
                    </>
                ) : (
                    <p className="text-center text-2xl mt-20 text-gray-500">Category not found!</p>
                )}
            </div>

            <Footer />
        </>
    );
};

export default CategoryPage;
