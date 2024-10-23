import Image from 'next/image';
import { service } from '../../../constant'; // Ensure the correct path to constant.js

const ServicesSection = () => {
  return (
    <section className="dark:bg-gray-900 border-t py-16 inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Section Wrapper */}
      <div className="container mx-auto px-6 md:px-10 xl:px-20 max-w-7xl">
        {/* First Service Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-12">
          <div className="lg:w-1/2">
            <Image
              src={service[0].image}
              alt="Unlock your full potential with our services"
              width={500}
              height={500}
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {service[0].title}
            </h2>
            <p className="mt-4 text-md  text-gray-600 dark:text-gray-400">
              {service[0].description}
            </p>
          </div>
        </div>

        {/* Second Service Section */}
        <div className="flex items-center gap-10 lg:gap-16 mb-12 flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {service[1].title}
            </h2>
            <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
              {service[1].description}
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src={service[1].image}
                alt="Seamless Integration for Maximum Efficiency"
                width={500}
                height={500}
                quality={100}
                loading="lazy"
              />
            </div>

            {/* Desktop Image */}
            <div className="hidden md:block">
              <Image
                src={service[1].image}
                alt="Seamless Integration for Maximum Efficiency"
                width={500}
                height={500}
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
