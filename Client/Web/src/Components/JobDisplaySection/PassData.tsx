import { Job1, Job2,Job3,Job4} from "./Images";
import JobDisplay from "./JobDisplay";
const jobs = [
    {
      logo: (<img src={Job1} 
      className="min-w-full min-h-full object-cover" alt="product"/>),
      jobType: "Full-Time",
      title: "Senior Developer",
      description: "Work on exciting projects with a talented team."
    },
    {
      logo: (<img src={Job2} 
      className="min-w-full min-h-full object-cover" alt="product"/>),
      jobType: "Part-Time",
      title: "Junior Designer",
      description: "Create amazing visuals for our clients."
    },
    {
        logo:( <img src={Job3} 
        className="min-w-full min-h-full object-cover" alt="product"/>),
        jobType: "Full-Time",
        title: "Senior Developer",
        description: "Work on exciting projects with a talented team."
      },
      {
        logo: (<img src={Job4} 
        className="min-w-full min-h-full object-cover" alt="product"/>),
        jobType: "Part-Time",
        title: "Junior Designer",
        description: "Create amazing visuals for our clients."
      },
      {
        logo: (<img src={Job4} 
        className="min-w-full min-h-full object-cover" alt="product"/>),
        jobType: "Part-Time",
        title: "Junior Designer",
        description: "Create amazing visuals for our clients."
      },
      {
        logo: (<img src={Job4} 
        className="min-w-full min-h-full object-cover" alt="product"/>),
        jobType: "Part-Time",
        title: "Junior Designer",
        description: "Create amazing visuals for our clients."
      },
      {
        logo: (<img src={Job4} 
        className="min-w-full min-h-full object-cover" alt="product"/>),
        jobType: "Part-Time",
        title: "Junior Designer",
        description: "Create amazing visuals for our clients."
      }
  ];
  export default function PassData(){
    return(
      <JobDisplay jobs={jobs} />
    );
  }
 