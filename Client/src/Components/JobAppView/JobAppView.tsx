import data from "../../Data/JobAppData.json";


const JobsView: React.FC = () => {
    return (
        <div className="container flex  flex-col-reverse md:flex-row  bg-gradient-to-r min-h-screen from-purple-700 to-purple-500 shadow-lg  mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="jobData sm:w-full md:w-2/3">
                {data ? (
                    <div>
                        {data.map(
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
                                <div key={index} className=" p-6">
                                    <div className="head flex flex-col md:flex-row border-b border-purple-400/80 justify-between items-start md:items-center py-4 mt-4'">
                                        <div className="left">
                                            <h1 className="text-white font-semibold text-xl">
                                                {Jobtitle}
                                            </h1>
                                            <p className="text-[12px] text-purple-300">
                                                {timeOfPost}
                                            </p>
                                            <p className="text-[12px] text-purple-200">
                                                {NumOfCandidates}
                                            </p>
                                        </div>
                                        <div className="right text-sm text-purple-300 font-semibold mt-2 md:mt-0">
                                            {NumOfApplaiers}
                                        </div>
                                    </div>
                                    <div className="py-3 text-purple-100 border-b border-purple-400/80">
                                        {JobDescription}
                                    </div>
                                    <div className="flex  md:flex-row justify-between items-center py-4 mt-4 border-b border-purple-400/80">
                                        <div className="flex flex-col gap-1">
                                            <div className="text-sm text-purple-100">{Salary}</div>
                                            <div className="text-sm text-purple-100">{Location}</div>
                                        </div>
                                        {JobType.map((jobType, index) => (
                                            <div key={index}>
                                                <span className="px-[16px] py-1 w-full sm:w-[140px] h-[40px] text-sm rounded-[20px] font-semibold bg-purple-200 text-purple-800 text-center">
                                                    {jobType}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="cont">
                                        <h2 className="text-white py-3 ">Skills</h2>
                                        <div className="all flex flex-wrap gap-2 ">
                                            {Skills.map((skill, index) => (
                                                <div key={index} className="">
                                                    <span className="px-[16px] py-1 w-[140px] h-[40px] text-sm rounded-[20px] font-semibold bg-purple-200 text-purple-800 text-center">
                                                        {skill}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    <p className="text-purple-200">Loading data...</p>
                )}
            </div>
            <div className="RecruiterData sm:border-b-0 md:border-l border-purple-400/80">
                {data ? (
                    <div>
                        {data.map(
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
                                <div key={index} className=" p-6 w-full ">
                                    <div className="flex justify-center items-center bg-purple-800 text-white px-3 py-2 hover:bg-purple-800/60 transition-all rounded-[20px]">
                                        <button className="">Apply Now</button>
                                    </div>

                                    <div className="block1 my-3">
                                        <h1 className="text-xl text-white font-semibold">
                                            About the Client
                                        </h1>
                                        <div className=" flex flex-row gap-3 items-center  mt-4'">
                                            <div className="left">
                                                <div className="py-3 text-purple-100 ">
                                                    <img
                                                        src={RecruiterLogo}
                                                        alt={RecruiterName}
                                                        className="w-24 h-24 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="right">
                                                <h1 className=" text-white font-semibold text-xl">
                                                    {RecruiterName}
                                                </h1>
                                                <p className=" text-white/70 text-sm">
                                                    {RecruiterPosition}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-sm text-purple-100 ">
                                            {CompanyLocation}
                                        </div>
                                    </div>

                                    <div className="block2">
                                        <div className=" text-sm text-purple-300 font-semibold mt-2 md:mt-0">
                                            {CompanyIndustry}
                                        </div>
                                        <p className="text-[12px] text-purple-300">{CompanySize}</p>
                                        <p className="text-purple-200 text-sm mt-2">{NumOfPosts} Job posted</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    <p className="text-purple-200">Loading data...</p>
                )}
            </div>
        </div>
    );
};

export default JobsView;
