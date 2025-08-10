"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navbarItems, siteConfig } from "../lib/navbar-data";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80`}
      >
        <div className='px-4 py-3 flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center space-x-2 group'
            onClick={closeMenu}
          >
            <div className='relative'>
              <Image
                src={siteConfig.logo}
                alt='Logo'
                width={40}
                height={40}
                className='rounded-full transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <span className='font-bold text-lg text-gray-900 tracking-tight'>
              {siteConfig.name}
            </span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className='relative w-10 h-10 flex flex-col justify-center items-center space-y-1.5 group'
            aria-label='Toggle navigation menu'
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-45 translate-y-2 bg-black"
                  : "group-hover:bg-gray-700"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-0 translate-x-4"
                  : "group-hover:bg-gray-700"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-black"
                  : "group-hover:bg-gray-700"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out text-black`}
        >
          {/* Backdrop */}
          <div
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
            onClick={closeMenu}
          />

          {/* Menu Content */}
          <div
            className={`absolute top-0 right-0 w-full bg-white/70 shadow-2xl transform transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Navigation Items */}
            <div className='pt-20 p-6'>
              <nav className='space-y-2'>
                {navbarItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`semibold block text-center rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 hover:text-gray-900 ${
                      isMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Menu Footer */}
            <div className='p-6 border-t border-gray-500'>
              <div className='flex items-center justify-center space-x-4'>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
                  aria-label='Email'
                >
                  <svg
                    className='w-5 h-5 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg
                    className='w-5 h-5 text-gray-600'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
                  aria-label='GitHub'
                >
                  <svg
                    className='w-5 h-5 text-gray-600'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
