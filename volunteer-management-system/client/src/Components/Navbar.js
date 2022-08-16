//Logo to return to main menu.
//logout button to return to login screen

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
	/*     const unauthenticatedNavBar = () => {
      return (
        <>
          <Link to="/Home">
            <li className="nav-item nav-link">Home Page</li>
          </Link>

          <Link to="/Login">
            <li className="nav-item nav-link">Login</li>
          </Link>
        </>
      )
    }

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/Home">
          <li className="nav-item nav-link">Home Page</li>
        </Link>

        <Link to="/Login">
          <li className="nav-item nav-link">Login</li>
        </Link>
        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandler}
        >
          Logout{" "}
        </button>
      </>
    );
  };

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user)
      setIsAuthenticated(false)
      }
    });
  };

  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext); */

	return (
		<nav
			className="navbar navbar-dark navbar-expand-lg bg-dark"
			style={{
				backgroundImage: "linear-gradient(to bottom right, #ffce00, #fe4880)",
			}}
		>
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="navbar-brand">Management Portal</div>
			</Link>
		</nav>
	);
};

export default Navbar;
