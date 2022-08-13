import React, { useState } from "react";
import LoginInfo from "./LoginInfo";
import AdminPanel from "./AdminPanel";
import "../css/App.css";

const Login = () => {
	const adminInfo = {
		username: "admin",
		password: "password",
	};

	const [user, setUser] = useState({ name: "", password: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		if (
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

		console.log(details);
	};

	const Logout = () => {
		console.log("Logout");
		setUser({ name: "", password: "" });
	};

	return (
		<div className="App">
			{user.name != "" ? (
				<AdminPanel />
			) : (
				<LoginInfo Login={Login} error={error} />
			)}
		</div>
	);
};

export default Login;
