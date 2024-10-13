import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../public/Images/logo.png';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center md:px-8">
      <div className="text-3xl">
        <a href="/">
          <img src={logo} alt="Spotalents Logo" width={150} />
        </a>
      </div>

      <div className="hidden md:flex text-xl items-center gap-4">
        <ul className="flex gap-4">
          <li><a href="#">Find a Job</a></li>
          <li><a href="#">Talents</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li className="text-[#036BDC]"><a href="#">Login</a></li>
        </ul>
        <button className="px-4 py-1 rounded-full bg-[#036BDC] text-white">Sign Up</button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center gap-4 py-4 z-10">
          <ul className="flex flex-col items-center gap-4">
            <li><a href="#" onClick={toggleMenu}>Find a Job</a></li>
            <li><a href="#" onClick={toggleMenu}>Talents</a></li>
            <li><a href="#" onClick={toggleMenu}>Services</a></li>
            <li><a href="#" onClick={toggleMenu}>About</a></li>
            <li className="text-[#036BDC]"><a href="#" onClick={toggleMenu}>Login</a></li>
          </ul>
          <button className="px-6 py-2 rounded-full bg-[#036BDC] text-white" onClick={toggleMenu}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
