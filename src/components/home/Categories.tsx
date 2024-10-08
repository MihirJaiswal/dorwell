'use client'
import { useState } from 'react'
import { categories } from '../../../constant'

export default function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="mx-auto mt-12 bg-white max-w-7xl px-4 lg:px-8 py-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Discover Our Door Collections</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore a wide range of premium door collections crafted for every taste and style.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="relative overflow-hidden transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:-translate-y-3 rounded-lg"
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Category Image */}
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                  hoveredCategory === index ? 'scale-110' : 'scale-100'
                }`}
              />
              {/* Hover Details */}
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center">
                <p className="text-white text-lg font-medium px-4 text-center">
                  {category.quickDetail} {/* Display extra information on hover */}
                </p>
              </div>
            </div>

            {/* Category Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.name}</h3>
              <p className="text-gray-600 leading-relaxed">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
