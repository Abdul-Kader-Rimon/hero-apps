import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AppsList from "../Pages/AppsList";
import Installation from "../Pages/Installation";
import AllApp from "../Pages/AllApp";

const router = createBrowserRouter([
  {
    path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p> Loading...</p>,
        children: [
        
            {
                index: true,
                Component: Home,
            },
            {
                path: "/apps",
                element: <AppsList/>,
            },
            {
                path: "/allapps",
                element: <AllApp/>,
            },
            {
                path: "/installation",
                element: <Installation/>,
            }
             
    ]
  }
   
]);

export default router