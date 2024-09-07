import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Pages/Layout/MainLayout';
import Home from './Pages/Home';
import Development from "./Pages/Development";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/development" element={<Development />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};