import React from 'react';
import Hero from './Components/Hero';
import Company from './Components/Company';
import Jobs from './Components/Jobs';

const App: React.FC = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className='bg-gradient-to-r from-[#F3F7FE] to-[#ffffff]'>
          <Hero />
        </div>
        <Company />
        <Jobs />
      </div>
    </>
  );
}

export default App;
