import React, { useState } from "react";
import SlidBarIcon from "../Icons/SlideBarIcon";
const SlideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="lg:hidden mb-4 p-4 z-10 top-0 fixed">
                <button
                    onClick={toggleSidebar}
                    className="text-black p-2 focus:outline-none"
                >
                    <SlidBarIcon />

                </button>
            </div>

            <div
                className={`h-auto w-80 text-[#4B5563] flex flex-col border-r-2 pt-4 font-semibold text-sm fixed lg:static transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 transition-transform duration-300 ease-in-out z-20 bg-white`}
            >
                <nav className="flex-grow">
                    <ul className="p-4">
                        <li className="mb-4">
                            <a href="#" className="hover:bg-[#E5E7EB] p-2 block rounded">
                                My Profile
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:bg-[#E5E7EB] p-2 block rounded">
                                Track Applications
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 lg:hidden z-10"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default SlideBar;
