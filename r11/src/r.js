import AssistantsLayout from "./AssistantsLayout";
import A from "./A";
import Teams from "./Teams";
import Home from "./Home";
import { Navigate } from "react-router-dom";

const authProtectedRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/assistants",
    element: <Index />,
    children: [
      {
        index: true,         // /assistants
        element: <A />,
      },
      {
        path: "teams",       // /assistants/teams
        element: <Teams />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];

export { authProtectedRoutes };
