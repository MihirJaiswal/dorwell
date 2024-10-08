'use client';
import { useState } from 'react';
import Image from 'next/image';
import img from '../../../public/logo.webp';
import { navLinks } from '../../../constant/index'; // Import navLinks

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white shadow-sm text-sm py-3 transition-colors duration-300">
      <nav className="max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="text-2xl font-bold tracking-wide text-gray-800 focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            <Image
              src={img}
              alt="Logo"
              width={100}
              height={100}
              loading="lazy"
              placeholder="blur"
            />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-controls="hs-navbar-example"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-example"
          className={`${isOpen ? 'block' : 'hidden'} w-full sm:flex sm:items-center sm:w-auto mt-5 sm:mt-0`}
        >
          <div className="flex flex-col sm:flex-row gap-7 sm:gap-12 text-lg sm:text-base">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`font-medium transition-colors duration-200 focus:outline-none ${link.className}`}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
