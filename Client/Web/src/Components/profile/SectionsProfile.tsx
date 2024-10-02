import { FaPlus } from "react-icons/fa6";

function SectionsProfile() {
    const sectionsName = ["Experience", "Certificates", "Projects", "Skills"]
  return (
    <div className="mb-[2rem]">
        {
            sectionsName.map((section) => (
                <div className='flex justify-between items-center mb-[.5rem]'>
                    <div className="font-bold">{section}</div>
                    <div className="flex gap-[.5rem] items-center text-[13px]">
                        <FaPlus />
                        <span className="">Add</span>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default SectionsProfile
