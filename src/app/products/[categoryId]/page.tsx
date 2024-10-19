'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { categories } from '../../../../constant'; // Ensure this is the correct import path
import Header from '@/components/shared/Navbar';

// Lightbox Component
const Lightbox = ({ isOpen, onClose, imageSrc }: { isOpen: boolean; onClose: () => void; imageSrc: string }) => {
    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <span className="absolute top-4 right-4 text-white text-3xl cursor-pointer" onClick={onClose}>&times;</span>
            <img src={imageSrc} alt="" className="lightbox-image" />
        </div>
    );
};

// CategoryPage Component
const CategoryPage = ({ params }: { params: { categoryId: string } }) => {
    const categoryId = params.categoryId;

    // Find the category data based on the ID
    const category = categories.find((cat) => cat.id === categoryId);

    if (!category) {
        return <p className="text-center text-2xl mt-10">Category not found!</p>;
    }

    // State for lightbox
    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>('');

    // Function to handle catalog download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = category.catalogUrl;
        link.download = `${category.name}-catalog.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage('');
    };

    return (
        <>
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">{category.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{category.description}</p>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-20'>
                    {/* Category Title and Description */}
                    <div className="mb-8">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full max-w-xl rounded-lg shadow-lg mb-6"
                        />
                    </div>

                    {/* Catalog Section moved closer to the category image */}
                    <div className="mb-8">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.catalogImages.map((image, index) => (
                                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group transition duration-300 ease-in-out">
                                    <img
                                        src={image}
                                        alt={`Catalog ${index + 1}`}
                                        className="w-full h-60 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleDownload}
                            className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition duration-200"
                        >
                            Download full Catalog
                        </button>
                    </div>
                </div>

                {/* Room Background Section */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Room Inspirations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.roomImages.map((image, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group transition duration-300 ease-in-out">
                                <img
                                    src={image}
                                    alt={`Room Background ${index + 1}`}
                                    className="w-full h-60 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-lg font-semibold">Click to view</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox for Images */}
                <Lightbox
                    isOpen={isLightboxOpen}
                    onClose={closeLightbox}
                    imageSrc={selectedImage}
                />
            </div>
        </>
    );
};

export default CategoryPage;
