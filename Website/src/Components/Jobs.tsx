import React from 'react';
import { CiBookmark } from "react-icons/ci";
import google from '../../public/Images/google.svg';
import { IoMdTrendingUp } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

// Define the types for job and component props
type Job = {
  id: string;
  company: string;
  title: string;
  tags: string[];
  salary: string;
  datePosted: string;
  logo: string;
  level: string;
  location: string;
  type: string;
};

type RecommendedJobsProps = {
  jobs: Job[];
  selectedTags: string[];
};

const RecommendedJobs: React.FC<RecommendedJobsProps> = ({ jobs, selectedTags }) => {
  const bgColors = ["bg-[#E3DBFA]", "bg-[#FBE2F4]", "bg-[#E4EEFC]", "bg-[#FCEEE4]", "bg-[#FCE4E4]"];

  const filteredJobs = jobs.filter((job) =>
    job.tags.some((tag) => selectedTags.includes(tag))
  );

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl text-center font-semibold mb-6">Recommended Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {filteredJobs.map((job, index) => (
          <div key={job.id} className="p-4 bg-white rounded-3xl border border-black">
            {/* Apply dynamic background color based on the job's index */}
            <div className={`p-4 rounded-3xl ${bgColors[index % bgColors.length]}`}>
              <div className="flex justify-between items-center">
                <span className="bg-white px-4 py-2 rounded-full text-sm">{job.datePosted}</span>
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <a href="/login" className='text-[#036BDC]'><CiBookmark size={22} /></a>
                </div>
              </div>

              <p className="mt-6">{job.company}</p>
              <div className='flex justify-between'>
                <h3 className="text-4xl font-semibold">{job.title}</h3>
                <img src={job.logo} alt="" className='rounded-full' />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 border border-[#ccc] hover:bg-[#004B9C] duration-300 hover:text-white text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 w-full flex justify-between gap-2 text-gray-600">
                <span className='flex items-center gap-2'><IoMdTrendingUp /> {job.level}</span>
                <span className='flex items-center gap-2'><CiClock2 /> {job.type}</span>
                <span className='flex items-center gap-2'><CiLocationOn /> {job.location}</span>
              </div>
            </div>

            {/* Separate div for price and buttons */}
            <div className='flex justify-between items-center mt-6 px-2'>
              <p className="text-lg font-semibold">{job.salary}</p>
              <div className="flex justify-between items-center gap-4">
                <button className="bg-[#004B9C] text-white py-1 px-4 rounded-full">
                  <a href="/login">Apply</a>
                </button>
                <button className="border border-[#004B9C] text-[#004B9C] py-1 px-4 rounded-full">
                  <a href="/login">Details</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;
