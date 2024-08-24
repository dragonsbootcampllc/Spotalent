import React from 'react';


type JobPostProps = {
  title: string;
  timePosted: string;
  candidates: number;
  description: string;
  jobTypes: string[];
  salary: string;
  location: string;
  appliedCount: number;
};

const JobPost: React.FC<JobPostProps> = ({
  title,
  timePosted,
  candidates,
  description,
  jobTypes,
  salary,
  location,
  appliedCount,
}) => {
  return (
    <div className="p-4 mb-4 border-b-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm font-semibold text-white bg-gray-700 rounded-full transition duration-300 hover:bg-gray-700">
            edit
          </button>
          <button className="px-3 py-1 text-sm font-semibold text-white bg-gray-900 rounded-full transition duration-300 hover:bg-red-500">
            delete
          </button>
        </div>
      </div>
      <div>
        <p className='text-sm text-gray-500'>Posted {timePosted} ago·</p>
        <p className='font-medium'> {candidates} Candidates</p>
      </div>
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="mt-2 flex space-x-2">
        {jobTypes.map((type) => (
          <span
            key={type}
            className="px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full"
          >
            {type}
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center text-gray-700">
        <div className="font-semibold">{salary}</div>
        <ul className='flex stars'>
          <li className='text-purple-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>

          </li>
          <li className='text-purple-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>

          </li>
          <li className='text-purple-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>

          </li>
          <li className='text-purple-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>

          </li>
          <li className='text-purple-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>

          </li>
        </ul>

        <span className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>

          {location}
        </span>
        <span>{appliedCount} Applied</span>
      </div>
    </div>
  );
};

const MyJobPosts: React.FC = () => {
  const jobPosts = [
    {
      title: 'Job post title',
      timePosted: '3 hours',
      candidates: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur. Tristique et integer tortor viverra at in ultricies. Velit elementum pharetra vel morbi. Cras ut mauris eu tincidunt at dictum convallis. Vestibulum posuere sed cursus consequat in sem fringilla tellus. Sit risus egestas turpis.',
      jobTypes: ['Internship', 'Full-time job', 'Part-time job'],
      salary: '$100.00',
      location: 'Egypt',
      appliedCount: 79,
    },
    {
      title: 'Job post title',
      timePosted: '3 hours',
      candidates: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur. Tristique et integer tortor viverra at in ultricies. Velit elementum pharetra vel morbi. Cras ut mauris eu tincidunt at dictum convallis. Vestibulum posuere sed cursus consequat in sem fringilla tellus. Sit risus egestas turpis.',
      jobTypes: ['Internship', 'Full-time job', 'Part-time job'],
      salary: '$100.00',
      location: 'Egypt',
      appliedCount: 79,
    }, 
    {
      title: 'Job post title',
      timePosted: '3 hours',
      candidates: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur. Tristique et integer tortor viverra at in ultricies. Velit elementum pharetra vel morbi. Cras ut mauris eu tincidunt at dictum convallis. Vestibulum posuere sed cursus consequat in sem fringilla tellus. Sit risus egestas turpis.',
      jobTypes: ['Internship', 'Full-time job', 'Part-time job'],
      salary: '$100.00',
      location: 'Egypt',
      appliedCount: 79,
    },
  ];

  return (
<section className="p-8 sm:p-16 bg-slate-200">
<div className="min-h-screen flex  flex-col-reverse md:flex-row justify-end shadow bg-gray-100">
      <div className="md:w-3/4 p-6 bg-white shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">My job posts</h1>
          <a href="#" className="text-sm font-semibold transition duration-300 hover:text-gray-700">
            View all
          </a>
        </div>
        {jobPosts.map((post, index) => (
          <JobPost key={index} {...post} />
        ))}
      </div>
      <div className="md:w-1/4  flex flex-col-reverse md:flex-col bg-white p-6 shadow-md ">
        <div className="flex  fixed bottom-0 left-0 w-full z-10 bg-white p-4  md:static md:mt-0 items-center space-x-2">
          <ul className='w-full flex justify-center md:block boorder-none md:border-b-2 border-slate-400 p-0 md:pb-2 '>
            <li className='p-3 hover:bg-purple-200 cursor-pointer transition duration-300 px-2 py-1 flex gap-1  text-nowrap md:text-base md:text-wrap'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>
              Add a post</li>
            <li className=' hover:bg-purple-200 cursor-pointer transition duration-300 px-2 py-1 flex gap-1 text-nowrap md:text-base md:text-wrap'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 md:size-5">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
              </svg>

              Edit a post</li>
            <li className='transition cursor-pointer duration-300 hover:bg-purple-200 px-2 py-1 flex gap-1  text-nowrap md:text-base md:text-wrap'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>

              Delete a post</li>
          </ul>
        </div>
        <div className="mt-1 md:mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">About me</h2>
            <a href="#" className='text-sm font-semibold text-gray-500 transition duration-300 hover:text-gray-700 underline me-3' >More</a>
          </div>
          <div className="flex justify-between md:block">
            <div className="flex-col flex md:flex-row">
             <div className="flex justify-center md:justify-normal">
             <img
                className="w-16  h-16 text-center rounded-full"
                src="https://via.placeholder.com/150"
                alt="User avatar"
              />
             </div>
              <div className="p-2 flex flex-col justify-between">
                <h3 className="text-sm font-semibold">First Last Name</h3>
                <ul className='flex stars mt-3'>
                  <li className='text-purple-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>

                  </li>
                  <li className='text-purple-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>

                  </li>
                  <li className='text-purple-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>

                  </li>
                  <li className='text-purple-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>

                  </li>
                  <li className='text-purple-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>

                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center mt-2 space-x-3">
              <div>
                <h1 className="font-semibold my-2">Egypt</h1>
                <h3 className="text-normal">Tech & IT</h3>
                <p className="text-sm text-gray-500">Big company (200-500 emp.)</p>
                <h1 className="font-semibold my-2">33 job posted</h1>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

</section>  );
};

export default MyJobPosts;
