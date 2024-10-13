import Navbar from "./Components/Navbar/Navbar"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import NotFound from "./Pages/NotFoundPage.tsx";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Services from "./Pages/Services.tsx";
import FindAJob from "./Pages/FindAJob.tsx";
import Talents from "./Pages/Talents.tsx";
import { Suspense } from 'react';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner.tsx';



const Layout = () => (
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
    path: "*", element: <NotFound />,
  }
]);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
