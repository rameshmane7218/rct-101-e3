import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate, useLocation} from "react-router-dom"
const RequiredAuth = ({ children }) => {
  const {isAuth} = useContext(AuthContext);
  const {pathname} = useLocation();
  // console.log(isAuth);
  // console.log(pathname);
  if(isAuth){
    return children;
  }else{
    return <Navigate to="/login" state={{from:pathname}} replace/>
  }
};

export default RequiredAuth;
