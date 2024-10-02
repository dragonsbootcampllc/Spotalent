// import { useState } from "react";
// import { Avatar, Button, Input } from "@lemonsqueezy/wedges";
// import "../Styles/index.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
// const dummyPhoto = "https://via.placeholder.com/150?text=No+Photo";

// function Form() {
//   const currentYear = new Date().getFullYear();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     role: "",
//     company: "",
//     email: "",
//     dateOfBirth: { day: "", month: "", year: "" },
//     address: "",
//     photo: dummyPhoto,
//   });

//   const DateOptions = () => {
//     return Array.from({ length: 31 }, (_, i) => (
//       <option key={i + 1} value={i + 1}>
//         {i + 1}
//       </option>
//     ));
//   };

//   const MonthOptions = () => {
//     return Array.from({ length: 12 }, (_, i) => (
//       <option key={i + 1} value={i + 1}>
//         {new Date(0, i).toLocaleString("default", { month: "long" })}
//       </option>
//     ));
//   };

//   const YearOptions = () => {
//     return Array.from({ length: currentYear - 1959 }, (_, i) => (
//       <option key={i} value={currentYear - i}>
//         {currentYear - i}
//       </option>
//     ));
//   };

//   return (
//     <div className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
//       <div className="flex flex-col md:flex-row items-center justify-center mb-4 border-b-2 pb-2">
//         <Avatar
//           alt="Profile picture"
//           className="w-16 h-16 rounded-full"
//           src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=250&h=250&auto=format&fit=crop"
//         />
//         <div className="flex flex-col gap-2 md:flex-row items-center justify-center ml-0 md:ml-4 mt-4 md:mt-0">
//           <Button
//             variant="secondary"
//             className=" px-5 py-2 text-sm bg-gray-600 hover:bg-gray-900 text-white rounded-full"
//           >
//             Upload new
//           </Button>
//           <Button
//             variant="secondary"
//             className="px-4 py-2 text-sm bg-gray-400 hover:bg-gray-500 rounded-full"
//           >
//             delete photo
//           </Button>
//         </div>
//       </div>
//       <div className="w-full md:w-2/12 ml-auto mb-4">
//         <Button
//           variant="secondary"
//           className="px-3 py-1 text-sm border-2 hover:bg-slate-600 text-gray-700 hover:text-white rounded"
//         >
//           <FontAwesomeIcon className="mr-1" icon={faPen} />
//           Edit
//         </Button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-3">First name</label>
//           <Input
//             name="firstName"
//             value={formData.firstName}
//             placeholder="First name"
//             className="rounded p-2 border border-gray-300 w-full"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-3">Last name</label>
//           <Input
//             name="lastName"
//             value={formData.lastName}
//             placeholder="Last name"
//             className="rounded p-2 border border-gray-300 w-full"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-3">Role</label>
//           <Input
//             name="role"
//             value={formData.role}
//             placeholder="Role"
//             className="rounded p-2 border border-gray-300 w-full"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-3">Company</label>
//           <Input
//             name="company"
//             value={formData.company}
//             placeholder="Company"
//             className="rounded p-2 border border-gray-300 w-full"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-3">E-mail</label>
//           <Input
//             name="email"
//             type="email"
//             value={formData.email}
//             placeholder="E-mail"
//             className="rounded p-2 border border-gray-300 w-full"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-3">Date of birth</label>
//           <div className="flex flex-col md:flex-row gap-2">
//             <select
//               name="day"
//               value={formData.dateOfBirth.day}
//               className="border rounded p-2 bg-white flex-1"
//             >
//               <option value="" disabled>
//                 Day
//               </option>
//               {DateOptions()}
//             </select>
//             <select
//               name="month"
//               value={formData.dateOfBirth.month}
//               className="border rounded p-2 bg-white flex-1"
//             >
//               <option value="" disabled>
//                 Month
//               </option>
//               {MonthOptions()}
//             </select>
//             <select
//               name="year"
//               value={formData.dateOfBirth.year}
//               className="border rounded p-2 bg-white flex-1"
//             >
//               <option value="" disabled>
//                 Year
//               </option>
//               {YearOptions()}
//             </select>
//           </div>

//         </div>

//         <div className="flex flex-col md:col-span-2">
//           <label className="text-sm font-medium mb-3">Address</label>
//           <Input
//             name="address"
//             value={formData.address}
//             placeholder="Address"
//             className="rounded p-2 border border-gray-300 w-full"
//           />
//         </div>
//       </div>

//       <div className="mt-8 pt-4 border-t border-gray-300">
//         <div className="flex flex-col md:flex-row justify-between">
//           <Button
//             variant="secondary"
//             className="mb-2 md:mb-0 px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="primary"
//             className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
//           >
//             Save
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;
