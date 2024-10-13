import { NavLink } from 'react-router-dom';

export default function NavLinks() {
    return (
        <div>
            <div className="flex items-center">

                <div className="hidden md:block ml-10">
                    <div className="flex space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block relative px-3 py-1 text-xl transition-all hover:text-[#036bdc] 
                                 before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                                 ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`
                            }>
                            Home
                        </NavLink>

                        <NavLink to="/findAJob" className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl transition-all hover:text-[#036bdc] 
                             before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                             ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`
                        }>
                            Find a Job
                        </NavLink>

                        <NavLink to="/talents" className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl transition-all hover:text-[#036bdc] 
                             before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                             ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`
                        }>
                            Talents
                        </NavLink>
                        <NavLink to="/services" className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl transition-all hover:text-[#036bdc] 
                             before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                             ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`
                        }>
                            Services
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) =>
                            `block relative px-3 py-1 text-xl transition-all hover:text-[#036bdc] 
                             before:duration-500 before:h-[2px] before:bottom-[-2px] before:left-0 before:bg-[#154893] before:absolute before:content-[''] 
                             ${isActive ? 'text-[#036bdc] before:w-[100%]' : 'before:w-0 before:hover:w-[100%]'}`
                        }>
                            About
                        </NavLink>


                    </div>
                </div>
            </div>

        </div>
    )
}
