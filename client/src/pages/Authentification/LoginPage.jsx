import { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";
import { useLocation, useSearchParams } from "react-router-dom";

export default function LoginPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isRegisterParam = () => {
    const isLogin = searchParams.get("mode") === "login";
    console.log();
    return isLogin;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Task Manager</h1>
      {isRegisterParam() ? <RegisterForm /> : <LoginForm />}
    </div>
  );
}
