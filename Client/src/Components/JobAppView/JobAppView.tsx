import data from '../../Data/JobAppData.json';

interface Job {
    Jobtitle: string;
    timeOfPost: string;
    JobDescription: string;
    Salary: string;
    JobType: string[];
    NumOfCandidates: string;
    NumOfApplaiers: string;
    Location: string;
    Skills: string[];
}

interface Recruiter {
    Company: string;
    CompanyLogo: string;
    CompanySize: string;
    CompanyType: string;
    CompanyIndustry: string;
    CompanyLocation: string;
    CompanyWebsite: string;
}

const JobsView: React.FC = () => {
    return (
        <div className='container bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg rounded-lg grid grid-cols-5 mx-auto py-4 px-4 sm:px-6 lg:px-8'>
            <div className="jobData col-span-3">
                {data ? (
                    <div>
                        {data.map(({ jobData: { Jobtitle, Skills, timeOfPost, JobDescription, Salary, JobType, NumOfCandidates, NumOfApplaiers, Location } }, index: number) => (
                            <div key={index} className="mb-8 p-6 rounded-lg">
                                <div className="head flex flex-col md:flex-row border-b border-purple-400/80 justify-between items-start md:items-center py-4 mt-4'">
                                    <div className="left">
                                        <h1 className='text-white font-semibold text-xl'>{Jobtitle}</h1>
                                        <p className='text-[12px] text-purple-300'>{timeOfPost}</p>
                                        <p className='text-[12px] text-purple-200'>{NumOfCandidates}</p>
                                    </div>
                                    <div className='right text-sm text-purple-300 font-semibold mt-2 md:mt-0'>{NumOfApplaiers}</div>
                                </div>
                                <div className='py-3 text-purple-100 border-b border-purple-400/80'>
                                    {JobDescription}
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 mt-4 border-b border-purple-400/80'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='text-sm text-purple-100'>{Salary}</div>
                                        <div className='text-sm text-purple-100'>{Location}</div>
                                    </div>
                                    {JobType.map((jobType, index) => (
                                        <div key={index}>
                                            <span className='px-[16px] py-1 w-full sm:w-[140px] h-[40px] text-sm rounded-[20px] font-semibold bg-purple-200 text-purple-800 text-center'>
                                                {jobType}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {Skills.map((skill, index) => (
                                    <div key={index} className='flex py-4 mt-4'>
                                        <span className='px-[16px] py-1 w-full sm:w-[140px] h-[40px] text-sm rounded-[20px] font-semibold bg-purple-200 text-purple-800 text-center'>
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-purple-200'>Loading data...</p>
                )}
            </div>
            <div className="RecruiterData col-span-2">
                {data ? (
                    <div>
                        {data.map(({ RecruiterData: { Company, CompanyLogo, CompanyType, CompanyIndustry, CompanyLocation, CompanyWebsite } }, index: number) => (
                            <div key={index} className="mb-8 p-6">
                                <div className="head flex flex-col md:flex-row border-b border-purple-400/40 justify-between items-start md:items-center py-4 mt-4'">
                                    <div className="left">
                                        <h1 className='text-white font-semibold text-xl'>{Company}</h1>
                                        <p className='text-[12px] text-purple-300'>{CompanyType}</p>
                                    </div>
                                    <div className='right text-sm text-purple-300 font-semibold mt-2 md:mt-0'>{CompanyIndustry}</div>
                                </div>
                                <div className='py-3 text-purple-100 border-b border-purple-400/40'>
                                    <img src={CompanyLogo} alt={Company} className='w-24 h-24 rounded-full' />
                                </div>
                                <div className='text-sm text-purple-100 mt-4'>
                                    Location: {CompanyLocation}
                                </div>
                                <div className='text-sm text-purple-100 mt-2'>
                                    Website: <a href={CompanyWebsite} className='text-purple-200 underline'>{CompanyWebsite}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-purple-200'>Loading data...</p>
                )}
            </div>
        </div>
    );
};

export default JobsView;
