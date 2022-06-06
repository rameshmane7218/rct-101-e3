import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./Login.module.css";
import axios from "axios";
const Login = () => {
  const {login} = useContext(AuthContext);
 
  const handleOnSubmit = (e) => {
    e.preventDefault();
   
    const getLogin = async () => {
      try {
        let res = await axios.post("https://reqres.in/api/login", {
          email: e.target.children.email.value,
          password: e.target.children.password.value,
        });
        // console.log(res.data.token);
        if(res.data.token){
          login();
        }
      } catch (err) {
        console.log(err);
      }
    };
    getLogin();
  };
  return (
    <div className={styles.loginDiv}>
      Login
      <form onSubmit={handleOnSubmit}>
        <input
          data-cy="login-email"
          type="text"
          name="email"
          defaultValue="eve.holt@reqres.in"
          
        />
        <input
          data-cy="login-password"
          type="password"
          name="password"
          defaultValue="cityslicka"
         
        />
        <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
