import React from 'react';
import Image from 'next/image';
import img from '../../../public/img.png';
import img1 from '../../../public/img2.png';

const ServicesSection = () => {
  return (
    <section className="dark:bg-gray-900 py-16 inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Section Wrapper */}
      <div className="container mx-auto px-6 md:px-10 xl:px-20  max-w-7xl">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-12">
          <div className="lg:w-1/2">
            <Image
              src={img}
              alt="Billboard image"
              placeholder="blur"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Unlock your full potential with our services
            </h2>
            <p className="mt-4 text-md md:text-lg text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Discover innovative solutions and achieve outstanding results. 
              Our team offers a personalized approach tailored to your needs.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Seamless Integration for Maximum Efficiency
            </h2>
            <p className="mt-4 text-md md:text-lg text-gray-600 dark:text-gray-400">
              Stay ahead of the curve with cutting-edge technologies. Our 
              platform offers seamless integration to ensure smooth operations 
              across all areas of your business.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src={img1}
                alt="Billboard image"
                placeholder="blur"
                quality={100}
                loading="lazy"
              />
            </div>

            {/* Desktop Image */}
            <div className="hidden md:block">
              <Image
                src={img1}
                alt="Billboard image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
