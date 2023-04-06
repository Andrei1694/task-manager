import { useState } from "react";
import LoginForm from "./login.form.jsx";
import RegisterForm from "./register.form.jsx";

function AuthPage() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Task Manager</h1>
      {showRegisterForm ? (
        <RegisterForm toggleForm={toggleForm} />
      ) : (
        <LoginForm toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default AuthPage;
