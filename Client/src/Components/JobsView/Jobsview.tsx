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
            <div className="text-purple-200 font-bold text-3xl mb-6">
                <h1 className='text-[clamp(1.5rem,4vw,2rem)]'>Jobs you might be interested in</h1>
            </div>
            <div>
                {data ? (
                    <div>
                        {data.map(({
                            Jobtitle,
                            timeOfPost,
                            JobDescription,
                            Salary,
                            JobType,
                            NumOfCandidates,
                            NumOfApplaiers,
                            Location
                        }: Job, index: number) => (
                            <div
                                key={index}
                                className="mb-8 p-6 bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg rounded-lg hover:scale-105 transition-transform"
                                style={{ transform: 'scale(1)' }}
                            >
                                <div className="mb-4">
                                    <h1 className='text-white font-semibold text-xl'>{Jobtitle}</h1>
                                    <p className='text-xs text-purple-300'>{timeOfPost}</p>
                                    <p className='text-xs text-purple-200'>{NumOfCandidates} candidates</p>
                                </div>
                                <div className='py-3 text-purple-100'>
                                    {JobDescription.length > 230
                                        ? JobDescription.slice(0, 230) + "..."
                                        : JobDescription}
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {JobType.map((job, index) => (
                                        <span
                                            key={index}
                                            className='px-4 py-1 text-sm rounded-full bg-purple-200 text-purple-800 text-center'
                                        >
                                            {job}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex flex-col md:flex-row border-t border-purple-400/20 justify-between items-start md:items-center py-4 mt-4'>
                                    <div className='flex flex-col sm:flex-row gap-4 md:gap-10'>
                                        <div className='text-sm text-purple-100'>{Salary}</div>
                                        <div className='text-sm text-purple-100'>{Location}</div>
                                    </div>
                                    <div className='text-sm text-purple-300 font-semibold mt-2 md:mt-0'>
                                        {NumOfApplaiers}
                                    </div>
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
