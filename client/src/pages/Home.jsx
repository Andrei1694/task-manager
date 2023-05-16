import { useSelector } from "react-redux";
import { selectUserFromState } from "../store/user/user.slice";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

const Home = () => {
  const user = useSelector(selectUserFromState);
  useEffect(() => {
    console.log("Home");
  }, []);
  return (
    <>
      <h1>Task Manager App</h1>
      <h5>Hello {user.user && user.user.name}</h5>
    </>
  );
};

export default Home;
