import JobCard from "./JobCard";

export default function JobDisplay({ jobs }) {
    return (
        <div className="">

            <div className="">
                {
                    jobs.map((job) => (
                        <JobCard {...job} />
                    ))
                }
            </div>
        </div>
    )
}
