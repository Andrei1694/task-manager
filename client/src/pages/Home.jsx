import { selectUserFromState } from "../store/user/user.slice";

const Home = () => {
  const user = useSelector(selectUserFromState);
  console.log(user);
  return (
    <>
      <h1>Task Manager App</h1>
      <h5>Hello {user ? user.user.name : null}</h5>
    </>
  );
};

export default Home;
