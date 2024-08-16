import React from "react";
import data from "../../Data/JobsPost.json";
import Dropdown from "./Dropdown";

interface Jobpost {
  firstName: string;
  lastName: string;
  jobTitle: string;
  city: string;
  coverLetter: string;
  skills: string[];
  image: string;
}

const JobsPost = () => {
  return (
    <div className='w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md shadow-[#d6d1db]'>
      <div className='p-6'>
        <h1 className='text-2xl font-semibold text-[#111928]'>Job Posts</h1>
      </div>
      <div className='px-6 flex items-center space-x-4'>
        <div className='relative flex-grow'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='absolute left-3 w-5 h-5 top-2 text-gray-400 pointer-events-none'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
          <input
            type='text'
            placeholder='Search'
            className='w-full border border-[#d6d1db] rounded-lg pl-10 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200'
          />
        </div>
        <Dropdown />
        <button className='hover:bg-[#d6d1db] text-black border px-4 py-2 rounded-md inline-flex items-center justify-center bg-white text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 flex-shrink-0'>
          <span className='hidden sm:block'>Compare</span>
          <span className='ml-2'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 28 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 text-gray-400'>
              <path
                d='M10.0132 12.6667H0.666504V15.3334H10.0132V19.3334L15.3332 14L10.0132 8.66669V12.6667ZM17.9865 11.3334V7.33335H27.3332V4.66669H17.9865V0.666687L12.6665 6.00002L17.9865 11.3334Z'
                fill='currentColor'
              />
            </svg>
          </span>
        </button>
      </div>
      <div className='p-6'>
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
              }: Jobpost,
              index: number
            ) => (
              <div
                key={index}
                className='mb-6 p-6 text-[#111928] shadow-md transition-transform transform hover:scale-95 bg-[#fcf9fb] border rounded cursor-pointer duration-500'>
                <div className=''>
                  <div className='mb-4 sm:mb-0 sm:mr-4 flex flex-shrink-0 flex-col sm:flex-row items-center'>
                    <img
                      src={image}
                      alt={`${firstName} ${lastName}`}
                      className='w-24 h-24 object-cover rounded-full'
                    />
                    <div className='mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:items-start'>
                      <h2 className='text-sm text-center sm:text-left'>
                        {firstName} {lastName}
                      </h2>
                      <p className='text-lg text-[#111928] font-semibold text-center sm:text-left'>
                        {jobTitle}
                      </p>
                      <p className='text-sm text-[#111928] text-center sm:text-left'>
                        {city}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col justify-between flex-1 sm:ml-24 ml-4 sm:pl-4'>
                    <div className='py-3 text-[#111928]'>
                      <p>
                        {coverLetter.length > 200
                          ? coverLetter.substring(0, 200) + "..."
                          : coverLetter}
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className='px-4 py-1 text-sm rounded-full bg-[#c7c8ca] text-[#111928] text-center'>
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
