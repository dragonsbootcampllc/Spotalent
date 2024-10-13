import React from "react";

// JobCard Component
interface JobCardProps {
  logo: React.ReactNode;
  jobType: string;
  title: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ logo, jobType, title, description }) => {
  return (
    <div className="flex flex-col items-start justify-between bg-white rounded-lg shadow-md p-4  max-w-60">
      <div className="flex items-center justify-between w-full">
        <div className="w-10 h-10">{logo}</div>

        <span className="text-[#7B66FF] text-sm px-2 py-1 rounded-full">{jobType}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-[#004B9C]">{title}</h3>

      <p className="text-sm mt-2">{description}</p>

      <a href="#" className="mt-4 text-[#004B9C] font-medium hover:underline">
        More Details &rarr;
      </a>
    </div>
  );
};

// JobDisplay Component
interface JobDisplayProps {
  jobs: {
    logo: React.ReactNode;
    jobType: string;
    title: string;
    description: string;
  }[];
}

const JobDisplay: React.FC<JobDisplayProps> = ({ jobs }) => {
  return (
    <section className="py-8">
      <h2 className="text-center text-2xl max-sm:px-10 md:max-w-96 mx-auto font-bold mb-8">
        Top applied Jobs on our platform spot talent this month
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            logo={job.logo}
            jobType={job.jobType}
            title={job.title}
            description={job.description}
          />
        ))}
      </div>

      <div className="flex justify-end px-32 mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          See More
        </button>
      </div>
    </section>
  );
};

const jobs = [
  {
    logo: <img src="../../public/Images/appstore.svg" alt="Company 1" />,
    jobType: "Full Time",
    title: "Email Marketing",
    description: "Join our team as an Email Marketing Specialist and lead our digital efforts.",
  },
  {
    logo: <img src="../../public/Images/gmail.svg" alt="Company 2" />,
    jobType: "Full Time",
    title: "Email Marketing",
    description: "Join our team as an Email Marketing Specialist and lead our digital efforts.",
  },
  {
    logo: <img src="../../public/Images/google.svg" alt="Company 3" />,
    jobType: "Full Time",
    title: "Email Marketing",
    description: "Join our team as an Email Marketing Specialist and lead our digital efforts.",
  },
  {
    logo: <img src="../../public/Images/figma.svg" alt="Company 4" />,
    jobType: "Full Time",
    title: "Email Marketing",
    description: "Join our team as an Email Marketing Specialist and lead our digital efforts.",
  },
];

const App = () => {
  return <JobDisplay jobs={jobs} />;
};

export default App;
