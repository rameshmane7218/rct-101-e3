import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import styles from "./Navbar.module.css";
// use react-router Link or NavLink
// const Link = <a />;


const Navbar = () => {
  const navigate = useNavigate();
  const {isAuth,logout} = useContext(AuthContext);
  const {cardItemCount} = useContext(CartContext);
  // console.log(cardItemCount)
  const handleOnClick = () =>{
    if(isAuth){
      logout();
    }else{
      navigate("/login");
    }
  }
  return (
    <div data-cy="navbar" className={styles.navbarDiv}>
      <div>
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div>
        <span data-cy="navbar-cart-items-count">Cart: ({isAuth ? cardItemCount: 0})</span>
        <button data-cy="navbar-login-logout-button" onClick={handleOnClick}>{isAuth?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
