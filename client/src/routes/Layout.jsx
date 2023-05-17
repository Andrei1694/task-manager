import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { Suspense } from "react";
import React from "react";

function Loader() {
  return <div>Loader</div>;
}

export default function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
