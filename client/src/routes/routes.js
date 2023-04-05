import App from "../App";
import Home from "../pages/Home/home.page";
import AuthPage from "../pages/Authentification/authentification.page";
import Profile from "../pages/Profile/profile.page"
import { createBrowserRouter } from "react-router-dom";

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
                element: <Profile />,
            },
        ],
    },
]);

export default router