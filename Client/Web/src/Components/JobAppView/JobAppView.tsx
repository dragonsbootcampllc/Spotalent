import data from "../../Data/JobAppData.json";

const JobsAppView: React.FC = () => {
  return (
    <div className='container mx-auto max-w-[1400px] w-full min-h-screen py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg flex flex-col md:flex-row'>
      {/* Job Data Section */}
      <div className='jobData w-full md:w-5/8 lg:w-5/8 flex-1'>
        {data ? (
          data.map(
            (
              {
                jobData: {
                  Jobtitle,
                  Skills,
                  timeOfPost,
                  JobDescription,
                  Salary,
                  JobType,
                  NumOfCandidates,
                  NumOfApplaiers,
                  Location,
                },
              },
              index: number
            ) => (
              <div key={index} className='p-4 md:p-6 bg-purple-800/50 rounded-lg mb-6 md:mb-8'>
                <div className="head flex flex-col md:flex-row border-b border-purple-400/80 pb-4 mb-4">
                  <div className='flex-1'>
                    <h1 className='text-white font-semibold text-lg md:text-xl'>
                      {Jobtitle}
                    </h1>
                    <p className='text-xs md:text-sm text-purple-300'>
                      {timeOfPost}
                    </p>
                    <p className='text-xs md:text-sm text-purple-200'>
                      {NumOfCandidates}
                    </p>
                  </div>
                  <div className='text-xs md:text-sm text-purple-300 font-semibold flex-shrink-0 mt-2 md:mt-0'>
                    {NumOfApplaiers}
                  </div>
                </div>
                <div className='py-3 text-purple-100 border-b border-purple-400/80'>
                  {JobDescription}
                </div>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 mt-4 border-b border-purple-400/80'>
                  <div className='flex flex-col gap-1'>
                    <div className='text-xs md:text-sm text-purple-100'>{Salary}</div>
                    <div className='text-xs md:text-sm text-purple-100'>{Location}</div>
                  </div>
                  <div className='flex flex-wrap gap-2 mt-2 md:mt-0'>
                    {JobType.map((jobType, index) => (
                      <span key={index} className='px-3 py-1 text-xs md:text-sm rounded-full font-semibold bg-purple-200 text-purple-800 text-center'>
                        {jobType}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className='text-white text-lg md:text-xl py-3'>Skills</h2>
                  <div className='flex flex-wrap gap-2'>
                    {Skills.map((skill, index) => (
                      <span key={index} className='px-3 py-1 text-xs md:text-sm rounded-full font-semibold bg-purple-200 text-purple-800 text-center'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <p className='text-purple-200'>Loading data...</p>
        )}
      </div>

      {/* Recruiter Data Section */}
      <div className='RecruiterData  md:w-3/8 lg:w-3/8 md:border-l border-purple-400/80'>
        {data ? (
          data.map(
            (
              {
                RecruiterData: {
                  RecruiterName,
                  RecruiterPosition,
                  RecruiterLogo,
                  CompanySize,
                  CompanyIndustry,
                  CompanyLocation,
                  NumOfPosts,
                },
              },
              index: number
            ) => (
              <div key={index} className='p-4 md:p-6 bg-purple-800/50 rounded-lg'>
                <div className='flex flex-col gap-4 items-center md:items-start'>
                  <div className='flex justify-center items-center bg-purple-800 text-white px-3 py-2 rounded-full mb-4 hover:bg-purple-800/60 transition-all'>
                    <button className='text-xs md:text-sm'>Apply Now</button>
                  </div>
                  <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                    <div className='flex-shrink-0'>
                      <img
                        src={RecruiterLogo}
                        alt={RecruiterName}
                        className='w-16 h-16 md:w-20 md:h-20 object-cover rounded-full'
                      />
                    </div>
                    <div className='text-center md:text-left'>
                      <h1 className='text-md md:text-lg text-white font-semibold'>{RecruiterName}</h1>
                      <p className='text-xs md:text-sm text-white/70'>{RecruiterPosition}</p>
                      <p className='text-xs md:text-sm text-purple-100'>{CompanyLocation}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <div className='text-xs md:text-sm text-purple-300 font-semibold'>{CompanyIndustry}</div>
                  <p className='text-xs md:text-sm text-purple-300'>{CompanySize}</p>
                  <p className='text-xs md:text-sm text-purple-200 mt-2'>{NumOfPosts} Job posted</p>
                </div>
              </div>
            )
          )
        ) : (
          <p className='text-purple-200'>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default JobsAppView;
