import { useSelector } from "react-redux";
import { selectUserFromState } from "../store/user/user.slice";

const Home = () => {
  const user = useSelector(selectUserFromState);
  return (
    <>
      <h1>Task Manager App</h1>
      <h5>Hello {user.user && user.user.name}</h5>
    </>
  );
};

export default Home;
