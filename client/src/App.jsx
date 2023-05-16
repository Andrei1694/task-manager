import { RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { clearToken, setToken } from "./store/user/user.slice";
import { useLazyGetMyProfileQuery } from "./store/user/user.api";
import { useLayoutEffect } from "react";
import router from "./routes/routes";

export default function App() {
  const [cookies] = useCookies(["loginToken"]);
  const dispatch = useDispatch();
  const [getProfileQuery] = useLazyGetMyProfileQuery();
  useLayoutEffect(() => {
    console.log("app");
    if (cookies) {
      dispatch(setToken(cookies.loginToken));
      getProfileQuery();
    } else {
      dispatch(clearToken());
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
