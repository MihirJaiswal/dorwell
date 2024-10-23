import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import the desired icons
import logo from '../../../public/logo.png';
import { footerSections } from "../../../constant";

const Footer = () => {
  const socialIcons = [
    { component: <FaFacebookF />, href: "https://nextjs.org/", label: "Visit our Facebook page" },
    { component: <FaTwitter />, href: "https://react-icons.github.io/react-icons/", label: "Visit our Twitter page" },
    { component: <FaInstagram />, href: "https://vercel.com/", label: "Visit our Instagram page" },
    { component: <FaLinkedinIn />, href: "https://chatgpt.com/", label: "Visit our LinkedIn page" },
  ];

  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Image 
                src={logo}
                alt="Company Logo" // Updated alt text for clarity
                placeholder="blur"
                loading="lazy"
                quality={100}
                className="w-44" 
              />
            </div>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Have any query?
            </p>
            <a
              href="javascript:;"
              className="py-2.5 px-5 h-9 block w-fit bg-red-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-orange-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">{section.title}</h4>
              <ul className="text-sm transition-all duration-500">
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-6">
                    <a href={link.href} className="text-gray-600 hover:text-gray-900">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">
              ©<a href="https://dorwell.vercel.app/">Dorwell</a> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href}
                  className="w-9 h-9 rounded-full bg-gray-300 flex justify-center items-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  aria-label={icon.label} // Add aria-label for screen readers
                >
                  <span className="sr-only">{icon.label}</span> {/* Visually hidden text */}
                  {icon.component}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
