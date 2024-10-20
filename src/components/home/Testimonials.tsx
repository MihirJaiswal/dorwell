import React from "react";
import { testimonialsData } from "../../../constant";
import Image from "next/image";

interface Testimonial {
  image: string;
  name: string;
  text: string;
  rating: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1 mt-3">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < rating ? "#FFC107" : "#E0E0E0"}
          className="w-6 h-6 transition-colors duration-300"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div
      className="relative min-w-screen min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/wood-texture.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-cover bg-opacity-55"></div>

      <div className="relative w-full max-w-6xl bg-white bg-opacity-80 backdrop-blur-md border border-gray-300 p-10 md:py-16 text-gray-800">
        <div className="text-center mx-auto mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5 text-gray-900">
            What People Are Saying
          </h1>
          <h3 className="text-xl mb-5 font-light text-gray-700">
            Hear from our happy customers and partners.
          </h3>
          <div className="text-center">
            <span className="inline-block w-1 h-1 rounded-full bg-red-600 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-600 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-red-600"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-600 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-red-600 ml-1"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-300 rounded-lg bg-white shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-100 border border-gray-300">
                  <Image
                    width={100}
                    height={100}
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy" // Use lazy loading for images
                  />
                </div>
                <div className="pl-4">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    {testimonial.name}
                  </h6>
                </div>
              </div>
              <p className="text-sm leading-tight text-gray-800 mb-4">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                  &ldquo;
                </span>
                {testimonial.text}
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                  &rdquo;
                </span>
              </p>
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
