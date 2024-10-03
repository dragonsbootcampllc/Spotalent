import MobileSidebar from "./MobileSidebar";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import { NavLink, Outlet } from 'react-router-dom';



export default function Navbar() {

    return (
        <>
            <div className="w-full fixed top-0 left-1/2 -translate-x-1/2">
                <NavLink to="/">
                    <div>
                        <img src="/Images/Logo.png" alt="" />
                    </div>
                </NavLink>

                <div className="md:flex items-center justify-between hidden"> {/* You can change `md` to specific screen, this is just demo */}
                    <NavLinks />
                    <AuthButtons />

                </div>

                <div className="md:hidden block"> {/* You can change `md` to specific screen, this is just demo */}
                    <button>Menu Burger Button</button>
                </div>
            </div>

            <MobileSidebar />
            <div className="">
                <Outlet />
            </div>
        </>
    )
}
