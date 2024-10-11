import JobCard from "./JobCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Style/SwiperStyle.css';


interface Job {
  logo: any;
  jobType: string;
  title: string;
  description: string;
  
}

interface JobDisplayProps {
  jobs: Job[];
}

const JobDisplay: React.FC<JobDisplayProps> = ({ jobs }) => {
  return (
    <div className="w-full h-fit">
            <div className="flex justify-center text-black sm:text-3xl text-xl font-semibold mb-10">
              <div className="text-center sm:w-[40%] w-[100%]">
              Top applied Jobs on our platform spot talent this mounth
              </div>
            </div>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={55}
              className="mySwiper"
            >
              {jobs.map((job, index) => (
                <SwiperSlide key={index}>
                  <JobCard {...job} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="w-full flex flex-row justify-end my-5 mr-5">
              <button className="rounded-3xl bg-[#004B9C] text-white px-10 py-2 hover:bg-[#004b9c7a]">
                See More
              </button>
            </div>
    </div>

   
   
  );
};

export default JobDisplay;
