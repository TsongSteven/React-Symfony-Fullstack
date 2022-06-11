import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

function Auth() {

  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
      token ?
      <Outlet />
      : (
        <Navigate
        to={"/login"}
        replace state={{ from : location }}
        />
      )
  );
}

export default Auth;
