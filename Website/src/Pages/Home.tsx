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

const Home: React.FC = () => {
    return (
      <div className="w-full max-w-[1400px] mx-auto h-full">
        <div className='bg-gradient-to-r from-[#F3F7FE] to-[#ffffff]'>
          <Hero />
        </div>
        <Company />
        <Jobs />
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
  