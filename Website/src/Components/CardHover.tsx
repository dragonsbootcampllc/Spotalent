import React from "react";
import { PiShootingStarBold, PiMagicWandBold } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";

const cardData = [
  {
    icon: <PiShootingStarBold className="text-[#004B9C] text-5xl group-hover:text-white" />,
    title: "95% Faster Hiring Process",
    description: "Streamline your recruitment with Spotalent’s AI-driven matching. Reduce hiring time by 95% with access to pre-vetted candidates ready to contribute from day one."
  },
  {
    icon: <FaHandHoldingHeart className="text-[#004B9C] text-5xl group-hover:text-white" />,
    title: "Trusted Verification with Blockchain",
    description: "Experience unmatched trust and transparency. Every candidate’s experience and skills are blockchain-verified to ensure authenticity and reduce hiring risks."
  },
  {
    icon: <PiMagicWandBold className="text-[#004B9C] text-5xl group-hover:text-white" />,
    title: "Tailored Talent Solutions",
    description: "Access the best talent globally, precisely matched to your needs, saving you time and costs on unnecessary filtering and assessments."
  }
];

const CardsHover: React.FC = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-4xl px-4 font-bold max-w-2xl mx-auto mb-10">Unlock Global Talent Potential with Verified, World-Class Candidates</h2>
      <div className="mb-10 max-md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-32">
          {cardData.map((card, index) => (
            <div key={index} className="bg-[#FAF9F6] rounded-3xl shadow-lg px-6 py-10 hover:bg-[#004B9C] group hover:text-white duration-300">
              {card.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-[#D3D3D3]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsHover;
