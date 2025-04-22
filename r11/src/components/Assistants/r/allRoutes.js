import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Assistants from "../pages/Assistants/Index";
import Teams from "../pages/Assistants/Teams";
import Index from "../pages/Assistants/Index";
import A from "../pages/Assistants/A";


const authProtectedRoutes = [
  { path: "/home", component: <Home /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home"/>,
  },
  {
    path: "/assistants",
    component : <A/>,
    Children:[
      {
        path:"teams",
        component:<Teams/>
      }
    ]
  },
  { path: "*", component: <Navigate to="/home" /> },
];

const publicRoutes = [
  // Authentication Page
];

export { authProtectedRoutes, publicRoutes };
