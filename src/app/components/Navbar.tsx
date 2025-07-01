"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileBanner, setShowMobileBanner] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY < lastScrollY ||
        Math.abs(currentScrollY - lastScrollY) < 5
      ) {
        setShowMobileBanner(true);
      } else {
        setShowMobileBanner(false);
      }

      setLastScrollY(currentScrollY);
    };

    let scrollTimeout: string | number | NodeJS.Timeout | undefined;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      handleScroll();
      scrollTimeout = setTimeout(() => {
        setShowMobileBanner(true);
      }, 150);
    };

    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["Benefits", "Specifications", "How-to", "Contact Us"];

  return (
    <>
      {/* Desktop Version - unchanged */}
      <div className="hidden md:flex w-full max-w-screen items-center justify-between px-10 py-5 relative">
        <Link href="/" className="text-black dm-sans font-medium text-3xl">
          Area
        </Link>

        <div className="fixed left-1/2 transform -translate-x-1/2 w-fit flex items-center z-50 bg-white/20 backdrop-blur-2xl px-6 py-3 rounded-full">
          <ul className="flex items-center justify-center gap-6">
            <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
              <Link href={"#benefits"}>Benefits</Link>
            </li>
            <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
              <Link href={"#specification"}>Specifications</Link>
            </li>
            <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
              <Link href={"#how-to"}>How-to</Link>
            </li>
            <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
              <Link href={"#contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <button className="bg-button-primary text-white px-6 py-4 rounded-full font-bold text-sm hover:bg-button-primary-hover transition-colors ease-in-out">
          Learn More
        </button>
      </div>

      {/* Mobile Version - Fixed */}
      <div className="md:hidden">
        {/* Mobile Banner */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${
            showMobileBanner || isMenuOpen
              ? "translate-y-0"
              : "-translate-y-full"
          } ${isMenuOpen ? "" : "shadow-sm rounded-br-2xl"}`}
        >
          <div className="flex items-center justify-between px-4 py-4 max-w-full">
            <Link
              href="/"
              className="text-black dm-sans font-medium text-2xl flex-shrink-0"
            >
              Area
            </Link>

            <button
              onClick={toggleMenu}
              className="w-8 h-8 flex items-center justify-center relative flex-shrink-0 ml-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 transform ${
                    isMenuOpen ? "rotate-45 top-2.5" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 transform ${
                    isMenuOpen ? "opacity-0" : "opacity-100 top-2.5"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 transform ${
                    isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="pt-20 px-4">
            <nav>
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    key={item}
                    className={`transform transition-all duration-500 border-t border-line py-4 ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <a
                      href="#"
                      className="block text-sm font-bold text-black py-3 hover:text-secondary-text transition-colors"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li
                  className={`transform transition-all duration-500 pt-6 ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${menuItems.length * 100}ms`
                      : "0ms",
                  }}
                >
                  <button className="w-fit bg-button-primary hover:bg-button-primary-hover text-white px-6 py-3 rounded-full dm-sans font-bold text-sm">
                    Learn More
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
