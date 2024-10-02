import { useState } from "react";

// export type FlitersSidebarProps = {};

export default function FlitersSidebar() {
    const [isOpen, setisOpen] = useState(true);

    const toggle_open_state = () => {
        setisOpen(!isOpen);
    };

    return (
        <div className={`h-full z-40 relative bg-[#EBEBEB] transition-all border-r-4 border-slate-400/50 ${isOpen ? "w-[450px]" : "w-0"}`}>
            <div className="w-full h-full overflow-hidden bg-red-300"></div>
            <button onClick={toggle_open_state} className="text-black hover:bg-black/10 bg-transparent transition-all absolute left-full w-8 h-full top-1/2 -translate-y-1/2 rounded-r-md font-semibold {} transition-all flex group justify-center items-center">
                <span className={`h-8 w-1 bg-black rounded-full block transition-all absolute top-[calc(50%-14px)] -translate-y-1/2 left-1/2 -transiton-1/2 ${isOpen ? "group-hover:rotate-12" : "group-hover:-rotate-12"}`} />
                <span className={`h-8 w-1 bg-black rounded-full block transition-all absolute top-[calc(50%+14px)] -translate-y-1/2 left-1/2 -transiton-1/2 ${isOpen ? "group-hover:-rotate-12" : "group-hover:rotate-12"}`} />
            </button>
        </div>
    )
}
