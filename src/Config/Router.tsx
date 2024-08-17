import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../views/Dashboard/Dashboard";
import Detail from "../views/Detail/Detail";
import Login from "../views/Login/login";
import Register from "../views/Register/register";
import AddProduct from "../views/AddProduct/AddProduct";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const Main = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
  onAuthStateChanged(auth, (user: any) => {
    if (user) { 
      if (pathname === "/login" || pathname === "/register") {
        navigate("/")
      }
    } else {
      if (pathname === "/addproduct") {
        navigate("/login")
      }
    }
  });
}, [window.location.pathname, user]);
  return  <Outlet />
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export const Route = () => {
  return <RouterProvider router={router} />;
};
