import React from "react";
import { DemoCardsSwipeV2 } from "./Swipe";

const AboutUs = () => {
  return (
    <section className="py-12 relative inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 lg:order-first order-last">
          
            <DemoCardsSwipeV2/>
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-3xl md:text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Open the door to a world of endless possibilities.
                </h2>
                <p className="text-gray-500 text-sm md:text-base text-justify font-normal leading-relaxed lg:text-start md:text-center">
                  Welcome to Dorwell, a leading door manufacturer with premier locations in Indore and Guna. Spanning 70,000 square feet, we blend craftsmanship and innovation to create high-quality doors for residential and commercial spaces. Our skilled craftsmen utilize traditional techniques and modern innovations, ensuring precision and attention to detail in every door. Discover the perfect blend of style and durability with Dorwell. Welcome to a world where every door opens to possibility.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">33+</h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
