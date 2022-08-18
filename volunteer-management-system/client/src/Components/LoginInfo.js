import React, { useState, useEffect, useContext } from "react";
import AuthService from "../Services/AuthService";
import AdminPanel from "./AdminPanel";
import { AuthContext } from "../Context/AuthContext";

const LoginInfo = () => {
	const [details, setDetails] = useState({ username: "", password: "" });
	const authContext = useContext(AuthContext);

	const sumbitHandler = (e) => {
		e.preventDefault();

		LoginHandler(details);
	};

	const LoginHandler = (details) => {
		AuthService.login(details).then((data) => {
			setDetails({ username: "", password: "" });
			if (data.isAuthenticated) {
				authContext.setIsAuthenticated(true);
			}
		});
	};

	/* const Authenticated = (token) => {
		AuthService.isAuthenticated(token).then((data) => {
			//setIsAuthorized(data.isAuthorized);
		});
	}; */

	return (
		<>
			{authContext.isAuthenticated ? (
				<>
					<AdminPanel />
				</>
			) : (
				<>
					<form onSubmit={sumbitHandler}>
						<div className="form-inner">
							<h2> Welcome to the Volunteer Management System</h2>

							<div className="form-group">
								<label htmlFor="username">Username: </label>
								<input
									type="text"
									name="username"
									id="username"
									onChange={(e) =>
										setDetails({ ...details, userId: e.target.value })
									}
									value={details.userId}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password: </label>
								<input
									type="password"
									name="password"
									id="password"
									onChange={(e) =>
										setDetails({ ...details, password: e.target.value })
									}
									value={details.password}
								/>
							</div>
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</>
			)}
		</>
	);
};

export default LoginInfo;
