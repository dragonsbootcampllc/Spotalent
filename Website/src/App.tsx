import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from './Components/ScrollToTop';
import NotFound from "./Pages/NotFoundPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import FindAJob from "./Pages/FindAJob";
import Talents from "./Pages/Talents";
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

const Layout: React.FC = () => (
  <>
    <ScrollToTop /> {/* Scroll to top on every navigation */}
    <Navbar /> {/* Navbar appears only once */}
    {/* Footer is placed here */}
  </>
);

// Define the router with routes and loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component (optional)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/findAJob",
        element: <FindAJob />,
      },
      {
        path: "/talents",
        element: <Talents />,
      },
      {
        path: "/services",
        element: <Services />,
      }
    ],
  },
  {
    path: "*", 
    element: <NotFound />,
  }
]);

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
