import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard/Dashboard";
import Detail from "../views/Detail/Detail";
import Login from "../views/Login/login";
import Register from "../views/Register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);


export const Route = () => {
    return <RouterProvider router={router} />
}