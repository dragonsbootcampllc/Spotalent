import React from 'react';
import Nav from "./Nav";

import { FiBriefcase } from 'react-icons/fi';
import { PiStarFourFill } from "react-icons/pi";
import { BiSolidZap } from "react-icons/bi";
import personImage from '../../public/Images/person.png'; // Replace with actual image path

const Hero: React.FC = () => {
  return (
    <div className="px-[5%] py-8">
      <Nav />
      <section className="w-full gap-10 flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex items-center gap-2">
            <button className="bg-[#EAF0FF] p-2 rounded-full">
              <div className="w-4 h-4 bg-[#036BDC] rounded-full"></div>
            </button>
            <span className="text-lg font-medium">Find Your Dream Job</span>
          </div>
          <h1 className="text-4xl font-medium">
            <span className="text-[#004B9C] font-semibold">Spot Talent</span> find your dream job you want shortest Talents at Your Fingertips
          </h1>
          <p className="text-gray-900">
            Connect with top freelancers and clients on our platform! find your perfect match for your next project.
          </p>
          <button className="px-6 py-2 bg-[#036BDC] max-sm:w-full text-white rounded-full w-fit">Get Started</button>
        </div>

        <div className="relative max-md:hidden mt-8 md:mt-0 w-1/2 flex justify-center">
          <img src={personImage} alt="" width={300} height={300} />

          <div className="absolute top-28 right-16 bg-white/60 backdrop-blur-sm shadow-lg rounded-xl p-4 flex flex-col items-center">
            <FiBriefcase className="text-[#036BDC] text-3xl" />
            <p className="font-semibold text-lg mt-2">10.5K</p>
            <p className="text-sm text-gray-500">Job Vacancy</p>
          </div>

          <div className="absolute bottom-10 left-6 bg-white/60 backdrop-blur-sm shadow-lg rounded-xl p-4 flex flex-col items-center">
            <BiSolidZap className="text-yellow-500 text-3xl" />
            <p className="text-sm mt-2 w-24 text-center">It only takes a few seconds</p>
          </div>

          <div className="absolute top-20 left-2">
            <PiStarFourFill className="text-[#4F4F4F] text-3xl" />
          </div>
          <div className="absolute top-4 right-20">
            <PiStarFourFill className="text-[#4F4F4F] text-3xl" />

          </div>
          <div className="absolute bottom-20 -left-10">
            <PiStarFourFill className="text-[#4F4F4F] text-3xl" />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
