import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";

export const AuthContext = createContext();

export default ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		AuthService.isAuthenticated(getCookie()).then((data) => {
			setUser(data.user);
			setIsLoaded(true);
		});
	}, [isAuthenticated]);

	const getCookie = () => {
		let cookie = document.cookie;
		let token = "";
		let equalLocation = cookie.indexOf("=");
		token = cookie.substring(equalLocation + 1, cookie.length);
		if (token != "") {
			return token;
		}
		//No Cookie
		return "empty";
	};

	return (
		<div>
			{!isLoaded ? (
				<h1>Loading</h1>
			) : (
				<AuthContext.Provider
					value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
				>
					{children}
				</AuthContext.Provider>
			)}
		</div>
	);
};
