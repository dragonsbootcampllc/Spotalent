import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './Pages/App';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/hamada" element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};