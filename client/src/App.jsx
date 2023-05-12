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

export default function App() {
  const [cookies] = useCookies(["loginToken"]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cookies) {
      setToken(cookies);
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
        </Route>
      </Routes>
    </CookiesProvider>
  );
}
