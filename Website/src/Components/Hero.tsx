import React from "react";
import moha from "../../public/Images/Mohamed_Ali.jpg";
import ahmed from "../../public/Images/AhmedSherif.jpeg";
import faisool from "../../public/Images/Faysool.jpg";
import nageh from "../../public/Images/Ahmed_Nageh.jpg";
import mohab from "../../public/Images/Mohab_Mohammed.jpg";
import tarek from "../../public/Images/Ahmed_tarek.jpg";

const imagesTop = [
  { src: ahmed, alt: "Ahmed Sherif" },
  { src: moha, alt: "Mohamed Ali" },
  { src: faisool, alt: "Faisool" },
];

const imagesBottom = [
  { src: nageh, alt: "Ahmed Nageh" },
  { src: mohab, alt: "Mohab Mohammed" },
  { src: tarek, alt: "Ahmed Tarek" },
];

const Hero: React.FC = () => {
  return (
    <div className="w-full mb-10 max-md:mb-5 px-4">
      <div>
        <h1 className="text-8xl max-md:text-4xl pt-36 max-md:pt-28 md:px-24 lg:px-28 pb-4 font-bold text-center">
          Take{" "}
          <div className="inline-block">
            <div className="flex">
              {imagesTop.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-16 max-md:w-10 h-16 max-md:h-10 rounded-full hover:scale-125 duration-300 ${index !== 0 ? '-mx-3 max-md:-mx-1' : ''}`}
                />
              ))}
            </div>
          </div>
          {" "}
          the Next Step Toward {" "}
          <div className="inline-block">
            <div className="flex">
              {imagesBottom.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-16 max-md:w-10 h-16 max-md:h-10 rounded-full hover:scale-125 duration-300 ${index !== 0 ? '-mx-3 max-md:-mx-1' : ''}`}
                />
              ))}
            </div>
          </div>{" "}Your Dream
          Career
        </h1>
        <p className="text-2xl max-md:text-xl text-center max-w-4xl max-md:px-6 mx-auto">
          Step closer to your dream career with the right tools, resources, and expert guidance to help you grow, achieve your goals, and unlock new opportunities.
        </p>
      </div>
      <div className="mx-auto flex gap-4 mt-10 justify-center items-center">
        <button className="px-4 py-2 text-xl duration-300 font-semibold rounded-full bg-[#036BDC] text-white border-2 border-[#036BDC] hover:bg-white hover:text-[#036BDC]">
          <a href="/login">Sign in</a>
        </button>
        <button className="px-4 py-2 text-xl duration-300 font-semibold rounded-full border-2 border-[#036BDC] hover:bg-[#036BDC] hover:text-white">
          <a href="/signup">Request a demo</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;