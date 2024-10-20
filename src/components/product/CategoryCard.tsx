'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRightIcon } from 'lucide-react';

// Define the Category interface
interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
}

// Define the props for the CategoryCard component
interface CategoryCardProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${category.id}`);
    };

    return (
        <div className="max-w-sm border rounded-md overflow-hidden border-gray-300">
            {/* Image at the Top */}
            <div className="relative w-full h-64">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading='lazy'
                />
            </div>

            {/* Text Content Below the Image */}
            <div className="px-4 py-2 flex flex-col items-start ">
                <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                </p>
                <button
                    onClick={handleClick}
                    className=" px-4 py-3 text-black border flex rounded-md hover:bg-red-600 hover:text-white transition-colors"
                >
                    View Category
                    <ChevronRightIcon/>
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;
