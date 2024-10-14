import React from "react";
import apply from "../../public/Images/apply.png";

const Apply: React.FC = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-center max-w-2xl mx-auto text-3xl font-semibold mb-8 px-16">How to start your journey of applying your Dream job</h2>

      <div className="flex items-center justify-center gap-8 px-6">
        <img src={apply} alt="" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 rounded-3xl shadow-lg p-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#036BDC] text-white font-semibold text-2xl rounded-md w-8 h-8 flex items-center justify-center">1</div>
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. non cum quaerat enim consectetur perferendis?</p>
          </div>
          <div className="flex items-center gap-2 px-6">
            <div className="bg-gray-400 text-white font-semibold text-2xl rounded-md w-8 h-8 flex items-center justify-center">1</div>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="flex items-center gap-2 px-6">
            <div className="bg-gray-400 text-white font-semibold text-2xl rounded-md w-8 h-8 flex items-center justify-center">1</div>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="flex items-center gap-2 px-6">
            <div className="bg-gray-400 text-white font-semibold text-2xl rounded-md w-8 h-8 flex items-center justify-center">1</div>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
