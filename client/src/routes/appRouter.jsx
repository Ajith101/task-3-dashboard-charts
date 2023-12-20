import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Accounts, Dashboard, Faq, Perks, Support } from "../pages";
import AppLayout from "../components/layout/AppLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/perks",
        element: <Perks />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);
