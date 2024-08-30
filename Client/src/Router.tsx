import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Pages/Layout/MainLayout';
import Home from './Pages/Home';
import FilterSidebar from "./Components/FliterSidebar";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route>
                    <Route path="/filter" element={<FilterSidebar/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};