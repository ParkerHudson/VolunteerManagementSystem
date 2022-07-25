import React from "react";
import Home from "./Home";

const Login = () => {
	return (
		<>
			<h1>This is the Login Page</h1>
			<form onSubmit={onSubmit}>
				<h3>Please sign in</h3>
				<label htmlFor="username" className="sr-only">
					Username:{" "}
				</label>
				<input
					type="text"
					name="username"
					onChange={onChange}
					class="form-control"
					placeholder="Enter Username"
				/>
				<label htmlFor="password" className="sr-only">
					Password:{" "}
				</label>
				<input
					type="password"
					name="password"
					onChange={onChange}
					class="form-control"
					placeholder="Enter Password"
				/>
				<button className="btn btn-lg btn-primary btn-block" type="submit">
					Log in
				</button>
			</form>
		</>
	);
};

export default Login;
