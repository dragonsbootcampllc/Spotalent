import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { IoMdTrendingUp } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
        {filteredJobs.map((job, index) => (
          <div key={job.id} className="p-4 bg-white rounded-3xl border border-black">
            <div className={`p-4 rounded-3xl ${bgColors[index % bgColors.length]}`}>
              <div className="flex justify-between items-center">
                <span className="bg-white px-3 py-1 rounded-full text-sm">{job.datePosted}</span>
                <div className="h-10 w-10 rounded-full cursor-not-allowed bg-white flex items-center justify-center">
                  <a href="/login" className='text-[#036BDC] cursor-not-allowed'><CiBookmark size={22} /></a>
                </div>
              </div>

              <p className="mt-4 text-lg">{job.company}</p>
              <div className='flex justify-between items-center mt-2'>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{job.title}</h3>
                <img src={job.logo} alt="" className='rounded-full h-10 w-10 sm:h-12 sm:w-12' />
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

            <div className='flex flex-col sm:flex-row justify-between items-center mt-6 px-2'>
              <p className="text-lg font-semibold mb-4 sm:mb-0">{job.salary}</p>
              <div className="flex justify-between items-center gap-4">
                <button className="bg-[#004B9C] text-white py-2 px-4 rounded-full cursor-not-allowed">
                  <a href="/login" className="cursor-not-allowed">Apply</a>
                </button>
                <button className="border border-[#004B9C] cursor-not-allowed text-[#004B9C] py-2 px-4 rounded-full">
                  <a href="/login" className='cursor-not-allowed'>Details</a>
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
