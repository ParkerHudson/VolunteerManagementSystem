import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
	const { isAuthenticated, user } = useContext(AuthContext);
	return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
