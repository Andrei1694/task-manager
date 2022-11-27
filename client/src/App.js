import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskPage from './pages/TaskContainer';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/tasks",
    element: <TaskPage />,
  },
]);
function App() {

  return (

    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
