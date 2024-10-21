import React from "react";
import moha from "/Images/Mohamed_Ali.jpg";
import ahmed from "/Images/AhmedSherif.jpeg";
import { MdArrowOutward } from "react-icons/md";


const testimonials = [
  {
    id: 1,
    logo: "Lugo",
    title: "15% of Deal Closing Rate for a Payment Solution Provider",
    appointments: "+70%",
    revenue: "$250K",
    tags: ["linkedin marketing", "advertising", "appointment setting"],
  },
  {
    id: 2,
    logo: "Lego",
    title: "Going From 15 to 50 Appointments Per Month",
    appointments: "+85%",
    revenue: "$360K",
    tags: ["advertising", "social media", "outbound strategy"],
  },
  {
    id: 3,
    logo: "guru",
    title: "Solid Outbound Strategy Helped Belkins Land",
    appointments: "+75%",
    revenue: "$360K",
    tags: ["outbound strategy", "appointment setting", "social media"],
  },
];

const imagesTop = [
  { src: ahmed, alt: "Ahmed Sherif" },
  { src: moha, alt: "Mohamed Ali" },
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-6xl max-md:text-5xl font-bold mb-16">
            What{" "}
            <div className="inline-block">
              <div className="flex">
                {imagesTop.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`w-14 max-md:w-10 h-14 max-md:h-10 border-2 border-black rounded-full hover:scale-125 duration-300 ${index !== 0 ? "-mx-3 max-md:-mx-1" : ""
                      }`}
                  />
                ))}
              </div>
            </div>{" "}
            our clients say
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className=" p-6 rounded-3xl border border-black/60">
              <span className="bg-yellow-100 text-black px-4 py-1 rounded-full">{testimonial.logo}</span>
              <p className="font-semibold text-2xl max-w-1/2 my-6">{testimonial.title}</p>
              <div className="flex justify-between text-lg bg-blue-300 p-6 mt-16 rounded-2xl">
                <span className="flex flex-col gap-2"><span className="font-semibold text-4xl">{testimonial.appointments}</span> <span className="text-lg">Appointments</span></span>
                <span className="flex flex-col gap-2"><span className="font-semibold text-4xl">{testimonial.revenue}</span> <span className="text-lg">Money saved</span></span>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 gap-8 mt-4">
              <div className="flex flex-wrap gap-2">
                {testimonial.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="border border-black text-black px-4 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xl text-white p-4 bg-black rounded-full"><MdArrowOutward /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
