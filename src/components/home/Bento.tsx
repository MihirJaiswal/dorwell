import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../public/features/feature.webp"; // Update with actual images
import img2 from "../../../public/features/feature1.webp";
import img3 from "../../../public/features/feature2.webp";
import img4 from "../../../public/features/feature3.jpeg";

const BentoGridDemo = () => {
  return (
    <>
    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mt-10 mb-5">
      What We Offer
    </h2>
    <p className="text-center px-4 text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
      We are a door manufacturing company specializing in designer doors. With our expertise in membrane, laminate, and veneer doors, we deliver top-notch quality and style.
    </p>

    <div className="grid md:h-screen max-w-7xl mx-auto p-10 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      
      {/* Large Feature 1 */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 rounded-xl overflow-hidden relative group">
        <Image
          src={img1}
          alt="Productivity Boost"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Custom Design
          </h1>
          <button className="flex items-center text-white font-medium">
          Bring your vision to life with our bespoke door design and manufacturing service.
          </button>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 inset-0 h-full w-full bg-zinc-100 bg-[radial-gradient(#d4d6d9_1px,transparent_1px)] [background-size:16px_16px] border border-gray-300 p-6 rounded-xl flex flex-col justify-between">
        <Image
          src={img2}
          alt=""
          className="w-full h-32 md:h-40 object-cover rounded-lg mb-6"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
        Quality Materials
        </h2>
        <p className="text-gray-500">
        Our doors are built from premium wood, steel, and glass materials.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 inset-0 h-full w-full bg-zinc-100 bg-[radial-gradient(#d4d6d9_1px,transparent_1px)] [background-size:16px_16px] border border-gray-300 p-6 rounded-xl flex flex-col justify-between">
        <Image
          src={img3}
          alt="The Art of Design"
          className="w-full h-32 md:h-40 object-cover rounded-lg mb-6"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
        Discover the beauty of design.
        </h2>
        <p className="text-gray-500">
          Build confidently with tools crafted by the top minds in AI.
        </p>
      </div>

      {/* Large Feature 4 */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 rounded-xl overflow-hidden relative group">
        <Image
          src={img4}
          alt="Privacy & Trust"
          quality={100}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-8 flex flex-col justify-end">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Quality Craftsmanship
          </h1>
          <button className="flex items-center text-white font-medium">
          Attention to detail at every stage of the process, from design to finish.
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default BentoGridDemo;
