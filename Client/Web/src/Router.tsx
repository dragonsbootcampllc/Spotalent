import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Pages/Layout/MainLayout';
import Home from './Pages/Home';
import Development from "./Pages/Development";
import FilterSidebar from "./Components/Bars/FilterSideBar/FliterSidebar";

export default function Router() {
    return (
        <div className="light">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home />} />
                        <Route path="filter" element={<FilterSidebar defaultValues={
                            {   
                                ProjectTypes:["Hourly Rate","Fixed Price"],
                                Skills:[".Net","HTML","HTML5","C# Programming","SQL","MVC"],
                                Price:{
                                    min:1000,
                                    max:1500,
                                    maximumSearch:2000,
                                    minimumSearch:0
                                },
                                Location:"Your Mom"
                            }
                            }/>} />
                        <Route path="/development" element={<Development />} />
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};