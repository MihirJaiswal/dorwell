'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from '../../../constant'

export default function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="mx-auto mt-12 bg-white max-w-7xl px-4 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Our Door Collections</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore a wide range of premium door collections crafted for every taste and style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Card 
            key={index}
            className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2"
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
                  hoveredCategory === index ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center">
                <Button variant="secondary" size="sm" className="font-semibold text-white bg-primary hover:bg-primary-dark">
                  Explore {category.name}
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Button variant="link" className="p-0 h-auto font-semibold text-primary group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
