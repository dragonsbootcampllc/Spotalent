import React from "react";
import Dragons from "/Images/dragons.svg";
import Microsoft from "/Images/microsoft.png";
import neferdata from "/Images/neferdata.png";
import actusgo from "/Images/actusgo.png";
import levelup from "/Images/levelup.png";

const logos = [
  { src: Microsoft, alt: "Microsoft Founders Hub" },
  { src: Dragons, alt: "Dragons" },
  { src: neferdata, alt: "neferdata" },
  { src: actusgo, alt: "actusgo" },
  { src: levelup, alt: "levelup" },
];

const Company: React.FC = () => {
  return (
    <div className="w-full py-16 flex flex-col bg-[#FDFDFD] justify-center items-center">
      <h1 className="text-3xl font-semibold text-center">Trusted by Top Companies</h1>
      <div className="flex flex-wrap justify-center gap-6 px-6 mt-10">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain" alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default Company;