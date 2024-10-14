import React from 'react';
import Hero from '../Components/Hero';
import Company from '../Components/Company';
import Jobs from '../Components/Jobs';
import Apply from '../Components/Apply';
import CardsHover from '../Components/CardHover';
import Grid from '../Components/Grid';

const Home: React.FC = () => {
    return (
      <div className="w-full h-full">
        <div className='bg-gradient-to-r from-[#F3F7FE] to-[#ffffff]'>
          <Hero />
        </div>
        <Company />
        <Jobs />
        <Apply />
        <CardsHover />
        <Grid />
      </div>
    );
  };
  
  export default Home;
  