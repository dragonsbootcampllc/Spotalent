import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Pages/Layout/MainLayout';
import App from './Pages/App';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};