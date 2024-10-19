'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const CategoryCard = ({ category }: any) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${category.id}`); // Navigate to dynamic route
    };

    return (
        <div className="relative max-w-sm h-96 rounded-lg overflow-hidden border shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="relative h-full">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Title, Description, and Button in Bottom Left Corner */}
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t  from-black/60 to-transparent w-full text-left text-white">
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p className="text-sm mb-2">{category.description}</p>
                <button
                    onClick={handleClick}
                    className="px-4 py-2 bg-white text-black rounded-md hover:bg-orange-600 text-sm"
                >
                    View Category
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;
