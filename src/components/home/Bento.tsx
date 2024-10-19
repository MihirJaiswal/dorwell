import React from "react";
import Image from "next/image";
import { features } from "../../../constant";

const BentoGridDemo = () => {
  return (
    <>
      <div className="mt-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mt-10 mb-5">
          What We Offer
        </h2>
        <p className="text-center px-4 text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We are a door manufacturing company specializing in designer doors. With our expertise in membrane, laminate, and veneer doors, we deliver top-notch quality and style.
        </p>
      </div>

      <div className="grid md:h-screen max-w-7xl mx-auto p-10 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${
              feature.isLarge
                ? "col-span-1 md:col-span-2 lg:col-span-3 row-span-2 rounded-xl overflow-hidden relative group"
                : "col-span-1 md:col-span-2 lg:col-span-2 row-span-2 inset-0 h-full w-full bg-zinc-100 bg-[radial-gradient(#d4d6d9_1px,transparent_1px)] [background-size:16px_16px] border border-gray-300 p-6 rounded-xl flex flex-col justify-between"
            }`}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              className={`w-full h-full object-cover ${
                feature.isLarge ? "transition-transform duration-300 group-hover:scale-105" : "h-32 md:h-40 object-cover rounded-lg mb-6"
              }`}
              width={500}
              height={500}
              quality={100}
            />
            {feature.isLarge ? (
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h1>
                <button className="flex items-center text-white font-medium">{feature.description}</button>
              </div>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">{feature.title}</h2>
                <p className="text-gray-500">{feature.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BentoGridDemo;
