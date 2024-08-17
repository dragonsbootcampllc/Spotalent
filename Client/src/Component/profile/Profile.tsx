import { MdModeEdit } from "react-icons/md";
import FormProfile from "./FormProfile";
import SidebarProfile from "./SidebarProfile";
import SectionsProfile from "./SectionsProfile";

function Profile() {
 
    return (
        <div>
            <div className="p-1 min-[800px]:w-[80%] mx-auto min-[700px]:flex gap-[1rem]">
                <SidebarProfile />
                <div className="w-[90%] mx-auto min-[700px]:w-[75%]">
                    <div className="flex min-[550px]:gap-[2rem] gap-[1rem] items-center min-[550px]:px-[3rem] border-b-[1px] pb-3">
                        <div className="w-[100px] h-[100px] bg-gray-200 rounded-full"></div>
                        <div className="flex gap-[1rem] text-[13px] max-[550px]:flex-wrap">
                            <button className="bg-gray-600 rounded-3xl text-white w-[120px] p-[.3rem]">
                                Upload now
                            </button>
                            <button className="bg-gray-300 rounded-3xl w-[120px] p-[.3rem]">
                                Delete photo
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex gap-[.3rem] items-center border-[1px] w-fit px-2 mt-[1rem] rounded-lg">
                            <MdModeEdit className="text-[15px]" />
                            <span className="text-[15px]">Edit</span>
                        </div>
                    </div>
                    <FormProfile/>
                    <SectionsProfile/>
                    <div className="flex justify-end mb-[1rem]">
                        <button className="bg-gray-600 rounded-3xl w-[200px] p-[.3rem] text-white">
                            Save
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;
