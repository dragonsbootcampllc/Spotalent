import UpRightArrowIcon from "../../assets/Icons/UpRightArrowIcon";
interface Job {
    logo: any;
    jobType: string;
    title: string;
    description: string;
    
  }
export default function JobCard(job : Job){
    return(
        <div className="rounded-xl shadow w-full h-[90%]">
            <div className="flex flex-row justify-between m-5 h-[20%]">
                <div style={{width:"50px",height:"50px"}}>
                    {job.logo}
                </div>
                <div className="text-[#7B66FF] mt-2">
                    {job.jobType}
                </div>
            </div>
            <div className="text-[#004B9C] text-xl font-semibold text-left m-5">
                {job.title}
            </div>
            <div className="text-left m-5 h-[28%]">
                {job.description}
            </div>
            <div >
                <a href="#" className="text-[#004B9C] text-sm flex flex-row m-5" >
                    More Details 
                    <span style={{width:"15px",height:"15px"}} className="ml-2 mt-1">
                        <UpRightArrowIcon />
                </span>
                </a>

            </div>
        </div>
    );
}
