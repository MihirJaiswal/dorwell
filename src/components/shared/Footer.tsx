import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import the desired icons
import logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Image 
            src={logo}
            alt="logo"
            placeholder="blur"
            loading="lazy"
            quality={100}
            className="w-44" 
            />
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Have any query?
            </p>
            <a
              href="javascript:;"
              className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Dorwell</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">contact</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Features</a></li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">User Guide</a></li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">item</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">New Updates</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Events</a></li>
            </ul>
          </div>
        </div>
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">©<a href="https://pagedone.io/">Dorwell</a> 2024, All rights reserved.</span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                <FaFacebookF className="text-white" />
              </a>
              <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                <FaTwitter className="text-white" />
              </a>
              <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                <FaInstagram className="text-white" />
              </a>
              <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
