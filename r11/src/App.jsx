import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Workspace from "./components/Workspace";
import { MdDashboard } from "react-icons/md";
import Navbar1 from "./components/Assistants/Navbar1";
import A from "./components/Assistants/A";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/Assistants/Index.jsx";
import Teams from "./components/Assistants/Teams";
import Layout from "./components/Assistants/Layout.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/assistants',
      element: <Index />, 
      children: [
        {
          index: true,
          element: <A />
        },
        {
          path: 'teams',
          element: <Teams />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
