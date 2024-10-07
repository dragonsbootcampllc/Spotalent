import React, { useRef, useState, useEffect } from "react";

interface CustomSelectProps {
  options: string[];
  placeholder: string;
}

function CustomSelect({ options, placeholder }: CustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState<string>(placeholder);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-200 rounded-t p-2 flex justify-between items-center"
      >
        <span className={selectedOption === placeholder ? "text-gray-400" : ""}>
          {selectedOption}
        </span>
        <svg
          className={`w-4 h-4 transition-transform text-gray-400 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-200 border-t-0 rounded-b shadow-lg z-10 text-gray-700 ">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NewPost() {
  const jobOptions: string[] = ["Front", "Back", "Full Stack"];
  const priceOptions: string[] = ["3000", "7000", "30000", "37000"];

  return (
    <div className="bg-opacity-50 backdrop-blur-2xl md:w-3/4 m-auto mt-10 p-4 shadow-lg">
      <div className="flex flex-col gap-4 bg-white p-4 rounded">
        <div className="bg-white rounded-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="Job title"
            className="border border-gray-200 rounded p-2 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="No. of candidates"
            className="border border-gray-200 rounded p-2 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <CustomSelect options={jobOptions} placeholder="Job category" />
          <CustomSelect options={priceOptions} placeholder="Price/Annually" />
        </div>

        <textarea
          name=""
          placeholder="Description"
          className="resize-none rounded w-full p-2 border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500"
          id=""
        ></textarea>
      </div>
      <div className="flex justify-end mt-4">
        <button className="px-24 py-2 bg-gradient-to-r from-purple-400 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white rounded-full">
          Next
        </button>
      </div>
    </div>
  );
}

export default NewPost;
