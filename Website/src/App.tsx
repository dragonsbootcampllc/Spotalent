import React from 'react';
import Hero from './Components/Hero';

const App: React.FC = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className='bg-gradient-to-r from-[#F3F7FE] to-[#ffffff]'>
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
