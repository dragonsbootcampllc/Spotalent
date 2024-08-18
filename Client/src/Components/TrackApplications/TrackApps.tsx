import React, { useState } from "react";
import data from "../../Data/TrackApps.json";
import Bar from "../Icons/Bar";
import LocationIcon from "../Icons/LocationIcon";
import SlideBar from "./SlidBar";

interface Application {
  Jobtitle: string;
  timeOfPost: string;
  JobDescription: string;
  Salary: string;
  JobType: string[];
  NumOfCandidates: string;
  NumOfApplaiers: string;
  Location: string;
  AppStatus: string;
}
const JobsPost = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-[1400px] mx-auto bg-white rounded-xl shadow-md shadow-[#d6d1db] flex flex-row'>
        <SlideBar />
        <div className='p-6 w-full max-w-4xl sm:pr-20'>
          <div>
            {data.map(
              (
                {
                  Jobtitle,
                  timeOfPost,
                  JobDescription,
                  Salary,
                  JobType,
                  NumOfCandidates,
                  NumOfApplaiers,
                  Location,
                  AppStatus,
                }: Application,
                index: number
              ) => (
                <div
                  key={index}
                  className='mb-6 p-6 text-[#111928] shadow-md transition-transform transform hover:scale-95 bg-[#fcf9fb] border rounded cursor-pointer duration-500'>
                  <div className='flex sm:flex-row flex-col items-start sm:items-center justify-between mb-4 sm:mb-0 sm:mr-4'>
                    <div className='flex flex-shrink-0 flex-col sm:flex-row items-center'>
                      <div className='mt-4 sm:mt-0 ml-4 flex flex-row items-center sm:items-start'>
                        <div className=''>
                          <h2 className='text-base sm:text-lg md:text-xl text-center font-semibold sm:text-left'>
                            {Jobtitle}
                          </h2>
                          <p className='text-xs sm:text-sm text-[#6e6f70] text-left'>
                            {timeOfPost}
                          </p>
                          <p className='text-xs sm:text-sm md:text-base text-[#111928] text-left font-semibold'>
                            {NumOfCandidates}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <button
                        className={`sm:m-0 mt-4 ml-3 border px-3 py-2 rounded-full inline-flex items-center justify-center text-xs sm:text-sm md:text-base shadow-sm ring-1 ring-inset  flex-shrink-0 ${AppStatus === "Applied"
                          ? "text-black bg-[#E5E7EB] ring-gray-300"
                          : "text-white bg-red-500 ring-red-500"
                          }`}>
                        {AppStatus}
                      </button>
                    </div>
                  </div>

                  <div className='flex flex-col justify-between flex-1 pl-4'>
                    <div className='py-3 text-[#111928]'>
                      <p className='text-sm sm:text-base md:text-lg'>
                        {JobDescription.length > 200
                          ? JobDescription.substring(0, 200) + "..."
                          : JobDescription}
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {JobType.map((JobType, index) => (
                        <span
                          key={index}
                          className='px-4 py-1 text-xs sm:text-sm rounded-full bg-[#F5DBF5] text-[#511286] text-center'>
                          {JobType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row justify-between pl-4 font-semibold text-xs sm:text-sm md:text-base mt-1'>
                    <div className='flex flex-row justify-between w-full sm:w-auto'>
                      <div className=''>{Salary}</div>
                      <div className='sm:hidden flex flex-row'>
                        <div className='m-1'>
                          <LocationIcon />
                        </div>
                        <div className='ml-auto'>{Location}</div>
                      </div>
                    </div>

                    <div className='hidden sm:flex flex-row'>
                      <div className='hidden sm:block ml-4'>
                        <Bar />
                      </div>
                      <div className='flex flex-row ml-4'>
                        <div className='m-1'>
                          <LocationIcon />
                        </div>
                        {Location}
                      </div>
                    </div>

                    <div className='text-[#4B5563] mt-2 sm:mt-0 sm:ml-auto sm:mr-4'>
                      {NumOfApplaiers} Applied
                    </div>
                  </div>

                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobsPost;