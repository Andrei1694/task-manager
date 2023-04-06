import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { CookiesProvider, useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { useEffect } from "react";
export default function App() {
  const [cookies] = useCookies(["loginToken"]);
  const result = useQuery({
    queryKey: "login",
    queryFn: () => {
      if (cookies.loginToken) return { isAuth: true };
      return { isAuth: false };
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  useEffect(() => {
    console.log(result);
  }, [result]);
  return (
    <CookiesProvider>
      <Navbar />
      <Outlet />
    </CookiesProvider>
  );
}
