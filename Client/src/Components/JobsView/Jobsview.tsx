import data from '../../Data/JobsView.json';

interface Job {
    Jobtitle: string;
    timeOfPost: string;
    JobDescription: string;
    Salary: string;
    JobType: string[];
    NumOfCandidates: string;
    NumOfApplaiers: string;
    Location: string;
}

const JobsView: React.FC = () => {
    return (
        <div className='container mx-auto max-w-[800px] py-4 px-4 sm:px-6 lg:px-8'>
            <div className="header text-purple-200 font-bold text-3xl mb-6">
                <h1>Jobs you might be interested in</h1>
            </div>
            <div className="content">
                {data ? (
                    <div>
                        {data.map(({ Jobtitle, timeOfPost, JobDescription, Salary, JobType, NumOfCandidates, NumOfApplaiers, Location }: Job, index: number) => (
                            <div key={index} className="mb-8 p-6 bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg rounded-lg hover:scale-[1.01] transition-all ">
                                <div className="head">
                                    <h1 className='text-white font-semibold text-xl'>{Jobtitle}</h1>
                                    <p className='text-[12px] text-purple-300'>{timeOfPost}</p>
                                    <p className='text-[12px] text-purple-200'>{NumOfCandidates} candidates</p>
                                </div>
                                <div className='py-3 text-purple-100'>
                                    {JobDescription.length > 230
                                        ? JobDescription.slice(0, 230) + "..."
                                        : JobDescription}
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {JobType.map((job, index) => (
                                        <div key={index}>
                                            <span className='px-[16px] py-1 w-full sm:w-[140px] h-[40px] text-sm rounded-[20px] font-semibold bg-purple-200 text-purple-800 text-center'>
                                                {job}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col md:flex-row border-t border-purple-400/20 justify-between items-start md:items-center py-4 mt-4'>
                                    <div className='flex flex-col sm:flex-row gap-4 md:gap-10'>
                                        <div className='text-sm text-purple-100'>{Salary}</div>
                                        <div className='text-sm text-purple-100'>{Location}</div>
                                    </div>
                                    <div className='text-sm text-purple-300 font-semibold mt-2 md:mt-0'>{NumOfApplaiers} </div>
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
