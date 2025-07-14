import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { CalendarPlus, Home, User } from "lucide-react";
import { UserRegistration } from "../UserRegistration/UserRegistration";
import { NewTournament } from "../NewTournament/NewTournament";
import { StartPage } from "../StartPage/StartPage";
import { Tournament } from "../Tournament/Tournament";

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
          element: <StartPage />,
          handle: { title: "Home", icon: <Home /> } as IRouteHandle,
        },
        {
          path: "/register",
          element: <UserRegistration />,
          handle: { title: "Register", icon: <User /> } as IRouteHandle,
        },
        {
          path: "/new-tournament",
          element: <NewTournament />,
          handle: {
            title: "Tournament",
            icon: <CalendarPlus />,
          } as IRouteHandle,
        },
        {
          path: "/edit/:uuid",
          element: <Tournament />,
        },
      ],
    },
  ],
  {
    basename: "/tournament",
  }
);
