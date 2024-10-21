import React from 'react';
import Hero from '../Components/Hero';
import Company from '../Components/Company';
import Jobs from '../Components/Jobs';
import Apply from '../Components/Apply';
import CardsHover from '../Components/CardHover';
import Grid from '../Components/Grid';
import Comments from '../Components/Comments';
import Pricing from '../Components/Pricing';
import Subscribe from '../Components/Subscribe';
import FAQSection from '../Components/FAQ';
import Footer from '../Components/Footer';
import google from "/Images/google.svg";
import gmail from "/Images/gmail.svg";
import steam from "/Images/steam.svg";
import edge from "/Images/edge.svg";
import netflix from "/Images/netflix.svg";


const Home: React.FC = () => {
    return (
      <div className="w-full max-w-[1400px] mx-auto h-full">
        <div className='w-full'>
          <Hero />
        </div>
        <Company />
        <Jobs 
          jobs={[
            {
              id: "1",
              company: "Google",
              title: "Software Engineer",
              tags: ["Marketing", "Sales", "Engineering"],
              salary: "$120,000",
              datePosted: "2 days ago",
              logo: google,
              level: "Senior",
              location: "Egypt",
              type: "Full-time",
            },
            {
              id: "2",
              company: "Steam",
              title: "Software Engineer",
              tags: ["Gaming", "Sales", "Engineering"],
              salary: "$120,000",
              datePosted: "10 Jan 24",
              logo: steam,
              level: "Senior",
              location: "Egypt",
              type: "Full-time",
            },
            {
              id: "3",
              company: "Gmail",
              title: "Software Engineer",
              tags: ["Marketing", "Sales", "Engineering"],
              salary: "$200-$300",
              datePosted: "2 days ago",
              logo: gmail,
              level: "Senior",
              location: "Europe",
              type: "Full-time",
            },
            {
              id: "4",
              company: "Microsoft Edge",
              title: "Software Engineer",
              tags: ["Marketing", "Sales", "Engineering"],
              salary: "$200-$300",
              datePosted: "2 days ago",
              logo: edge,
              level: "Senior",
              location: "Saudi",
              type: "Full-time",
            },
            {
              id: "5",
              company: "Netflix",
              title: "Software Engineer",
              tags: ["Marketing", "Sales", "Engineering"],
              salary: "$200-$300",
              datePosted: "2 days ago",
              logo: netflix,
              level: "Senior",
              location: "UK",
              type: "Full-time",
            },
            {
              id: "6",
              company: "Facebook",
              title: "Frontend Engineer",
              tags: ["Marketing", "Sales", "Engineering"],
              salary: "$200-$300",
              datePosted: "2 days ago",
              logo: google,
              level: "Senior",
              location: "Remote",
              type: "Full-time",
            }
          ]}
          selectedTags={[
            "Marketing",
            "Sales",
            "Engineering",
            "Design",
            "Product",
          ]}
        />
        <Apply />
        <CardsHover />
        <Grid />
        <Comments />
        <Pricing />
        <Subscribe />
        <FAQSection />
        <Footer />
      </div>
    );
  };
  
  export default Home;
  