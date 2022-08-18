import React, { useState } from "react";
import LoginInfo from "./LoginInfo";
import AdminPanel from "./AdminPanel";
import AuthService from "../Services/AuthService";
import "../css/App.css";

const Login = () => {
	/* if (
			details.name === adminInfo.username &&
			details.password === adminInfo.password
		) {
			console.log("Logged In!");
			setUser({
				name: details.name,
				password: details.password,
			});
		} else {
			console.log("Incorrect login details. Please try again.");
			setError("Incorrect login details. Please try again.");
		}

		console.log(details); */

	return (
		<div className="App">
			<LoginInfo />
		</div>
	);
};

export default Login;
