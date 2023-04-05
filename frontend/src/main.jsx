import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/Authentification/authentification.page";
import Home from "./pages/Home/home.page";
import ProfilePage from "./pages/Profile/profile.page.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <AuthPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
