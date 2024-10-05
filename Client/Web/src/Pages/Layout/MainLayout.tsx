import { Outlet } from "react-router-dom";
import Navbar from "../../../../../Website/src/components/Navbar";
import Footer from "../../Components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center box-border w-full min-h-screen pt-12">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}