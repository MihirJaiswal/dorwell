'use client';
import { categories } from '../../../constant/index';

export default function Categories() {
  return (
    <section className="mx-auto mt-12 bg-white max-w-7xl px-4 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-zinc-900 mb-4">What we offer</h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Explore a wide range of premium door collections.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
          >
            <div className="h-56">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2">{category.name}</h3>
              <p className="text-zinc-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
