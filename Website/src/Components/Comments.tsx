import React from "react";
import man from '../../public/Images/Ellipse.png';
import { RiDoubleQuotesR } from "react-icons/ri";

const commentsData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc tellus. Sed non sit sed nunc nam nunc tellus.",
    name: "Allison Adam",
    title: "Founder & CEO",
    image: man,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc tellus. Sed non sit sed nunc nam nunc tellus.",
    name: "John Doe",
    title: "CTO",
    image: man,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc tellus. Sed non sit sed nunc nam nunc tellus.",
    name: "Jane Smith",
    title: "COO",
    image: man,
  },
];

const Comments: React.FC = () => {
  return (
    <div className="py-20 flex flex-col items-center gap-10 md:px-20">
      <h1 className="text-4xl font-semibold text-center max-w-lg mx-auto">Some comments people that hired by spot talent</h1>
      <div className="flex max-md:flex-col gap-8 px-6 md:px-16 py-2">
        {commentsData.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-4 justify-center items-center border border-gray-200 hover:border-none hover:shadow-lg rounded-xl p-4 duration-300">
            <div className="relative">
              <img src={comment.image} alt="user" className="w-20 h-20 rounded-full" />
              <div className="absolute bottom-0 right-0 text-white bg-[#00A79D] p-1 rounded-full border-2 border-white">
                <RiDoubleQuotesR />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-center px-6">{comment.text}</p>
              <span className="text-[#00A79D] text-3xl">•</span>
              <p>{comment.name}</p>
              <p>{comment.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
