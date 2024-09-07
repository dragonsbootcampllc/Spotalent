import FlitersSidebar from "../Components/Bars/FlitersSidebar";
import JobDisplayCard, { JobDisplayCardProps } from "../Components/Cards/JobDisplayCard";

export default function Home() {
  // const [sidebarProps, setSidebarProps] = useState<FlitersSidebarProps>({});
  // useEffect(() => {
  // }, []);


  // const title: string = "Available Jobs";
  const cards_data: JobDisplayCardProps[] = [
    {
      "title": "Senior Frontend Developer",
      "companyName": "Tech Innovations Ltd.",
      "location": "New York, NY",
      "jobTime": "Full-time",
      "salary": "$120,000 - $140,000",
      "timePosted": new Date("2024-08-26T14:00:00Z"),
      "jobType": ["Engineering", "Frontend", "React"],
      "tags": ["JavaScript", "React", "CSS", "HTML"],
      "isFavorite": true
    },
    {
      "title": "Marketing Coordinator",
      "companyName": "Bright Media",
      "location": "San Francisco, CA",
      "jobTime": "Part-time",
      "salary": "$45,000 - $55,000",
      "timePosted": new Date("2024-08-26T09:30:00Z"),
      "jobType": ["Marketing", "Coordinator"],
      "tags": ["SEO", "Content Creation", "Social Media"],
      "isFavorite": false
    },
    {
      "title": "Data Analyst",
      "companyName": "Insight Analytics",
      "location": "Chicago, IL",
      "jobTime": "Contract",
      "salary": "$80,000 - $100,000",
      "timePosted": new Date("2024-08-25T17:45:00Z"),
      "jobType": ["Data", "Analysis"],
      "tags": ["Python", "SQL", "Data Visualization"],
      "isFavorite": false
    },
    {
      "title": "Product Manager",
      "companyName": "Global Solutions",
      "location": "Remote",
      "jobTime": "Full-time",
      "salary": "$110,000 - $130,000",
      "timePosted": new Date("2024-08-20T11:15:00Z"),
      "jobType": ["Product Management"],
      "tags": ["Agile", "Scrum", "Leadership"],
      "isFavorite": true
    },
    {
      "title": "UX/UI Designer",
      "companyName": "Creative Minds Studio",
      "location": "Austin, TX",
      "jobTime": "Full-time",
      "salary": "$90,000 - $105,000",
      "timePosted": new Date("2024-08-18T13:00:00Z"),
      "jobType": ["Design", "UX/UI"],
      "tags": ["Figma", "Sketch", "Adobe XD"],
      "isFavorite": false
    },
    {
      "title": "DevOps Engineer",
      "companyName": "CloudSync Technologies",
      "location": "Seattle, WA",
      "jobTime": "Full-time",
      "salary": "$115,000 - $135,000",
      "timePosted": new Date("2024-08-15T07:00:00Z"),
      "jobType": ["DevOps", "Engineering"],
      "tags": ["AWS", "Docker", "CI/CD"],
      "isFavorite": true
    },
    {
      "title": "Sales Representative",
      "companyName": "SalesBoost",
      "location": "Boston, MA",
      "jobTime": "Part-time",
      "salary": "$50,000 - $60,000",
      "timePosted": new Date("2024-08-14T16:30:00Z"),
      "jobType": ["Sales", "Customer Relations"],
      "tags": ["CRM", "Cold Calling", "Negotiation"],
      "isFavorite": false
    },
    {
      "title": "Backend Developer",
      "companyName": "NextGen Web Services",
      "location": "Los Angeles, CA",
      "jobTime": "Full-time",
      "salary": "$110,000 - $130,000",
      "timePosted": new Date("2024-08-10T10:00:00Z"),
      "jobType": ["Engineering", "Backend"],
      "tags": ["Node.js", "Express", "MongoDB"],
      "isFavorite": true
    },
    {
      "title": "Graphic Designer",
      "companyName": "DesignHub",
      "location": "Miami, FL",
      "jobTime": "Contract",
      "salary": "$70,000 - $85,000",
      "timePosted": new Date("2024-07-30T15:00:00Z"),
      "jobType": ["Design", "Graphics"],
      "tags": ["Photoshop", "Illustrator", "InDesign"],
      "isFavorite": false
    },
    {
      "title": "Human Resources Manager",
      "companyName": "Enterprise Solutions",
      "location": "Houston, TX",
      "jobTime": "Full-time",
      "salary": "$95,000 - $115,000",
      "timePosted": new Date("2024-07-25T12:00:00Z"),
      "jobType": ["HR", "Management"],
      "tags": ["Recruiting", "Employee Relations", "Compliance"],
      "isFavorite": true
    }
  ];

  return (
    <div className="flex w-full h-[calc(100vh-49px)]">
      <FlitersSidebar />

      <div className="w-full h-full bg-blue-100 overflow-x-hidden overflow-y-auto">
        <div className="w-full relative flex flex-col">
          <div className="w-full border-slate-300 border-b-4 flex-none h-44 px-20 sticky z-40 flex justify-start gap-20 items-center top-0 bg-neutral-900/40">
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Label placeholder</span>
              <span className="rounded-md p-2 text-xl min-w-72 inline-block border border-slate-800">Input placeholder</span>
            </label>
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Label placeholder</span>
              <span className="rounded-md p-2 text-xl min-w-72 inline-block border border-slate-800">Input placeholder</span>
            </label>
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Label placeholder</span>
              <span className="rounded-md p-2 text-xl min-w-72 inline-block border border-slate-800">Input placeholder</span>
            </label>
          </div>

          <div className="w-full flex flex-wrap justify-around p-5 gap-5 box-border">
            {
              cards_data.map(data => (
                <JobDisplayCard {...data} />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

