import { NavLink } from 'react-router-dom';

export default function AuthButtons() {
    return (
        <div className="flex items-center justify-start md:justify-center  ">
            <div className="space-x-4">
                <NavLink to='/login'>
                    <button className="  text-xl  text-[#036bdc] ">
                        Login
                    </button>
                </NavLink>
                
                <NavLink to='/signup'>
                    <button className="px-7 py-2  text-white bg-[#036bdc] rounded-full ">
                        Sign Up
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
