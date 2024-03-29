import { useState } from "react";
import { useCookies } from "react-cookie";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../store/user/user.api";
import { useEffect } from "react";
import { selectUserFromState } from "../store/user/user.selector";
=======
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../store/user/user.api";
>>>>>>> fb442058bddccaa49c67322149d8f4da0e5ce3b1

export default function LogoutModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["login-cookie"]);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleLogout = () => {
    removeCookie("loginToken", {});
    logout();
    navigate("/");
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6">
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 mr-2"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
