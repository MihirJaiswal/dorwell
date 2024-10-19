import React from 'react';
import Image from 'next/image';
import img from '../../../public/logo.png';
import { content } from '../../../constant';

const HeroWord = () => {
    return (
        <div className="flex flex-col items-center justify-cener lg:w-1/2 p-8 bg-white/80 h-full w-full bg-[radial-gradient(#d2d3d6_1px,transparent_1px)] [background-size:16px_16px] backdrop-blur-lg border-l border-gray-300">
            <div className="flex flex-col items-center mb-6">
                <Image
                    src={img}
                    alt="Logo"
                    className="w-32 mb-4"
                />
                {/* <h1 className="text-5xl font-bold mb-4">Your Dream Vacation</h1> */}
                <p className=" text-md text-gray-700 text-center">
                    {content.description}
                </p>
            </div>
            <div className="flex space-x-4 mb-6">
                <a href="#" className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-800 transition duration-300 transform hover:scale-105">
                    Discover More
                </a>
                <a href="#contact" className="text-black border-2 border-gray-300 py-2 px-6 rounded-lg bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                    Contact us
                </a>
            </div>
            <div className="flex -space-x-2 mb-6">
                <Image
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green Avatar"
                />
                <Image
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos Avatar"
                />
                <Image 
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                    alt="Sofia McGuire Avatar"
                />
                <Image  
                    height={100}
                    width={100}
                    loading='lazy'
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                    alt="Thomas Lean Avatar"
                />
            </div>
            <a href="#" className="flex items-center text-gray-700 mb-4 hover:text-gray-900 transition duration-200">
                <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 107 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.8575 7.18847H12.6128L10.3826 0.195312L8.13926 7.18847L0.894531 7.17507L6.75366 11.5023L4.5103 18.4954L10.3694 14.1682L16.2286 18.4954L13.9984 11.5023L19.8575 7.18847Z" fill="#00B67A" />
                </svg>
                <span className="text-sm">
                    Rated Best Over <span className="font-bold">15.7k</span> Reviews
                </span>
            </a>
            <iframe
                className="w-full lg:w-2/3 h-64 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/v=hm86f6ARs3g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default HeroWord;
