import React from "react";
import spotify from "/Images/spotify.png";
import zoom from "/Images/zoom.png";
import coinbase from "/Images/coinbase.png";
import adobe from "/Images/adobe.png";
import slack from "/Images/slack.png";
import webflow from "/Images/webflow.svg";

const logos = [
  { src: spotify, alt: "spotify" },
  { src: zoom, alt: "zoom" },
  { src: coinbase, alt: "coinbase" },
  { src: adobe, alt: "adobe" },
  { src: slack, alt: "slack" },
  { src: webflow, alt: "webflow" },
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