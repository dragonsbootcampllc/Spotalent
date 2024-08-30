import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center box-border w-full min-h-screen overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}