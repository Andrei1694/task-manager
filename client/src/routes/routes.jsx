import Profile from "../pages/Profile/profile.page";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Layout from "./Layout";
import TaskPage from "../pages/Tasks/TaskPage";
import LogoutModal from "../components/LogoutModal";
import LoginPage from "../pages/Authentification/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "tasks",
        element: <TaskPage />,
      },
      {
        path: "logout",
        element: <LogoutModal />,
      },
    ],
  },
]);

export default router;
