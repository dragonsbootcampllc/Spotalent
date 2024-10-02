// JobsView.jsx
import React from 'react';
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
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
            <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-800">Jobs You Might Be Interested In</h1>
            </div>
            <div className="p-6">
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
                                className="mb-6 p-6 bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md rounded-lg transition-transform transform hover:scale-105"
                            >
                                <div className="mb-4">
                                    <h2 className='text-xl font-semibold'>{Jobtitle}</h2>
                                    <p className='text-sm text-purple-200'>{timeOfPost}</p>
                                    <p className='text-sm text-purple-300'>{NumOfCandidates} candidates</p>
                                </div>
                                <p className='py-3 text-purple-100'>
                                    {JobDescription.length > 200
                                        ? JobDescription.slice(0, 200) + "..."
                                        : JobDescription}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {JobType.map((job, index) => (
                                        <span
                                            key={index}
                                            className='px-4 py-1 text-sm rounded-full bg-purple-200 text-purple-800 text-center'
                                        >
                                            {job}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-start md:items-center border-t border-purple-400/20 pt-4'>
                                    <div className='flex flex-col sm:flex-row gap-4'>
                                        <div className='text-sm text-purple-100'>{Salary}</div>
                                        <div className='text-sm text-purple-100'>{Location}</div>
                                    </div>
                                    <div className='text-sm text-purple-300 font-semibold mt-2 md:mt-0'>
                                        {NumOfApplaiers}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    </div>
                ) : (
                    <p className='text-gray-600'>Loading data...</p>
                )}
            </div>
        </div>
    );
};

export default JobsView;
