// import XIcon from "../../assets/Icons/XIcon";
// import Dropdown from "./Dropdown";
// import { RadioGroup } from "@lemonsqueezy/wedges";

// const AppQs = () => {
//     const answers = [
//         { label: "Lorem ipsum dolor sit amet consectetur. Justo facilisis sed massa molestie volutpat purus arcu.", value: "value-1" },
//         { label: "Lorem ipsum dolor sit amet consectetur. Justo facilisis sed massa molestie volutpat purus arcu.", value: "value-2" },
//         { label: "Lorem ipsum dolor sit amet consectetur. Justo facilisis sed massa molestie volutpat purus arcu.", value: "value-3" },
//         { label: "Lorem ipsum dolor sit amet consectetur. Justo facilisis sed massa molestie volutpat purus arcu.", value: "value-4" }
//     ];

//     const items = answers.map((answer, index) => (
//         <div key={index} className="     mb-2">
//             <div className="mr-2">
//                 <RadioGroup.Item label={answer.label} value={answer.value} />
//             </div>
           
//         </div>
//     ));

//     return (
//         <>
//             <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md shadow-[#d6d1db] mt-10 p-6">
//                 <div className="text-gray-400 font-semibold mb-6">
//                     <span>New Application</span>
//                 </div>
//                 <div>
//                     <div className="flex flex-row justify-between">
//                         <div className="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-400 ">
//                             <input 
//                                 type="text" 
//                                 name="username" 
//                                 id="username" 
//                                 autoComplete="username"
//                                 className="border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-[#6B7280] focus:ring-0 sm:text-sm sm:leading-6 outline-none h-10"
//                                 placeholder="Question 1"
//                             />
//                         </div>
//                         <div className="mx-3">
//                             <Dropdown />
//                         </div>
//                         <div className="mt-2 cursor-pointer">
//                             <XIcon />
//                         </div>
//                     </div>
//                     <div className="my-2 text-[#6B7280] flex flex-row-reverse">
//                         <span>+ Add Question</span>
//                     </div>
//                     <div className="flex flex-row-reverse">
//                         <button 
//                             type="button" 
//                             className="w-full justify-center rounded-full bg-[#4B5563] px-24 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4B5563] sm:ml-3 sm:w-auto"
//                         >
//                             Post
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md shadow-[#d6d1db] mt-10 p-6">
//                 <div className="text-gray-400 font-semibold mb-6">
//                     <span>ANSRs</span>
//                 </div>
//                 <div className="mb-2">
//                     <RadioGroup
//                         defaultValue="value-1"
//                         description="Choose an option"
//                         label="Select an Option"
//                         required
//                     >
//                         {items}
//                     </RadioGroup>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AppQs;