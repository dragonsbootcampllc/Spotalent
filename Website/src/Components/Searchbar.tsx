import React from "react";

const Searchbar: React.FC = () => {

  return (
    <div className="flex items-center w-full justify-between max-w-3xl mx-auto bg-white p-3 rounded-full shadow-lg">
      <div className="relative px-4 flex items-center min-w-20 border-r-2 border-[#d6d1db]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <select className="h-8 px-3 focus:outline-none ">
          <option>Freelancer</option>
          <option>Company</option>
        </select>
      </div>

      <div className="flex gap-2 items-center space-x-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex max-sm:hidden items-center space-x-2">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Web Design <button className="ml-2 text-sm font-semibold">✕</button>
          </span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            UI/UX Design <button className="ml-2 text-sm font-semibold">✕</button>
          </span>
        </div>
      </div>

      <button className="ml-4 bg-[#004B9C] text-white px-6 py-1 rounded-full">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
