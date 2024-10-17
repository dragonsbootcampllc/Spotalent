import React from 'react';
import lolo from '../../public/Images/3d-glassy-fluid-motion-on-blue-egg-shaped-objects.png';
import toto from '../../public/Images/Group.svg'

const Subscribe: React.FC = () => {
  return (
    <div className="relative max-md:flex-col z-0 flex items-center md:h-[300px] mx-6 justify-between bg-[#004B9C] rounded-3xl md:px-20 md:py-20 md:mx-24 md:my-20 overflow-hidden">
      <img
        src={lolo}
        alt="lolo"
        className="absolute top-3 md:bottom-3 md:left-10 -z-10 opacity-70"
        width={280}
        height={280}
      />
      <div className='max-w-[500px] px-10 text-5xl text-white'>Never Want to Miss Any Job News?</div>

      <div className=" bg-white gap-4 md:w-[400px] flex p-4 justify-between items-center rounded-xl overflow-hidden shadow-md">
        <input
          type="email"
          placeholder="Enter your email address here..."
          className="px-4 text-gray-700 md:w-[250px] outline-none border-r-2 border-gray-200"
        />
        <button className="bg-[#004B9C] rounded-full hover:bg-[#004B9C]/90 text-white px-4 py-1">
          Subscribe
        </button>
      </div>

      <img
        src={toto}
        alt="toto"
        className="md:absolute md:top-0 -right-52 h-full w-full -z-10 opacity-70"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Subscribe;
