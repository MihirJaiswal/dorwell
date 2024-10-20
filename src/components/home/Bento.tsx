import React from "react";
import Image from "next/image";
import { features } from "../../../constant";

const BentoGridDemo = () => {
  return (
    <div className="border-b">
      <div className="mt-6">
        <p className="text-center px-4 text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We are a door manufacturing company specializing in designer doors. With expertise in membrane, laminate, and veneer doors, we deliver top-notch quality and style.
        </p>
      </div>

      <div className="grid max-w-7xl mx-auto p-10 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative  bg-white shadow-md rounded overflow-hidden hover:shadow-2xl transition-transform duration-300"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              className="w-full h-72 md:h-full object-cover "
              width={1000}
              height={1000}
              quality={100}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent flex flex-col justify-end p-6 text-white transition-opacity duration-300 ">
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p className="leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGridDemo;
