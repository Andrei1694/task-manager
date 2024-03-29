import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  selectTokenFromState,
  selectUserFromState,
} from "./store/user/user.selector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(selectTokenFromState);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-my-costum-color">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-gray-300 hover:text-white font-bold text-lg"
              >
                Task Manager
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/tasks"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tasks
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
                <Link
                  to={token ? "/logout" : "/login"}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {token ? "Logout" : "Login"}
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Tasks
            </Link>
            <Link
              to="/profile"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Profile
            </Link>

            <Link
              to={token ? "/logout" : "/login"}
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            >
              {token ? "Logout" : "Login"}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
