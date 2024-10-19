'use client';
import { useSearchParams } from 'next/navigation';
import { categories } from '../../../../constant'; // Make sure this is the right import path

const CategoryPage = ({ params }: { params: { categoryId: string } }) => {
    const categoryId = params.categoryId;

    // Find the category data based on the ID
    const category = categories.find((cat) => cat.id === categoryId);

    if (!category) {
        return <p className="text-center text-2xl mt-10">Category not found!</p>;
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg mb-6">{category.description}</p>
            <img
                src={category.image}
                alt={category.name}
                className="w-full max-w-xl rounded-lg shadow-lg"
            />
        </div>
    );
};

export default CategoryPage;
