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
        <div className='container mx-auto max-w-[800px] my-10  '>
            <div className="header font-bold text-3xl mb-6">
                <h1>Job you might be interested in</h1>
            </div>
            <div className="content">
                {data ? (
                    <div>
                        {data.map(({ Jobtitle, timeOfPost, JobDescription, Salary, JobType, NumOfCandidates, NumOfApplaiers, Location }: Job, index: number) => (
                            <div key={index}>
                                <div className="head pt-4">
                                    <h1 className='text-black font-semibold'>{Jobtitle}</h1>
                                    <p className='text-[12px] text-black/50'>{timeOfPost}</p>
                                    <p className='text-[12px] text-black/80'>{NumOfCandidates}</p>
                                </div>
                                <div className=' py-3'>
                                    {JobDescription.length > 230
                                        ? JobDescription.slice(0, 230) + "..."
                                        : JobDescription}
                                </div>
                                <div className='flex gap-2'>
                                    {JobType.map((job, index) => (
                                        <div key={index}>
                                            <span className='px-[16px] py-1 w-[140px] h-[40px] text-sm rounded-[20px] font-semibold bg-purple-600/40 text-purple-700/90'>{job}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex border-b border-black/10 justify-between items-center py-4'>
                                    <div className='flex gap-10 justify-between items-center'>
                                        <div className='text-sm'>{Salary}</div>
                                        <div className='text-sm'>{Location}</div>
                                    </div>
                                    <div className='text-sm text-black/60 font-semibold'>{NumOfApplaiers}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </div>
    );
};

export default JobsView;
