import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/Authentification/authentification.page";
import Tasks from "./pages/Tasks/tasks.page";
import ProfilePage from "./pages/Profile/profile.page.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import LogoutModal from "./components/LogoutModal";
import Home from "./pages/Home";
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
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "logout",
        element: <LogoutModal />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
