import React from 'react';
import lolo from '../../public/Images/3d-glassy-fluid-motion-on-blue-egg-shaped-objects.png';
import toto from '../../public/Images/Group.svg';

const Subscribe: React.FC = () => {
  return (
    <div className="relative flex flex-col max-md:py-6 max-md:gap-10 md:flex-row z-0 items-center md:h-[300px] mx-6 px-6 justify-between bg-[#004B9C] rounded-3xl md:px-20 md:py-20 md:mx-24 md:my-20 overflow-hidden">
      <img
        src={lolo}
        alt="lolo"
        className="absolute top-3 md:bottom-3 md:left-10 -z-10 opacity-70"
        width={280}
        height={280}
      />
      <div className="max-w-[500px] text-3xl md:text-5xl text-white text-center md:text-left">
        Never Want to Miss Any Job News?
      </div>

      <div className="bg-white gap-6 max-md:flex-col md:min-w-[400px] md:max-w-[400px] flex p-4 justify-between items-center rounded-xl overflow-hidden shadow-md">
        <input
          type="email"
          placeholder="Enter your email address here..."
          className="px-4 text-gray-700 w-full md:w-[250px] outline-none md:border-r-2 border-gray-200"
        />
        <button className="bg-[#004B9C] max-sm:w-full rounded-full hover:bg-[#004B9C]/90 text-white px-4 py-1">
          Subscribe
        </button>
      </div>

      <img
        src={toto}
        alt="toto"
        className="md:absolute max-md:hidden md:top-0 md:-right-52 h-full w-full -z-10 opacity-70"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Subscribe;