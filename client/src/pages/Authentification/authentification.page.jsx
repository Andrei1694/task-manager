import { useContext, useState } from "react";
import LoginForm from "./login.form.jsx";
import RegisterForm from "./register.form.jsx";
import { useMutation } from "react-query";
import axios from "axios";
import { login } from "../../requests.js";
import { useCookies } from "react-cookie";
import { redirect, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";

function AuthPage() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [cookies, setCookie] = useCookies(["login-cookie"]);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const mutation = useMutation({
    mutationFn: (loginData) => {
      return login(loginData);
    },
    onSuccess: (data) => {
      const {
        data: { user, token },
      } = data;
      if (token) {
        setCookie("loginToken", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setUser(user);
        navigate("/tasks");
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Task Manager</h1>
      {showRegisterForm ? (
        <RegisterForm toggleForm={toggleForm} />
      ) : (
        <LoginForm
          toggleForm={toggleForm}
          mutation={(values) => {
            console.log("login form", values);
            mutation.mutate(values);
          }}
        />
      )}
    </div>
  );
}

export default AuthPage;
