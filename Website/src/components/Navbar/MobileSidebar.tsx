import { NavLink } from 'react-router-dom';
import AuthButtons from './AuthButtons';

interface MobileSidebarProps {
    toggleNav: () => void;
    isOpen: boolean;
}

export default function MobileSidebar({ toggleNav, isOpen }: MobileSidebarProps) {


    return (
        <div className=" flex flex-col">
            {/* Hamburger Button */}


            {/* Overlay to close the drawer when clicked outside */}


            {/* Mobile Side Nav */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col justify-start shadow-lg  bg-white z-30 space-y-6 p-3">
                    <div className='flex justify-between items-center'>
                        <button
                            className=" focus:outline-none transition-all duration-300 top-0 right-0 relative z-50"
                            onClick={toggleNav}
                        >
                            <svg
                                className="w-7 h-7 text-[#036bdc]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 26 26"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                        <AuthButtons />
                    </div>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl w-full transition-all hover:text-[#036bdc] 
                     before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                     ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`}
                        onClick={toggleNav}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/findAJob"
                        className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl w-full transition-all hover:text-[#036bdc] 
                     before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                     ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`}
                        onClick={toggleNav}
                    >
                        Find a Job
                    </NavLink>

                    <NavLink
                        to="/talents"
                        className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl w-full transition-all hover:text-[#036bdc] 
                     before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                     ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`}
                        onClick={toggleNav}
                    >
                        Talents
                    </NavLink>

                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl w-full transition-all hover:text-[#036bdc] 
                     before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                     ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`}
                        onClick={toggleNav}
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl w-full transition-all hover:text-[#036bdc] 
                     before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                     ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`}
                        onClick={toggleNav}
                    >
                        About
                    </NavLink>
                </div>
            </div>
        </div>

    );
};