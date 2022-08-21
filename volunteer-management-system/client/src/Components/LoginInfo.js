import React, { useState, useEffect, useContext } from "react";
import AuthService from "../Services/AuthService";
import AdminPanel from "./AdminPanel";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";

const LoginInfo = () => {
	const [details, setDetails] = useState({ userId: "", password: "" });
	const [message, setMessage] = useState(null);
	const authContext = useContext(AuthContext);

	const sumbitHandler = (e) => {
		e.preventDefault();
		LoginHandler(details);
	};

	const LoginHandler = (details) => {
		AuthService.login(details).then((data) => {
			if (data.isAuthenticated) {
				setDetails({ userId: "", password: "" });
				setMessage(null);
				authContext.setIsAuthenticated(true);
			} else {
				console.log(data);
				setMessage(data.msg);
				console.log(message);
			}
		});
	};

	return (
		<>
			{authContext.isAuthenticated ? (
				<>
					<AdminPanel />
				</>
			) : (
				<>
					<div>
						<form onSubmit={sumbitHandler}>
							<div className="form-inner  ">
								<h2> Welcome to the Volunteer Management System</h2>

								<div className="form-outline mb-4">
									<input
										type="text"
										className="form-control"
										name="username"
										id="username"
										placeholder="Username"
										onChange={(e) =>
											setDetails({ ...details, userId: e.target.value })
										}
										value={details.userId}
									/>
								</div>

								<div className="form-outline mb-4">
									<input
										type="password"
										name="password"
										className="form-control"
										id="password"
										placeholder="Password"
										onChange={(e) =>
											setDetails({ ...details, password: e.target.value })
										}
										value={details.password}
									/>
								</div>
								<div className="d-grid">
									<button className="btn btn-primary btn-block" type="submit">
										Login
									</button>
								</div>
							</div>
						</form>
						{message ? <Message message={message} /> : null}
					</div>
				</>
			)}
		</>
	);
};

export default LoginInfo;
