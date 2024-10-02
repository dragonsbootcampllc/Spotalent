import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import NavLinks from "./navLinks";
import AuthButtons from "./AuthButtons";
import UserProfileDropdown from "./UserProfileDropdown";

interface User {
    userId: string,
    userName: string,
    userImage: string
}

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    return (
        <>
            <div className="w-full fixed top-0 left-1/2 -translate-x-1/2">
                <span>logo</span>

                <div className="md:block hidden"> {/* You can change `md` to specific screen, this is just demo */}
                    <NavLinks />
                    {
                        user ? (<UserProfileDropdown />) : (<AuthButtons />)
                    }
                </div>

                <div className="md:hidden block"> {/* You can change `md` to specific screen, this is just demo */}
                    <button>Menu Burger Button</button>
                </div>
            </div>

            <MobileSidebar />
        </>
    )
}
