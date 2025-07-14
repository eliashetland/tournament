import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home, User } from "lucide-react";

export interface IRouteHandle {
  title: string;
  icon: React.ReactNode;
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      // errorElement: <div>Error loading page</div>,
      children: [
        {
          path: "/",
          element: <div>Home Page</div>,
          handle: { title: "Home", icon: <Home /> } as IRouteHandle,
        },
        {
          path: "/register",
          element: <div>Register Page</div>,
          handle: { title: "Register", icon: <User /> } as IRouteHandle,
        },
      ],
    },
  ],
  {
    basename: "/tournament",
  }
);
