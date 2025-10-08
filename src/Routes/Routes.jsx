import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

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
            }
             
    ]
  }
   
]);

export default router