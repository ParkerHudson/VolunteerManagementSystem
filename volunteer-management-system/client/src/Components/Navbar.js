//Logo to return to main menu.
//logout button to return to login screen

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
	const { isAuthenticated, user, setIsAuthenticated, setUser } =
		useContext(AuthContext);
	const unauthenticatedNavBar = () => {
		return <></>;
	};

	const authenticatedNavBar = () => {
		return (
			<>
				<button
					type="button"
					className="btn btn-link nav-item nav-link"
					onClick={onClickLogoutHandler}
				>
					Logout
				</button>
			</>
		);
	};

	const onClickLogoutHandler = () => {
		AuthService.logout().then((data) => {
			setIsAuthenticated(false);
		});
	};

	return (
		<nav
			className="navbar navbar-dark navbar-expand-sm bg-dark"
			style={{
				backgroundImage: "linear-gradient(to bottom right, #ffce00, #fe4880)",
			}}
		>
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="navbar-brand">V M S</div>
			</Link>
			<ul className="navbar-nav">
				{!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
			</ul>
		</nav>
	);
};

export default Navbar;
