import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { CookiesProvider, useCookies } from "react-cookie";
import Home from "../src/pages/Home";
import Login from "../src/pages/Authentification/authentification.page";
import Profile from "../src/pages/Profile/profile.page";
import Tasks from "../src/pages/Tasks/tasks.page";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearToken, setToken } from "./store/user/user.slice";
import LogoutModal from "./components/LogoutModal";
import { useLazyGetMyProfileQuery } from "./store/user/user.api";

export default function App() {
  const [cookies] = useCookies(["loginToken"]);
  const dispatch = useDispatch();
  const [getProfileQuery] = useLazyGetMyProfileQuery();
  useEffect(() => {
    if (cookies) {
      dispatch(setToken(cookies.loginToken));
      getProfileQuery();
    } else {
      dispatch(clearToken());
    }
  }, []);

  return (
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="logout" element={<LogoutModal />} />
        </Route>
      </Routes>
    </CookiesProvider>
  );
}
