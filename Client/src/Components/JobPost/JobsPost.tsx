import React from "react";
import data from "../../Data/JobsPost.json";
import Dropdown from "./Dropdown";
import SearchIcon from "../Icons/SearchIcon";
import CompareIcon from "../Icons/CompareIcon";

const JobsPost = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md shadow-[#d6d1db]">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-[#111928]">Job Posts</h1>
      </div>
      <div className="px-6 flex items-center space-x-4">
        <div className="relative flex-grow">
          <SearchIcon
            className="absolute left-3 top-2 text-gray-400 pointer-events-none"
            size={5}
            color="gray"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-[#d6d1db] rounded-lg pl-10 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <Dropdown />
        <button className="hover:bg-[#d6d1db] text-black border px-4 py-2 rounded-md inline-flex items-center justify-center bg-white text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 flex-shrink-0">
          <span className="hidden sm:block">Compare</span>
          <span className="ml-2">
            <CompareIcon size={16} color="gray" />
          </span>
        </button>
      </div>
      <div className="p-6">
        <div>
          {data.map(
            (
              {
                firstName,
                lastName,
                jobTitle,
                city,
                coverLetter,
                skills,
                image,
              },
              index
            ) => (
              <div
                key={index}
                className="mb-6 p-6 text-[#111928] shadow-md transition-transform transform hover:scale-95 bg-[#fcf9fb] border rounded cursor-pointer duration-500"
              >
                <div className="">
                  <div className="mb-4 sm:mb-0 sm:mr-4 flex flex-shrink-0 flex-col sm:flex-row items-center">
                    <img
                      src={image}
                      alt={`${firstName} ${lastName}`}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                    <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:items-start">
                      <h2 className="text-sm text-center sm:text-left">
                        {firstName} {lastName}
                      </h2>
                      <p className="text-lg text-[#111928] font-semibold text-center sm:text-left">
                        {jobTitle}
                      </p>
                      <p className="text-sm text-[#111928] text-center sm:text-left">
                        {city}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between flex-1 sm:ml-24 ml-4 sm:pl-4">
                    <div className="py-3 text-[#111928]">
                      <p>
                        {coverLetter.length > 200
                          ? coverLetter.substring(0, 200) + "..."
                          : coverLetter}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-1 text-sm rounded-full bg-[#c7c8ca] text-[#111928] text-center"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPost;
