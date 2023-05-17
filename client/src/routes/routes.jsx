import { createBrowserRouter } from "react-router-dom";

import { lazy } from "react";
const Layout = lazy(() => import("./Layout"));
const TaskPage = lazy(() => import("../pages/Tasks/TaskPage"));
const LogoutModal = lazy(() => import("../components/LogoutModal"));
const Profile = lazy(() => import("../pages/Profile/ProfilePage"));
const ErrorPage = lazy(() => import("../pages/Error"));
const Home = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Authentification/LoginPage"));

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
