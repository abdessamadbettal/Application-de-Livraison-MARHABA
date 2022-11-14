import React from "react";
import { Route, Navigate , Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function Protected() {
    // alert(cookies.get("TOKEN"));
  // if user is not logged in, redirect to login page
  if (!cookies.get("TOKEN")) {
    return <Navigate to="/" />;
  }
    // if user is logged in, render the component
    return (      
            <Outlet />
    )
//   return <Route />;
}