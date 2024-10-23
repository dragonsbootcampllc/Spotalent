import React from "react";
import MobileSidebar from "./MobileSidebar";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 lg:hidden bg-black opacity-50"
          onClick={toggleNav}
        />
      )}
      <div className={`w-full ${isScrolled ? 'bg-white/80 py-2 md:py-4 shadow-lg backdrop-blur-md' : 'bg-transparent py-5 md:py-8'} transition-all duration-300 px-3 fixed z-[1000] top-0 left-0 right-0`}>
        <div className="container mx-auto max-w-[1400px] flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <img src="/Images/Logo.png" alt="Logo" className="w-[150px] sm:w-[180px] md:w-[200px]" />
          </NavLink>

          {/* Desktop Nav Links and Auth Buttons (shown on large screens) */}
          <div className="hidden lg:flex items-center justify-between space-x-8">
            <NavLinks />
            <AuthButtons />
          </div>

          {/* Mobile Sidebar (shown on smaller screens) */}
          <div className="lg:hidden">
            <button onClick={toggleNav}>
              <svg
                className="w-7 h-7 text-[#036bdc]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d='M4 8h16M4 12h16M4 16h16'
                />
              </svg>
            </button>

            <MobileSidebar
              toggleNav={toggleNav}
              isOpen={isOpen}
            />
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;