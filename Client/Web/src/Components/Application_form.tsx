// import { useState } from "react";
// import { Avatar, Button, Input } from "@lemonsqueezy/wedges";
// import fs from "fs";
// import "../Styles/index.css";

// type UserForm = {
//   firstName: string;
//   lastName: string;
//   role: string;
//   company: string;
//   email: string;
//   dateOfBirth: { day: string; month: string; year: string };
//   address: string;
//   photo: string | File;
// };

// const dummyPhoto = "https://via.placeholder.com/150?text=No+Photo";

// function ApplicationForm() {
//   const currentYear = new Date().getFullYear();

//   const [formData, setFormData] = useState<UserForm>({
//     firstName: "",
//     lastName: "",
//     role: "",
//     company: "",
//     email: "",
//     dateOfBirth: { day: "", month: "", year: "" },
//     address: "",
//     photo: dummyPhoto,
//   });

//   const [errors, setErrors] = useState<Partial<UserForm>>({});
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ): void => {
//     const { name, value } = e.target;
//     if (name === "day" || name === "month" || name === "year") {
//       setFormData({
//         ...formData,
//         dateOfBirth: { ...formData.dateOfBirth, [name]: value },
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setFormData({ ...formData, photo: file });
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Partial<UserForm> = {};

//     if (!formData.firstName) newErrors.firstName = "First name is required.";
//     if (!formData.lastName) newErrors.lastName = "Last name is required.";
//     if (!formData.email) newErrors.email = "Email is required.";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Email format is invalid.";
//     if (
//       !formData.dateOfBirth.day ||
//       !formData.dateOfBirth.month ||
//       !formData.dateOfBirth.year
//     )
//       newErrors.dateOfBirth = "Complete date of birth is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const deletePhoto = () => {
//     setFormData({ ...formData, photo: dummyPhoto });
//   };

//   const cancelForm = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       role: "",
//       company: "",
//       email: "",
//       dateOfBirth: { day: "", month: "", year: "" },
//       address: "",
//       photo: dummyPhoto,
//     });
//     setErrors({});
//   };

//   const saveData = async (): Promise<void> => {
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       const dataToSave = {
//         ...formData,
//         photo:
//           typeof formData.photo === "string"
//             ? formData.photo
//             : URL.createObjectURL(formData.photo),
//       };
//       const jsonData = JSON.stringify(dataToSave, null, 2);
//       fs.writeFileSync("formData.json", jsonData, "utf-8");
//       alert("Form data saved successfully!");
//     } catch (error) {
//       alert("Failed to save data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderDateOptions = () => {
//     return Array.from({ length: 31 }, (_, i) => (
//       <option key={i + 1} value={i + 1}>
//         {i + 1}
//       </option>
//     ));
//   };

//   const renderMonthOptions = () => {
//     return Array.from({ length: 12 }, (_, i) => (
//       <option key={i + 1} value={i + 1}>
//         {new Date(0, i).toLocaleString("default", { month: "long" })}
//       </option>
//     ));
//   };

//   const renderYearOptions = () => {
//     return Array.from({ length: currentYear - 1959 }, (_, i) => (
//       <option key={i} value={currentYear - i}>
//         {currentYear - i}
//       </option>
//     ));
//   };

//   return (
//     <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
//       <div className="flex justify-center items-center mb-8">
//         <Avatar
//           alt="Profile picture"
//           className="w-24 h-24 rounded-full border-4 border-gray-200"
//           src={
//             typeof formData.photo === "string"
//               ? formData.photo
//               : URL.createObjectURL(formData.photo)
//           }
//         />

//         <div className="flex w-2/4 justify-evenly ml-8">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="hidden"
//             id="photo-upload"
//           />
//           <label htmlFor="photo-upload">
//             <Button
//               variant="secondary"
//               className="rounded-full px-4 py-2 text-white bg-gray-800 hover:bg-gray-950"
//             >
//               Upload new
//             </Button>
//           </label>
//           <Button
//             variant="secondary"
//             className="rounded-full px-4 py-2 text-white bg-gray-500 hover:bg-gray-600"
//             onClick={deletePhoto}
//           >
//             Delete photo
//           </Button>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-6">
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">First name</label>
//           <Input
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//             placeholder="First name"
//             className="rounded p-3 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
//           />
//           {errors.firstName && (
//             <span className="text-red-500 text-sm">{errors.firstName}</span>
//           )}
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Last name</label>
//           <Input
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//             placeholder="Last name"
//             className="rounded p-3 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
//           />
//           {errors.lastName && (
//             <span className="text-red-500 text-sm">{errors.lastName}</span>
//           )}
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Role</label>
//           <Input
//             name="role"
//             value={formData.role}
//             onChange={handleInputChange}
//             placeholder="Role"
//             className="rounded p-3 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company</label>
//           <Input
//             name="company"
//             value={formData.company}
//             onChange={handleInputChange}
//             placeholder="Company"
//             className="rounded p-3 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">E-mail</label>
//           <Input
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="E-mail"
//             className="rounded p-3 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
//           />
//           {errors.email && (
//             <span className="text-red-500 text-sm">{errors.email}</span>
//           )}
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Date of birth</label>
//           <div className="flex gap-[1rem] items-center">
//             <select
//               name="day"
//               value={formData.dateOfBirth.day}
//               onChange={handleInputChange}
//               className="border-[1px] rounded-lg p-2 outline-none mt-[.5rem] bg-white"
//             >
//               <option value="" disabled>
//                 Day
//               </option>
//               {renderDateOptions()}
//             </select>
//             <select
//               name="month"
//               value={formData.dateOfBirth.month}
//               onChange={handleInputChange}
//               className="border-[1px] rounded-lg p-2 outline-none mt-[.5rem] bg-white"
//             >
//               <option value="" disabled>
//                 Month
//               </option>
//               {renderMonthOptions()}
//             </select>
//             <select
//               name="year"
//               value={formData.dateOfBirth.year}
//               onChange={handleInputChange}
//               className="border-[1px] rounded-lg p-2 outline-none mt-[.5rem] bg-white"
//             >
//               <option value="" disabled>
//                 Year
//               </option>
//               {renderYearOptions()}
//             </select>
//           </div>
//           {errors.dateOfBirth && (
//             <span className="text-red-500 text-sm">{errors.dateOfBirth}</span>
//           )}
//         </div>

//         <div className="flex flex-col col-span-2">
//           <label className="text-sm font-semibold mb-1">Address</label>
//           <Input
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             placeholder="Address"
//             className="rounded p-3 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
//           />
//         </div>
//       </div>

//       <div className="flex justify-between mt-8">
//         <Button
//           variant="secondary"
//           onClick={cancelForm}
//           className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded"
//           disabled={loading}
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="primary"
//           onClick={saveData}
//           className="px-6 py-3 bg-green-400 hover:bg-green-600 rounded"
//           disabled={loading}
//         >
//           {loading ? "Saving..." : "Save"}
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default ApplicationForm;
