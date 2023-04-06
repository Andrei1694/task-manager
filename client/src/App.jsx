import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { CookiesProvider, useCookies } from "react-cookie";

import UserProvider from "./context/UserContext";
export default function App() {
  const [cookies] = useCookies(["loginToken"]);

  return (
    <CookiesProvider>
      <UserProvider>
        <Navbar />
        <Outlet />
      </UserProvider>
    </CookiesProvider>
  );
}
