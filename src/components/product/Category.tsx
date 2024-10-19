import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../../../constant';


const CategorySection = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Browse Our Categories
                </h2>
                <p className="mb-12 text-gray-600 dark:text-gray-400">
                    Explore our wide range of door categories to find the perfect fit for your home.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
